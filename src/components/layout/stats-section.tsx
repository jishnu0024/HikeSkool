"use client"

import { useEffect, useState } from "react"
// import { useTheme } from "@/context/theme-context"
import { Users, Award, BookOpen, Building2 } from "lucide-react"

export function StatsSection() {
  // const { colors } = useTheme()
  const [isVisible, setIsVisible] = useState(false)

  const stats = [
    {
      icon: Users,
      value: "15000+",
      label: "Trained professionals",
      description: "have reaped benefits from our programs",
      color: "#26C467" // green
    },
    {
      icon: Award,
      value: "100%",
      label: "Success Rate",
      description: "Our professionals who transformed their career",
      color: "#FF6B6B" // coral
    },
    {
      icon: BookOpen,
      value: "100%",
      label: "Placement Assistance",
      description: "from top companies globally",
      color: "#4C6FFF" // blue
    },
    {
      icon: Building2,
      value: "100+",
      label: "College collaborations",
      description: "trust our training programs",
      color: "#9757D7" // purple
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('stats-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="stats-section"
      className="py-16 lg:py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
           Our milestones
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
           Join in our hikeskool journey to create an impact in your career
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`transform h-full transition-all duration-500 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white h-full rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg relative overflow-hidden group">
                {/* Decorative corner gradient */}
                <div 
                  className="absolute top-0 right-0 w-24 h-24 transform translate-x-8 -translate-y-8 opacity-10 rounded-full transition-transform group-hover:scale-150 duration-500"
                  style={{ backgroundColor: stat.color }}
                />

                {/* Icon */}
                <div 
                  className="relative inline-flex p-3 rounded-lg mb-4"
                  style={{ backgroundColor: `${stat.color}15` }}
                >
                  <stat.icon 
                    className="h-6 w-6"
                    style={{ color: stat.color }}
                  />
                </div>

                {/* Stats Content */}
                <div className="space-y-3">
                  <h3 
                    className="text-3xl font-bold"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </h3>
                  <p className="text-xl font-semibold text-gray-900">
                    {stat.label}
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Bottom highlight line */}
                <div 
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: stat.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}