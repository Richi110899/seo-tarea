import Navbar from "../components/Navbar";
import "../styles/globals.css"; // o Tailwind CSS si lo usas

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
