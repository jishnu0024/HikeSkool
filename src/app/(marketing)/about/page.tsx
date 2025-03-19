"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Briefcase, GraduationCap, Users, Award, ArrowRight } from "lucide-react"
import { useTheme } from "@/context/theme-context"
import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { LucideIcon } from "lucide-react"

// Define types for theme colors
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

// Define types for team members
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

// Define types for stats
interface Stat {
  value: string;
  label: string;
  icon: LucideIcon; // Using LucideIcon type instead of any
}

// Define types for values
interface Value {
  title: string;
  description: string;
  icon: string;
}

// Custom hook to check if element is in view
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Once it's in view, we can stop observing
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, inView };
}

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
}

export default function AboutPage() {
  const { colors } = useTheme();

  // Team members data
  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      bio: "Former Yale professor with 15+ years of experience in educational technology",
      image: "/placeholder/team/sarah.jpg"
    },
    {
      name: "Michael Chen",
      role: "Head of Curriculum",
      bio: "EdTech specialist with experience at top tech companies",
      image: "/placeholder/team/michael.jpg"
    },
    {
      name: "Priya Patel",
      role: "Director of Student Success",
      bio: "Dedicated to helping students achieve their career goals",
      image: "/placeholder/team/priya.jpg"
    },
    {
      name: "James Wilson",
      role: "Chief Technology Officer",
      bio: "20+ years developing innovative learning platforms",
      image: "/placeholder/team/james.jpg"
    }
  ]

  // Company stats
  const stats: Stat[] = [
    { value: "5,000+", label: "Students Trained", icon: Users },
    { value: "95%", label: "Placement Rate", icon: Briefcase },
    { value: "100+", label: "Industry Partners", icon: Award },
    { value: "25+", label: "Specialized Programs", icon: GraduationCap }
  ]

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section 
        className="relative py-28 md:py-36 px-4 overflow-hidden"
        style={{ backgroundColor: colors.background.dark }}
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="w-full h-full" style={{ 
            backgroundImage: 'url("/api/placeholder/1400/800")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px)'
          }}></div>
        </div>
        <motion.div 
          className="max-w-7xl mx-auto relative z-10"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="flex flex-col items-center text-center space-y-8">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white tracking-tight"
              variants={fadeIn}
            >
              About <span style={{ color: colors.primary.main }}>Us</span>
            </motion.h1>
            <motion.div 
              className="w-24 h-1 rounded-full" 
              style={{ backgroundColor: colors.primary.main }}
              variants={fadeIn}
            ></motion.div>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light"
              variants={fadeIn}
            >
              We&apos;re on a mission to transform education and create the next generation of industry leaders through immersive, expert-led learning experiences.
            </motion.p>
          </div>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent opacity-5"></div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <StorySection colors={colors} />
        </div>
      </section>

      {/* Stats Section */}
      <section 
        className="py-24 px-4 relative overflow-hidden" 
        style={{ backgroundColor: colors.primary.light }}
      >
        {/* Decorative floating shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i}
              className="absolute rounded-full" 
              style={{
                backgroundColor: colors.primary.main,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
                transform: `scale(${Math.random() * 1 + 0.5})`,
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedHeading 
            title="Our" 
            highlightText="Impact" 
            colors={colors} 
            lightMode={true}
          />
          
          <StatsGrid stats={stats} colors={colors} />
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedHeading 
            title="Meet Our" 
            highlightText="Team" 
            colors={colors} 
            description="Our expert team combines decades of industry and academic experience to create cutting-edge educational experiences."
          />
          
          <TeamGrid teamMembers={teamMembers} colors={colors} />
        </div>
      </section>

      {/* Values Section */}
      <section 
        className="py-24 px-4 relative overflow-hidden" 
        style={{ backgroundColor: colors.background.dark }}
      >
        {/* Subtle diagonal pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: `linear-gradient(45deg, ${colors.primary.main} 25%, transparent 25%, transparent 75%, ${colors.primary.main} 75%, ${colors.primary.main}), 
                              linear-gradient(45deg, ${colors.primary.main} 25%, transparent 25%, transparent 75%, ${colors.primary.main} 75%, ${colors.primary.main})`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedHeading 
            title="Our" 
            highlightText="Values" 
            colors={colors} 
            darkMode={true}
          />
          
          <ValuesGrid colors={colors} />

          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/contact-us">
              <Button 
                size="lg" 
                className="text-white px-10 py-6 rounded-full text-lg shadow-lg transition-transform hover:scale-105"
                style={{ 
                  backgroundColor: colors.primary.main,
                }}
              >
                Join Our Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

// Props for the story section component
interface StorySectionProps {
  colors: ColorScheme;
}

// Component for the story section with animation
function StorySection({ colors }: StorySectionProps) {
  const { ref, inView } = useInView(0.1);

  return (
    <motion.div 
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { staggerChildren: 0.3 }
        }
      }}
    >
      <motion.div 
        className="relative aspect-video rounded-xl overflow-hidden shadow-2xl"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.7 }
          }
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10"></div>
        <Image 
          src="/api/placeholder/800/450" 
          alt="Our campus" 
          width={800} 
          height={450} 
          className="object-cover w-full h-full transform transition-transform hover:scale-105 duration-700"
        />
        {/* Floating badge */}
        <div 
          className="absolute bottom-6 left-6 py-2 px-4 rounded-lg z-20 backdrop-blur-md"
          style={{ backgroundColor: `${colors.primary.main}99` }}
        >
          <p className="text-white font-medium text-sm">Est. 2018</p>
        </div>
      </motion.div>

      <motion.div 
        className="space-y-8"
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.7 }
          }
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: colors.text.primary }}>
          Our <span style={{ color: colors.primary.main }}>Story</span>
        </h2>
        <div className="w-20 h-1 rounded-full" style={{ backgroundColor: colors.primary.main }}></div>
        <p className="text-xl text-gray-700 leading-relaxed">
          Founded in 2018, our platform began with a simple idea: education should directly connect to real-world career outcomes. We noticed a gap between traditional education and industry requirements, and set out to bridge it.
        </p>
        <p className="text-xl text-gray-700 leading-relaxed">
          Starting with just three courses and a handful of students, we&apos;ve grown to become a leading edutech platform with thousands of successful graduates working at top companies worldwide.
        </p>
        <p className="text-xl text-gray-700 leading-relaxed">
          Our unique approach combines expert instruction, hands-on projects, and personalized mentorship to ensure every student is prepared for success in their chosen field.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button
            className="mt-4 text-white px-8 py-6 rounded-lg text-lg shadow-lg"
            style={{ backgroundColor: colors.primary.main }}
          >
            Learn More About Our Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// Props for animated heading component
