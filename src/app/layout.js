import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/context/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import "./globals.css";
import Footer1 from "@/components/custom/Footer";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
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
          "min-h-screen bg-background antialiased",
          poppins.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Navbar /> */}
          {children}
          <Footer1 />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
