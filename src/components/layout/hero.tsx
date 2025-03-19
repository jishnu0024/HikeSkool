"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useTheme } from "@/context/theme-context"

export function Hero() {
  const { colors } = useTheme()

  return (
    <section 
      className="relative overflow-hidden py-20"
      style={{ backgroundColor: colors.background.dark }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
            Rise Above The {" "}
              <span style={{ color: colors.primary.main }}>Extraordinary</span> 
            </h1>
            <p className="text-lg text-gray-300 max-w-xl">
             Be the one whos making changes 
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-white"
                style={{ 
                  backgroundColor: colors.primary.main,
                 
                }}
              >
                Our Programs
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Column - Featured Card */}
          <div className="relative">
            <div 
              className="absolute inset-0 rounded-lg" 
              style={{ 
                background: `linear-gradient(to right, ${colors.primary.light}, transparent)`
              }}
            />
            <div 
              className="relative rounded-lg p-8 shadow-xl"
              style={{ backgroundColor: colors.background.darker }}
            >
             
              <div className="space-y-4">
                {[
                  "Levelup from industry experts",
                  "Work on real time projects",
                  "Certified",
                  "Get placed"
                ].map((text, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div 
                      className="h-12 w-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: colors.primary.light }}
                    >
                      <span style={{ color: colors.primary.main }}>{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-white">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}