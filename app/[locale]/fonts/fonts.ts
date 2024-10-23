import { Poppins } from "next/font/google";
/* import localFont from "next/font/local"; */

// google fonts
export const mainFont = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--main-font",
});

/* // local fonts
export const mainFont = localFont({
  src: "./main.otf",
  display: "swap",
  variable: "--main-font",
});
 */
