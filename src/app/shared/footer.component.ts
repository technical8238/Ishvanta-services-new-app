import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SocialLink {
  name: string;
  icon: string;
  url: string;
  ariaLabel: string;
}

interface FooterSection {
  title: string;
  links: Array<{ label: string; href: string }>;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  email: string = '';
  newsletterSubmitted = false;
  newsletterError = '';

  companyInfo = {
    name: 'ISHVANTA SERVICES',
    tagline: 'One Call, All Solutions',
    founded: 2022,
    email: 'ishvantaonecallservice@gmail.com',
    phone: '+91 88497 01206',
    whatsapp: '+918849701206'
  };

  socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      icon: '🔗',
      url: 'https://www.linkedin.com/company/ishavanta-one-call-service',
      ariaLabel: 'Follow us on LinkedIn'
    },
    {
      name: 'Twitter',
      icon: '𝕏',
      url: 'https://twitter.com/ishavanta_onecall_service',
      ariaLabel: 'Follow us on Twitter'
    },
    {
      name: 'Facebook',
      icon: '📘',
      url: 'https://www.facebook.com/ishavantaonecallservice',
      ariaLabel: 'Follow us on Facebook'
    },
    {
      name: 'Email',
      icon: '✉️',
      url: 'mailto:contact@ishavantaonecallservice.com',
      ariaLabel: 'Send us an email'
    }
  ];

  footerSections: FooterSection[] = [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Careers', href: '/careers' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Web Development', href: '/services' },
        { label: 'Mobile Apps', href: '/services' },
        { label: 'Cloud & AI', href: '/services' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact', href: '/contact' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Sitemap', href: '/sitemap' }
      ]
    }
  ];

  contactInfo = [
    { icon: '📧', label: 'Email', value: this.companyInfo.email, href: `mailto:${this.companyInfo.email}` },
    { icon: '📱', label: 'Phone', value: this.companyInfo.phone, href: `tel:${this.companyInfo.phone}` },
    {
      icon: '💬',
      label: 'WhatsApp',
      value: 'Live chat',
      href: `https://wa.me/${this.companyInfo.whatsapp.replace(/\D/g, '')}`
    }
  ];

  onNewsletterSubmit(): void {
    this.newsletterError = '';

    if (!this.email) {
      this.newsletterError = 'Please enter your email address.';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.newsletterError = 'Please enter a valid email address.';
      return;
    }

    this.newsletterSubmitted = true;
    this.email = '';

    setTimeout(() => {
      this.newsletterSubmitted = false;
    }, 4500);
  }

  openSocialLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  getYearsSinceFoundation(): number {
    return this.currentYear - this.companyInfo.founded;
  }
}

