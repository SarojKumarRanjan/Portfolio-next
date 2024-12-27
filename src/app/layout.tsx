import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navigation from "@/components/layout/Navigation";

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio | Full Stack Developer',
  description: 'Personal portfolio showcasing my projects and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
            <div className="fixed inset-0 -z-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3B82F6,transparent)]" />
            </div>
            <Navigation />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}