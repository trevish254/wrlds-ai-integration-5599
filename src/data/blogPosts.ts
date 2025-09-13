export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: ContentSection[];
  date: string;
  author: string;
  category: string;
  imageUrl?: string;
  keywords?: string[];
  metaDescription?: string;
}

export interface ContentSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'list' | 'quote' | 'table' | 'stats' | 'chart' | 'icon-list' | 'bibliography';
  content?: string;
  items?: string[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  statsData?: {
    value: string;
    label: string;
    icon?: string;
  }[];
  chartData?: {
    title: string;
    data: { name: string; value: number; }[];
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'African Innovation: Building Digital Solutions for Local Growth',
    slug: 'african-innovation-digital-solutions-local-growth',
    excerpt: 'Discover how Aventis is transforming African businesses through custom digital solutions, from web development to AI integration, designed specifically for local market conditions.',
    date: 'October 15, 2025',
    author: 'Aventis',
    category: 'Digital Solutions',
    imageUrl: '/lovable-uploads/078a129e-0f98-4d91-af61-873687db1a04.png',
    keywords: [
      'african digital transformation',
      'web development africa',
      'digital solutions africa',
      'business innovation',
      'african technology',
      'local market solutions',
      'digital growth africa',
      'tech innovation',
      'business development'
    ],
    metaDescription: 'Learn how Aventis delivers digital transformation solutions designed for African businesses, from web development to AI integration.',
    content: [
      {
        type: 'paragraph',
        content: 'Africa\'s digital landscape is rapidly evolving, with businesses across the continent recognizing the transformative power of technology. At Aventis, we\'ve witnessed firsthand how the right digital solutions can unlock unprecedented growth opportunities for African enterprises.'
      },
      {
        type: 'stats',
        statsData: [
          {
            value: '70%',
            label: 'of African businesses lack proper digital presence',
            icon: 'TrendingUp'
          },
          {
            value: '2.3T',
            label: 'USD projected African GDP by 2030',
            icon: 'DollarSign'
          },
          {
            value: '85%',
            label: 'faster time-to-market with digital solutions',
            icon: 'Clock'
          }
        ]
      },
      {
        type: 'heading',
        content: 'The African Digital Opportunity'
      },
      {
        type: 'paragraph',
        content: 'The opportunity for digital transformation in Africa is immense. With a growing middle class, increasing internet penetration, and a young, tech-savvy population, the conditions are perfect for businesses to leverage digital solutions for exponential growth.'
      },
      {
        type: 'list',
        items: [
          'Web applications tailored to local bandwidth conditions',
          'Mobile-first development for smartphone-dominant markets',
          'AI integration that understands local languages and contexts',
          'SaaS platforms built for African business models',
          'Digital marketing strategies that resonate with local audiences'
        ]
      },
      {
        type: 'heading',
        content: 'Success Stories from the Field'
      },
      {
        type: 'paragraph',
        content: 'Our work with African startups and established businesses has shown remarkable results. From fintech platforms that serve unbanked populations to e-commerce solutions that connect rural producers with urban markets, technology is breaking down barriers and creating new opportunities.'
      }
    ]
  },
  {
    id: '2',
    title: 'The Power of Creative Storytelling in African Business',
    slug: 'power-creative-storytelling-african-business',
    excerpt: 'Explore how compelling brand narratives and creative media can transform African businesses, building authentic connections with audiences and driving meaningful engagement.',
    date: 'September 28, 2025',
    author: 'Aventis',
    category: 'Creative Media',
    imageUrl: '/lovable-uploads/b862d5ae-6abb-44da-84f0-00a222f62906.png',
    keywords: [
      'african branding',
      'creative media africa',
      'brand storytelling',
      'visual identity africa',
      'creative content',
      'brand development',
      'african marketing',
      'visual storytelling',
      'content creation'
    ],
    metaDescription: 'Discover how creative storytelling and compelling brand narratives drive business success across African markets.',
    content: [
      {
        type: 'paragraph',
        content: 'In the diverse and vibrant markets of Africa, storytelling has always been at the heart of communication. Today\'s successful businesses understand that authentic brand narratives, supported by compelling creative media, are essential for building lasting connections with their audiences.'
      },
      {
        type: 'heading',
        content: 'Beyond Traditional Marketing'
      },
      {
        type: 'paragraph',
        content: 'African consumers are increasingly sophisticated, seeking brands that understand their values, aspirations, and cultural contexts. Generic marketing approaches fall short – what\'s needed is creative content that speaks directly to local experiences while maintaining global quality standards.'
      },
      {
        type: 'list',
        items: [
          'Brand identity that reflects authentic African values',
          'Photography and videography that celebrates local culture',
          'Event experiences that bring communities together',
          'Interior design that creates welcoming, culturally relevant spaces',
          'Digital content that resonates across diverse African markets'
        ]
      },
      {
        type: 'heading',
        content: 'The Aventis Creative Approach'
      },
      {
        type: 'paragraph',
        content: 'Our Creative Media division works closely with clients to develop brand stories that are both authentic and aspirational. We combine world-class creative expertise with deep understanding of African markets to create content that drives real business results.'
      }
    ]
  },
  {
    id: '3',
    title: 'Building Sustainable Ventures: From Ideas to Impact in Africa',
    slug: 'building-sustainable-ventures-ideas-impact-africa',
    excerpt: 'Learn how Aventis transforms innovative ideas into sustainable business ventures, creating lasting value for communities across Africa through strategic business development.',
    date: 'September 10, 2025',
    author: 'Aventis',
    category: 'Ventures',
    imageUrl: '/lovable-uploads/5ca619e6-2139-4879-9b3c-94777ab85e2a.png',
    keywords: [
      'african ventures',
      'business development africa',
      'sustainable business',
      'innovation ventures',
      'agritech africa',
      'furniture manufacturing',
      'lifestyle products',
      'business incubation',
      'african entrepreneurship'
    ],
    metaDescription: 'Discover how Aventis builds sustainable ventures that create lasting impact across African communities and markets.',
    content: [
      {
        type: 'paragraph',
        content: 'Africa\'s entrepreneurial spirit is legendary, but transforming great ideas into successful, sustainable ventures requires more than passion – it requires strategy, execution, and deep market understanding. Aventis Ventures bridges this gap.'
      },
      {
        type: 'heading',
        content: 'Identifying Market Opportunities'
      },
      {
        type: 'paragraph',
        content: 'Our venture development process begins with thorough market research and opportunity identification. We look for gaps where innovative solutions can create real value while building sustainable business models.'
      },
      {
        type: 'list',
        items: [
          'Affordable furniture and carpentry serving growing urban populations',
          'Lifestyle products that celebrate African creativity and craftsmanship',
          'Cyber kiosks bringing digital services to underserved communities',
          'AgriTech platforms connecting farmers with markets and resources',
          'Decor and design solutions for Africa\'s expanding hospitality sector'
        ]
      },
      {
        type: 'heading',
        content: 'From Concept to Market Success'
      },
      {
        type: 'paragraph',
        content: 'Each venture we develop follows our proven methodology: market validation, business model design, prototype development, and scaled implementation. This systematic approach minimizes risk while maximizing impact potential.'
      }
    ]
  },
  {
    id: '4',
    title: 'The Future of African Innovation: A Multi-Division Approach',
    slug: 'future-african-innovation-multi-division-approach',
    excerpt: 'Explore how Aventis\'s integrated approach combining Digital Solutions, Creative Media, and Ventures creates comprehensive solutions for African business challenges.',
    date: 'August 25, 2025',
    author: 'Aventis',
    category: 'Innovation',
    imageUrl: '/lovable-uploads/e2f944f7-0d40-4c33-8ce1-30ef7cd3a4b0.png',
    keywords: [
      'innovation hub africa',
      'integrated solutions',
      'digital transformation',
      'business innovation',
      'african growth',
      'technology solutions',
      'creative solutions',
      'venture development'
    ],
    metaDescription: 'Learn about Aventis\'s unique multi-division approach to solving complex business challenges across African markets.',
    content: [
      {
        type: 'paragraph',
        content: 'The challenges facing African businesses today are complex and interconnected. Success requires more than just good technology or great creative content – it demands an integrated approach that addresses multiple dimensions simultaneously.'
      },
      {
        type: 'heading',
        content: 'Why Integration Matters'
      },
      {
        type: 'paragraph',
        content: 'At Aventis, we\'ve learned that the most successful business transformations happen when digital solutions, creative excellence, and business development work in harmony. Our three-division structure isn\'t just organizational – it\'s strategic.'
      },
      {
        type: 'list',
        items: [
          'Digital Solutions provide the technological foundation for growth',
          'Creative Media ensures authentic connection with target audiences',
          'Ventures create sustainable business models for long-term success',
          'Integration across divisions maximizes impact and efficiency',
          'Comprehensive support from ideation to market success'
        ]
      },
      {
        type: 'heading',
        content: 'Real-World Applications'
      },
      {
        type: 'paragraph',
        content: 'This integrated approach has powered successful transformations across industries – from fintech startups that needed both technical platforms and compelling brand stories, to manufacturing companies seeking to modernize operations while developing new product lines.'
      }
    ]
  }
];