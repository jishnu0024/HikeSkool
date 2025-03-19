"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
// import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useTheme } from "@/context/theme-context"
import { Menu,  ChevronDown } from "lucide-react"
import { storeDetails } from "@/config/store"

const mainNavItems = [
  {
    title: "Learn",
    items: [
      {
        title: "All Courses",
        href: "/courses",
        description: "Browse our comprehensive course catalog"
      },
      {
        title: "Live Workshops",
        href: "/workshops",
        description: "Interactive sessions with industry experts"
      },
      {
        title: "Learning Paths",
        href: "/paths",
        description: "Structured paths to achieve your goals"
      }
    ]
  },
  {
    title: "For Business",
    items: [
      {
        title: "Enterprise Solutions",
        href: "/enterprise",
        description: "Custom training for your organization"
      },
      {
        title: "Team Training",
        href: "/team-training",
        description: "Upskill your entire team effectively"
      }
    ]
  },
  
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  // const pathname = usePathname()
  const { colors } = useTheme()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Mobile menu accordion state
  const [openSections, setOpenSections] = useState<string[]>([])

  const toggleSection = (title: string) => {
    setOpenSections(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    )
  }
  

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span style={{ color: colors.primary.main }} className="text-2xl font-bold">
              {storeDetails?.name||"Logo"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {mainNavItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem?.title}
                            href={subItem?.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {subItem?.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {subItem.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}

            <NavigationMenuItem key="about us">
            <Button variant="ghost" asChild>
                <Link href="/about">About Us</Link>
              </Button>
            </NavigationMenuItem>    
              </NavigationMenuList>
            </NavigationMenu>

            {/* Desktop Auth Buttons */}
            <div className="flex items-center space-x-4">
             
              <Button variant="ghost" asChild>
                <Link href="/login">Log In</Link>
              </Button>
              <Button 
                asChild
                style={{ 
                  backgroundColor: colors.primary.main,
                  color: 'white',
                }}
                className="hover:opacity-90"
              >
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] p-0">
                <SheetHeader className="p-4 border-b">
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col py-4">
                  {mainNavItems.map((section) => (
                    <div key={section.title} className="border-b">
                      <button
                        onClick={() => toggleSection(section.title)}
                        className="flex items-center justify-between w-full p-4 text-left"
                      >
                        <span className="text-lg font-medium">{section.title}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            openSections.includes(section.title) ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openSections.includes(section.title) && (
                        <div className="px-4 pb-4">
                          {section.items.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="block py-2 px-4 text-sm hover:bg-accent rounded-md"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="p-4 space-y-3">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/login">Log In</Link>
                    </Button>
                    <Button 
                      className="w-full"
                      style={{ 
                        backgroundColor: colors.primary.main,
                        color: 'white',
                      }}
                      asChild
                    >
                      <Link href="/signup">Get Started</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}