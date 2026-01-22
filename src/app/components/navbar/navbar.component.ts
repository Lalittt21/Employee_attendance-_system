import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class NavbarComponent {
  @Output() toggleSidenav = new EventEmitter<void>();

  title = 'Employee Attendance & Leave System';

  constructor(private router: Router) {}

  onToggleSidenav(): void {
    this.toggleSidenav.emit();
  }

  logout(): void {
    alert('Logged out successfully!');
    this.router.navigate(['/dashboard']);
  }
}