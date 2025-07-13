import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Orbitron } from "next/font/google";

// Load Orbitron font from Google Fonts
const orbitron = Orbitron({ subsets: ["latin"], weight: ["600", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={orbitron.className}>
      <Component {...pageProps} />
    </main>
  );
}

