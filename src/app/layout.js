import "./globals.css";

export const metadata = {
  title: "Code OCR App - Extract code from image snippets with few clicks.",
  description:
    "Found an interesting code snippet online and want to try it out asap? Extract code from images with just a few clicks and start using in your project right away. Try Code OCR App for completely free now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-text">
        {children}
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="rifkyniyas"
          data-description="Support me on Buy me a coffee!"
          data-message=""
          data-color="#40DCA5"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        ></script>
      </body>
    </html>
  );
}
