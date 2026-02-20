import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import Products from "@/components/Products";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Values />
        <Products />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
