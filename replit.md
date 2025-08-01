# Overview

ValidateNow is a full-stack web application that provides professional SaaS validation services to startups. The platform helps entrepreneurs test market demand for their startup ideas through comprehensive validation packages that include demo video creation, landing page design, and targeted advertising campaigns. The application features a modern landing page with contact forms, pricing calculators, and service showcases to convert potential clients.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client is built with React 18 using TypeScript and follows a component-based architecture. The application uses Vite as the build tool and bundler, providing fast development and optimized production builds. The frontend implements a single-page application (SPA) pattern using Wouter for lightweight client-side routing.

**UI Framework**: The application leverages shadcn/ui components built on top of Radix UI primitives, providing accessible and customizable interface elements. Tailwind CSS handles styling with a custom design system that includes CSS variables for consistent theming and a glass morphism aesthetic.

**State Management**: React Query (TanStack Query) manages server state and API interactions, providing caching, background updates, and optimistic updates. Local component state is handled through React's built-in useState and useForm hooks for form management.

**Form Handling**: React Hook Form with Zod validation ensures type-safe form processing and validation. Forms include proper error handling and user feedback through toast notifications.

## Backend Architecture
The server uses Express.js with TypeScript, implementing a RESTful API architecture. The application follows a modular structure with clear separation of concerns between routing, storage, and business logic.

**API Design**: RESTful endpoints handle contact form submissions and data retrieval. The server includes comprehensive error handling, request logging, and proper HTTP status codes.

**Storage Layer**: The application implements an interface-based storage pattern with both in-memory and database storage options. The current implementation uses memory storage for development but is designed to easily swap to PostgreSQL using Drizzle ORM.

**Development Environment**: Vite integration provides hot module replacement and development middleware, allowing the Express server to serve the React application in development while maintaining separate production builds.

## Data Storage
The application uses Drizzle ORM as the database toolkit, configured for PostgreSQL with Neon Database as the provider. The schema includes tables for users and contact inquiries with proper TypeScript type generation.

**Schema Design**: Database tables are defined using Drizzle's schema builder with automatic UUID generation, timestamps, and proper indexing. The schema includes validation at both the database and application levels using Zod schemas.

**Migration Strategy**: Drizzle Kit handles database migrations and schema changes, with configuration supporting both development and production environments.

## Authentication & Authorization
The current implementation includes basic user schema preparation but does not implement active authentication. The architecture is prepared for session-based authentication with PostgreSQL session storage using connect-pg-simple.

## External Dependencies

**Database**: PostgreSQL via Neon Database (@neondatabase/serverless) for scalable, serverless database hosting
**UI Components**: Radix UI component primitives for accessible, unstyled UI components
**Styling**: Tailwind CSS for utility-first styling with PostCSS for processing
**Form Management**: React Hook Form with Hookform Resolvers for validation integration
**Validation**: Zod for runtime type checking and schema validation
**State Management**: TanStack React Query for server state management and caching
**Date Handling**: date-fns for date manipulation and formatting
**Development**: Vite for fast development and building, with TypeScript for type safety
**Deployment**: ESBuild for server-side bundling and Node.js runtime optimization