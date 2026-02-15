

## Make Hero Section More Attractive

The current hero has low contrast text that blends into the golden overlay, making it hard to read. Here are the enhancements:

### Visual Improvements

1. **Better text contrast and glow effects** - Add text shadows and glowing effects to the heading so "Double Hathi" and "Pure Kachi Ghani" pop against the background

2. **Animated golden shimmer on the brand name** - Add a subtle shimmer/shine animation that sweeps across the "Double Hathi" text periodically

3. **Decorative accent lines** - Add thin golden divider lines above and below the tagline for a premium look

4. **Enhanced stats section** - Give stats cards a glassmorphism effect with subtle borders and a soft golden glow on hover

5. **Improved floating particles** - Increase particle count, vary sizes, and add a gentle golden glow to make them more visible and atmospheric

6. **Better overlay balance** - Reduce the amber overlay slightly and darken the gradient more at top/bottom for better text readability while keeping the golden warmth

7. **Pulsing glow on CTA buttons** - Add a subtle pulsing golden glow animation behind the "Shop Now" button to draw attention

### Technical Changes

- **`src/components/HeroSection.tsx`**: 
  - Update overlay opacities for better contrast
  - Add text-shadow styles to headings
  - Add shimmer animation via inline keyframes
  - Enhance particle system (more particles, varied sizes, glow)
  - Add decorative divider elements around tagline
  - Improve stats cards with hover glow and glassmorphism
  - Add pulsing glow effect behind CTA button

- **`src/index.css`**: 
  - Add shimmer keyframe animation
  - Add text-shadow utility classes

