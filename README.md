# 🎨 Building Our Next.js Project with shadcn/ui and Theming

This README explains how we built our project with Next.js, shadcn/ui components, and a robust theming system.

## 🚀 Initial Setup and Installation

Here are the specific commands we used to set up our project:

```bash
# Create a new Next.js app
npx create-next-app@latest chadcn-playground
# Select TypeScript, ESLint, Tailwind CSS, App Router during prompts

# Move into the project directory
cd chadcn-playground

# Install shadcn/ui
npx shadcn-ui@latest init
# Select defaults or customize configuration as needed

# Install next-themes for theme management
pnpm add next-themes
```

These commands are essential for creating the base application and adding the necessary theme management capabilities.

## 📦 Adding the Dashboard Components

We used the shadcn/ui CLI to add the dashboard block components to our project:

```
npx shadcn-ui@latest add dashboard-01
```

This added all the necessary dashboard components to our project, which can be found in the `components` directory.

## 🌈 Adding Custom Theming System

We added several key files to implement our theming system:

### 1️⃣ `theme-provider.tsx`
This component wraps our application and provides theme context using next-themes.

Please refer to the [providers/theme-provider.tsx](./providers/theme-provider.tsx) file in the project to see the implementation.

### 2️⃣ `active-theme.tsx`
This component tracks and displays the currently active theme.

Please refer to the [components/active-theme.tsx](./components/active-theme.tsx) file in the project to see the implementation.

### 3️⃣ `theme-selector.tsx`
This component allows users to switch between different theme options (Light, Dark, Blue, Green, Orange).

Please refer to the [components/theme-selector.tsx](./components/theme-selector.tsx) file in the project to see the implementation.

### 4️⃣ `themes.css`
This CSS file defines our custom theme variables for different color schemes (light, dark, blue, green, orange).

Please refer to the [styles/themes.css](./styles/themes.css) file in the project to see the variable definitions for each theme.

## 🎨 Updating `globals.css`

We updated our global CSS file to import our theme definitions. The file imports the themes.css file and maintains the Tailwind directives along with shadcn/ui base styles.

Please refer to the [app/globals.css](./app/globals.css) file in the project to see the complete implementation.

## 🧩 Adding Theme Controls to the Header

We modified the site header component to include our theme toggle and selector components.

Please refer to the [components/site-header.tsx](./components/site-header.tsx) file in the project to see how we integrated the theme controls.

## 🔄 Putting It All Together in `layout.tsx`

We updated our root layout component to use the ThemeProvider and enable theme switching.

Please refer to the [app/layout.tsx](./app/layout.tsx) file in the project to see how everything is connected.

## 🧠 How It All Works Together

1. **ThemeProvider** wraps our application and manages theme state using next-themes
2. **theme-selector.tsx** and **mode-toggle.tsx** provide UI controls for theme selection
3. **themes.css** defines CSS variables for each theme
4. When a theme is selected, next-themes applies the corresponding class to the HTML element
5. The CSS variables in our theme classes are picked up by shadcn/ui components
6. All components automatically adjust their appearance based on the selected theme

## 🔗 References

Our implementation was based on the official shadcn/ui examples:
- [Theme Selector Component](https://github.com/shadcn-ui/ui/blob/main/apps/v4/app/(examples)/dashboard/components/theme-selector.tsx)
- [Theme CSS File](https://github.com/shadcn-ui/ui/blob/main/apps/v4/app/(examples)/dashboard/theme.css)
- [Active Theme Component](https://github.com/shadcn-ui/ui/blob/main/apps/v4/components/active-theme.tsx)
