import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import { ThemeProvider } from "@/context/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import "./globals.css";
import Navbar from "@/components/custom/Navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "ODOP",
  description:
    "ODOP Initiative for local artisans helping them scale thier dreams",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          " min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
