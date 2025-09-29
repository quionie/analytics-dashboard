# Analytics Dashboard

A modern, responsive analytics dashboard built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 📊 **Interactive Charts**: Bar charts, line charts, and pie charts powered by Recharts
- 🎨 **Modern UI**: Clean, responsive design with Tailwind CSS
- 📱 **Mobile Responsive**: Optimized for all screen sizes
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🔧 **TypeScript**: Full type safety and better developer experience
- 📈 **Real-time Metrics**: Display key business metrics and KPIs

## Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Composable charting library
- **Lucide React** - Beautiful, customizable icons

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/quionie/analytics-dashboard.git
   cd analytics-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
src/
├── App.tsx          # Main dashboard component
├── main.tsx         # Application entry point
├── index.css        # Global styles with Tailwind
└── assets/          # Static assets
```

## Customization

### Adding New Charts

1. Import the required chart components from Recharts
2. Create your data array with the appropriate structure
3. Add the chart component to your dashboard

### Styling

The project uses Tailwind CSS for styling. You can:
- Modify the `tailwind.config.js` for custom theme configuration
- Use utility classes directly in your components
- Extend the design system with your own components

### Data Sources

To connect real data:
1. Replace the mock data in `App.tsx` with API calls
2. Use React Query or SWR for data fetching and caching
3. Add loading states and error handling

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Other Platforms

The built application is static files that can be deployed to any web server or CDN.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).