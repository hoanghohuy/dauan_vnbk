import "./globals.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/header/header";
import Thele from "@/components/thele/thele";
import Thamgia from "@/components/thamgia/thamgia";
import Danhsach from "@/components/baithi/danhsach";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer />
    </>
  );
}
