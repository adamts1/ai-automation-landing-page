import { useEffect, useRef, useState } from 'react';
import type { FC } from 'react';
import * as THREE from 'three';

// Set to an image path (square, transparent or dark background) to use a logo file
// instead of the drawn "AI TSITYAT" badge, e.g. '/logo.png'.
const LOGO_URL: string | null = null;
const SPEED = 0.35; // spin speed (radians per second)

function drawLogo(ctx: CanvasRenderingContext2D, cx: number, cy: number) {
  const c = ctx as CanvasRenderingContext2D & { letterSpacing?: string };
  ctx.save();
  ctx.translate(cx, cy);

  const disc = ctx.createRadialGradient(0, -40, 20, 0, 0, 230);
  disc.addColorStop(0, '#15183a');
  disc.addColorStop(1, '#070814');
  ctx.fillStyle = disc;
  ctx.beginPath(); ctx.arc(0, 0, 225, 0, Math.PI * 2); ctx.fill();

  const ring = ctx.createLinearGradient(-225, -225, 225, 225);
  ring.addColorStop(0, '#c084fc');
  ring.addColorStop(1, '#38bdf8');
  ctx.strokeStyle = ring;
  ctx.lineWidth = 5;
  ctx.beginPath(); ctx.arc(0, 0, 225, 0, Math.PI * 2); ctx.stroke();

  const grad = ctx.createLinearGradient(-160, 0, 160, 0);
  grad.addColorStop(0, '#c084fc');
  grad.addColorStop(0.5, '#a78bfa');
  grad.addColorStop(1, '#38bdf8');

  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';

  ctx.shadowColor = 'rgba(167,139,250,0.7)';
  ctx.shadowBlur = 30;
  ctx.fillStyle = grad;
  ctx.font = '800 190px Montserrat, sans-serif';
  ctx.fillText('AI', 0, 10);

  ctx.shadowBlur = 16;
  ctx.font = '700 62px Montserrat, sans-serif';
  if ('letterSpacing' in c) c.letterSpacing = '10px';
  ctx.fillText('TSITYAT', 6, 95);

  ctx.shadowBlur = 0;
  if ('letterSpacing' in c) c.letterSpacing = '1px';
  ctx.fillStyle = '#a9b0d6';
  ctx.font = '500 24px Montserrat, sans-serif';
  ctx.fillText('AI Boutique Agency', 0, 140);
  ctx.strokeStyle = 'rgba(169,176,214,0.6)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-170, 132); ctx.lineTo(-130, 132);
  ctx.moveTo(130, 132); ctx.lineTo(170, 132);
  ctx.stroke();

  ctx.restore();
}

function loadImage(url: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = url;
  });
}

async function buildTexture(): Promise<HTMLCanvasElement> {
  try {
    await document.fonts.load('800 200px Montserrat');
    await document.fonts.load('500 30px Montserrat');
  } catch { /* fall back to sans-serif */ }

  const W = 2048, H = 1024;
  const tc = document.createElement('canvas');
  tc.width = W; tc.height = H;
  const ctx = tc.getContext('2d')!;

  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, '#0a0b1c');
  bg.addColorStop(0.5, '#0d0f22');
  bg.addColorStop(1, '#07080f');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = 'rgba(150,130,255,0.10)';
  ctx.lineWidth = 2;
  for (let x = 0; x <= W; x += 64) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
  for (let y = 0; y <= H; y += 64) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

  // Logo sits at the front of the sphere (u = 0.25 of the map)
  const cx = W * 0.25, cy = H * 0.5;
  const img = LOGO_URL ? await loadImage(LOGO_URL) : null;
  if (img) ctx.drawImage(img, cx - 230, cy - 230, 460, 460);
  else drawLogo(ctx, cx, cy);

  // same logo on the back of the ball (u = 0.75)
  if (img) ctx.drawImage(img, W * 0.75 - 230, cy - 230, 460, 460);
  else drawLogo(ctx, W * 0.75, cy);

  return tc;
}

