import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

import './globals.css';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Cardify - The Ultimate Flashcard App',
  description: 'The best app to create, manage, and study flashcards effectively.',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}