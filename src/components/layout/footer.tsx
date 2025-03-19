"use client"

import Link from "next/link"
import { useTheme } from "@/context/theme-context"
import { 
  Twitter, 
  Linkedin, 
  Youtube, 
  Instagram,
  Mail,
  MapPin,
  Phone
} from "lucide-react"
import { storeDetails } from "@/config/store"

export function Footer() {
  const { colors } = useTheme()
  
  const footerLinks = {
    products: [
      { label: "All Courses", href: "/courses" },
      { label: "Live Workshops", href: "/workshops" },
      { label: "Learning Paths", href: "/paths" },
      { label: "For Enterprise", href: "/enterprise" },
      { label: "Pricing", href: "/pricing" }
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Contact", href: "/contact" }
    ],
    resources: [
      { label: "Help Center", href: "/help" },
      { label: "Community", href: "/community" },
      { label: "Certificates", href: "/certificates" },
      { label: "Events", href: "/events" },
      { label: "Student Perks", href: "/perks" }
    ],
    legal: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Accessibility", href: "/accessibility" }
    ]
  }

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" }
  ]

  
  const contactInfo = [
    { 
      icon: Mail,
      label: "Email",
      value:storeDetails?.email ||"",
      href: `mailto:${storeDetails?.email}`
    },
    {
      icon: Phone,
      label: "Phone",
      value: storeDetails?.phone || "",
      href: `tel:${storeDetails?.phone}`
    },
    {
      icon: MapPin,
      label: "Address",
      value: storeDetails?.address || "",
      href: `https://maps.google.com/?q=${storeDetails?.address}`
    }
  ]

  return (
    <footer className="bg-white border-t">
      {/* Newsletter Section */}
      {/* <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="rounded-2xl bg-gray-50 p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join Our Learning Community
            </h3>
            <p className="text-gray-600 mb-6">
              Get weekly insights on AI, tech, and career growth delivered to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button 
                style={{ 
                  backgroundColor: colors.primary.main,
                  color: 'white'
                }}
                className="hover:opacity-90"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span style={{ color: colors.primary.main }} className="text-2xl font-bold">
                {storeDetails?.name||""}
              </span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Empowering professionals to excel in the AI-first world through expert-led
              learning experiences and practical skill development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Columns */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="flex items-start space-x-3 text-gray-600 hover:text-gray-900"
              >
                <info.icon className="h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">{info.label}</div>
                  <div className="text-sm">{info.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} {storeDetails?.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}