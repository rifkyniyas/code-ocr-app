import "./globals.css";
import Script from "next/script";
export const metadata = {
  title: "Code OCR App - Extract code from image snippets with few clicks.",
  description:
    "Found an interesting code snippet online and want to try it out asap? Extract code from images with just a few clicks and start using in your project right away. Try Code OCR App for completely free now!",
  verification: {
    google: process.env.GOOGLE_SEARCH_ID,
  },
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
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
        />

        <Script strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}', {
            page_path: window.location.pathname,
            });
                `}
        </Script>
      </body>
    </html>
  );
}
