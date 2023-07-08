import "@/styles/globals.css";
import type { AppProps } from "next/app";
import RootLayout from "./components/RootLayout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="text-bodyFont">
      <RootLayout>
        <Component {...pageProps} />
       </RootLayout>
    </div>
  );
}
