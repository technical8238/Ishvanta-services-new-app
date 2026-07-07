import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface ServiceArea {
  name: string;
  icon: string;
}

interface Service {
  name: string;
  icon: string;
  description: string;
}

interface Testimonial {
  name: string;
  area: string;
  service: string;
  rating: number;
  review: string;
  image: string;
}

interface FAQItem {
  question: string;
  answer: string;
  open?: boolean;
}

@Component({
  selector: 'app-service-areas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-areas.html',
  styleUrls: ['./service-areas.css'],
  animations: [
    trigger('cardHover', [
      state('normal', style({
        transform: 'translateY(0px)',
        boxShadow: '0 10px 30px rgba(11, 61, 145, 0.1)'
      })),
      state('hover', style({
        transform: 'translateY(-8px)',
        boxShadow: '0 20px 50px rgba(255, 107, 0, 0.2)'
      })),
      transition('normal <=> hover', animate('300ms ease-out'))
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class ServiceAreasPage implements OnInit, OnDestroy {
  // Stats counters
  jobsCompleted = 0;
  happyCustomers = 0;
  serviceAreas = 0;
  sameDayService = 0;

  private animationFrameId: number | null = null;
  private testimonialInterval: any;
  private counterDuration = 2000; // 2 seconds

  // Service Areas
  serviceAreasList: ServiceArea[] = [
    { name: 'Vadodara', icon: '📍' },
    { name: 'Manjalpur', icon: '📍' },
    { name: 'Tarsali', icon: '📍' },
    { name: 'Makarpura', icon: '📍' },
    { name: 'Waghodia', icon: '📍' },
    { name: 'Karelibaug', icon: '📍' },
    { name: 'Gotri', icon: '📍' },
    { name: 'Akota', icon: '📍' },
    { name: 'Sama', icon: '📍' },
    { name: 'Harni', icon: '📍' },
    { name: 'Ajwa', icon: '📍' }
  ];

  // Services
  services: Service[] = [
    { name: 'Electrical', icon: '⚡', description: 'Expert electrical installations and repairs' },
    { name: 'Plumbing', icon: '🔧', description: 'Complete plumbing solutions' },
    { name: 'AC & Fridge', icon: '❄️', description: 'Cooling system maintenance' },
    { name: 'Furniture', icon: '🛋️', description: 'Furniture assembly and repair' },
    { name: 'House Painting', icon: '🎨', description: 'Interior and exterior painting' },
    { name: 'Kitchen Appliances', icon: '🍳', description: 'Appliance repair and service' },
    { name: 'Fabrication', icon: '🔩', description: 'Metal and steel fabrication' },
    { name: 'CCTV', icon: '📹', description: 'CCTV installation and setup' },
    { name: 'Two Wheeler', icon: '🏍️', description: 'Bike maintenance services' }
  ];

  // Why choose us
  benefits = [
    { icon: '✓', title: 'Verified Technicians', description: 'Professional and certified staff' },
    { icon: '⏱️', title: 'Same Day Visit', description: 'Fast service when you need it' },
    { icon: '💰', title: 'Transparent Pricing', description: 'No hidden charges or surprises' },
    { icon: '⭐', title: 'Quality Service', description: 'Excellence in every job' },
    { icon: '📞', title: 'Fast Response', description: '30-60 minutes response time' },
    { icon: '😊', title: 'Customer Satisfaction', description: '100% satisfaction guarantee' }
  ];

  // Testimonials
  testimonials: Testimonial[] = [
    {
      name: 'Rajesh Kumar',
      area: 'Vadodara',
      service: 'Electrical',
      rating: 5,
      review: 'Excellent service! The technician was very professional and fixed the electrical issue quickly.',
      image: '👨‍💼'
    },
    {
      name: 'Priya Sharma',
      area: 'Manjalpur',
      service: 'Plumbing',
      rating: 5,
      review: 'Amazing experience. They arrived on time and solved my plumbing problem perfectly.',
      image: '👩‍🔬'
    },
    {
      name: 'Arjun Patel',
      area: 'Tarsali',
      service: 'AC Service',
      rating: 5,
      review: 'Best service provider in the city. Highly recommended for all home maintenance needs.',
      image: '👨‍💻'
    },
    {
      name: 'Neha Desai',
      area: 'Akota',
      service: 'House Painting',
      rating: 5,
      review: 'Professional painters, excellent finish, and completed within timeline. Very satisfied!',
      image: '👩‍🎨'
    }
  ];

  currentTestimonialIndex = 0;

  // FAQ
  faqItems: FAQItem[] = [
    {
      question: 'Do you provide same day service?',
      answer: 'Yes! We offer same-day service for most requests. Our emergency calls are typically handled within 30-60 minutes depending on location and technician availability.',
      open: false
    },
    {
      question: 'Do you charge visiting fees?',
      answer: 'We don\'t charge separate visiting fees. Our charges are transparent and are discussed before starting any work.',
      open: false
    },
    {
      question: 'Which locations do you cover?',
      answer: 'We serve Vadodara, Manjalpur, Tarsali, Makarpura, Waghodia, Karelibaug, Gotri, Akota, Sama, Harni, and Ajwa. Contact us to confirm service availability in your specific area.',
      open: false
    },
    {
      question: 'Can I book via WhatsApp?',
      answer: 'Absolutely! You can book, discuss, and get quotes via WhatsApp. Text us at +91 88497 01206 with your service requirement.',
      open: false
    },
    {
      question: 'Are technicians verified?',
      answer: 'Yes, all our technicians are verified, trained, and experienced professionals with background checks for your safety and peace of mind.',
      open: false
    }
  ];

  hoveredCard: { [key: string]: boolean } = {};

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.animateCounters();
      this.startTestimonialRotation();
    }
  }

  ngOnDestroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }

    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
  }

  private animateCounters(): void {
    const targetValues = {
      jobsCompleted: 500,
      happyCustomers: 300,
      serviceAreas: 10,
      sameDayService: 100
    };

    const startTime = Date.now();

    const updateCounters = () => {
      const currentTime = Date.now();
      const progress = Math.min((currentTime - startTime) / this.counterDuration, 1);

      this.jobsCompleted = Math.floor(targetValues.jobsCompleted * progress);
      this.happyCustomers = Math.floor(targetValues.happyCustomers * progress);
      this.serviceAreas = Math.floor(targetValues.serviceAreas * progress);
      this.sameDayService = Math.floor(targetValues.sameDayService * progress);

      if (progress < 1) {
        this.animationFrameId = requestAnimationFrame(updateCounters);
      }
    };

    this.animationFrameId = requestAnimationFrame(updateCounters);
  }

  startTestimonialRotation(): void {
    this.testimonialInterval = setInterval(() => {
      this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
    }, 6000);
  }

  toggleFAQ(index: number): void {
    this.faqItems[index].open = !this.faqItems[index].open;
  }

  onCardHover(cardId: string, state: 'hover' | 'normal'): void {
    this.hoveredCard[cardId] = state === 'hover';
  }

  get currentTestimonial(): Testimonial {
    return this.testimonials[this.currentTestimonialIndex];
  }

  scrollToBooking(): void {
    const element = document.querySelector('#booking-cta');
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToMap(): void {
    const element = document.querySelector('#interactive-map');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
