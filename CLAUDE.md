# Compartirium - Project Guidelines

## Project Overview

**Compartirium** is a school project demonstrating a rental and reuse service for educational materials (books, educational games, teaching materials, children's furniture, basic devices like tablets/laptops, packs) in Barcelona.

**Type:** Visual demo / Static website prototype
**Hosting:** GitHub Pages
**Language:** Spanish (content)
**Tagline:** "Més que compartir" (More than sharing)

## Tech Stack

- **Framework:** Astro (static site generator)
- **Styling:** Tailwind CSS
- **Icons:** Phosphor Icons (NOT emojis)
- **Hosting:** GitHub Pages

## Design System

### Brand Colors

```css
:root {
  /* Primary */
  --color-brown-primary: #7D6118;      /* Logo brown/olive - CTAs, headers */
  --color-brown-light: #A68B3D;        /* Lighter brown - accents, hover states */
  --color-brown-dark: #5C4812;         /* Darker brown - text emphasis */

  /* Backgrounds */
  --color-cream: #F8EBDA;              /* Main background */
  --color-cream-light: #FDF8F0;        /* Cards, containers */
  --color-white: #FFFFFF;              /* White for contrast */

  /* Text */
  --color-text-primary: #3D3225;       /* Main text */
  --color-text-secondary: #6B5D4D;     /* Secondary text */
  --color-text-muted: #9B8B7A;         /* Muted/placeholder text */

  /* Semantic */
  --color-success: #5C7C5C;            /* Green for success states */
  --color-warning: #C4930A;            /* Amber for warnings */
  --color-error: #B54A4A;              /* Red for errors */
}
```

### Design Tokens

```css
/* Border Radius */
--radius-container: 28px;    /* Cards, containers, modals */
--radius-button: 14px;       /* Buttons, inputs */
--radius-small: 8px;         /* Tags, badges */

/* Shadows (subtle, Apple-style) */
--shadow-sm: 0 1px 2px rgba(61, 50, 37, 0.05);
--shadow-md: 0 4px 12px rgba(61, 50, 37, 0.08);
--shadow-lg: 0 12px 32px rgba(61, 50, 37, 0.12);

/* Spacing Scale */
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;
```

### Typography

- **Font:** System font stack (Apple-style)
  ```css
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  ```
- **Headings:** Semi-bold (600), generous letter-spacing
- **Body:** Regular (400), 16px base, 1.6 line-height

### Component Guidelines

1. **Containers/Cards:**
   - 28px border-radius
   - NO stroke/border
   - Subtle shadow for elevation
   - Background: `--color-cream-light` or white

2. **Buttons:**
   - Primary: `--color-brown-primary` background, white text
   - Secondary: Transparent with brown border
   - 14px border-radius
   - Padding: 12px 24px

3. **Icons:**
   - Use Phosphor Icons: https://phosphoricons.com/
   - Style: Regular weight for UI, Bold for emphasis
   - Size: 20px (small), 24px (default), 32px (large)

4. **Images:**
   - Product images: 1:1 aspect ratio for cards
   - Use placeholder images from Unsplash (educational/sustainable themes)

### Style Principles

- **Apple-like:** Clean, generous whitespace, subtle animations
- **Minimalist:** Only essential elements, no visual clutter
- **Modern:** Current design patterns, smooth interactions
- **Warm:** The cream/brown palette keeps it approachable and educational

## Site Structure

### Public Pages
1. **Home** (`/`) - Landing with value proposition
2. **Catálogo** (`/catalogo`) - Product grid with filters
3. **Producto** (`/catalogo/[slug]`) - Product detail with availability calendar
4. **Cómo funciona** (`/como-funciona`) - Process steps
5. **Quiénes somos** (`/quienes-somos`) - Mission, sustainability

### Client Area (Mock/Demo)
6. **Dashboard** (`/cliente`) - Overview + make orders
7. **Alquileres activos** (`/cliente/alquileres`) - Active rentals
8. **Programar** (`/cliente/programar`) - Schedule future rentals
9. **Perfil** (`/cliente/perfil`) - User data + order history

### Components to Build
- Header (logo, nav, CTA)
- Footer (links, contact, social)
- ProductCard (image, title, price, availability badge)
- ProductFilters (category, age, type)
- AvailabilityCalendar (visual month view)
- ProcessSteps (numbered steps with icons)
- ClientSidebar (navigation for client area)
- OrderCard (order summary)
- RentalCard (active rental info)

## Content Guidelines

- **Language:** Spanish
- **Tone:** Warm, professional, accessible
- **All content is dummy/example data**
- **Products:** ~15-20 realistic educational products

## Product Categories

1. **Libros de texto** - By educational stage (Infantil, Primaria)
2. **Juegos educativos** - Montessori, STEM, language
3. **Material didáctico** - Maps, models, lab equipment
4. **Mobiliario** - Tables, chairs, shelving
5. **Dispositivos** - Tablets, laptops (basic)
6. **Packs** - Themed bundles (classroom starter, STEM pack)

## Development Notes

- This is a DEMO/PROTOTYPE - no real backend
- Data is hardcoded/static JSON
- Forms are visual only (no real submission)
- Focus on UX and visual design quality
