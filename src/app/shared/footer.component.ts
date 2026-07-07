import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import {
  ArrowRight,
  ChevronRight,
  Clock3,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Youtube
} from 'lucide-angular';

interface FooterLink {
  label: string;
  href: string;
}

interface ServiceItem {
  label: string;
  icon: any;
}

interface SocialLink {
  ariaLabel: string;
  icon: any;
  url: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
  readonly ChevronRightIcon = ChevronRight;
  readonly MapPinIcon = MapPin;
  readonly PhoneCallIcon = PhoneCall;
  readonly MailIcon = Mail;
  readonly Clock3Icon = Clock3;
  readonly ShieldCheckIcon = ShieldCheck;
  readonly FacebookIcon = Facebook;
  readonly InstagramIcon = Instagram;
  readonly LinkedinIcon = Linkedin;
  readonly MessageCircleIcon = MessageCircle;
  readonly YoutubeIcon = Youtube;

  readonly companyName = 'ISHVANTA SERVICES';
  readonly tagline = 'ISHVANTA ONE CALL SERVICES';
  readonly heroHeading = 'One call.';
  readonly heroSubheading = 'All solutions.';
  readonly heroDescription = 'Premium home support across Vadodara and Gujarat with verified technicians, transparent pricing and responsive service delivery.';
  readonly contactPhone = '+91 88497 01206';
  readonly contactEmail = 'ishvantaonecallservice@gmail.com';
  readonly contactLocation = 'Vadodara, Gujarat';

  readonly companyLinks: FooterLink[] = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Our Work', href: '/our-work' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Contact Us', href: '/contact' }
  ];

  readonly serviceItems: ServiceItem[] = [
    { label: 'Electrical Service', icon: ArrowRight },
    { label: 'Plumbing Service', icon: ArrowRight },
    { label: 'House Painting', icon: ArrowRight },
    { label: 'Furniture Service', icon: ArrowRight },
    { label: 'Kitchen Appliances Service', icon: ArrowRight },
    { label: 'AC & Fridge Service', icon: ArrowRight },
    { label: 'Two Wheeler Service', icon: ArrowRight },
    { label: 'Fabrication Service', icon: ArrowRight },
    { label: 'CCTV Installation Service', icon: ArrowRight }
  ];

  readonly socialLinks: SocialLink[] = [
    { ariaLabel: 'Follow us on Facebook', icon: this.FacebookIcon, url: 'https://www.facebook.com/ishavantaonecallservice' },
    { ariaLabel: 'Follow us on Instagram', icon: this.InstagramIcon, url: 'https://www.instagram.com/ishavantaonecallservice' },
    { ariaLabel: 'Follow us on LinkedIn', icon: this.LinkedinIcon, url: 'https://www.linkedin.com/company/ishavanta-one-call-service' },
    { ariaLabel: 'Chat with us on WhatsApp', icon: this.MessageCircleIcon, url: 'https://wa.me/918849701206' },
    { ariaLabel: 'Watch us on YouTube', icon: this.YoutubeIcon, url: 'https://www.youtube.com/@ishvanta' }
  ];
}
