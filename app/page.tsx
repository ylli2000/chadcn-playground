import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-12">
        <Card className="text-center border-2 border-primary/20 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl">🚀 Check Out Our Interactive Dashboard Demo</CardTitle>
            <CardDescription className="text-base sm:text-lg mt-2">
              See all the theming components in action with our beautiful dashboard example
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Experience the full power of shadcn/ui components with our custom theming system</p>
          </CardContent>
          <CardFooter className="flex justify-center pb-6">
            <Button asChild size="lg" className="gap-2">
              <Link href="/dashboard">
                Visit Dashboard Demo <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <article className="prose dark:prose-invert max-w-none">
        <Image className="rounded-md mb-8" src="/images/screenshot.png" alt="Application Screenshot" width={1000} height={1000} />
        <h1 className="text-3xl font-bold mb-6">🎨 Building Our Next.js Project with shadcn/ui and Theming</h1>
        
        <p>This project shows how we built our application with Next.js, shadcn/ui components, and a robust theming system.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">🚀 Initial Setup and Installation</h2>
        
        <p>Here are the specific commands we used to set up our project:</p>
        
        <div className="bg-muted p-4 rounded-md my-4 overflow-x-auto">
          <pre className="text-sm">
            <code>
{`# Create a new Next.js app
npx create-next-app@latest chadcn-playground
# Select TypeScript, ESLint, Tailwind CSS, App Router during prompts

# Move into the project directory
cd chadcn-playground

# Install shadcn/ui
npx shadcn-ui@latest init
# Select defaults or customize configuration as needed

# Install next-themes for theme management
pnpm add next-themes`}
            </code>
          </pre>
        </div>
        
        <p>These commands are essential for creating the base application and adding the necessary theme management capabilities.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">📦 Adding the Dashboard Components</h2>
        
        <p>We used the shadcn/ui CLI to add the dashboard block components to our project:</p>
        
        <div className="bg-muted p-4 rounded-md my-4 overflow-x-auto">
          <pre className="text-sm">
            <code>npx shadcn-ui@latest add dashboard-01</code>
          </pre>
        </div>
        
        <p>This added all the necessary dashboard components to our project, which can be found in the <code>components</code> directory.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">🌈 Adding Custom Theming System</h2>
        
        <p>We added several key files to implement our theming system:</p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">1️⃣ <code>theme-provider.tsx</code></h3>
        <p>This component wraps our application and provides theme context using next-themes.</p>
        <p>Please refer to the <Link href="/providers/theme-provider.tsx" className="text-primary underline">providers/theme-provider.tsx</Link> file in the project to see the implementation.</p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">2️⃣ <code>active-theme.tsx</code></h3>
        <p>This component tracks and displays the currently active theme.</p>
        <p>Please refer to the <Link href="/components/active-theme.tsx" className="text-primary underline">components/active-theme.tsx</Link> file in the project to see the implementation.</p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">3️⃣ <code>theme-selector.tsx</code></h3>
        <p>This component allows users to switch between different theme options (Light, Dark, Blue, Green, Orange).</p>
        <p>Please refer to the <Link href="/components/theme-selector.tsx" className="text-primary underline">components/theme-selector.tsx</Link> file in the project to see the implementation.</p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">4️⃣ <code>themes.css</code></h3>
        <p>This CSS file defines our custom theme variables for different color schemes (light, dark, blue, green, orange).</p>
        <p>Please refer to the <Link href="/styles/themes.css" className="text-primary underline">styles/themes.css</Link> file in the project to see the variable definitions for each theme.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">🎨 Updating <code>globals.css</code></h2>
        
        <p>We updated our global CSS file to import our theme definitions. The file imports the themes.css file and maintains the Tailwind directives along with shadcn/ui base styles.</p>
        <p>Please refer to the <Link href="/app/globals.css" className="text-primary underline">app/globals.css</Link> file in the project to see the complete implementation.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">🧩 Adding Theme Controls to the Header</h2>
        
        <p>We modified the site header component to include our theme toggle and selector components.</p>
        <p>Please refer to the <Link href="/components/site-header.tsx" className="text-primary underline">components/site-header.tsx</Link> file in the project to see how we integrated the theme controls.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">🔄 Putting It All Together in <code>layout.tsx</code></h2>
        
        <p>We updated our root layout component to use the ThemeProvider and enable theme switching.</p>
        <p>Please refer to the <Link href="/app/layout.tsx" className="text-primary underline">app/layout.tsx</Link> file in the project to see how everything is connected.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">🧠 How It All Works Together</h2>
        
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>ThemeProvider</strong> wraps our application and manages theme state using next-themes</li>
          <li><strong>theme-selector.tsx</strong> and <strong>mode-toggle.tsx</strong> provide UI controls for theme selection</li>
          <li><strong>themes.css</strong> defines CSS variables for each theme</li>
          <li>When a theme is selected, next-themes applies the corresponding class to the HTML element</li>
          <li>The CSS variables in our theme classes are picked up by shadcn/ui components</li>
          <li>All components automatically adjust their appearance based on the selected theme</li>
        </ol>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">🔗 References</h2>
        
        <p>Our implementation was based on the official shadcn/ui examples:</p>

        <ul className="list-disc pl-6 space-y-1">
          <li><a href="https://github.com/shadcn-ui/ui/blob/main/apps/v4/app/(examples)/dashboard/components/theme-selector.tsx" className="text-primary underline" target="_blank" rel="noopener noreferrer">Theme Selector Component</a></li>
          <li><a href="https://github.com/shadcn-ui/ui/blob/main/apps/v4/app/(examples)/dashboard/theme.css" className="text-primary underline" target="_blank" rel="noopener noreferrer">Theme CSS File</a></li>
          <li><a href="https://github.com/shadcn-ui/ui/blob/main/apps/v4/components/active-theme.tsx" className="text-primary underline" target="_blank" rel="noopener noreferrer">Active Theme Component</a></li>
        </ul>
        <Button variant="outline" size="sm" className="my-4">
            <a
              href="https://github.com/shadcn-ui/ui/tree/main/apps/v4/app/(examples)/dashboard"
              rel="noopener noreferrer"
              target="_blank"
              className="dark:text-foreground"
            >
              Go to Chadcn UI GitHub Dashboard Example
            </a>
          </Button>
      </article>
    </div>
  )
}
