import {
  BarChart,
  Brain,
  Facebook,
  Globe,
  Headset,
  Instagram,
  Lightbulb,
  Linkedin,
  PenTool,
  Scale,
  Trees,
  Trophy,
  Wrench,
} from "lucide-react";

export const navLinks = [
  {
    label: "About Us",
    href: "/about-us",
  },

  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },

  {
    label: "Our Work",
    href: "/our-work",
  },
] as const;

export const adminNavLinks = [
  { label: "Portfolios", href: "/admin/portfolios" },
  { label: "Testimonials", href: "/admin/testimonials" },
  { label: "Newsletter", href: "/admin/newsletter" },
] as const;

export const whyChooseUsData = [
  {
    Icon: Trophy,
    title: "Established Success Record",

    icon: Trophy,
    color: "#F9EC12",
    description:
      "With a proven history of delivering measurable results and surpassing client expectations, we are the trusted choice for businesses striving for success in today's competitive landscape.",
  },
  {
    Icon: Brain,
    title: "Multi-Industry Expertise",

    icon: Brain,
    color: "#F14D34",
    description:
      "Our team of seasoned professionals brings expertise across various industries, ensuring that we understand the unique challenges and opportunities specific to your business niche.",
  },
  {
    Icon: Wrench,
    title: "Tailored Solutions",
    icon: Wrench,
    color: "#4A7DBF",
    description:
      "We believe in personalized approaches tailored to each client's needs. Our customized solutions are designed to address your specific goals and drive sustainable growth.",
  },
  {
    Icon: Lightbulb,
    title: "Innovative Tactics",
    icon: Lightbulb,
    color: "#6BB953",
    description:
      "Remain ahead with our innovative strategies. We dynamically adapt to the evolving digital landscape, leveraging cutting-edge tools and techniques to ensure your success.",
  },
  {
    Icon: Scale,
    title: "Cost-Effective Excellence",
    icon: Scale,
    color: "#6CADCB",
    description:
      "We offer cost-effective solutions without compromising on quality. Get the most out of your investment with our competitive pricing and exceptional service.",
  },
  {
    Icon: Headset,
    title: "Committed Assistance",
    icon: Headset,
    color: "#599792",
    description:
      "We are committed to your success. Rely on us for steadfast support and continuous guidance, equipped with the resources needed to excel in today's fast-paced business landscape.",
  },
] as const;

export const socialLinks = [
  {
    platform: "Facebook",
    link: "https://www.facebook.com/degikon7?mibextid=LQQJ4d",
    Icon: Facebook,
  },
  {
    platform: "Instagram",
    link: "https://www.instagram.com/degikon",
    Icon: Instagram,
  },
  {
    platform: "LinkedIn",
    link: "https://www.linkedin.com/company/degikon",
    Icon: Linkedin,
  },
] as const;

export const employees = [
  {
    name: "Yeasin Asif ",
    position: "Founder",
    image: "/images/about/about (1).jpg",
  },
  {
    name: "Yasin Raj",
    position: "Co-Founder.",
    image: "/images/about/about (5).jpeg",
  },
  {
    name: "Joy Podder ",
    position: "Digital Marketer",
    image: "/images/about/about (4).jpg",
  },
  {
    name: "Sohel Rana",
    position: "Digital Marketer",
    image: "/images/about/about (3).jpg",
  },
  {
    name: "Md Rumon Khan ",
    position: "Web Developer",
    image: "/images/about/about (2).jpg",
  },
  {
    name: "Mohammed Nazmul Hossain",
    position: "CBO & Graphic Designer",
    image: "/images/about/about (6).jpeg",
  },
] as const;

export const trustedCompanines = [
  "/images/brands/logo.webp",
  "/images/brands/logo.webp",
  "/images/brands/logo.webp",
  "/images/brands/logo.webp",
  "/images/brands/logo.webp",
  "/images/brands/logo.webp",
  "/images/brands/logo.webp",
  "/images/brands/logo.webp",
  "/images/brands/logo.webp",
  ,
] as const;

export const pricingPackages = [
  {
    name: "Brand Starter Kit",
    services: [
      "Basic Brand Consultation",
      "Logo Design",
      "Basic SEO Analysis",
      "2 Custom Social Media Post Designs",
    ],
    features: [
      "1 Video Call Session",
      "2 Revisions per Service",
      "Initial Brand Strategy Outline",
    ],
  },
  {
    name: "Digital Presence Builder",
    services: [
      "Brand Development Session",
      "SEO and Basic Website Content",
      "4 Custom Social Media Post Designs",
      "1 Short Video Ad or Social Media Video",
    ],
    features: [
      "2 Video Call Sessions",
      "3 Revisions per Service",
      "Monthly SEO and Social Media Report",
    ],
  },
  {
    name: "Market Influence Creator",
    services: [
      "Comprehensive Branding and Strategy",
      "Advanced SEO Services",
      "Influencer Marketing Introduction",
      "6 Social Media Designs",
      "1 Animated Explainer Video",
    ],
    features: [
      "4 Video Call Sessions",
      "4 Revisions per Service",
      "Influencer Matching and Strategy",
    ],
  },
];

export const ourFocus = [
  {
    title: "Humanity",
    description:
      "We believe in the power of technology to transform lives. By providing refurbished devices to underserved communities, we are empowering individuals to connect, learn, and grow.",
    icon: Globe,
  },
  {
    title: "Sustainability",
    description:
      "Protecting our planet is a top priority. We are committed to responsible e-waste management and reducing our environmental footprint. By recycling and repurposing electronics.",
    icon: Trees,
  },
  {
    title: "Repurposing",
    description:
      "We believe that every device has a second life. By refurbishing and repairing old electronics, we are extending their lifespan and reducing the need for new, resource-intensive products.",
    icon: PenTool,
  },
  {
    title: "Impact",
    description:
      "Our work has a measurable impact on communities and the environment. By providing affordable technology to those in need, we are empowering individuals to achieve their goals and improve their quality of life.",
    icon: BarChart,
  },
] as const;

export const stats = [
  {
    label: "Laptops Donated",
    stat: 1000,
  },
  {
    label: "Countries Impacted",
    stat: 4,
  },
  {
    label: "New Partners",
    stat: 10,
  },
] as const;
