import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({ selector: 'app-home', standalone: true, imports: [RouterLink, FormsModule], templateUrl: './home.component.html', styleUrl: './home.component.scss' })
export class HomeComponent {
  form = { name: '', phone: '', email: '', message: '' };
  submitted = false;
  submitQuote(): void { this.submitted = true; }
}
