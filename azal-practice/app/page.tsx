import { BookingMenuSelect } from "./Components/Tickets/BookingMenu/BookingMenuSelect";
import { BookingMenuTabs } from "./Components/Tickets/BookingMenu/BookingMenuTabs";
import { Header } from "./Components/Header";
import "./globals.css";
import { SpecialOffers } from "./Components/Tickets/Special Offers/SpecialOffers";

export default function Home() {
  return (
    <>
      <div className="">
        <Header />
        <BookingMenuSelect />
        <BookingMenuTabs />
        <SpecialOffers />
      </div>
    </>
  );
}
