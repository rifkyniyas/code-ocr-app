"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import "./globals.css";

export const metadata = {
  title: "Code-OCR App - Extract your code from image snippets",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-text">
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
