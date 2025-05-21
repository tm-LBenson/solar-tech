import NavBar from '../../components/NavBar';
import Hero from '../../components/Hero';
import Pricing from '../../components/Pricing';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
