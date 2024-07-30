import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/context/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import "./globals.css";
import Navbar from "@/components/custom/Navbar";

const fontSans = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight:["100", "200", "300", "400", "500", "600", "700"]
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
          " min-h-screen px-5 bg-background antialiased",
          fontSans.className
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
