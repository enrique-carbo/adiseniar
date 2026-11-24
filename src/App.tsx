import {MessageCircle} from 'lucide-react';
import {BlogSection} from './components/BlogSection';
import {ContactSection} from './components/ContactSection';
import {Footer} from './components/Footer';
import {Hero} from './components/Hero';
import {Navbar} from './components/Navbar';
import {Portfolio} from './components/Portfolio';
import {Services} from './components/Services';
import {Testimonials} from './components/Testimonials';
import {buildWhatsAppUrl} from './data/siteData';
import {useTheme} from './hooks/useTheme';

export default function App() {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111827] transition-colors duration-150 dark:bg-[#090D16] dark:text-[#F3F4F6]">
      <Navbar />
      <main>
        <Hero theme={theme} onToggleTheme={toggleTheme} />
        <Services />
        <Portfolio />
        <Testimonials />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer theme={theme} onToggleTheme={toggleTheme} />

      {/* Compact Direct WhatsApp Action (keeps mobile sticky height <= 15% of viewport) */}
      <a
        href={buildWhatsAppUrl('Hola ADISENIAR, quiero hacer una consulta directa.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp al +54 9 343 471-8183"
        className="fixed right-4 bottom-4 z-40 inline-flex h-11 items-center gap-2 rounded-full border border-[#0B1F4B]/20 bg-[#0B1F4B] px-4 text-xs font-semibold text-white shadow-sm transition-transform duration-150 hover:scale-[1.02] hover:bg-[#132E6B] dark:border-[#3B82F6]/30 dark:bg-[#2563EB] dark:hover:bg-[#3B82F6]"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
