import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChildren, QueryList } from '@angular/core';

interface Testimonial { name: string; quote: string; photo: string; rating: number; service: string }

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutPage implements AfterViewInit, OnDestroy {
  @ViewChildren('counter', { read: ElementRef }) counterEls!: QueryList<ElementRef>;

  testimonialIndex = 0;
  testimonials: Testimonial[] = [
    { name: 'Neha J.', quote: 'The technician arrived on time and fixed our AC quickly.', photo: '/assets/images/testi1.jpg', rating: 5, service: 'AC Repair' },
    { name: 'Rajiv S.', quote: 'Transparent pricing and excellent workmanship.', photo: '/assets/images/testi2.jpg', rating: 5, service: 'Plumbing' },
    { name: 'Anita P.', quote: 'Friendly team and neat work—highly recommended.', photo: '/assets/images/testi3.jpg', rating: 5, service: 'Electrical' }
  ];

  currentTestimonial: Testimonial | null = this.testimonials[0] || null;

  private testimonialTimer: any = null;
  private counterObserver: IntersectionObserver | null = null;

  ngAfterViewInit(): void {
    // Start testimonial rotation only in browser environments.
    if (typeof window !== 'undefined') {
      this.testimonialTimer = setInterval(() => this.nextTestimonial(), 6000);
    }

    // Animate counters when in view using IntersectionObserver if available.
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window && typeof document !== 'undefined') {
      this.counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = Number(el.getAttribute('data-target') || '0');
            this.animateCounter(el, target);
            this.counterObserver?.unobserve(el);
          }
        });
      }, { threshold: 0.5 });

      const els = Array.from(document.querySelectorAll('.counter')) as HTMLElement[];
      els.forEach(e => this.counterObserver?.observe(e));
    }
  }

  nextTestimonial() {
    this.testimonialIndex = (this.testimonialIndex + 1) % this.testimonials.length;
    this.currentTestimonial = this.testimonials[this.testimonialIndex];
  }

  animateCounter(el: HTMLElement, target: number) {
    const duration = 1200;
    const start = performance.now();
    const initial = 0;

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(initial + (target - initial) * progress);
      el.textContent = String(value + (progress === 1 ? '' : ''));
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = String(target);
    };

    requestAnimationFrame(step);
  }

  callNow(): void {
    window.location.href = 'tel:+918849701206';
  }

  whatsappNow(): void {
    window.open('https://wa.me/918849701206', '_blank');
  }

  bookService(): void {
    window.location.href = '/services';
  }

  ngOnDestroy(): void {
    if (this.testimonialTimer) clearInterval(this.testimonialTimer);
    if (this.counterObserver) this.counterObserver.disconnect();
  }
}
