import { BookingMenuSelect } from "./Components/Tickets/BookingMenuSelect";
import { BookingMenuTabs } from "./Components/Tickets/BookingMenuTabs";
import { Header } from "./Components/Header";
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="pb-8">
        <Header />
        <BookingMenuSelect />
        <BookingMenuTabs />
      </div>
    </>
  );
}
