# NYSoftech

Modern web and software solutions for growing businesses.

**Website:** nysoftech.in

## About

NYSoftech is a digital solutions and software development company focused on building modern, reliable, and scalable digital products for businesses.

Our services include:

* Web Development
* SaaS Development
* E-Commerce Development
* WordPress Development
* Shopify Development
* Custom Software Development
* UI / UX Design
* Digital Solutions

## Technology Stack

* Next.js
* React
* JavaScript
* Bootstrap
* CSS
* Node.js
* MongoDB

## Project Structure

```text
nysoftech.in/
├── public/
│   ├── images/
│   ├── icons/
│   └── ...
│
├── src/
│   ├── app/
│   │   ├── page.js
│   │   ├── about/
│   │   │   ├── page.js
│   │   │   └── about.css
│   │   ├── contact/
│   │   │   ├── page.js
│   │   │   └── contact.css
│   │   └── ...
│   │
│   └── components/
│       ├── Header.js
│       ├── Footer.js
│       └── ...
│
├── .gitignore
├── package.json
├── package-lock.json
├── next.config.js
└── README.md
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/nysoftech.git
```

Go to the project directory:

```bash
cd nysoftech
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Environment Variables

Create a `.env.local` file in the project root when environment variables are required:

```env
# Database
MONGODB_URI=

# Authentication
NEXTAUTH_SECRET=

# Other API keys
```

Never commit `.env.local` or other files containing private credentials.

## Deployment

The project is optimized for deployment with Vercel.

Recommended deployment flow:

```text
Local Development
       ↓
     GitHub
       ↓
     Vercel
       ↓
nysoftech.in
```

Push changes to GitHub:

```bash
git add .
git commit -m "Update website"
git push origin main
```

Vercel can automatically deploy the latest changes from the connected GitHub repository.

## Available Scripts

```bash
npm run dev
```

Runs the development server.

```bash
npm run build
```

Creates the production build.

```bash
npm start
```

Runs the production server.

```bash
npm run lint
```

Runs the project's linting checks.

## SEO

The website uses Next.js Metadata API for page-level SEO.

Example:

```js
export const metadata = {
    title: "NYSoftech | Digital Solutions",
    description:
        "Modern web and software solutions for growing businesses.",
};
```

Individual pages should have unique titles and descriptions.

## Domain

Production website:

```text
https://nysoftech.in
```

## License

This project is proprietary and intended for NYSoftech. Unauthorized copying, redistribution, or commercial use is not permitted.
