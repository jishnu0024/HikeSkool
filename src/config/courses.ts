// src/config/courses.ts

export interface Course {
    id: string;
    title: string;
    category: 'Business' | 'Data' | 'Design' | 'Tech' | 'Product' | 'Growth' | 'Marketing' | 'Gen AI';
    duration: string;
    type: 'Live And Recorded' | 'Self Paced' | 'Live Only';
    status: string;
    description: string;
    backgroundColor: string;
    mentors: {
      companies: string[];
      count: number;
    };
  }
  
  export const courses: Course[] = [
    // Business Category
    {
      id: 'd2c-program',
      title: 'D2C',
      category: 'Business',
      duration: '8 Weeks',
      type: 'Live And Recorded',
      status: 'Coming Soon',
      description: 'Unlock Your Brand\'s Potential and Transform Your D2C Vision into a Million-Dollar Reality with Elite Mentorship and Networking...',
      backgroundColor: '#4A2301',
      mentors: {
        companies: ['Sleepy Owl Coffee', 'Just Herbs'],
        count: 3
      }
    },
    {
      id: 'management-consulting',
      title: 'Management Consulting',
      category: 'Business',
      duration: '15 Weeks',
      type: 'Live And Recorded',
      status: '1st Mar 2025',
      description: 'A 15-week AI-powered mentorship program designed by consultants from McKinsey, Bain & more...',
      backgroundColor: '#003553',
      mentors: {
        companies: ['LinkedIn', 'Meta'],
        count: 1
      }
    },
    {
      id: 'business-strategy',
      title: 'Business Strategy & Leadership',
      category: 'Business',
      duration: '12 Weeks',
      type: 'Live And Recorded',
      status: 'Enrolling Now',
      description: 'Master strategic thinking and leadership skills with mentorship from top business leaders and CEOs...',
      backgroundColor: '#2C3E50',
      mentors: {
        companies: ['Microsoft', 'Amazon'],
        count: 4
      }
    },
  
    // Data Category
    {
      id: 'data-science',
      title: 'Data Science & ML',
      category: 'Data',
      duration: '12 Weeks',
      type: 'Live And Recorded',
      status: 'Enrolling Now',
      description: 'Master data science with real-world projects and mentorship from leading data scientists...',
      backgroundColor: '#1E3A8A',
      mentors: {
        companies: ['Google', 'Amazon'],
        count: 2
      }
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      category: 'Data',
      duration: '10 Weeks',
      type: 'Live And Recorded',
      status: '15th Mar 2025',
      description: 'Learn advanced analytics techniques and tools used by top companies worldwide...',
      backgroundColor: '#1B4F72',
      mentors: {
        companies: ['Netflix', 'Uber'],
        count: 3
      }
    },
    {
      id: 'big-data',
      title: 'Big Data Engineering',
      category: 'Data',
      duration: '14 Weeks',
      type: 'Live Only',
      status: 'Starting Soon',
      description: 'Master big data technologies and build scalable data pipelines with industry experts...',
      backgroundColor: '#154360',
      mentors: {
        companies: ['Databricks', 'Snowflake'],
        count: 2
      }
    },
  
    // Design Category
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      category: 'Design',
      duration: '10 Weeks',
      type: 'Live And Recorded',
      status: 'Starting Soon',
      description: 'Learn end-to-end product design from industry experts and build a stellar portfolio...',
      backgroundColor: '#312E81',
      mentors: {
        companies: ['Apple', 'Figma'],
        count: 4
      }
    },
    {
      id: 'product-design',
      title: 'Product Design',
      category: 'Design',
      duration: '12 Weeks',
      type: 'Live And Recorded',
      status: '1st Apr 2025',
      description: 'Master the complete product design process from research to final delivery...',
      backgroundColor: '#4C1D95',
      mentors: {
        companies: ['Adobe', 'Airbnb'],
        count: 2
      }
    },
    {
      id: 'motion-design',
      title: 'Motion Design',
      category: 'Design',
      duration: '8 Weeks',
      type: 'Live Only',
      status: 'Enrolling Now',
      description: 'Create stunning motion graphics and animations for digital products...',
      backgroundColor: '#5B21B6',
      mentors: {
        companies: ['Disney', 'Pixar'],
        count: 3
      }
    },
  
    // Tech Category
    {
      id: 'full-stack',
      title: 'Full Stack Development',
      category: 'Tech',
      duration: '16 Weeks',
      type: 'Live And Recorded',
      status: '15th Mar 2025',
      description: 'Become a proficient full-stack developer with modern technologies...',
      backgroundColor: '#1E40AF',
      mentors: {
        companies: ['Microsoft', 'Uber'],
        count: 2
      }
    },
    {
      id: 'cloud-computing',
      title: 'Cloud Architecture',
      category: 'Tech',
      duration: '12 Weeks',
      type: 'Live And Recorded',
      status: 'Coming Soon',
      description: 'Master cloud technologies with AWS, Azure, and GCP certification preparation...',
      backgroundColor: '#1E3A8A',
      mentors: {
        companies: ['AWS', 'Microsoft'],
        count: 3
      }
    },
    {
      id: 'blockchain',
      title: 'Blockchain Development',
      category: 'Tech',
      duration: '10 Weeks',
      type: 'Live Only',
      status: 'Starting Soon',
      description: 'Learn blockchain development and smart contract programming...',
      backgroundColor: '#00008B',
      mentors: {
        companies: ['Ethereum', 'Polygon'],
        count: 2
      }
    },
  
    // Product Category
    {
      id: 'product-management',
      title: 'Product Management',
      category: 'Product',
      duration: '12 Weeks',
      type: 'Live And Recorded',
      status: 'Enrolling Now',
      description: 'Learn end-to-end product management from top PMs at leading tech companies...',
      backgroundColor: '#064E3B',
      mentors: {
        companies: ['Google', 'Amazon'],
        count: 3
      }
    },
    {
      id: 'product-analytics',
      title: 'Product Analytics',
      category: 'Product',
      duration: '8 Weeks',
      type: 'Live And Recorded',
      status: '1st Apr 2025',
      description: 'Master data-driven product decisions and analytics tools...',
      backgroundColor: '#065F46',
      mentors: {
        companies: ['Mixpanel', 'Amplitude'],
        count: 2
      }
    },
  
    // Growth Category
    {
      id: 'growth-marketing',
      title: 'Growth Marketing',
      category: 'Growth',
      duration: '10 Weeks',
      type: 'Live And Recorded',
      status: 'Coming Soon',
      description: 'Learn advanced growth marketing strategies and tactics...',
      backgroundColor: '#7C3AED',
      mentors: {
        companies: ['HubSpot', 'Shopify'],
        count: 3
      }
    },
    {
      id: 'seo-mastery',
      title: 'SEO Mastery',
      category: 'Growth',
      duration: '8 Weeks',
      type: 'Live And Recorded',
      status: 'Starting Soon',
      description: 'Master technical and content SEO strategies for organic growth...',
      backgroundColor: '#6D28D9',
      mentors: {
        companies: ['Semrush', 'Ahrefs'],
        count: 2
      }
    },
  
    // Marketing Category
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      category: 'Marketing',
      duration: '12 Weeks',
      type: 'Live And Recorded',
      status: 'Enrolling Now',
      description: 'Comprehensive digital marketing program covering all major channels...',
      backgroundColor: '#9D174D',
      mentors: {
        companies: ['Facebook', 'Google'],
        count: 4
      }
    },
    {
      id: 'content-marketing',
      title: 'Content Marketing',
      category: 'Marketing',
      duration: '8 Weeks',
      type: 'Live Only',
      status: '1st Apr 2025',
      description: 'Learn to create and execute effective content marketing strategies...',
      backgroundColor: '#BE185D',
      mentors: {
        companies: ['Netflix', 'Spotify'],
        count: 2
      }
    },
  
    // Gen AI Category
    {
      id: 'ai-applications',
      title: 'AI Applications',
      category: 'Gen AI',
      duration: '10 Weeks',
      type: 'Live And Recorded',
      status: 'Coming Soon',
      description: 'Learn to build and deploy practical AI applications in business...',
      backgroundColor: '#3730A3',
      mentors: {
        companies: ['OpenAI', 'Anthropic'],
        count: 3
      }
    },
    {
      id: 'llm-engineering',
      title: 'LLM Engineering',
      category: 'Gen AI',
      duration: '12 Weeks',
      type: 'Live And Recorded',
      status: 'Starting Soon',
      description: 'Master large language models and their applications in products...',
      backgroundColor: '#4338CA',
      mentors: {
        companies: ['Cohere', 'Hugging Face'],
        count: 2
      }
    }
  ]