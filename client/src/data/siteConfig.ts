import { FaHeart, FaLeaf, FaBrain, FaHandsHelping } from "react-icons/fa";

export const siteConfig = {
  name: "Serene Minds Therapy",
  shortName: "Serene Minds",
  tagline: "Finding Balance in a Chaotic World",
  description: "Professional counseling services dedicated to helping you navigate life's challenges with compassion and clarity.",
  email: "hello@sereneminds.com",
  phone: "(555) 123-4567",
  address: "123 Wellness Blvd, Suite 200, Calm City, CA 90210",
  
  hero: {
    title: "Begin Your Journey to Inner Peace",
    subtitle: "A safe space to explore your thoughts, heal from the past, and build a resilient future.",
    cta: "Schedule a Consultation",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2070&auto=format&fit=crop" // Gentle meadow sunrise
  },

  about: {
    title: "Meet Your Therapist",
    name: "Dr. Elena Rivers",
    role: "Licensed Clinical Psychologist",
    bio: "With over 15 years of experience in clinical psychology, I specialize in anxiety, depression, and trauma recovery. My approach integrates cognitive-behavioral techniques with mindfulness practices to create a holistic healing environment tailored to your unique needs.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop" // Professional portrait
  },

  services: [
    {
      title: "Individual Therapy",
      description: "One-on-one sessions to address personal challenges, anxiety, depression, and self-growth.",
      icon: FaBrain,
    },
    {
      title: "Couples Counseling",
      description: "Strengthen your relationship through improved communication and conflict resolution strategies.",
      icon: FaHeart,
    },
    {
      title: "Trauma Recovery",
      description: "Safe, evidence-based approaches to healing from past traumatic experiences.",
      icon: FaLeaf,
    },
    {
      title: "Mindfulness Coaching",
      description: "Learn practical techniques to stay present and manage stress in daily life.",
      icon: FaHandsHelping,
    },
  ],

  howItWorks: [
    {
      step: 1,
      title: "Free Consultation",
      description: "A 15-minute phone call to discuss your needs and see if we're a good fit."
    },
    {
      step: 2,
      title: "Initial Assessment",
      description: "We'll dive deeper into your history and set clear goals for therapy."
    },
    {
      step: 3,
      title: "Regular Sessions",
      description: "Weekly or bi-weekly 50-minute sessions tailored to your journey."
    },
    {
      step: 4,
      title: "Growth & Healing",
      description: "Develop tools and insights that support lasting positive change."
    }
  ],

  testimonials: [
    {
      text: "Dr. Rivers helped me find my voice again. I feel more confident and at peace than I have in years.",
      author: "Sarah J."
    },
    {
      text: "The mindfulness techniques I learned here have completely changed how I handle work stress.",
      author: "Michael T."
    },
    {
      text: "Compassionate, professional, and truly insightful. Highly recommended for anyone seeking clarity.",
      author: "Emily R."
    }
  ],

  insurance: {
    accepted: ["Blue Cross Blue Shield", "Aetna", "UnitedHealthcare", "Cigna", "Medicare"],
    fees: {
      individual: "$150 per session",
      couples: "$180 per session",
      slidingScale: "Available upon request for qualifying individuals."
    }
  },

  blogPosts: [
    {
      id: 1,
      title: "5 Daily Habits for Mental Clarity",
      excerpt: "Simple practices you can incorporate today to reduce brain fog and anxiety.",
      date: "Oct 12, 2023",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Understanding Anxiety Triggers",
      excerpt: "How to identify and manage the root causes of your stress responses.",
      date: "Sep 28, 2023",
      image: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "The Power of Vulnerability",
      excerpt: "Why opening up is a strength, not a weakness, in personal relationships.",
      date: "Sep 15, 2023",
      image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1000&auto=format&fit=crop"
    }
  ]
};
