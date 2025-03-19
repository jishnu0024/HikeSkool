"use client";

import { useTheme } from "@/context/theme-context";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

// Define type for theme colors to avoid using 'any'
type ColorScheme = {
  primary: {
    main: string;
    hover: string;
    light: string;
  };
  background: {
    dark: string;
    darker: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
  border: {
    light: string;
    main: string;
  }
}

export default function ContactUs() {
  const { colors } = useTheme();
  
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section 
        className="relative py-20 px-4 overflow-hidden"
        style={{ backgroundColor: colors.background.dark }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Contact <span style={{ color: colors.primary.main }}>Us</span>
            </h1>
            <div className="w-20 h-1 rounded" style={{ backgroundColor: colors.primary.main }}></div>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              We&apos;re here to help. Reach out to us with any questions about our programs or services.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Email Contact Card */}
            <ContactCard 
              icon={Mail}
              title="Email Us"
              content="info@edutech.com"
              subtext="We&apos;ll respond within 24 hours"
              colors={colors}
            />
            
            {/* Phone Contact Card */}
            <ContactCard 
              icon={Phone}
              title="Call Us"
              content="+1 (555) 123-4567"
              subtext="Mon-Fri, 9:00 AM - 5:00 PM"
              colors={colors}
            />
            
            {/* Physical Address Card */}
            <ContactCard 
              icon={MapPin}
              title="Visit Us"
              content="123 Education Avenue, Suite 400, Tech City, TC 10001"
              subtext="Get directions"
              isAddress={true}
              colors={colors}
            />
            
            {/* Office Hours Card */}
            <ContactCard 
              icon={Clock}
              title="Office Hours"
              content="Monday - Friday: 9:00 AM - 5:00 PM"
              subtext="Saturday: 10:00 AM - 2:00 PM"
              colors={colors}
            />
          </div>
        </div>
      </section>
      
      {/* Social Media Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-2xl font-bold mb-8"
            style={{ color: colors.text.primary }}
          >
            Connect With Us
          </h2>
          
          <div className="flex justify-center gap-6">
            {['LinkedIn', 'Twitter', 'Facebook', 'Instagram', 'YouTube'].map((platform) => (
              <div 
                key={platform}
                className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200"
                style={{ 
                  backgroundColor: colors.primary.light,
                  color: colors.primary.main
                }}
              >
                <span className="text-sm font-bold">{platform[0]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

interface ContactCardProps {
  icon: React.ElementType;
  title: string;
  content: string;
  subtext?: string;
  isAddress?: boolean;
  colors: ColorScheme; // Using the ColorScheme type instead of any
}

function ContactCard({ icon: Icon, title, content, subtext, isAddress, colors }: ContactCardProps) {
  return (
    <div 
      className="p-6 rounded-lg border h-full transition-all duration-200 hover:shadow-md"
      style={{ 
        borderColor: colors.border.light,
        borderLeft: `4px solid ${colors.primary.main}`
      }}
    >
      <div className="flex items-start">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0"
          style={{ backgroundColor: colors.primary.light }}
        >
          <Icon className="h-5 w-5" style={{ color: colors.primary.main }} />
        </div>
        
        <div>
          <h3 
            className="font-semibold mb-2"
            style={{ color: colors.text.primary }}
          >
            {title}
          </h3>
          
          <p 
            className={`${isAddress ? 'text-sm' : 'text-base font-medium'} mb-2`}
            style={{ color: isAddress ? colors.text.secondary : colors.primary.main }}
          >
            {content}
          </p>
          
          {subtext && (
            <p 
              className="text-sm"
              style={{ color: colors.text.secondary }}
            >
              {subtext}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}