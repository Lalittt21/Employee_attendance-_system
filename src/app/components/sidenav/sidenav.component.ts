import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SidenavComponent {
  @Input() isOpen = false;

  menuItems = [
    { label: 'Dashboard', route: '/dashboard', icon: '📊' },
    { label: 'Employees', route: '/employees', icon: '👥' },
    { label: 'Attendance', route: '/attendance', icon: '📋' },
    { label: 'Leave Request', route: '/leave-request', icon: '✉️' },
    { label: 'Leave Approval', route: '/leave-approval', icon: '✅' }
  ];

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}