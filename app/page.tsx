import { BookingMenuSelect } from "./Components/Tickets/BookingMenu/BookingMenuSelect";
import { BookingMenuTabs } from "./Components/Tickets/BookingMenu/BookingMenuTabs";
import { Header } from "./Components/Header";
import "./globals.css";
import { SpecialOffers } from "./Components/Tickets/Special Offers/SpecialOffers";
import { PopularDestinations } from "./Components/Tickets/PopularDestinations/PopularDestinations";
import { Footer } from "./Components/Footer";

export default function Home() {
  return (
    <>
      <div className="">
        <Header />
        <BookingMenuSelect />
        <BookingMenuTabs />
        <SpecialOffers />
        <PopularDestinations />
        <Footer />
      </div>
    </>
  );
}
