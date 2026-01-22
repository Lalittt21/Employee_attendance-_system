import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, SidenavComponent]
})
export class AppComponent {
  title = 'Employee Attendance and Leave Management System';
  sidenavOpen = false;

  onToggleSidenav(): void {
    this.sidenavOpen = !this.sidenavOpen;
  }
}