const HeroScene: FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let disposed = false;
    let raf = 0;
    let cleanup = () => {};

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    } catch {
      return; // no WebGL: the hero just shows its background
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(0, 0, 7);

    // reflections
    const envScene = new THREE.Scene();
    envScene.add(new THREE.Mesh(
      new THREE.SphereGeometry(20, 32, 16),
      new THREE.MeshBasicMaterial({ color: 0x020308, side: THREE.BackSide }),
    ));
    const panel = (w: number, h: number, color: number, x: number, y: number, z: number) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide }));
      m.position.set(x, y, z); m.lookAt(0, 0, 0); envScene.add(m);
    };
    panel(12, 2.5, 0xffffff, -2, 9, 4);
    panel(2.5, 9, 0xa78bfa, -10, 0, 3);
    panel(2.5, 9, 0x38bdf8, 10, -1, 1);
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envRT = pmrem.fromScene(envScene, 0.04);
    scene.environment = envRT.texture;

    buildTexture().then((tc) => {
      if (disposed) return;

      const tex = new THREE.CanvasTexture(tc);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = renderer.capabilities.getMaxAnisotropy();

      const R = 1.55;
      const ball = new THREE.Mesh(
        new THREE.SphereGeometry(R, 128, 96),
        new THREE.MeshPhysicalMaterial({
          map: tex,
          emissiveMap: tex,
          emissive: new THREE.Color(0xffffff),
          emissiveIntensity: 0.55,
          metalness: 0.15,
          roughness: 0.28,
          clearcoat: 1,
          clearcoatRoughness: 0.08,
          envMapIntensity: 1.1,
        }),
      );

      const glow = new THREE.Mesh(
        new THREE.SphereGeometry(R * 1.12, 64, 48),
        new THREE.ShaderMaterial({
          uniforms: { c1: { value: new THREE.Color(0xa78bfa) }, c2: { value: new THREE.Color(0x38bdf8) } },
          vertexShader: `
            varying vec3 vN; varying vec3 vP;
            void main() {
              vN = normalize(normalMatrix * normal);
              vec4 mv = modelViewMatrix * vec4(position, 1.0);
              vP = mv.xyz;
              gl_Position = projectionMatrix * mv;
            }`,
          fragmentShader: `
            uniform vec3 c1; uniform vec3 c2;
            varying vec3 vN; varying vec3 vP;
            void main() {
              float i = pow(0.72 - dot(vN, normalize(-vP)), 3.0);
              vec3 col = mix(c2, c1, clamp(vN.y * 0.5 + 0.5, 0.0, 1.0));
              gl_FragColor = vec4(col, 1.0) * clamp(i, 0.0, 1.0) * 1.4;
            }`,
          side: THREE.BackSide,
          blending: THREE.AdditiveBlending,
          transparent: true,
          depthWrite: false,
        }),
      );

      const group = new THREE.Group();
      group.add(ball, glow);
      scene.add(group);

      // Modern three.js uses physical light units: scale by PI to match the original look
      const light = new THREE.DirectionalLight(0xffffff, 0.6 * Math.PI);
      light.position.set(-3, 4, 5);
      scene.add(light, new THREE.AmbientLight(0xffffff, 0.15 * Math.PI));

      const resize = () => {
        const w = canvas.clientWidth, h = canvas.clientHeight;
        if (!w || !h) return;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.position.z = w < 640 ? 8.5 : 7.6;
        camera.updateProjectionMatrix();
        if (reduceMotion) renderer.render(scene, camera);
      };
      const ro = new ResizeObserver(resize);
      ro.observe(canvas);
      resize();

      const target = { x: 0, y: 0 }, cur = { x: 0, y: 0 };
      const onPointer = (e: PointerEvent) => {
        target.x = (e.clientX / window.innerWidth - 0.5) * 2;
        target.y = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener('pointermove', onPointer);

      // Pause rendering while the hero is off-screen
      let visible = true;
      const io = new IntersectionObserver(([entry]) => {
        const wasVisible = visible;
        visible = entry.isIntersecting;
        if (visible && !wasVisible && !reduceMotion) raf = requestAnimationFrame(frame);
      });
      io.observe(canvas);

      const clock = new THREE.Clock();
      const frame = () => {
        const t = clock.getElapsedTime();
        cur.x += (target.x - cur.x) * 0.04;
        cur.y += (target.y - cur.y) * 0.04;

        ball.rotation.y = t * SPEED;
        group.rotation.x = 0.12 + cur.y * 0.12;
        group.rotation.z = -0.08 + cur.x * 0.05;
        group.position.y = 0.25 + Math.sin(t * 0.8) * 0.06; // lifted to leave room for the floor glow

        renderer.render(scene, camera);
        if (!reduceMotion && visible) raf = requestAnimationFrame(frame);
      };
      frame();
      requestAnimationFrame(() => setReady(true));

      cleanup = () => {
        ro.disconnect();
        io.disconnect();
        window.removeEventListener('pointermove', onPointer);
        tex.dispose();
        ball.geometry.dispose();
        (ball.material as THREE.Material).dispose();
        glow.geometry.dispose();
        (glow.material as THREE.Material).dispose();
      };
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      cleanup();
      envRT.dispose();
      pmrem.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`transition-[opacity,transform] duration-[1800ms] ease-out motion-reduce:transition-none ${
        ready ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.94]'
      } ${className}`}
    />
  );
};

export default HeroScene;
