## The Food Whisperer

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## Ethical AI for Real-Time Food Rescue
The Food Whisperer is a socially responsible AI dispatcher designed to bridge the logistical gap between food surplus and community need. Built specifically for the challenges of food rescue in Bangladesh, it replaces manual coordination with an automated, ethics-driven engine.

## Project Concept
The core of the project is the "11 PM Problem"—the window where manual coordination fails and food waste peaks. Our solution uses a Low-Friction SMS Interface and an Autonomous AI Matching Engine to ensure surplus food reaches the most needy shelters in milliseconds.

## Ethical Frameworks (AILP Integration)
Equity Score: An algorithm that prioritizes fairness over proximity.

Safety Gate: A "Moral Compass" check that halts dispatch if food safety is questionable.

Psychological Safety: A non-punitive reporting system for volunteers and drivers.
This is a professional and comprehensive README. To make it "more beautiful" and truly modern, we should use visual hierarchy, cleaner formatting, and strategic placement of your new brand assets.

## Ethical Frameworks (AILP Integration)
Equity Score: An algorithm that prioritizes fairness over proximity.

Safety Gate: A "Moral Compass" check that halts dispatch if food safety is questionable.

Psychological Safety: A non-punitive reporting system for volunteers and drivers.

## Key Features
Universal SMS/WhatsApp Interface: Accessible communication for donors, shelters, and drivers without requiring high-end smartphones or complex apps.

AI Matching Engine: Intelligent matching based on Need Score (recency, capacity, and demographics).

Safety Gate: Integrated AI filters ensure all donations meet stringent food safety standards before a driver is dispatched.

Modern Admin Dashboard: A high-trust interface for staff to monitor real-time rescues and system health.

## Real-time Monitoring: Live geo-spatial tracking of active rescues and audit logs for algorithmic transparency.
Tech Stack & ArchitectureLayerTechnologyPurposeFrontendNext.js 14, Tailwind CSSHigh-performance Admin Dashboard & Portal.Backend/AIGoogle Genkit, Firebase FunctionsAI Logic, Matching Engine, and Safety Gate.DatabaseFirebase FirestoreReal-time user profiles and rescue logs.CommunicationTwilio / SMS GatewayLow-friction user interface.

## Why It's Useful

Food Whisperer addresses food insecurity in Bangladesh by:

- Minimizing food waste from surplus donations
- Ensuring equitable distribution to shelters based on need
- Providing an accessible platform for all stakeholders
- Using AI to optimize matching parameters for fairness and efficiency

## Getting Started
### Prerequisites

- Node.js 18+
- npm or yarn
- Firebase project setup

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/food-whisperer.git
   cd food-whisperer
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   ```bash
   cp env.example .env.local
   ```

   Fill in your Firebase configuration and other required variables.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:9002](http://localhost:9002) in your browser.

### Usage

- Access the admin dashboard at `/dashboard`
- Manage donors, shelters, and drivers through the respective tabs
- Monitor rescues and audit logs
- Use the AI optimization tools for score parameter tuning

### Building for Production

```bash
npm run build
npm start
```

## Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run genkit:dev` - Start Genkit AI development server
- `npm run genkit:watch` - Start Genkit AI with watch mode
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

📁 Project Structure

```
src/
├── ai/                 # AI flows and Genkit configuration
├── app/                # Next.js app router pages
├── components/         # Reusable UI components
├── firebase/           # Firebase configuration and providers
├── hooks/              # Custom React hooks
└── lib/                # Utilities, types, and data
```

<img width="512" height="512" alt="image" src="https://github.com/user-attachments/assets/9d13af93-4bf1-47cc-b168-3bca077e6806" />
Getting Help

- **Documentation**: See `docs/blueprint.md` for detailed project specifications
- **Issues**: Report bugs or request features on [GitHub Issues](https://github.com/your-username/food-whisperer/issues)
- **Discussions**: Join community discussions on [GitHub Discussions](https://github.com/your-username/food-whisperer/discussions)

🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](docs/CONTRIBUTING.md) for details on how to get involved.

📜 License
Distributed under the MIT License. See LICENSE for more information.

Maintainer: [Shafayat Saad](https://github.com/shafayatsaad) Developed as a Capstone for the Aspire/Sana AILP Program.

- [Shafayat Saad](https://github.com/shafayatsaad) - Project Lead
