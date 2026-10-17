import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from './data';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--canvas-bg))] text-[hsl(var(--text-main))] flex flex-col font-sans selection:bg-[hsl(var(--primary-gold))]/25 selection:text-[hsl(var(--primary-gold))] relative">
      {/* Fixed Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Layout */}
      <main className="flex-1">
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <Services onOpenBooking={(id) => handleOpenBooking(id)} />
        <About />
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialServiceId={selectedServiceId}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href={`https://wa.me/${CLINIC_INFO.phoneSanitized}?text=${encodeURIComponent(
          'Olá! Gostaria de tirar uma dúvida sobre os serviços da Clínica Realizar.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-3.5 sm:p-4 rounded-full bg-[hsl(var(--primary-gold))] text-[#120e0a] hover:bg-[hsl(var(--primary-gold-light))] shadow-[0_4px_25px_hsla(46,65%,53%,0.4)] hover:shadow-[0_6px_35px_hsla(46,65%,53%,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group"
        aria-label="Abrir conversa no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-semibold tracking-wider uppercase pl-0 group-hover:pl-2">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
