import Head from "next/head";

// Import Components
import Navbar from "../components/Navbar";
import Headers from "../components/Headers";
import Deffinition from "../components/Deffinition";
import Testimonial from "../components/Testimonial";
import Pov from "../components/Pov";
import Resource from "../components/Resource";
import HelpAndTips from "../components/HelpAndTips";

export default function Home() {
  return (
    <section>
      <Head>
        <title>Create Next App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <title>Test Fe | Weekendinc .</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="font-worksans">
        <Navbar />
        <Headers />
        <Deffinition />
        <Testimonial />
        <Pov />
        <Resource />
        <HelpAndTips />
      </div>
    </section>
  );
}
