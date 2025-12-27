# Build an Angular 19 app from scratch

- [1. Prerequisites](#1-prerequisites)
  - [1.1 Node.js](#11-nodejs)
  - [1.2 Install Angular CLI (v19)](#12-install-angular-cli-v19)
- [2. Create a New Angular 19 Project](#2-create-a-new-angular-19-project)
- [3. Add Angular Material](#3-add-angular-material)
- [4. Project Structure Overview (Important)](#4-project-structure-overview-important)
- [5. Generate Login Component](#5-generate-login-component)
- [6. Create an Authentication Service (Hardcoded Login)](#6-create-an-authentication-service-hardcoded-login)
  - [6.1 Implement `auth.service.ts`](#61-implement-authservicets)
- [7. Configure Routing](#7-configure-routing)
  - [7.1 Edit `app.routes.ts`](#71-edit-approutests)
- [8. Build the Login Form (Angular Material + Reactive Forms)](#8-build-the-login-form-angular-material--reactive-forms)
  - [8.1 Update `login.component.ts`](#81-update-logincomponentts)
  - [8.2 Create `login.component.html`](#82-create-logincomponenthtml)
  - [8.3 Add Styling `login.component.css`](#83-add-styling-logincomponentcss)
- [9. Update Root Component](#9-update-root-component)
  - [9.1 `app.component.html`](#91-appcomponenthtml)
- [10. Run the Application](#10-run-the-application)
  - [Demo credentials](#demo-credentials)
- [11. What You Have Demonstrated (Interview-Relevant)](#11-what-you-have-demonstrated-interview-relevant)
- [12. Next Logical Enhancements (Optional)](#12-next-logical-enhancements-optional)

<!-- Below is a **clear, end-to-end, step-by-step guide** to build an **Angular 19 application from scratch** with **Angular Material** and a **demo login form using hardcoded credentials**.
This is written in a way that matches **real interview and production expectations**, not a toy example.

--- -->

## 1. Prerequisites

Ensure the following are installed:

### 1.1 Node.js

Angular 19 requires **Node.js 18+** (LTS recommended).

```bash
node -v
npm -v
```

---

### 1.2 Install Angular CLI (v19)

Install globally:

```bash
npm install -g @angular/cli@19
```

Verify:

```bash
ng version
```

You should see Angular CLI 19.x.

---

## 2. Create a New Angular 19 Project

```bash
ng new angular-login-demo
```

Choose the following options (recommended):

- **Would you like to add Angular routing?** → `Yes`
- **Which stylesheet format?** → `CSS` (or SCSS if you prefer)

Move into the project:

```bash
cd angular-login-demo
```

Start the app to verify:

```bash
ng serve
```

Open:
`http://localhost:4200`

---

## 3. Add Angular Material

Angular Material is fully compatible with Angular 19.

```bash
ng add @angular/material
```

Choose:

- **Theme** → `Indigo/Pink` (or any)
- **Typography styles** → `Yes`
- **Animations** → `Yes`

This automatically:

- Installs Material packages
- Configures animations
- Updates `angular.json`

---

## 4. Project Structure Overview (Important)

Key folders you will use:

```md
src/
├── app/
│ ├── app.component.ts
│ ├── app.config.ts
│ ├── app.routes.ts
│ ├── login/
│ │ ├── login.component.ts
│ │ ├── login.component.html
│ │ ├── login.component.css
│ └── services/
│ └── auth.service.ts
```

Angular 19 uses **standalone components by default** (no NgModules).

---

## 5. Generate Login Component

```bash
ng generate component login
```

This creates a **standalone component**, which is the Angular 19 default.

---

## 6. Create an Authentication Service (Hardcoded Login)

```bash
ng generate service services/auth
```

### 6.1 Implement `auth.service.ts`

```ts
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private users = [
    { username: "admin", password: "admin123" },
    { username: "user", password: "user123" },
  ];

  login(username: string, password: string): boolean {
    return this.users.some(
      (u) => u.username === username && u.password === password
    );
  }
}
```

This simulates backend authentication.

---

## 7. Configure Routing

### 7.1 Edit `app.routes.ts`

```ts
import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

export const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
];
```

---

## 8. Build the Login Form (Angular Material + Reactive Forms)

### 8.1 Update `login.component.ts`

```ts
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  loginForm: FormGroup;
  loginFailed = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmit(): void {
    const { username, password } = this.loginForm.value;
    this.loginFailed = !this.authService.login(username, password);
  }
}
```

---

### 8.2 Create `login.component.html`

```html
<mat-card class="login-card">
  <h2>Login</h2>

  <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
    <mat-form-field appearance="outline" class="full-width">
      <mat-label>Username</mat-label>
      <input matInput formControlName="username" />
    </mat-form-field>

    <mat-form-field appearance="outline" class="full-width">
      <mat-label>Password</mat-label>
      <input matInput type="password" formControlName="password" />
    </mat-form-field>

    <button mat-raised-button color="primary" class="full-width" type="submit">
      Login
    </button>

    <p class="error" *ngIf="loginFailed">Invalid username or password</p>
  </form>
</mat-card>
```

---

### 8.3 Add Styling `login.component.css`

```css
.login-card {
  width: 350px;
  margin: 100px auto;
  padding: 20px;
}

.full-width {
  width: 100%;
}

.error {
  color: red;
  margin-top: 10px;
}
```

---

## 9. Update Root Component

### 9.1 `app.component.html`

```html
<router-outlet></router-outlet>
```

---

## 10. Run the Application

```bash
ng serve
```

Open:

```md
http://localhost:4200
```

### Demo credentials

- `admin / admin123`
- `user / user123`

---

## 11. What You Have Demonstrated (Interview-Relevant)

This small app already shows:

- Angular 19 **standalone components**
- Angular Material integration
- Reactive Forms
- Dependency Injection
- Routing
- Service-based authentication
- Clean separation of concerns

---

## 12. Next Logical Enhancements (Optional)

If you want to extend this realistically:

- Add **AuthGuard**
- Store login state in a service (or BehaviorSubject)
- Add a dashboard route
- Replace hardcoded auth with HTTP API
- Add unit tests for `AuthService`

<!-- If you want, I can **extend this into a full interview-ready Angular app** (guards, state, testing) or **map it directly to Angular interview questions**. -->
