import Header from "@/components/header/header";
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
