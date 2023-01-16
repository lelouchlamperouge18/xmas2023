import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Yrsa } from "@next/font/google";

const inter = Yrsa({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
