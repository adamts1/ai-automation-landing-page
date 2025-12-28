# Instagram Sales Interface Component

A React component that visually simulates an Instagram Direct Messages conversation screen for sales demos and presentations.

## Overview

This component is designed for **demo and sales presentation purposes only**. It does NOT connect to Instagram APIs - it's purely for visual demonstration of sales flows in an Instagram DM format.

## Features

- 📱 Mobile-first design that looks like Instagram DM
- 💬 Text messages (bot/user/system)
- 🔘 Button quick replies (chips)
- 🌐 RTL support for Hebrew
- 🎨 Instagram-style blue gradient for sent messages
- 📦 Optional mobile device frame

## Installation

The component is already included in the project. Import it as follows:

```tsx
import { InstagramSalesInterface } from '@/components/InstagramDemo';
import type { InstagramMessage } from '@/components/InstagramDemo';
```

## Basic Usage

```tsx
import { InstagramSalesInterface } from '@/components/InstagramDemo';
import { simpleProductInquiryFlow } from '@/components/InstagramDemo/mockSalesMessages';

function SalesDemo() {
  return (
    <InstagramSalesInterface
      messages={simpleProductInquiryFlow}
      brandName="My Brand"
      statusText="Active now"
    />
  );
}
```

## Props

### InstagramSalesInterfaceProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `messages` | `InstagramMessage[]` | **Required** | Array of messages to display |
| `brandName` | `string` | `'Brand Name'` | Brand name displayed in header |
| `brandAvatar` | `string` | `undefined` | URL to brand avatar image |
| `statusText` | `string` | `'Active now'` | Status text in header |
| `showMobileFrame` | `boolean` | `false` | Show mobile device frame wrapper |
| `className` | `string` | `''` | Additional CSS classes |

## Message Structure

### InstagramMessage

```typescript
interface InstagramMessage {
  id: string;                    // Unique message ID
  sender: 'bot' | 'user' | 'system';  // Message sender type
  type: 'text' | 'buttons';      // Message type
  content: string;               // Message text content
  buttons?: string[];            // Optional: Button labels for quick replies
}
```

### Message Types

#### Bot Text Message
```typescript
{
  id: '1',
  sender: 'bot',
  type: 'text',
  content: 'שלום! איך אפשר לעזור?'
}
```

#### Bot Message with Buttons
```typescript
{
  id: '2',
  sender: 'bot',
  type: 'buttons',
  content: 'מה מעניין אותך?',
  buttons: ['מוצרים', 'מחירים', 'צור קשר']
}
```

#### User Message
```typescript
{
  id: '3',
  sender: 'user',
  type: 'text',
  content: 'אני מעוניין במוצרים'
}
```

#### System Message
```typescript
{
  id: '4',
  sender: 'system',
  type: 'text',
  content: 'Payment confirmed'
}
```

## Examples

### With Mobile Frame

```tsx
<InstagramSalesInterface
  messages={ecommerceCheckoutFlow}
  brandName="E-Commerce Store"
  showMobileFrame={true}
/>
```

### Custom Brand Avatar

```tsx
<InstagramSalesInterface
  messages={leadQualificationFlow}
  brandName="My Business"
  brandAvatar="/path/to/avatar.jpg"
  statusText="Online"
/>
```

## Button Interactions

When a user clicks a button:
1. The button is marked as selected
2. A user message is created with the button text
3. The button message is replaced with the user message
4. The button list disappears

**TODO**: Connect button clicks to sales flow automation logic.

## Styling

The component uses Tailwind CSS. Key styling features:

- **Bot messages**: Light gray background, left-aligned
- **User messages**: Instagram blue gradient (`#0095F6` to `#1877F2`), right-aligned
- **System messages**: Centered, subtle gray background
- **Buttons**: White background with gray border, rounded-full

## RTL Support

The component automatically supports RTL (right-to-left) layout for Hebrew text. All text and buttons are displayed with RTL direction.

## Future Enhancements

Integration points marked in code:

- ✅ Button click handlers (ready for sales flow integration)
- 🔲 Typing indicators
- 🔲 Message animations
- 🔲 Image/product previews
- 🔲 Story replies
- 🔲 Voice messages
- 🔲 Analytics tracking

## Mock Data

Example message flows are available in `mockSalesMessages.ts`:

- `simpleProductInquiryFlow` - Basic product inquiry
- `ecommerceCheckoutFlow` - E-commerce checkout process
- `serviceBookingFlow` - Service appointment booking
- `leadQualificationFlow` - Lead qualification questions

## Notes

- This is a **presentation component only** - no backend integration
- Input field is disabled (demo purposes)
- Messages are static (no real-time updates)
- Designed for sales demo and presentation use cases

## Accessibility

- All buttons have proper hover/active states
- Touch-friendly button sizes (mobile-first)
- Semantic HTML structure
- ARIA labels on icon buttons


