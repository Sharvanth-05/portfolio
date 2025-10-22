import "./globals.css";
import "./animation.css";
import Header from "@/components/Header";
import BottomBar from "@/components/BottomBar";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: "Sharvanth Rapolu",
  description: "It's about me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{backgroundColor:"black", fontFamily:"Product Sans"}}>
        <div>
          <Header />
        </div>
        <div className="pt-[80px]">{children} <Analytics /></div>
        <div className="mt-[100px]">
            <BottomBar />
        </div>
      </body>
    </html>
  );
}
