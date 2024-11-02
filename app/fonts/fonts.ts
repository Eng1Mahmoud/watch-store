import { Poppins } from "next/font/google";
import localFont from "next/font/local";

// google fonts
export const mainFont_en = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--main-font",
});

// local fonts
export const mainFont_ar = localFont({
  src: "../../public/fonts/main_ar.ttf",
  display: "swap",
  variable: "--main-font",
});
