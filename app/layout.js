import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers"; // Import the client-side wrapper
import { ThirdwebProvider } from "thirdweb/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "zkVote",
  description: "Revolution of Decentralized Voting!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThirdwebProvider>
          <Providers>{children}</Providers> {/* ✅ Wrap content with QueryClientProvider */}
        </ThirdwebProvider>
      </body>
    </html>
  );
}
