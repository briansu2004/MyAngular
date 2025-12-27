# My Angular

- [My Angular Projects](#my-angular-projects)
  - [Project 7](#project-7)
  - [Project 6](#project-6)
  - [Project 5](#project-5)
  - [Project 4](#project-4)
  - [Project 3](#project-3)
  - [Project 2](#project-2)
  - [Project 1](#project-1)
- [My Angular Versions](#my-angular-versions)
  - [1. Anchor Yourself in What Does _Not_ Change](#1-anchor-yourself-in-what-does-not-change)
    - [Non-negotiable fundamentals](#non-negotiable-fundamentals)
  - [2. Learn “What’s New” — But at the Concept Level](#2-learn-whats-new--but-at-the-concept-level)
    - [Recent Angular evolution you should understand conceptually](#recent-angular-evolution-you-should-understand-conceptually)
  - [3. Prepare for “Version Shock” Questions](#3-prepare-for-version-shock-questions)
    - [Example](#example)
  - [4. Practice Explaining Trade-offs (Critical Skill)](#4-practice-explaining-trade-offs-critical-skill)
  - [5. Build One “Interview-Ready” Reference Project](#5-build-one-interview-ready-reference-project)
  - [6. Expect System-Design-Style Frontend Questions](#6-expect-system-design-style-frontend-questions)
  - [7. Interview Mindset Shift (Most Important)](#7-interview-mindset-shift-most-important)
  - [8. Practical Weekly Prep Plan (4 Weeks)](#8-practical-weekly-prep-plan-4-weeks)
  - [Final Perspective](#final-perspective)
- [My Angular Skills](#my-angular-skills)
  - [1. Core Angular Fundamentals](#1-core-angular-fundamentals)
  - [2. Routing \& Navigation](#2-routing--navigation)
  - [3. State Management \& Reactive Programming](#3-state-management--reactive-programming)
  - [4. Forms](#4-forms)
  - [5. Services \& Dependency Injection](#5-services--dependency-injection)
  - [6. Testing](#6-testing)
  - [7. Build, Performance \& Best Practices](#7-build-performance--best-practices)
  - [8. Angular vs React / Vue (Positioning)](#8-angular-vs-react--vue-positioning)
  - [Example Resume-Ready Summary (Concise Version)](#example-resume-ready-summary-concise-version)
  - [Key Advice (Important)](#key-advice-important)
- [My Angular Certificates](#my-angular-certificates)
- [My Angular Courses](#my-angular-courses)
- [Angular tricks](#angular-tricks)

## My Angular Projects

<!-- ### Project 8

 -->

### Project 7

<!-- Hatfield -->

Built a web application to manage Dask Kubernetes Clusters and deployed it to Microsoft Azure, using a Golang REST API on the backend and Angular on the frontend.

- Backend (Golang): Developed a robust backend using Golang and the Gin framework to create lightweight, high-performance REST APIs for managing Dask Kubernetes Clusters. The APIs supported dynamic provisioning, scaling, monitoring, and deletion of clusters on Azure Kubernetes Service (AKS).
  - Implemented cluster lifecycle operations, including creation, scaling, and teardown.
  - Used GORM to persist cluster state and configuration data.
  - Integrated Swaggo for automated API documentation to improve maintainability and developer onboarding.
- Testing & Mocking: Applied Gomock for unit testing, creating mocked interfaces to validate cluster management logic and ensure high code quality, reliability, and test coverage.
- Frontend (Angular): Built a responsive and modular user interface using Angular and TypeScript, following a component-based architecture. Leveraged Angular Services and RxJS Observables to manage state and handle asynchronous operations. Integrated Angular HTTPClient for secure communication with backend APIs and used Angular Material to deliver an intuitive, enterprise-grade UI. The frontend enabled users to visualize and manage Kubernetes clusters with near real-time updates on cluster status and resource utilization.
- Containerization & Deployment: Containerized both backend APIs and frontend applications using Docker, stored images in Azure Container Registry (ACR), and deployed them to Azure Kubernetes Service (AKS) for scalable, production-ready workloads.
- Networking: Exposed the Golang REST API via a public IP and Kubernetes services to enable secure external access to the application.

### Project 6

<!-- Sunlife (React) -->

Built the Canadian Dental Care Plan enrollment web app for Health Canada

- Backend: Developed a full-stack web application using Golang and RESTful API services, implementing business logic and integrating with the database layer using GORM (Go ORM) for seamless data management. Implemented secure authentication and authorization mechanisms using JWT and middleware patterns in Go.
- UI: Utilized Angular to build responsive and modular user interfaces, leveraging TypeScript, Angular CLI, and a component-driven architecture. Implemented Angular Services and RxJS Observables for state management and asynchronous data handling. Integrated HTTPClient for secure RESTful API communication and applied Angular Material to deliver a consistent, accessible, and user-friendly design aligned with government UX standards. Enforced code quality and scalability through Angular best practices, including reusable components, dependency injection, and lazy-loaded modules. Conducted comprehensive unit testing using Jasmine and Karma.

### Project 5

<!-- RBC -->

Designed and implemented a web app with APIs and deployed to Azure

- Designed and implemented a web application with RESTful APIs and deployed it to Microsoft Azure, following cloud-native and microservices principles.
- Frontend: Built a scalable single-page application using Angular and TypeScript, leveraging a component-based architecture, Angular Services, and RxJS Observables for state management and asynchronous data flows. Integrated Angular HTTPClient for secure API communication and applied Angular Material to deliver a responsive, accessible user interface.
- Backend: Designed and implemented RESTful APIs using Java, integrating with Azure SQL, Redis, and Docker Compose for local service orchestration.
- DevOps: Built and automated CI/CD pipelines using Jenkins and shell scripts to deploy application components to Azure environments.
- Testing: Performed unit and integration testing using Angular testing tools (Jasmine, Karma) for the frontend and Python pytest for backend and integration test automation as part of the CI/CD pipeline.

### Project 4

<!-- CRA -->

Converted old Java Struts apps to new Angular and Spring Boot apps

- Spearheaded the modernization of a legacy Struts-based application by orchestrating a seamless migration to Angular framework, significantly enhancing performance and elevating user experience.
- Architected and implemented responsive and interactive frontend components utilizing Angular framework, ensuring an intuitive and engaging user interface.
- Leveraged TypeScript to develop robust and type-safe frontend logic, enhancing maintainability and reducing runtime errors.
- Enhanced automation of deployment scripts and routine tasks using BASH, significantly reducing manual overhead and minimizing error-prone processes during the migration from Java Struts to Angular and Spring Boot apps.
- Developed BASH scripts for environment setup and configuration, ensuring consistency across development, staging, and production environments.

### Project 3

<!-- MCCSS  -->

<!-- Ministry of Children, Community and Social Services -->

Worked on an open-to-public online web application of children aid app and an agency license management app.

- Analyzed the old IBM Curam application, designed the new application with Angular, Material on the front-end, IBM WebSphere Application Server Liberty, Java Spring Boot on the backend, and planned the lift and shift strategy.
- Program Angular components, services, interceptions, pipes, translations, forms, data tables, animations and ad-hoc UI/UX pages with JavaScript, RxJS, Material etc.
- Developed backend RESTful API services with Java, Spring Boot, Lombok, JPA repository, Maven and Oracle etc. Utilized JUnit and Postman to run test suites.
- Used JSON Web Token JWT to implement token authorization (access token for client credential flow and refresh token with auth code flow).
- Migrated the IBM Curam Social Program Management data model to Oracle DB; Created the PL/SQL batch jobs for an initial load and some regular delta loads.
- Managed code repository, pull requests, merges and pipelines with GitLab.

### Project 2

<!-- MTO -->

<!-- Ministry of Transportation and Mistry of Labour, Immigration, Training and Skills Development -->

Built a new web app and a new tablet app and deployed to Azure Cloud

- For the offline mode tablet device app, built the backend RESTful APIs with .Net, C#, LINQ, Entity Framework; created the responsive front-end UI with .NET MAUI, Telerik UI and DevTools to follow the Zeplin wireframes; and persisted data in SQLite.
- For the online web app, created the backend RESTful APIs with .Net, C#, LINQ, Entity Framework; built the responsive front-end UI with Blazor, Telerik UI and DevTools to follow the Zeplin designs; and persisted data in Azure SQL database.
- Performed the unit testing with NUnit and XUnit.
- Automated the integration testing with Postman and Azure Data Studio.
- Managed code repositories with Git and Azure DevOps.

### Project 1

<!-- Telus -->

Created a Spring Boot RESTful application for a large telecommunication client

- Initialized the Spring Boot project with Gradle and some dependencies.
- Built a Dockerfile to run microservices in the Docker container.
- Created another Dockerfile for WireMock and used it mock the external dependencies for the Service Virtualization pattern.
- Added JUnit integration tests to verify the correctness of service execution.
- Worked with vendor APIs and did the integration tests.
- Increased the application performance by utilizing Java 8 features like Lambda expressions and Stream API for Bulk data operations on collections.
- Prepared multiple Spring Boot profiles for different settings.
- Used docker-compose to define and run WireMock and service containers together.
- Built front-end progressive web app with Angular and Angular UI Bootstrap CSS.
- Created new components with Angular CLI, applied routes, structured modules and components, managed states with observable store, ran unit tests with Karma.
- Deployed to OpenShift with Jenkins.

## My Angular Versions

- v17
- v19 (node v18+)
- v21

Angular’s six-month release cadence and periodic paradigm shifts (e.g., standalone APIs, signals) can make the framework feel unstable at the surface level. However, Angular interviews are rarely about memorizing the latest syntax. Strong candidates demonstrate **conceptual mastery, architectural judgment, and upgrade adaptability**.

Below is a practical, interview-oriented preparation strategy that aligns with how senior Angular engineers are actually evaluated.

---

### 1. Anchor Yourself in What Does _Not_ Change

Angular evolves, but its **core mental model** is stable. Interviewers probe this first.

#### Non-negotiable fundamentals

You should be able to explain _clearly and confidently_:

- Component architecture and unidirectional data flow
- Template syntax (`@Input`, `@Output`, event binding, structural directives)
- Dependency Injection (providers, scopes, hierarchical injectors)
- Change detection (Default vs `OnPush`)
- RxJS concepts (Observable vs Promise, operators, subscriptions lifecycle)
- Routing fundamentals (lazy loading, guards, resolvers)
- HTTP client patterns and interceptors
- Forms (template-driven vs reactive)

If you can reason about **why Angular works the way it does**, version changes become cosmetic.

**Interview tip:**
If you can explain `ChangeDetectionStrategy.OnPush` without mentioning a specific Angular version, you are already above average.

---

### 2. Learn “What’s New” — But at the Concept Level

Interviewers expect awareness, not memorization.

#### Recent Angular evolution you should understand conceptually

(Exact APIs may change; intent does not.)

- **Standalone components**

  - Why Angular reduced reliance on `NgModule`
  - Benefits for tree-shaking, bootstrapping, and DX

- **Signals**

  - What problem they solve compared to RxJS for local state
  - How they improve change detection predictability
  - When _not_ to use them

- **Improved SSR / hydration**

  - Why Angular invested heavily in SSR
  - Performance and SEO implications

You should be able to answer:

> “If you joined a team on Angular 15 and they plan to upgrade to 19, how would you approach it?”

---

### 3. Prepare for “Version Shock” Questions

Many interviewers deliberately ask vague or outdated questions to test reasoning.

#### Example

> “We are on Angular 13. Would you refactor to signals?”

Strong answer:

- Assess scope and risk
- Identify performance bottlenecks first
- Migrate incrementally
- Avoid framework-driven rewrites

They are testing **engineering maturity**, not feature worship.

---

### 4. Practice Explaining Trade-offs (Critical Skill)

Angular interviews heavily favor candidates who can articulate _why_.

Be ready to discuss:

- Signals vs RxJS
- Reactive forms vs template-driven forms
- OnPush vs Default change detection
- Angular vs React (enterprise context)
- Angular Material vs custom design systems

If you can say:

> “It depends, and here’s what I would evaluate…”

you will score well.

---

### 5. Build One “Interview-Ready” Reference Project

You do **not** need many projects. You need **one clean, modern one**.

Your reference app should demonstrate:

- Latest Angular (v18/19)
- Standalone components
- Routing with guards
- Reactive forms
- Angular Material
- Clean folder structure
- Simple authentication flow (even mocked)

This gives you concrete talking points:

> “In my last Angular project, I handled…”

---

### 6. Expect System-Design-Style Frontend Questions

At mid-senior level, Angular interviews increasingly resemble system design.

Prepare to answer:

- How do you structure a large Angular app?
- How do you manage shared state?
- How do you prevent performance degradation?
- How do you handle role-based access?
- How do you test Angular apps?

Angular experience + architectural thinking = strong signal.

---

### 7. Interview Mindset Shift (Most Important)

Stop thinking:

> “Angular changes too fast; I can’t keep up.”

Start thinking:

> “Angular evolves, but strong Angular engineers adapt quickly.”

Interviewers are looking for:

- Clear thinking
- Upgrade readiness
- Conceptual clarity
- Professional judgment

Framework churn is assumed.

---

### 8. Practical Weekly Prep Plan (4 Weeks)

**Week 1**

- Review Angular fundamentals
- Re-explain DI, change detection, RxJS aloud

**Week 2**

- Build a small standalone Angular app
- Add Angular Material + reactive forms

**Week 3**

- Study signals, SSR, performance tuning
- Practice explaining trade-offs

**Week 4**

- Mock interviews
- Whiteboard Angular architecture
- Prepare upgrade and migration answers

---

### Final Perspective

Angular version changes are **noise**. Interviews reward:

- Deep understanding
- Calm adaptability
- Architectural thinking

<!-- If you want, I can:

* Create a **targeted Angular interview checklist**
* Simulate **real Angular interview questions**
* Help you position your Angular experience on your resume for senior roles

Tell me which you want to focus on next. -->

## My Angular Skills

<!-- - Route
- RxJS
- Components
- Two-way data bindings
- Unit tests
- Differences with React / VUE -->

<!-- Below is a **practical, interview-driven ordering**, roughly reflecting what **Angular hiring managers most commonly expect and ask about**, from highest to lowest priority. -->

<!-- 1. **Components & Component Lifecycle**
2. **Services & Dependency Injection**
3. **Routing & Navigation (Angular Router)**
4. **RxJS & Observables (Reactive Programming)**
5. **HTTPClient, APIs & Interceptors**
6. **Data Binding (One-way & Two-way)**
7. **Forms (Reactive Forms, Template-driven Forms, Validation)**
8. **Directives & Pipes**
9. **State Management Patterns (Services, Subjects, basic NgRx)**
10. **Unit Testing (Jasmine/Jest, Karma, TestBed)**
11. **Angular CLI & Project Structure**
12. **Performance Optimization (Lazy Loading, Change Detection, AOT)**
13. **Environment Configuration & Build Process**
14. **Security Basics (Guards, Auth flows, XSRF handling)**
15. **Angular vs React / Vue (Architectural Differences)** -->

1. **Components & Component Lifecycle**
2. **Services & Dependency Injection**
3. **Routing & Navigation (Angular Router)**
4. **RxJS & Observables**
5. **HTTPClient, APIs & Interceptors**
6. **Data Binding (One-way & Two-way)**
7. **Forms (Reactive Forms, Template-driven, Validation)**
8. **Directives & Pipes**
9. **Angular Material (UI Components, Theming, CDK basics)**
10. **State Management Patterns (Services, Subjects, basic NgRx)**
11. **Unit Testing (Jasmine/Jest, Karma, TestBed)**
12. **Angular CLI & Project Structure**
13. **Performance Optimization (Lazy Loading, Change Detection, AOT)**
14. **Environment Configuration & Build Process**
15. **Security Basics (Route Guards, Auth flows)**
16. **Angular vs React / Vue (Architectural Differences)**

<!-- This ordering aligns with:

* **Real-world Angular usage**
* **Interview question frequency**
* **What senior engineers are expected to reason about**

If you want an **ultra-compact version** (e.g., LinkedIn “Skills” section), items **1–10** are usually sufficient. -->

For a role that explicitly requires **Angular**, it is better to present your skills in a **structured, Angular-centric way**, rather than as a flat list. Hiring managers and interviewers typically scan for coverage across **core Angular concepts**, **state/data flow**, **testing**, and **ecosystem tooling**.

Below is a **clean, professional organization** you can use, followed by suggestions on **what to add** and **how to position React/Vue comparisons**.

---

### 1. Core Angular Fundamentals

These demonstrate that you understand Angular as a framework (not just the syntax).

- Component-based architecture
- Modules (NgModule / standalone components, if applicable)
- Templates and template syntax
- Data binding:

  - One-way binding
  - Two-way data binding (`[(ngModel)]`)

- Directives:

  - Built-in (`*ngIf`, `*ngFor`, `ngClass`, `ngStyle`)
  - Custom directives

---

### 2. Routing & Navigation

Routing is a must-have for any real Angular application.

- Angular Router
- Route configuration
- Route parameters & query parameters
- Lazy loading modules / routes
- Route guards (AuthGuard, CanActivate, etc.)

---

### 3. State Management & Reactive Programming

This is where Angular differentiates itself strongly.

- RxJS fundamentals:

  - Observables, Subjects, BehaviorSubjects
  - Operators (`map`, `switchMap`, `mergeMap`, `catchError`, etc.)

- Async pipe
- Reactive forms
- Basic state management patterns using services
- (Optional, if applicable): NgRx / Component Store

---

### 4. Forms

Often asked explicitly in interviews.

- Template-driven forms
- Reactive forms
- Form validation (sync & async)
- Custom validators

---

### 5. Services & Dependency Injection

Angular’s DI system is a key concept interviewers look for.

- Services and providers
- Dependency Injection
- HTTPClient
- Interceptors
- Error handling and retry strategies

---

### 6. Testing

Your current list is good here, but you can be more explicit.

- Unit testing with:

  - Jasmine / Jest
  - Karma

- Testing components, services, and pipes
- Mocking services and HTTP calls
- Basic understanding of TestBed

---

### 7. Build, Performance & Best Practices

This shows seniority and production experience.

- Angular CLI
- Environment configuration
- Change detection strategy
- Lazy loading for performance optimization
- AOT compilation
- Code organization & best practices

---

### 8. Angular vs React / Vue (Positioning)

Instead of listing this as a raw bullet, frame it as **comparative understanding**:

- Understanding of architectural differences between Angular, React, and Vue
- Angular’s opinionated framework vs React’s library-based approach
- RxJS-based reactive model vs React hooks
- Template-driven vs JSX-based rendering

This shows **breadth without diluting Angular focus**.

---

### Example Resume-Ready Summary (Concise Version)

> **Angular Skills:**
> Component-based architecture, Angular Router, RxJS and reactive programming, services and dependency injection, reactive and template-driven forms, HTTPClient and interceptors, unit testing (Jasmine/Jest), Angular CLI, performance optimization, and architectural comparison with React and Vue.

---

### Key Advice (Important)

- Do **not** over-emphasize React/Vue if the job is Angular-focused.
- Organize skills by **concept areas**, not individual features.
- If you have production experience (which you clearly do), prioritize **RxJS, DI, routing, testing, and performance** — these matter more than basic bindings.

<!-- If you want, I can:

* Tailor this specifically to a **junior / mid / senior Angular role**
* Rewrite it to match a **specific job description**
* Convert this into **interview talking points** rather than resume bullets
 -->

## My Angular Certificates

## My Angular Courses

## Angular tricks

[Angular i18n in ts](Angular_i18n_in_ts.md)
