import Image from "next/image";
import Header from "@/components/header/header";
import "./styles.css";
import Thele from "@/components/thele/thele";
import Thamgia from "@/components/thamgia/thamgia";
import Danhsach from "@/components/baithi/danhsach";

export const metadata = {
  title: "Dấu ấn trên từng bước chân - VietnamBooking",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Thele />
        <Thamgia />
        <Danhsach />
      </main>
    </>
  );
}
