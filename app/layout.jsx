"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
// import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className="dark:bg-black">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}