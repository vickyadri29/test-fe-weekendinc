import Head from "next/head";

// import {Head} from 'next/document'

// Import Components
import Navbar from "../components/Navbar";
import Headers from "../components/Headers";
import Deffinition from "../components/Deffinition";
import Testimonial from "../components/Testimonial";
import Pov from "../components/Pov";
import Resource from "../components/Resource";
import HelpAndTips from "../components/HelpAndTips";
import Closing from "../components/Closing";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Test Fe | Weekendinc .</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
        />
      </Head>

      <div className="font-worksans bg-black">
        <Navbar />
        <Headers />
        <Deffinition />
        <Testimonial />
        <Pov />
        <Resource />
        <HelpAndTips />
        <Closing />
        <Footer />
      </div>
    </>
  );
}
