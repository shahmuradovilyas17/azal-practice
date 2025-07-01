import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { StateProvider } from "./Components/context";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <StateProvider>
          <>
            <Header />
          </>
          <>{children}</>
          <>
            <Footer />
          </>
        </StateProvider>
      </body>
    </html>
  );
}
