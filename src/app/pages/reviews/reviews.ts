import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ReviewItem {
  name: string;
  location: string;
  service: string;
  rating: number;
  date: string;
  text: string;
  beforeImage: string;
  afterImage: string;
  verified: boolean;
  photo: string;
  category: string;
}

interface TestimonialVideo {
  name: string;
  service: string;
  thumbnail: string;
}

interface TrustCard {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.html',
  styleUrls: ['./reviews.css']
})
export class ReviewsPage {
  brand = 'ISHVANTA ONE CALL SERVICES';
  tagline = 'One Call. All Solutions.';

  selectedFilter = 'All';

  filters = [
    'All',
    'Electrical',
    'Plumbing',
    'AC & Fridge',
    'Furniture',
    'Painting',
    'CCTV',
    'Fabrication',
    'Kitchen Appliances',
    'Two Wheeler'
  ];

  ratingSummary = {
    average: 4.9,
    totalReviews: '500+',
    distribution: [
      { label: '★★★★★', count: 480, width: 96 },
      { label: '★★★★☆', count: 15, width: 30 },
      { label: '★★★☆☆', count: 3, width: 18 },
      { label: '★★☆☆☆', count: 1, width: 8 },
      { label: '★☆☆☆☆', count: 1, width: 5 }
    ]
  };

  reviews: ReviewItem[] = [
    {
      name: 'Nisha Patel',
      location: 'Akota, Vadodara',
      service: 'Electrical Repair',
      rating: 5,
      date: 'May 2026',
      text: 'The electrician arrived on time, fixed our wiring with premium care, and explained every step clearly. A truly trusted service.',
      beforeImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
      verified: true,
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
      category: 'Electrical'
    },
    {
      name: 'Rahul Sharma',
      location: 'Alkapuri, Vadodara',
      service: 'AC Service',
      rating: 5,
      date: 'April 2026',
      text: 'Ishvanta handled the AC service professionally and gave honest pricing. The entire process felt premium and reliable.',
      beforeImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
      verified: true,
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      category: 'AC & Fridge'
    },
    {
      name: 'Sonal Mehta',
      location: 'Manjalpur, Vadodara',
      service: 'Kitchen Appliances',
      rating: 5,
      date: 'March 2026',
      text: 'Their technician fixed our oven and dishwasher on the same day. Excellent follow-up and a comfortable customer experience.',
      beforeImage: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
      verified: true,
      photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
      category: 'Kitchen Appliances'
    },
    {
      name: 'Vikram Joshi',
      location: 'Gotri, Vadodara',
      service: 'Furniture Repair',
      rating: 5,
      date: 'June 2026',
      text: 'From quote to finish, every detail was managed with care. The furniture repair looked elegant and premium.',
      beforeImage: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=800&q=80',
      verified: true,
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      category: 'Furniture'
    },
    {
      name: 'Anjali Desai',
      location: 'Race Course, Vadodara',
      service: 'Painting',
      rating: 5,
      date: 'May 2026',
      text: 'The service team transformed our home with a smooth and premium painting experience. Clean, polished, and timely.',
      beforeImage: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
      verified: true,
      photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
      category: 'Painting'
    }
  ];

  videoTestimonials: TestimonialVideo[] = [
    {
      name: 'Karan Patel',
      service: 'CCTV Installation',
      thumbnail: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Meera Shah',
      service: 'Plumbing',
      thumbnail: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Deepak Rao',
      service: 'Two Wheeler Repair',
      thumbnail: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80'
    }
  ];

  trustCards: TrustCard[] = [
    { title: 'Verified Technicians', description: 'Certified experts with disciplined safety and service standards.', icon: '🛠️' },
    { title: 'Transparent Pricing', description: 'No hidden fees and clear quotes before work begins.', icon: '💰' },
    { title: 'Fast Response', description: 'Quick dispatch across Vadodara for same-day support.', icon: '⚡' },
    { title: 'Quality Work', description: 'Completed with premium materials and precision.', icon: '🏆' },
    { title: 'Service Warranty', description: 'Post-service support to keep your home running smoothly.', icon: '🛡️' },
    { title: 'Friendly Support', description: 'Customer-care that listens and responds with respect.', icon: '🤝' }
  ];

  satisfactionStats = [
    { value: '500+', label: 'Jobs Completed' },
    { value: '300+', label: 'Happy Customers' },
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '4+', label: 'Years Experience' }
  ];

  get filteredReviews(): ReviewItem[] {
    if (this.selectedFilter === 'All') {
      return this.reviews;
    }
    return this.reviews.filter(review => review.category === this.selectedFilter);
  }

  selectFilter(filter: string) {
    this.selectedFilter = filter;
  }
}

