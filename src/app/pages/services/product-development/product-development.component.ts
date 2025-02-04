import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-development',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-development.component.html',
  styleUrls: ['./product-development.component.css']
})
export class ProductDevelopmentComponent {
  expandedIndex: number | null = null;
  faqs = [
    {
      question: 'How does your product development process work?',
      answer: 'We follow a clear, step-by-step approach—starting with discovery and requirements, then moving into design, development, and beyond. This framework ensures high-quality results at every milestone.'
    },
    {
      question: 'What if our product requirements change mid-project?',
      answer: 'We use an agile methodology that welcomes iteration. If you need to shift priorities, we adapt the roadmap accordingly—ensuring your product aligns with your evolving vision.'
    },
    {
      question: 'How do you ensure code quality and security?',
      answer: 'Our team follows industry best practices, rigorous code reviews, automated testing, and secure CI/CD pipelines. We integrate DevOps from the start to maintain high security standards.'
    },
    {
      question: 'What is the typical timeline for product development?',
      answer: 'It depends on scope and complexity. MVPs may take 3–6 months, while more advanced solutions can span 6–12 months or longer. We provide clear timelines and keep you updated throughout the project.'
    }
  ];

  toggleFaq(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
