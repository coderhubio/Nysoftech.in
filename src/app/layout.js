import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import BootstrapClient from "../components/BootstrapClient";

import "./globals.css";

export const metadata = {
    title: "NYSoftech | Web & Software Solutions",
    description: "NYSoftech delivers modern web development, custom software, e-commerce, SaaS, and digital solutions for growing businesses.",

};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>

                <BootstrapClient />

                {children}

            </body>
        </html>
    );
}