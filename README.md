# SkillTree Web

A web application for the SkillTree project, built with React.

## Features

- User authentication and password reset
- Email verification
- Responsive UI with custom components
- Modular page and component structure

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Installation

```bash
npm install
```

### Running the App

```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

```bash
npm run build
```

### Running Tests

```bash
npm test
```

### Linting

This project uses the default `react-app` ESLint configuration.

To check for lint errors, you can use:

```bash
npx eslint ./src
```

> **Note:** If you want to customize linting, add an `eslint` script and install ESLint as a dev dependency.

## Project Structure

- `src/components/` - Reusable UI components
- `src/pages/` - Main application pages
- `src/routes/` - Route definitions
- `src/App.js` - Main app component
- `src/index.js` - Entry point

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request

## License

[MIT](LICENSE)
