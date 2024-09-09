import { Footer } from "@/components/footer";
import { MainNav } from "@/components/navbar/main-nav";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/cn";
import { roboto } from "./fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="!scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className={cn(
          roboto.className,
          "relative min-h-screen overflow-x-hidden text-foreground/90 antialiased",
        )}
      >
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">
              <MainNav />
              {children}
            </div>
            <Footer />
            <div
              style={{
                background:
                  "linear-gradient(130deg, rgba(247,237,20,1) 0%, rgba(70,125,190,1) 50%)",
                animationDuration: "8000ms",
              }}
              className="fixed right-0 top-[-20%] size-[60rem] animate-spin rounded-full opacity-35 blur-[10rem]"
            />
            <div
              style={{
                background:
                  "linear-gradient(297deg, rgba(105,184,82,1) 35%, rgba(75,133,179,1) 70%)",
                animationDuration: "6500ms",
              }}
              className="fixed bottom-[-50%] left-0 size-[45rem] animate-spin rounded-full opacity-25 blur-[10rem]"
            />
          </div>
        </Providers>
      </body>
    </html>
  );
}
