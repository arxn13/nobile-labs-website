import { Navbar } from '@/components/site/navbar';
import { Hero } from '@/components/site/hero';
import { Services } from '@/components/site/services';
import { Technologies } from '@/components/site/technologies';
import { Process } from '@/components/site/process';
import { WhyChooseUs } from '@/components/site/why-choose-us';
import { About } from '@/components/site/about';
import { Contact } from '@/components/site/contact';
import { Footer } from '@/components/site/footer';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Technologies />
      <Process />
      <WhyChooseUs />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
