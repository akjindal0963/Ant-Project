import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({ selector: 'app-site-layout', standalone: true, imports: [RouterOutlet, RouterLink], templateUrl: './site-layout.component.html', styleUrl: './site-layout.component.scss' })
export class SiteLayoutComponent {
  constructor(private router: Router) {}
  get quotePath(): string { return this.router.url.startsWith('/services/ant-control') ? '/services/ant-control' : '/'; }
  get quoteFragment(): string { return this.router.url.startsWith('/services/ant-control') ? 'ant-quote' : 'quote'; }
}
