import { Header } from "./Components/Header";
import { NavBar } from "./Components/NavBar/NavBar";
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="bg-[#01357e] pb-8">
        <Header />
        <NavBar />
      </div>
    </>
  );
}
