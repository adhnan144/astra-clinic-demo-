/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Doctor from "./components/Doctor";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Experience from "./components/Experience";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] font-sans text-[var(--color-navy)] selection:bg-[var(--color-gold)] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Doctor />
        <WhyChooseUs />
        <Testimonials />
        <Experience />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
