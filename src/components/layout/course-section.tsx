"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {  Calendar } from "lucide-react"
import { courses } from "@/config/courses"
import { useTheme } from "@/context/theme-context"

export function CoursesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Business')
  const { colors } = useTheme()

  const categories = [
    'Business',
    'Data',
    'Design',
    'Tech',
    'Product',
    'Growth',
    'Marketing',
    'Gen AI'
  ]

  const filteredCourses = courses.filter(course => course.category === selectedCategory)

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
       
        {/* Categories */}
        <div className="flex overflow-x-auto pb-4 mb-8 hide-scrollbar">
          <div className="flex gap-3 min-w-max">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`h-12 px-8 text-base font-medium rounded-xl transition-all`}
                style={{
                  backgroundColor: selectedCategory === category ? colors.primary.main : 'white',
                  color: selectedCategory === category ? 'white' : colors.text.secondary,
                  borderWidth: '2px',
                  borderColor: selectedCategory === category ? 'transparent' : colors.border.light,
                }}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Mentorship Programs
          </h2>
          {/* <div className="flex items-center gap-4">
            <a href="/programs" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              See All
            </a>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="icon"
                className="h-10 w-10 rounded-full border border-gray-200"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="h-10 w-10 rounded-full border border-gray-200"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div> */}
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="rounded-2xl overflow-hidden border hover:shadow-lg transition-all duration-300"
              style={{ borderColor: colors.border.light }}
            >
              {/* Course Image Area */}
              <div 
                className="aspect-[16/9] relative p-6 flex items-end"
                style={{ 
                  backgroundColor: course.backgroundColor,
                  backgroundImage: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5))'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                  {course.status}
                </div>
              </div>

              {/* Course Details */}
              <div className="p-6 space-y-4 pb-8 ">
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: colors.text.primary }}>
                    {course.title}
                  </h3>
                  <p className="text-sm line-clamp-2" style={{ color: colors.text.secondary }}>
                    {course.description}
                  </p>
                </div>

                {/* Course Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: colors.text.secondary }}>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <span>•</span>
                  <span>{course.type}</span>
                </div>

                {/* Mentors */}
                {/* <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                      />
                    ))}
                    {course.mentors.count > 0 && (
                      <div
                        className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-medium text-white"
                        style={{ backgroundColor: colors.primary.main }}
                      >
                        +{course.mentors.count}
                      </div>
                    )}
                  </div>
                  <div className="text-sm">
                    <p style={{ color: colors.text.secondary }}>Multiple mentors from</p>
                    <p className="font-medium" style={{ color: colors.text.primary }}>
                      {course.mentors.companies.join(', ')}
                      {course.mentors.companies.length < course.mentors.count + 2 && 
                        ` and ${course.mentors.count + 2 - course.mentors.companies.length} more`}
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}