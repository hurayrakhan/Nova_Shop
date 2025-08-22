import "./globals.css";

export const metadata = {
  title: "NovaShop",
  description: "Simple shop demo built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
