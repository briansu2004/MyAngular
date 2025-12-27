# My Angular

- [My Angular Versions](#my-angular-versions)
- [My Angular Projects](#my-angular-projects)
  - [Project 7](#project-7)
  - [Project 6](#project-6)
  - [Project 5](#project-5)
  - [Project 4](#project-4)
  - [Project 3](#project-3)
  - [Project 2](#project-2)
  - [Project 1](#project-1)
- [My Angular Skills](#my-angular-skills)
- [My Angular Certificates](#my-angular-certificates)
- [My Angular Courses](#my-angular-courses)
- [Angular tricks](#angular-tricks)

## My Angular Versions

- v17
- v19
- v21

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

## My Angular Skills

- Route
- RxJS
- Components
- Two-way data bindings
- Unit tests
- Differences with React / VUE

## My Angular Certificates

## My Angular Courses

## Angular tricks

[Angular i18n in ts](Angular_i18n_in_ts.md)
