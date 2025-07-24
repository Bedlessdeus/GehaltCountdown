# 💰 Gehalt Countdown

A beautiful, real-time countdown timer that tracks the time remaining until your next salary payment. Built with SvelteKit and styled with TailwindCSS.

## ✨ Features

- **🕒 Real-time Countdown**: Live updates every second showing days, hours, minutes, and seconds until next payday
- **🎨 Beautiful UI**: Dark gradient design with smooth animations and hover effects
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **🔗 Embeddable Widget**: Easily embed the countdown on any website with customizable options
- **🌙 Theme Support**: Light and dark theme options for embeds
- **📋 API Endpoints**: RESTful API for integrating countdown data into other applications
- **📖 Documentation**: Comprehensive embed documentation with examples

## 🚀 Live Demo

Visit the live application: [Your Live URL Here]

## 📸 Screenshots

### Main Page
![Main Countdown Page](screenshot-main.png)

### Embeddable Widget
![Embeddable Widget](screenshot-embed.png)

## 🛠️ Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) v2
- **Styling**: [TailwindCSS](https://tailwindcss.com/) v4
- **Language**: TypeScript
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Package Manager**: Bun (or npm/pnpm/yarn)

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bedlessdeus/GehaltCountdown.git
   cd GehaltCountdown
   ```

2. **Install dependencies**
   ```bash
   # Using Bun (recommended)
   bun install
   
   # Or using npm
   npm install
   
   # Or using pnpm
   pnpm install
   ```

3. **Start development server**
   ```bash
   # Using Bun
   bun run dev
   
   # Or using npm
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🔧 Available Scripts

- `dev` - Start development server
- `build` - Build for production
- `preview` - Preview production build
- `check` - Run type checking
- `format` - Format code with Prettier
- `lint` - Check code formatting

## 📊 API Endpoints

### GET `/api/countdown`
Returns the current countdown data in JSON format.

**Response:**
```json
{
  "days": 15,
  "hours": 8,
  "minutes": 23,
  "seconds": 45
}
```

### GET `/api/next-payment`
Returns the next payment date information.

**Response:**
```json
{
  "nextPaymentDate": "2025-01-31T13:00:00.000Z",
  "formattedDate": "31. Januar 2025, 13:00"
}
```

## 🎯 Embedding the Widget

You can embed the countdown widget on any website using an iframe:

### Basic Embed
```html
<iframe 
  src="https://your-domain.com/embed" 
  width="600" 
  height="200" 
  frameborder="0" 
  scrolling="no">
</iframe>
```

### Customization Options

The embed supports several URL parameters for customization:

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| `theme` | `light`, `dark` | `light` | Color theme |
| `compact` | `true`, `false` | `false` | Compact mode without title |
| `labels` | `true`, `false` | `true` | Show/hide time unit labels |
| `bg` | Hex color | `#f8fafc` | Background color |

### Examples

**Dark Theme:**
```html
<iframe src="https://your-domain.com/embed?theme=dark&bg=%231f2937" width="600" height="200"></iframe>
```

**Compact Mode:**
```html
<iframe src="https://your-domain.com/embed?compact=true" width="600" height="120"></iframe>
```

**Without Labels:**
```html
<iframe src="https://your-domain.com/embed?labels=false" width="600" height="160"></iframe>
```

## 🏗️ Project Structure

```
src/
├── lib/
│   ├── components/          # Reusable Svelte components
│   ├── stores/             # Svelte stores for state management
│   └── utils/              # Utility functions
│       └── payment.ts      # Payment calculation logic
├── routes/
│   ├── api/               # API endpoints
│   │   ├── countdown/     # Countdown data endpoint
│   │   ├── embed/         # Embed endpoint
│   │   └── next-payment/  # Next payment endpoint
│   ├── docs/              # Documentation page
│   ├── embed/             # Embeddable widget page
│   ├── +layout.svelte     # Root layout
│   └── +page.svelte       # Main page
└── app.html               # HTML template
```

## ⚙️ Configuration

### Payment Schedule

The payment calculation logic is in `src/lib/utils/payment.ts`. By default, it calculates payments for the last day of each month at 1:00 PM. You can modify this logic to match your specific payment schedule.

### Styling

The application uses TailwindCSS for styling. The main theme colors and design can be customized in the Svelte components or by modifying the Tailwind configuration.

## 🚀 Deployment

### Build for Production

```bash
bun run build
```

### Deploy Options

The project is configured with `@sveltejs/adapter-node` for deployment to Node.js environments. You can easily deploy to:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Deploy with git integration
- **Docker**: Use the built Node.js application
- **VPS/Server**: Deploy the Node.js build directly

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Bedlessdeus**
- GitHub: [@Bedlessdeus](https://github.com/Bedlessdeus)

## 🙏 Acknowledgments

- Built with [SvelteKit](https://kit.svelte.dev/)
- Styled with [TailwindCSS](https://tailwindcss.com/)

---

<div align="center">
  <p>Made with ❤️ for tracking salary payments</p>
  <p>
    <a href="https://github.com/Bedlessdeus/GehaltCountdown">⭐ Star this repo if you find it useful!</a>
  </p>
</div>
