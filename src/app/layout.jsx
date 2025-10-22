import "./globals.css";
import "./animation.css";
import localFont from "next/font/local"
import Header from "@/components/Header";
import BottomBar from "@/components/BottomBar";

const productSans = localFont({
  src:'../../public/fonts/PRODUCTSANS-REGULAR.ttf'
})

export const metadata = {
  title: "Sharvanth Rapolu",
  description: "It's about me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={productSans.className}>
      <body style={{backgroundColor:"black" }}>
        <div>
          <Header />
        </div>
        <div className="pt-[80px]">{children}</div>
        <div className="mt-[100px]">
            <BottomBar />
        </div>
      </body>
    </html>
  );
}
