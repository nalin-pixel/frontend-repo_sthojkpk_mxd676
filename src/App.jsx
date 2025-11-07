import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventsSection from './components/EventsSection';
import TeamSection from './components/TeamSection';
import GallerySection from './components/GallerySection';
import BlogSection from './components/BlogSection';

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} SAEINDIA Club · IIITDM Kurnool. All rights reserved.</p>
          <div className="text-sm text-slate-600">
            Built with passion for motorsport and engineering excellence.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <EventsSection />
        <TeamSection />
        <GallerySection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
