import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({ selector: 'app-ant-page', standalone: true, imports: [FormsModule, RouterLink], templateUrl: './ant-page.component.html', styleUrl: './ant-page.component.scss' })
export class AntPageComponent {
  form = { name: '', phone: '', email: '', message: '' };
  submitted = false;
  scrollToQuote(event: Event): void {
    event.preventDefault();
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    document.getElementById('ant-quote')?.scrollIntoView({ behavior, block: 'start' });
    history.replaceState(null, '', '#ant-quote');
  }
  submitQuote(): void { this.submitted = true; }
}
