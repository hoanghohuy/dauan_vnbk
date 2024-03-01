import Header from "@/components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/app/globals.css";
import "@/app/styles.css";

export default function DetailLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
