import BrowserMenu from "./Components/BrowserMenu/Page";
import Contact from "./Components/Contact/Page";
import Head from "./Components/Home/Page";
import "./globals.css";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Head />

      {/* Menu Section */}
      <BrowserMenu />
      <Contact />
    </div>
  );
}
