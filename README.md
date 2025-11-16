# Coinchase Deck

A sleek, minimal slide deck for Coinchase—the dispute management layer for agentic payments. Built with Vite, React, and TypeScript following atomic design principles.

## Features

- ✨ **Atomic Design System**: Organized component structure (atoms, molecules, organisms, templates)
- 🎨 **Minimal Design**: Clean, spacious layout inspired by modern presentation aesthetics
- ⌨️ **Keyboard Navigation**: Use arrow keys or spacebar to navigate slides
- 📱 **Responsive**: Adapts to different screen sizes
- 🎯 **TypeScript**: Fully typed for better development experience

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open your browser to the URL shown in the terminal (typically `http://localhost:5173`)

### Build

```bash
npm run build
```

## Navigation

- **Arrow Right / Spacebar**: Next slide
- **Arrow Left**: Previous slide
- **Slide Indicators**: Click to jump to specific slide
- **Navigation Buttons**: Click arrows in bottom-right corner

## Project Structure

```
src/
├── components/
│   ├── atoms/          # Basic building blocks (Text, Badge, StatNumber)
│   ├── molecules/      # Combinations of atoms (ContentBlock, BadgeGroup, StatsRow)
│   ├── organisms/      # Complex components (Slides)
│   └── templates/      # Page layouts (SlideDeck)
├── App.tsx
├── main.tsx
└── index.css
```

## Atomic Design Principles

### Atoms
- `Text`: Typography component with variants (overline, heading, subheading, body, caption)
- `Badge`: Circular badge component with different color variants
- `StatNumber`: Large number display with description

### Molecules
- `ContentBlock`: Structured content with optional overline, heading, subheading, and body
- `BadgeGroup`: Collection of badges arranged horizontally
- `StatsRow`: Grid layout for displaying statistics

### Organisms
- `Slide`: Container for slide content with layout options (single, split, centered)
- `CornerBrackets`: Minimal corner borders for each slide
- `IntroSlide`: Introduction to Coinchase
- `CurrentProblemSlide`: The $130B friendly fraud crisis
- `FutureProblemSlide`: Crypto payments breaking the chargeback model
- `SolutionOverviewSlide`: The agentic dispute layer solution

### Templates
- `SlideDeck`: Main presentation container with navigation and slide transitions

## Customization

### Adding New Slides

1. Create a new slide component in `src/components/organisms/`
2. Import and add it to the `slides` array in `SlideDeck.tsx`
3. Update the `totalSlides` count

### Styling

- Global styles and CSS variables are in `src/index.css`
- Each component has its own CSS file for scoped styles
- Colors and typography are defined as CSS custom properties

### Fonts

The project uses:
- **Crimson Text** (serif) for headings
- **Inter** (sans-serif) for body text

Both are loaded from Google Fonts in `index.html`.

## Design Philosophy

This slide deck follows principles of minimal design:

- **Generous whitespace** for visual breathing room
- **Limited color palette** focusing on grays with subtle accent colors
- **Clear typography hierarchy** with serif headings and sans-serif body text
- **Subtle animations** for smooth transitions
- **Focused content** with one key message per slide

## License

MIT

