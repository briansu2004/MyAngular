# Simple Angular Routing and Navigation

## Commands

```dos
ng new angular-router-simple --routing --style css
ng serve
ng g c department-list -it -is
ng g c employee-list -it -is
```

## Knowledge Points

index.html

```html
<base href="/" />
```

app-routing.module.ts

```typescript
export const routingComponents = [
  DepartmentListComponent,
  EmployeeListComponent,
];
```

app.module.ts

```typescript
import { AppRoutingModule, routingComponents } from "./app-routing.module";
...
declarations: [AppComponent, routingComponents],
```

app.component.html

```html
<nav>
  <a routerLink="/departments" routerLinkActive="active">Departments</a>
  <a routerLink="/employees" routerLinkActive="active">Employees</a>
</nav>

<router-outlet></router-outlet>
```

style.css

```css
nav a.active {
  color: #039be5;
}
```

## Appendix

```dos
C:\Code\MyAngular\angular-router>ng new routing-demo --routing --style css
CREATE routing-demo/angular.json (3075 bytes)
CREATE routing-demo/package.json (1074 bytes)
CREATE routing-demo/README.md (1057 bytes)
CREATE routing-demo/tsconfig.json (783 bytes)
CREATE routing-demo/.editorconfig (274 bytes)
CREATE routing-demo/.gitignore (604 bytes)
CREATE routing-demo/.browserslistrc (703 bytes)
CREATE routing-demo/karma.conf.js (1429 bytes)
CREATE routing-demo/tsconfig.app.json (287 bytes)
CREATE routing-demo/tsconfig.spec.json (333 bytes)
CREATE routing-demo/src/favicon.ico (948 bytes)
CREATE routing-demo/src/index.html (297 bytes)
CREATE routing-demo/src/main.ts (372 bytes)
CREATE routing-demo/src/polyfills.ts (2820 bytes)
CREATE routing-demo/src/styles.css (80 bytes)
CREATE routing-demo/src/test.ts (743 bytes)
CREATE routing-demo/src/assets/.gitkeep (0 bytes)
CREATE routing-demo/src/environments/environment.prod.ts (51 bytes)
CREATE routing-demo/src/environments/environment.ts (658 bytes)
CREATE routing-demo/src/app/app-routing.module.ts (245 bytes)
CREATE routing-demo/src/app/app.module.ts (393 bytes)
CREATE routing-demo/src/app/app.component.html (24617 bytes)
CREATE routing-demo/src/app/app.component.spec.ts (1091 bytes)
CREATE routing-demo/src/app/app.component.ts (216 bytes)
CREATE routing-demo/src/app/app.component.css (0 bytes)
✔ Packages installed successfully.
    Directory is already under version control. Skipping initialization of git.

C:\Code\MyAngular\angular-router\routing-demo>nvm list

    16.13.0
    16.6.1
  * 14.17.3 (Currently using 64-bit executable)
    14.16.1
    12.0.0

C:\Code\MyAngular\angular-router\routing-demo>node -v
v14.17.3

C:\Code\MyAngular\angular-router\routing-demo>npm -v
7.20.0
```
