import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface FeatureCard {
  title: string;
  description: string;
  icon: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface PortfolioItem {
  title: string;
  category: string;
  summary: string;
  impact: string;
  details: string;
}

interface TechGroup {
  group: string;
  tools: string[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomePage {
  selectedPortfolioCategory = 'All';
  selectedProject: PortfolioItem | null = null;

  readonly heroStats = [
    { value: '15K+', label: 'Services Completed' },
    { value: '98%', label: 'Happy Customers' },
    { value: '120+', label: 'Expert Technicians' },
    { value: '100+', label: 'Areas Covered' }
  ];

  readonly services: FeatureCard[] = [
    { icon: '⚡', title: 'Electrical Work', description: 'Wiring, fault finding, LED & lighting installations, safety checks.' },
    { icon: '💧', title: 'Plumbing Services', description: 'Leak repairs, pipe replacements, bathroom & kitchen plumbing.' },
    { icon: '❄️', title: 'AC Repair & Installation', description: 'Split/Window AC servicing, installation and gas top-up.' },
    { icon: '🧊', title: 'Fridge Repair', description: 'Residential and commercial fridge diagnostics and repairs.' },
    { icon: '🌀', title: 'Washing Machine Repair', description: 'Front/Top load servicing, motor and drum repairs.' },
    { icon: '💧', title: 'RO Service', description: 'Filter replacement, membrane checks and full system sanitization.' },
    { icon: '🎨', title: 'Painting Work', description: 'Interior & exterior painting with premium finishes.' },
    { icon: '🌧️', title: 'Waterproofing', description: 'Terrace, bathroom and structural waterproofing solutions.' },
    { icon: '🔧', title: 'Fabrication Work', description: 'Custom metal fabrication, grills, gates and structural repair.' },
    { icon: '🪚', title: 'Carpenter Work', description: 'Cabinetry, repair, custom woodwork and furniture fixing.' },
    { icon: '📹', title: 'CCTV Installation', description: 'Surveillance systems, DVR/NVR and remote monitoring setup.' },
    { icon: '🏢', title: 'Commercial Maintenance', description: 'Facility maintenance packages for offices and retail spaces.' }
  ];

  readonly techStack: TechGroup[] = [
    { group: 'Frontend', tools: ['React', 'Next.js', 'Vue.js'] },
    { group: 'Backend', tools: ['Node.js', 'Laravel', 'PHP', 'Python'] },
    { group: 'Database', tools: ['MySQL', 'PostgreSQL', 'MongoDB'] },
    { group: 'Cloud', tools: ['AWS', 'Azure', 'Google Cloud'] }
  ];

  readonly testimonials: Testimonial[] = [
    {
      quote: 'Fast, reliable and professional — the technician fixed our AC the same day. Highly recommended!',
      author: 'Rohit Mehta',
      role: 'Homeowner',
      company: ''
    },
    {
      quote: 'The commercial maintenance package keeps our office running smoothly. Very professional team.',
      author: 'Priya Sharma',
      role: 'Operations Manager',
      company: 'GreenLeaf Logistics'
    },
    {
      quote: 'Transparent pricing and verified technicians. We use Ishvanta for all our property services.',
      author: 'Karan Desai',
      role: 'Property Owner',
      company: ''
    }
  ];

  readonly portfolioCategories = ['All', 'Websites', 'Mobile Apps', 'Software', 'E-commerce'];

  readonly portfolio: PortfolioItem[] = [
    {
      title: 'Global B2B Platform',
      category: 'Software',
      summary: 'Enterprise SaaS with secure workflows, analytics, and automation portals.',
      impact: '35% faster operational launch',
      details: 'A cloud-native platform built with modular APIs, role-based controls, and real-time reporting for enterprise teams.'
    },
    {
      title: 'Retail Commerce Experience',
      category: 'E-commerce',
      summary: 'Conversion-focused storefront with personalization and rapid checkout.',
      impact: '+28% cart conversion',
      details: 'A modern commerce system with headless storefront architecture, real-time catalog sync, and UX designed for high-value shoppers.'
    },
    {
      title: 'Mobile Operations Suite',
      category: 'Mobile Apps',
      summary: 'Executive mobile dashboard and field workflow app with offline support.',
      impact: '92% adoption rate',
      details: 'A cross-platform mobile app delivering task automation, intelligent alerts, and performance telemetry for distributed teams.'
    },
    {
      title: 'Brand Website Redesign',
      category: 'Websites',
      summary: 'Premium brand presence with engaging motion and enterprise storytelling.',
      impact: '52% longer session time',
      details: 'A redesigned marketing site with SEO-first content, fast loading, and a polished visual system for global audiences.'
    }
  ];

  readonly industries = [
    {
      title: 'Healthcare',
      description: 'HIPAA-compliant healthcare systems, patient portals, and telemedicine platforms.'
    },
    {
      title: 'FinTech',
      description: 'Secure payment gateways, banking solutions, and financial automation.'
    },
    {
      title: 'E-Commerce',
      description: 'Scalable commerce solutions designed for growth and conversions.'
    },
    {
      title: 'Education',
      description: 'Learning management systems and digital education platforms.'
    },
    {
      title: 'Manufacturing',
      description: 'ERP systems, workflow automation, and industrial software.'
    },
    {
      title: 'Logistics',
      description: 'Supply chain visibility, fleet tracking, and logistics management.'
    }
  ];

  readonly whyChooseUs = [
    {
      title: 'Verified Technicians',
      description: 'Certified, background-checked technicians trained for safety and quality.'
    },
    {
      title: 'Transparent Pricing',
      description: 'Clear estimates with no hidden fees — fair and competitive rates.'
    },
    {
      title: 'Quick Response',
      description: 'Rapid dispatch and same-day service options for urgent needs.'
    }
  ];

  readonly uspHighlights = [
    { icon: '📞', title: 'Single Contact', description: 'One call is all it takes to unlock all maintenance services.' },
    { icon: '🛠️', title: 'Cross-Discipline', description: 'Electrical, plumbing, HVAC, painting, fabrication and more under one roof.' },
    { icon: '⏱️', title: 'Fast Scheduling', description: 'Rapid service planning with local teams available across Gujarat.' },
    { icon: '✅', title: 'Quality Guarantee', description: 'Consistent workmanship backed by dedicated post-service checks.' }
  ];

  readonly moreReasons = [
    { title: 'Quality Assurance', description: 'Service warranties and quality checks after every visit.' },
    { title: 'Customer Satisfaction', description: 'High NPS and long-term repeat clients.' },
    { title: 'Professional Management', description: 'Coordinated service with clear communication and timelines.' }
  ];

  readonly caseStudies = [
    {
      title: 'Global B2B Platform',
      result: '35% faster operational launch'
    },
    {
      title: 'Retail Commerce Experience',
      result: '+28% cart conversion'
    },
    {
      title: 'Mobile Operations Suite',
      result: '92% adoption rate'
    },
    {
      title: 'Brand Website Redesign',
      result: '52% longer session time'
    }
  ];

  readonly faqs = [
    {
      question: 'What industries do you serve?',
      answer: 'Healthcare, FinTech, Education, E-Commerce, Manufacturing and more.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we provide long-term maintenance and support services.'
    },
    {
      question: 'Can you build custom software?',
      answer: 'Absolutely. We specialize in custom software and enterprise solutions.'
    }
  ];

  readonly processSteps = [
    'Requirement Analysis',
    'Planning',
    'Design',
    'Development',
    'Testing',
    'Deployment',
    'Support'
  ];

  // Counters and carousel
  testimonialIndex = 0;
  testimonialInterval: any;

  // Service areas and contact model
  readonly serviceAreas = ['Vadodara', 'Anand', 'Bharuch', 'Surat', 'Ahmedabad', 'Gandhinagar'];

  quote = { name: '', mobile: '', service: '', location: '', message: '' };

  spotlightStyle = { '--spotlight-x': '50%', '--spotlight-y': '50%' };
  tiltStyle = { transform: 'perspective(900px) rotateX(0deg) rotateY(0deg)' };

  @HostListener('document:mousemove', ['$event'])
  onMove(event: MouseEvent): void {
    const x = (event.clientX / window.innerWidth) * 100;
    const y = (event.clientY / window.innerHeight) * 100;
    this.spotlightStyle = { '--spotlight-x': `${x}%`, '--spotlight-y': `${y}%` };
    const rx = (50 - y) / 12;
    const ry = (x - 50) / 12;
    this.tiltStyle = { transform: `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)` };
  }

  @HostListener('document:mouseleave')
  onLeave(): void {
    this.spotlightStyle = { '--spotlight-x': '50%', '--spotlight-y': '50%' };
    this.tiltStyle = { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' };
  }

  ngOnInit(): void {
    this.testimonialInterval = setInterval(() => {
      this.testimonialIndex = (this.testimonialIndex + 1) % this.testimonials.length;
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.testimonialInterval);
  }

  selectPortfolioCategory(category: string): void {
    this.selectedPortfolioCategory = category;
  }

  get filteredPortfolio(): PortfolioItem[] {
    return this.selectedPortfolioCategory === 'All'
      ? this.portfolio
      : this.portfolio.filter((item) => item.category === this.selectedPortfolioCategory);
  }

  openProject(project: PortfolioItem): void {
    this.selectedProject = project;
  }

  closeProject(): void {
    this.selectedProject = null;
  }

  submitQuote(): void {
    // Basic local validation; integrate with backend API when available
    if (!this.quote.name || !this.quote.mobile || !this.quote.service) {
      alert('Please provide your name, mobile number and required service.');
      return;
    }
    // Simulate submission
    alert('Thank you! Our team will contact you shortly.');
    this.quote = { name: '', mobile: '', service: '', location: '', message: '' };
  }

  scrollToQuote(service: string): void {
    if (service) {
      this.quote.service = service;
    }
    const section = document.getElementById('quote-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  callNow(): void {
    window.location.href = 'tel:+918849701206';
  }

  whatsappNow(): void {
    window.open('https://wa.me/918849701206?text=Hi%20I%20need%20a%20service%20quote', '_blank');
  }

  getTimelineDescription(step: string): string {
    const descriptions: Record<string, string> = {
      'Requirement Analysis': 'We map objectives, market needs, and technology constraints into a precise action plan.',
      Planning: 'Our teams build timelines, resourcing models, and technical roadmaps that align with your goals.',
      Design: 'We craft polished interfaces, motion systems, and accessible flows for high-converting experiences.',
      Development: 'Engineers deploy secure, test-driven software across web, mobile, and cloud infrastructure.',
      Testing: 'Continuous QA, performance tuning, and security validation ensure a launch-ready product.',
      Deployment: 'We release with confidence, observability, and optimization for fast production traffic.',
      Support: 'Post-launch support and iteration keep the product stable, scalable, and future-ready.'
    };
    return descriptions[step] ?? 'A thoughtful milestone in the delivery journey.';
  }

}






