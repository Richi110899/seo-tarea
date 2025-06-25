import { Roboto } from "next/font/google";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

// Carga la fuente con los estilos que necesitas
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // puedes ajustar según lo que necesites
});

export default function App({ Component, pageProps }) {
  return (
    <div className={roboto.className}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
