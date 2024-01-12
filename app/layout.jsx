import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import FooTer from "@/components/FooTer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cineflix",
  description: "A Movie Renting Web Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
        <FooTer />
      </body>
    </html>
  );
}
