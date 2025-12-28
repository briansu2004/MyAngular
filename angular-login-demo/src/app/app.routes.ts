// import { Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';

// export const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: LoginComponent },
// ];

// // // app.routes.ts
// import { Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { DashboardComponent } from './dashboard/dashboard.component'; // Your success page

// export const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'dashboard', component: DashboardComponent },
//   { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
// ];

// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './services/auth.guard'; // Import the guard

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard], // Protect this route
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
