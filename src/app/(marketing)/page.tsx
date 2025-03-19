import { CoursesSection } from "@/components/layout/course-section"
import { Hero } from "@/components/layout/hero"
import { StatsSection } from "@/components/layout/stats-section"

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <CoursesSection/>
      {/* We'll add more sections later */}
    </>
  )
}