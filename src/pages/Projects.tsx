import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiFilter, FiSearch, FiEye, FiCheckCircle, FiCalendar, FiUsers, FiShoppingCart } from 'react-icons/fi'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const projects = [
    {
      id: 1,
      name: 'Charleston Alexander Diamonds',
      client: 'John Sabet',
      type: 'E-commerce',
      tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'HTML'],
      url: 'https://wherethediamondsare.com',
      description: 'A luxury diamond jewelry e-commerce platform featuring high-resolution product galleries, secure payment integration, and personalized shopping experience for premium customers.',
      role: 'Project Manager',
      duration: '3 months',
      status: 'completed',
      teamSize: 5,
      screenshot: '/assets/images/wherethediamondsare.png',
      metrics: {
        satisfaction: 95,
        onTime: true,
        budgetAdherence: 98
      },
      features: [
        'Custom Shopify theme development',
        'Advanced product filtering',
        'Secure payment gateways',
        'Mobile-responsive design',
        'SEO optimization'
      ]
    },
    {
      id: 2,
      name: 'Ashley Brooke Jewelry',
      client: 'Ashley Brooke',
      type: 'E-commerce',
      tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'React'],
      url: 'https://ashleybrookejewelry.com',
      description: 'Contemporary jewelry store with minimalist design, featuring curated collections, subscription options, and interactive product customization tools for modern consumers.',
      role: 'Project Manager',
      duration: '2.5 months',
      status: 'completed',
      teamSize: 4,
      screenshot: '/assets/images/ashleybrookejewelry.png',
      metrics: {
        satisfaction: 92,
        onTime: true,
        budgetAdherence: 95
      },
      features: [
        'Custom jewelry configurator',
        'Subscription model integration',
        'Instagram shop sync',
        'Advanced analytics dashboard',
        'Multi-currency support'
      ]
    },
    {
      id: 3,
      name: "Bernard's Jewelers",
      client: 'Brittany McKenzie',
      type: 'E-commerce',
      tech: ['Shopify', 'Liquid', 'JavaScript', 'Bootstrap', 'PHP'],
      url: 'https://bernardsjewelers.com',
      description: 'Family-owned jewelry retailer migrated to Shopify with enhanced inventory management, B2B wholesale portal, and legacy system integration for seamless operations.',
      role: 'Project Manager',
      duration: '4 months',
      status: 'completed',
      teamSize: 6,
      screenshot: '/assets/images/bernardsjewelers.png',
      metrics: {
        satisfaction: 97,
        onTime: true,
        budgetAdherence: 100
      },
      features: [
        'B2B wholesale portal',
        'Inventory management system',
        'Legacy system integration',
        'Custom reporting tools',
        'Multi-store management'
      ]
    },
    {
      id: 4,
      name: 'KB Jewelers',
      client: 'Koko',
      type: 'E-commerce',
      tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS3', 'jQuery'],
      url: 'https://kb-jewelers.com',
      description: 'Modern jewelry e-commerce solution with AI-powered recommendations, and comprehensive CRM integration for personalized customer journeys.',
      role: 'Project Manager',
      duration: '3.5 months',
      status: 'completed',
      teamSize: 5,
      screenshot: '/assets/images/kbjewelers.png',
      metrics: {
        satisfaction: 94,
        onTime: true,
        budgetAdherence: 96
      },
      features: [
        'AI product recommendations',
        'CRM integration',
        'Loyalty program',
        'Advanced search functionality'
      ]
    },

    {
  id: 5,
  name: 'D&D JEWELERS',
  client: 'DON SUKACH',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'HTML'],
  url: 'https://DDJEWELERS.COM',
  description: 'Premium jewelry e-commerce store with comprehensive collection showcasing diamonds, gold, and luxury accessories with intuitive navigation and secure checkout.',
  role: 'Project Manager',
  duration: '3 months',
  status: 'completed',
  teamSize: 4,
  screenshot: '/assets/images/ddjewelers.png',
  metrics: {
    satisfaction: 96,
    onTime: true,
    budgetAdherence: 97
  },
  features: [
    'Premium product galleries',
    'Secure payment processing',
    'Inventory management',
    'Mobile-responsive design'
  ]
},
{
  id: 6,
  name: 'Olinger Diamond Center',
  client: 'JAMI OLINGER',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
  url: 'https://olingerdiamond.com',
  description: 'Family-owned diamond center featuring certified diamonds, custom jewelry design services, and educational content about diamond quality and selection.',
  role: 'Project Manager',
  duration: '2.5 months',
  status: 'completed',
  teamSize: 4,
  screenshot: '/assets/images/olingerdiamond.png',
  metrics: {
    satisfaction: 95,
    onTime: true,
    budgetAdherence: 98
  },
  features: [
    'Diamond certification display',
    'Custom design request forms',
    'Educational content sections',
    'Appointment scheduling'
  ]
},
{
  id: 7,
  name: "Drake's Jewelry",
  client: 'Drake Miller',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'Bootstrap'],
  url: 'https://drakes-jewelry.com',
  description: 'Contemporary jewelry store specializing in modern designs with virtual try-on features and personalized consultation booking system.',
  role: 'Project Manager',
  duration: '3 months',
  status: 'completed',
  teamSize: 5,
  screenshot: '/assets/images/drakesjewelry.png',
  metrics: {
    satisfaction: 94,
    onTime: true,
    budgetAdherence: 95
  },
  features: [
    'Virtual try-on technology',
    'Consultation booking system',
    'Social media integration',
    'Customer review system'
  ]
},
{
  id: 8,
  name: 'Anthony\'s Jewelry',
  client: 'Alex Ethier',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS3'],
  url: 'https://anthonysgoldsmiths.com',
  description: 'Luxury goldsmith and jewelry store featuring handcrafted pieces, repair services, and heirloom restoration with detailed service descriptions.',
  role: 'Project Manager',
  duration: '3.5 months',
  status: 'completed',
  teamSize: 4,
  screenshot: '/assets/images/anthonysjewelry.png',
  metrics: {
    satisfaction: 97,
    onTime: true,
    budgetAdherence: 96
  },
  features: [
    'Service booking system',
    'Before/after gallery',
    'Heirloom restoration info',
    'Craftsmanship showcase'
  ]
},
{
  id: 9,
  name: 'Rudnick Jewelers',
  client: 'Paul Rudnick',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'jQuery'],
  url: 'https://rudnickjewelers.com',
  description: 'Established jewelry retailer with premium collections, layaway options, and comprehensive jewelry care guides for customer education.',
  role: 'Project Manager',
  duration: '4 months',
  status: 'completed',
  teamSize: 5,
  screenshot: '/assets/images/rudnickjewelers.png',
  metrics: {
    satisfaction: 95,
    onTime: true,
    budgetAdherence: 99
  },
  features: [
    'Layaway payment plans',
    'Jewelry care guides',
    'Collection curation',
    'Gift wrapping options'
  ]
},
{
  id: 10,
  name: 'FREEMAN JEWELERS (PA)',
  client: 'Elaine Smith',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
  url: 'https://freemanjewelerspa.com',
  description: 'Multi-generational jewelry store with anniversary collections, engraving services, and corporate gift program management system.',
  role: 'Project Manager',
  duration: '3 months',
  status: 'completed',
  teamSize: 4,
  screenshot: '/assets/images/freemanjewelers.png',
  metrics: {
    satisfaction: 96,
    onTime: true,
    budgetAdherence: 97
  },
  features: [
    'Engraving service portal',
    'Corporate gift programs',
    'Anniversary collections',
    'Local pickup options'
  ]
},
{
  id: 11,
  name: 'Mueller Jewelers',
  client: 'Gary',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'React'],
  url: 'https://muellerjewelers.com',
  description: 'Jewelry store specializing in watches and timepieces with brand authentication services and watch maintenance scheduling.',
  role: 'Project Manager',
  duration: '2.5 months',
  status: 'completed',
  teamSize: 4,
  screenshot: '/assets/images/muellerjewelers.png',
  metrics: {
    satisfaction: 94,
    onTime: true,
    budgetAdherence: 95
  },
  features: [
    'Watch authentication',
    'Maintenance scheduling',
    'Brand partnerships',
    'Watch customization'
  ]
},
{
  id: 12,
  name: 'CRIDER JEWELERS, INC (NORWALK, OH)',
  client: 'Jim Boling',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
  url: 'https://criderquality.com',
  description: 'Quality-focused jewelry store emphasizing craftsmanship, lifetime warranties, and community engagement with local event features.',
  role: 'Project Manager',
  duration: '3 months',
  status: 'completed',
  teamSize: 5,
  screenshot: '/assets/images/criderjewelers.png',
  metrics: {
    satisfaction: 98,
    onTime: true,
    budgetAdherence: 96
  },
  features: [
    'Lifetime warranty info',
    'Community events calendar',
    'Craftsmanship showcase',
    'Quality guarantee details'
  ]
},
{
  id: 13,
  name: 'DI\'AMORE FINE JEWELRY',
  client: 'Mondali Pandya',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS3'],
  url: 'https://diamorefinejewelers.com',
  description: 'Italian-inspired fine jewelry with romantic collections, proposal planning tools, and custom engagement ring design services.',
  role: 'Project Manager',
  duration: '4 months',
  status: 'completed',
  teamSize: 5,
  screenshot: '/assets/images/diamorejewelry.png',
  metrics: {
    satisfaction: 97,
    onTime: true,
    budgetAdherence: 98
  },
  features: [
    'Proposal planning tools',
    'Custom ring design',
    'Romantic collections',
    'Italian craftsmanship focus'
  ]
},
{
  id: 14,
  name: 'FISCHERS JEWELRY',
  client: 'Sarah',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'Bootstrap'],
  url: 'https://FISCHERSJEWELRYNOLA.COM',
  description: 'New Orleans-based jewelry store with local cultural themes, Mardi Gras collections, and regional shipping optimization.',
  role: 'Project Manager',
  duration: '3 months',
  status: 'completed',
  teamSize: 4,
  screenshot: '/assets/images/fischersjewelry.png',
  metrics: {
    satisfaction: 95,
    onTime: true,
    budgetAdherence: 94
  },
  features: [
    'Local cultural themes',
    'Mardi Gras collections',
    'Regional shipping',
    'Local artisan features'
  ]
},
{
  id: 15,
  name: 'Treasures Custom Jewelers',
  client: 'Blaze And Jessica',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'React'],
  url: 'https://treasuresforyou.com',
  description: 'Custom jewelry specialists with 3D design preview, material selection tools, and collaborative design process workflow.',
  role: 'Project Manager',
  duration: '4 months',
  status: 'completed',
  teamSize: 6,
  screenshot: '/assets/images/treasuresjewelers.png',
  metrics: {
    satisfaction: 96,
    onTime: true,
    budgetAdherence: 97
  },
  features: [
    '3D design preview',
    'Material selection tools',
    'Collaborative design process',
    'Progress tracking'
  ]
},
{
  id: 16,
  name: 'Main Street Diamonds',
  client: 'Rick',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
  url: 'https://mainstreetdiamonds.com',
  description: 'Local diamond retailer with educational content, diamond comparison tools, and bridal registry integration services.',
  role: 'Project Manager',
  duration: '3 months',
  status: 'completed',
  teamSize: 4,
  screenshot: '/assets/images/mainstreetdiamonds.png',
  metrics: {
    satisfaction: 95,
    onTime: true,
    budgetAdherence: 96
  },
  features: [
    'Diamond comparison tools',
    'Bridal registry integration',
    'Educational content',
    'Local pickup/delivery'
  ]
},
{
  id: 17,
  name: 'MARC ROBINSON JEWELERS',
  client: 'MR. PARVEZ M MALIM',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
  url: 'https://marcrobinsonjeweler.com',
  description: 'High-end jewelry store with luxury brand partnerships, private viewing appointments, and VIP client management system.',
  role: 'Project Manager',
  duration: '4 months',
  status: 'completed',
  teamSize: 5,
  screenshot: '/assets/images/marcrobinson.png',
  metrics: {
    satisfaction: 98,
    onTime: true,
    budgetAdherence: 99
  },
  features: [
    'Private viewing appointments',
    'VIP client management',
    'Luxury brand partnerships',
    'Exclusive collections'
  ]
},
{
  id: 18,
  name: 'GLASSCOCK JEWELRY CORNER, INC.(MO)',
  client: 'Mr. Barry Glasscock',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS3'],
  url: 'https://glasscockjewelry.com',
  description: 'Family jewelry business with heirloom services, estate jewelry collections, and jewelry insurance information portal.',
  role: 'Project Manager',
  duration: '3.5 months',
  status: 'completed',
  teamSize: 4,
  screenshot: '/assets/images/glasscockjewelry.png',
  metrics: {
    satisfaction: 97,
    onTime: true,
    budgetAdherence: 96
  },
  features: [
    'Heirloom services',
    'Estate jewelry collections',
    'Insurance information',
    'Family business history'
  ]
},
{
  id: 19,
  name: 'WETZEL & TRUEX JEWELERS',
  client: 'Mark',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'Bootstrap'],
  url: 'https://WETZELANDTRUEXJEWELERS.COM',
  description: 'Partnership jewelry store with dual-brand collections, corporate account management, and bulk order processing system.',
  role: 'Project Manager',
  duration: '4 months',
  status: 'completed',
  teamSize: 5,
  screenshot: '/assets/images/wetzeltruex.png',
  metrics: {
    satisfaction: 96,
    onTime: true,
    budgetAdherence: 97
  },
  features: [
    'Corporate account management',
    'Bulk order processing',
    'Dual-brand collections',
    'Partnership showcases'
  ]
},
{
  id: 20,
  name: 'North Country Gold and Silver',
  client: 'Scott',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'jQuery'],
  url: 'https://northcountrygoldandsilver.com',
  description: 'Precious metals specialist with real-time pricing, buyback programs, and investment jewelry collections.',
  role: 'Project Manager',
  duration: '3 months',
  status: 'completed',
  teamSize: 4,
  screenshot: '/assets/images/northcountry.png',
  metrics: {
    satisfaction: 95,
    onTime: true,
    budgetAdherence: 94
  },
  features: [
    'Real-time metal pricing',
    'Buyback programs',
    'Investment collections',
    'Purity verification'
  ]
},
{
  id: 21,
  name: 'MORLYNS FINE JEWELRY GIFTS AND ANTIQUES',
  client: 'Ann Glasscock',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'React'],
  url: 'https://morlynsjewelry.com',
  description: 'Combined jewelry and antiques store with vintage collections, restoration services, and historical item documentation.',
  role: 'Project Manager',
  duration: '4 months',
  status: 'completed',
  teamSize: 5,
  screenshot: '/assets/images/morlyns.png',
  metrics: {
    satisfaction: 96,
    onTime: true,
    budgetAdherence: 97
  },
  features: [
    'Vintage collections',
    'Restoration services',
    'Historical documentation',
    'Antique authentication'
  ]
},
{
  id: 22,
  name: 'AMAN\'S JEWELERS',
  client: 'Aman Ullah',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
  url: 'https://amansjewelry.com',
  description: 'Cultural jewelry specialist with traditional designs, religious jewelry collections, and cultural event coordination.',
  role: 'Project Manager',
  duration: '3 months',
  status: 'completed',
  teamSize: 4,
  screenshot: '/assets/images/amansjewelers.png',
  metrics: {
    satisfaction: 95,
    onTime: true,
    budgetAdherence: 96
  },
  features: [
    'Traditional designs',
    'Religious collections',
    'Cultural event coordination',
    'Custom cultural pieces'
  ]
},
{
  id: 23,
  name: 'THE JEWELRY DISTRICT',
  client: 'Melven Silva',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
  url: 'https://lasvegasjewelrydistrict.com',
  description: 'Las Vegas jewelry marketplace with multiple vendor integration, tourism-focused content, and showroom appointment system.',
  role: 'Project Manager',
  duration: '4 months',
  status: 'completed',
  teamSize: 6,
  screenshot: '/assets/images/jewelrydistrict.png',
  metrics: {
    satisfaction: 94,
    onTime: true,
    budgetAdherence: 95
  },
  features: [
    'Multiple vendor integration',
    'Tourism-focused content',
    'Showroom appointments',
    'Vegas experience packages'
  ]
},
{
  id: 24,
  name: 'Ciccarelli Jewelers',
  client: 'Brett Ciccarelli',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'Bootstrap'],
  url: 'https://ciccarellijewelers.com',
  description: 'Italian-American jewelry store with family heritage showcase, custom crest jewelry, and generational gift collections.',
  role: 'Project Manager',
  duration: '3.5 months',
  status: 'completed',
  teamSize: 4,
  screenshot: '/assets/images/ciccarelli.png',
  metrics: {
    satisfaction: 97,
    onTime: true,
    budgetAdherence: 98
  },
  features: [
    'Family heritage showcase',
    'Custom crest jewelry',
    'Generational gifts',
    'Italian-American designs'
  ]
},
{
  id: 25,
  name: 'CRAWFORD\'S JEWELERS',
  client: 'DELANE',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS3'],
  url: 'https://CRAWFORDSJEWELERS.COM',
  description: 'Established jeweler with anniversary tracking, personalized reminder system, and milestone celebration collections.',
  role: 'Project Manager',
  duration: '3 months',
  status: 'completed',
  teamSize: 4,
  screenshot: '/assets/images/crawfords.png',
  metrics: {
    satisfaction: 96,
    onTime: true,
    budgetAdherence: 95
  },
  features: [
    'Anniversary tracking',
    'Personalized reminders',
    'Milestone collections',
    'Celebration packages'
  ]
},
{
  id: 26,
  name: 'John Greenan & Sons',
  client: 'Damon',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'React'],
  url: 'https://greenanjeweler.com',
  description: 'Multi-generational family business with apprenticeship programs, custom tool showcases, and jewelry-making workshops.',
  role: 'Project Manager',
  duration: '4 months',
  status: 'completed',
  teamSize: 5,
  screenshot: '/assets/images/greenan.png',
  metrics: {
    satisfaction: 98,
    onTime: true,
    budgetAdherence: 97
  },
  features: [
    'Apprenticeship programs',
    'Tool showcases',
    'Workshop schedules',
    'Family legacy content'
  ]
},
{
  id: 27,
  name: 'Westgate Jewelers',
  client: 'Billie Jo Zechman',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
  url: 'https://westgatejewelerspa.com',
  description: 'Community-focused jewelry store with local artist features, charity partnerships, and community event sponsorships.',
  role: 'Project Manager',
  duration: '3 months',
  status: 'completed',
  teamSize: 4,
  screenshot: '/assets/images/westgate.png',
  metrics: {
    satisfaction: 95,
    onTime: true,
    budgetAdherence: 96
  },
  features: [
    'Local artist features',
    'Charity partnerships',
    'Event sponsorships',
    'Community focus'
  ]
},
{
  id: 28,
  name: 'Green Brothers Jewelers',
  client: 'Allen/Jamie',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
  url: 'https://greenbrothersjewelers.com',
  description: 'Brother-owned business with collaborative design process, sibling gift collections, and family business insights.',
  role: 'Project Manager',
  duration: '3.5 months',
  status: 'completed',
  teamSize: 4,
  screenshot: '/assets/images/greenbrothers.png',
  metrics: {
    satisfaction: 96,
    onTime: true,
    budgetAdherence: 97
  },
  features: [
    'Collaborative design process',
    'Sibling gift collections',
    'Family business insights',
    'Brother partnership focus'
  ]
},
{
  id: 29,
  name: 'Rinehart Brothers Jewelers',
  client: 'Justin',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'Bootstrap'],
  url: 'https://rinehartbrothers.com',
  description: 'Agricultural community-focused jewelry with rustic designs, farm-themed collections, and rural delivery optimization.',
  role: 'Project Manager',
  duration: '3 months',
  status: 'completed',
  teamSize: 4,
  screenshot: '/assets/images/rinehart.png',
  metrics: {
    satisfaction: 94,
    onTime: true,
    budgetAdherence: 95
  },
  features: [
    'Rustic designs',
    'Farm-themed collections',
    'Rural delivery',
    'Agricultural community focus'
  ]
},
{
  id: 30,
  name: 'Nederland Jewelers',
  client: 'Jason Murphy',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'React'],
  url: 'https://nederland-jewelers.com',
  description: 'European-inspired jewelry with Dutch design influences, windmill-themed pieces, and European shipping optimization.',
  role: 'Project Manager',
  duration: '4 months',
  status: 'completed',
  teamSize: 5,
  screenshot: '/assets/images/nederland.png',
  metrics: {
    satisfaction: 96,
    onTime: true,
    budgetAdherence: 98
  },
  features: [
    'Dutch design influences',
    'Windmill-themed pieces',
    'European shipping',
    'European craftsmanship'
  ]
},
{
  id: 31,
  name: 'Bluestone Jewelry',
  client: 'Father Marc & Son Aaron',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS3'],
  url: 'https://bluestonetahoe.com',
  description: 'Lake Tahoe inspired jewelry with natural stone elements, outdoor adventure themes, and seasonal collection rotations.',
  role: 'Project Manager',
  duration: '3.5 months',
  status: 'completed',
  teamSize: 4,
  screenshot: '/assets/images/bluestone.png',
  metrics: {
    satisfaction: 95,
    onTime: true,
    budgetAdherence: 96
  },
  features: [
    'Natural stone elements',
    'Outdoor adventure themes',
    'Seasonal collections',
    'Tahoe-inspired designs'
  ]
},
{
  id: 32,
  name: 'White\'s Fine Jewelry',
  client: 'Jann',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
  url: 'https://whitesfinejewelry.com',
  description: 'Minimalist jewelry designs with clean aesthetics, monochromatic collections, and simple elegance focus.',
  role: 'Project Manager',
  duration: '3 months',
  status: 'completed',
  teamSize: 4,
  screenshot: '/assets/images/whites.png',
  metrics: {
    satisfaction: 97,
    onTime: true,
    budgetAdherence: 96
  },
  features: [
    'Minimalist designs',
    'Monochromatic collections',
    'Clean aesthetics',
    'Simple elegance'
  ]
},
{
  id: 33,
  name: 'Carol Klein Fine Jewelry',
  client: 'Jon Shmagin',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
  url: 'https://ckfj.com',
  description: 'Designer jewelry boutique with exclusive designer collaborations, limited edition releases, and collector-focused features.',
  role: 'Project Manager',
  duration: '4 months',
  status: 'completed',
  teamSize: 5,
  screenshot: '/assets/images/carolklein.png',
  metrics: {
    satisfaction: 98,
    onTime: true,
    budgetAdherence: 97
  },
  features: [
    'Designer collaborations',
    'Limited edition releases',
    'Collector features',
    'Exclusive designs'
  ]
},
{
  id: 34,
  name: 'A Bryan\'s Jewelers',
  client: 'Heather',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'Bootstrap'],
  url: 'https://abryans.com',
  description: 'Award-winning jewelry store with competition pieces, design award showcases, and industry recognition highlights.',
  role: 'Project Manager',
  duration: '3.5 months',
  status: 'completed',
  teamSize: 4,
  screenshot: '/assets/images/abryans.png',
  metrics: {
    satisfaction: 96,
    onTime: true,
    budgetAdherence: 98
  },
  features: [
    'Competition pieces',
    'Design award showcases',
    'Industry recognition',
    'Award-winning designs'
  ]
},
{
  id: 35,
  name: 'Rocky Point Jewelers',
  client: 'Anthony & Jessi',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'React'],
  url: 'https://rockypointjewelers.com',
  description: 'Coastal-inspired jewelry with ocean themes, beach wedding collections, and vacation destination jewelry focus.',
  role: 'Project Manager',
  duration: '3 months',
  status: 'completed',
  teamSize: 4,
  screenshot: '/assets/images/rockypoint.png',
  metrics: {
    satisfaction: 95,
    onTime: true,
    budgetAdherence: 94
  },
  features: [
    'Ocean themes',
    'Beach wedding collections',
    'Vacation destination focus',
    'Coastal designs'
  ]
},
{
  id: 36,
  name: 'Diamonds & Gold Jewelers',
  client: 'Demeturis',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS3'],
  url: 'https://aieche.com',
  description: 'AI-enhanced jewelry store with smart recommendations, predictive trends, and automated personalization features.',
  role: 'Project Co-Ordinator',
  duration: '4 months',
  status: 'completed',
  teamSize: 5,
  screenshot: '/assets/images/diamondsgold.png',
  metrics: {
    satisfaction: 94,
    onTime: true,
    budgetAdherence: 95
  },
  features: [
    'AI recommendations',
    'Predictive trends',
    'Automated personalization',
    'Smart search'
  ]
},
{
  id: 37,
  name: 'Piper Diamond Co.',
  client: 'Travis Piper',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
  url: 'https://piperdiamondco.com',
  description: 'Diamond specialty company with advanced diamond search, certification verification, and diamond education portal.',
  role: 'Project Co-Ordinator',
  duration: '3.5 months',
  status: 'completed',
  teamSize: 4,
  screenshot: '/assets/images/piperdiamond.png',
  metrics: {
    satisfaction: 96,
    onTime: true,
    budgetAdherence: 97
  },
  features: [
    'Advanced diamond search',
    'Certification verification',
    'Diamond education',
    'Specialty focus'
  ]
},
{
  id: 38,
  name: 'Pharaoh\'s Jewelers',
  client: 'Isabel Salib',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
  url: 'https://pharaohsjewelers.com',
  description: 'Egyptian-themed jewelry with hieroglyphic designs, ancient symbolism, and historical replica collections.',
  role: 'Project Co-Ordinator',
  duration: '3 months',
  status: 'completed',
  teamSize: 4,
  screenshot: '/assets/images/pharaohs.png',
  metrics: {
    satisfaction: 95,
    onTime: true,
    budgetAdherence: 94
  },
  features: [
    'Hieroglyphic designs',
    'Ancient symbolism',
    'Historical replicas',
    'Egyptian themes'
  ]
},
{
  id: 39,
  name: 'JOHN FISH JEWELERS',
  client: 'JOHN FISH',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'Bootstrap'],
  url: 'https://johnfishjewelers.vegas',
  description: 'Las Vegas entertainment district jewelry with show themes, performer collaborations, and entertainment industry focus.',
  role: 'Project Co-Ordinator',
  duration: '4 months',
  status: 'completed',
  teamSize: 5,
  screenshot: '/assets/images/johnfish.png',
  metrics: {
    satisfaction: 94,
    onTime: true,
    budgetAdherence: 95
  },
  features: [
    'Show themes',
    'Performer collaborations',
    'Entertainment focus',
    'Vegas entertainment district'
  ]
},
{
  id: 40,
  name: 'Andrews Jewelers',
  client: 'Andy',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'React'],
  url: 'https://andrewsjewelers.com',
  description: 'Modern jewelry store with tech integration, AR try-on features, and digital gift card systems.',
  role: 'Project Co-Ordinator',
  duration: '3.5 months',
  status: 'completed',
  teamSize: 4,
  screenshot: '/assets/images/andrews.png',
  metrics: {
    satisfaction: 96,
    onTime: true,
    budgetAdherence: 97
  },
  features: [
    'AR try-on features',
    'Digital gift cards',
    'Tech integration',
    'Modern retail solutions'
  ]
},
{
  id: 41,
  name: 'CARTER JEWELERS (JACKSON, MS)',
  client: 'Jay Lake',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS3'],
  url: 'https://carterdiamonds.com',
  description: 'Southern jewelry specialist with regional designs, hospitality-focused collections, and Southern charm aesthetics.',
  role: 'Project Co-Ordinator',
  duration: '3 months',
  status: 'completed',
  teamSize: 4,
  screenshot: '/assets/images/carterjewelers.png',
  metrics: {
    satisfaction: 95,
    onTime: true,
    budgetAdherence: 96
  },
  features: [
    'Regional designs',
    'Southern charm aesthetics',
    'Hospitality collections',
    'Regional focus'
  ]
},
{
  id: 42,
  name: 'S & S Diamonds & Fine Jewelry',
  client: 'Ms.Jae C. Lehew',
  type: 'E-commerce',
  tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
  url: 'https://sandsdiamonds.com',
  description: 'Partnership jewelry business with shared collections, co-designed pieces, and partnership story features.',
  role: 'Project Co-Ordinator',
  duration: '4 months',
  status: 'completed',
  teamSize: 5,
  screenshot: '/assets/images/ssdiamonds.png',
  metrics: {
    satisfaction: 97,
    onTime: true,
    budgetAdherence: 98
  },
  features: [
    'Shared collections',
    'Co-designed pieces',
    'Partnership stories',
    'Collaborative business'
  ]
}

  ]

  const categories = ['all', 'e-commerce', 'web-app', 'dashboard', 'mobile']

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || 
      project.type.toLowerCase().includes(selectedCategory)
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 card-hover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Project Image - FIXED EXAMPLE */}
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={project.screenshot}  // ← This uses the project's specific screenshot
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Fallback if image doesn't load */}
          {!project.screenshot && (
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
              <FiShoppingCart className="text-6xl text-primary-500" />
            </div>
          )}

          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              project.status === 'completed' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </span>
          </div>

          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-black/70 flex items-center justify-center transition-opacity"
          >
            <div className="text-center">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <FiExternalLink className="mr-2" />
                Visit Live Site
              </a>
            </div>
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{project.name}</h3>
              <p className="text-gray-600 text-sm">Client: {project.client}</p>
            </div>
            <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
              {project.type}
            </span>
          </div>

          <p className="text-gray-600 mb-4">{project.description}</p>

          {/* Tech Stack */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <FiCalendar className="text-gray-400 mr-2" />
              <span className="text-sm text-gray-600">{project.duration}</span>
            </div>
            <div className="flex items-center">
              <FiUsers className="text-gray-400 mr-2" />
              <span className="text-sm text-gray-600">Team: {project.teamSize}</span>
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h4 className="font-bold text-gray-700 mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {project.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-600">
                  <FiCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics */}
          <div className="border-t pt-4">
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="text-lg font-bold text-green-600">{project.metrics.satisfaction}%</div>
                <div className="text-xs text-gray-500">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className={`text-lg font-bold ${project.metrics.onTime ? 'text-green-600' : 'text-red-600'}`}>
                  {project.metrics.onTime ? 'On Time' : 'Delayed'}
                </div>
                <div className="text-xs text-gray-500">Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-600">{project.metrics.budgetAdherence}%</div>
                <div className="text-xs text-gray-500">Budget</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-6">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-primary py-2 text-center"
            >
              <FiExternalLink className="inline mr-2" />
              Live Site
            </a>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <FiEye />
            </button>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Showcasing successful e-commerce solutions and web projects delivered with precision and excellence
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-primary-600">{projects.length}</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-accent-500">100%</div>
                <div className="text-gray-600">On-time Delivery</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-green-500">95%</div>
                <div className="text-gray-600">Avg. Satisfaction</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-purple-500">20+</div>
                <div className="text-gray-500">Team Members</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <FiFilter className="text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="relative w-full md:w-64">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-600 mb-2">No projects found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* Project Methodology */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white"
          >
            <h2 className="text-2xl font-bold mb-4">My Project Management Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold mb-2">Planning & Analysis</h3>
                <p className="text-sm opacity-90">Requirement gathering, resource allocation, and timeline planning using Agile methodologies.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Execution & Monitoring</h3>
                <p className="text-sm opacity-90">Regular progress tracking, quality assurance, and client communication throughout development.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Delivery & Support</h3>
                <p className="text-sm opacity-90">Thorough testing, client training, and post-launch support for optimal performance.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Projects