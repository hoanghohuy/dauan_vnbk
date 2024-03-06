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
  title: "Cuộc thi Dấu ấn trên từng bước chân - Vietnambooking Event",
  description:
    "Hãy chia sẻ những kỷ niệm tại một vùng đất trên thế giới mà bạn đã đi qua! Trong đó ghi lại cảm nhận của bạn về cảnh đẹp, con người, văn hóa, hoạt động thú vị,... để truyền cảm hứng, thu hút bạn đọc đến vùng đất này.",
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
