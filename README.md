# Food Whisperer

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Food Whisperer is an AI-powered food rescue dispatch system designed to connect food donors with shelters in Bangladesh. It uses advanced matching algorithms to ensure fair and efficient distribution of surplus food, reducing waste and addressing hunger.

## Key Features

- **SMS/WhatsApp Interface**: Accessible communication for donors, shelters, and drivers
- **AI Matching Engine**: Intelligent matching based on Need Score (recency, capacity, demographics) and Equity Score optimization
- **Safety Gate**: Ensures all donations meet food safety standards
- **Admin Dashboard**: Web-based interface for managing users, rescues, and system oversight
- **Real-time Monitoring**: Track rescues, audit logs, and system performance

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

### Project Structure

```
src/
├── ai/                 # AI flows and Genkit configuration
├── app/                # Next.js app router pages
├── components/         # Reusable UI components
├── firebase/           # Firebase configuration and providers
├── hooks/              # Custom React hooks
└── lib/                # Utilities, types, and data
```

## Getting Help

- **Documentation**: See `docs/blueprint.md` for detailed project specifications
- **Issues**: Report bugs or request features on [GitHub Issues](https://github.com/your-username/food-whisperer/issues)
- **Discussions**: Join community discussions on [GitHub Discussions](https://github.com/your-username/food-whisperer/discussions)

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](docs/CONTRIBUTING.md) for details on how to get involved.

## Maintainers

- [Shafayat Saad](https://github.com/shafayatsaad) - Project Lead

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
