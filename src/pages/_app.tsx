import "@/styles/globals.css";
import type { AppProps } from "next/app";
import RootLayout from "./components/RootLayout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from "@/store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <div className="text-bodyFont bg-gray-300">
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </div>
      </PersistGate>
    </Provider>
  );
}
