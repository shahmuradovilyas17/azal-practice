import { Footer } from "./Components/Tickets/Footer";
import { Header } from "./Components/Tickets/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <>
          <Header />
        </>
        <>{children}</>
        <>
          <Footer />
        </>
      </body>
    </html>
  );
}