interface AnimatedHeadingProps {
  title: string;
  highlightText: string;
  colors: ColorScheme;
  description?: string;
  darkMode?: boolean;
  lightMode?: boolean;
}

// Component for animated section heading
function AnimatedHeading({ 
  title, 
  highlightText, 
  colors, 
  description, 
  darkMode, 
  lightMode 
}: AnimatedHeadingProps) {
  const { ref, inView } = useInView(0.1);

  return (
    <motion.div 
      ref={ref}
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : ''}`} 
        style={{ color: darkMode ? 'white' : lightMode ? colors.text.primary : colors.text.primary }}>
        {title} <span style={{ color: colors.primary.main }}>{highlightText}</span>
      </h2>
      <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{ backgroundColor: colors.primary.main }}></div>
      {description && (
        <p className={`text-xl mx-auto max-w-2xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}

// Props for stats grid component
interface StatsGridProps {
  stats: Stat[];
  colors: ColorScheme;
}

// Component for stat grid with animations
function StatsGrid({ stats, colors }: StatsGridProps) {
  const { ref, inView } = useInView(0.1);

  return (
    <motion.div 
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {stats.map((stat, index) => (
        <motion.div 
          key={index} 
          className="p-8 rounded-xl text-center shadow-xl backdrop-blur-md hover:translate-y-[-8px] transition-all duration-300"
          style={{ 
            backgroundColor: `${colors.background.darker}f0`,
            borderLeft: `4px solid ${colors.primary.main}`,
          }}
          variants={scaleUp}
          whileHover={{ scale: 1.03 }}
        >
          <div className="flex justify-center mb-6">
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
              style={{ 
                background: `linear-gradient(135deg, ${colors.primary.main}, ${colors.primary.hover})`,
              }}
            >
              {stat.icon && <stat.icon size={32} className="text-white" />}
            </div>
          </div>
          <h3 className="text-4xl font-bold text-white mb-4">{stat.value}</h3>
          <p className="text-gray-300 text-lg font-medium">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

// Props for team grid component
interface TeamGridProps {
  teamMembers: TeamMember[];
  colors: ColorScheme;
}

// Component for team grid with animations
function TeamGrid({ teamMembers, colors }: TeamGridProps) {
  const { ref, inView } = useInView(0.1);

  return (
    <motion.div 
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {teamMembers.map((member, index) => (
        <motion.div 
          key={index} 
          className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
          style={{ borderColor: colors.border.main, borderWidth: "1px" }}
          variants={scaleUp}
        >
          <div className="aspect-square relative overflow-hidden">
            <Image 
              src="/api/placeholder/300/300" 
              alt={member.name} 
              width={300} 
              height={300} 
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-300"
              style={{ backgroundColor: colors.primary.main }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex space-x-3">
                {['LinkedIn', 'Twitter', 'Email'].map((social, i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:bg-white transition-colors"
                  >
                    <span className="text-xs font-bold" style={{ color: colors.primary.main }}>
                      {social[0]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="p-6 bg-white">
            <h3 className="text-xl font-semibold mb-1" style={{ color: colors.text.primary }}>
              {member.name}
            </h3>
            <p className="text-sm font-medium mb-3" style={{ color: colors.primary.main }}>
              {member.role}
            </p>
            <p className="text-gray-600">
              {member.bio}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// Props for values grid component
interface ValuesGridProps {
  colors: ColorScheme;
}

// Component for values grid with animations
function ValuesGrid({ colors }: ValuesGridProps) {
  const { ref, inView } = useInView(0.1);

  const values: Value[] = [
    { 
      title: "Innovation", 
      description: "We continuously evolve our curriculum and teaching methods to stay ahead of industry trends.",
      icon: "✦" 
    },
    { 
      title: "Excellence", 
      description: "We hold ourselves and our students to the highest standards of quality and achievement.",
      icon: "★" 
    },
    { 
      title: "Accessibility", 
      description: "We believe quality education should be accessible to motivated learners regardless of background.",
      icon: "♦" 
    }
  ];

  return (
    <motion.div 
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {values.map((value, index) => (
        <motion.div 
          key={index} 
          className="p-10 rounded-xl backdrop-blur-sm relative overflow-hidden group"
          style={{ 
            backgroundColor: `${colors.background.darker}cc`,
            borderBottom: `4px solid ${colors.primary.main}`,
          }}
          variants={scaleUp}
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="absolute -right-8 -top-8 opacity-5 text-8xl group-hover:opacity-10 transition-opacity">
            {value.icon}
          </div>
          <h3 className="text-2xl font-bold mb-5 relative z-10" style={{ color: colors.primary.main }}>
            {value.title}
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed relative z-10">
            {value.description}
          </p>
          <div className="w-12 h-1 mt-6 rounded-full" style={{ backgroundColor: colors.primary.main }}></div>
        </motion.div>
      ))}
    </motion.div>
  );
}