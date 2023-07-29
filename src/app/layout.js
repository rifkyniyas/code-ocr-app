import "./globals.css";

export const metadata = {
  title: "Code OCR App - Extract code from image snippets with few clicks.",
  description:
    "Found an interesting code snippet online and want to try it out asap? Extract code from images with just a few clicks and start using in your project right away. Try Code OCR App for completely free now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-text">{children}</body>
    </html>
  );
}
