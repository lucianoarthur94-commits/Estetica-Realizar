import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO } from '../data';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[hsl(24,18%,6%,0.92)] backdrop-blur-md py-4 border-b border-[hsla(46,65%,53%,0.15)] shadow-lg shadow-black/40'
          : 'bg-transparent py-6 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#inicio"
          className="font-serif text-xl sm:text-2xl font-normal tracking-wide text-[hsl(var(--text-main))] hover:text-[hsl(var(--primary-gold))] transition-colors whitespace-nowrap shrink-0"
        >
          <span className="italic font-light">Clínica</span> Realizar
        </a>

        {/* Zone 2: 4 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider uppercase text-[hsl(var(--text-muted))]">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#inicio');
            }}
            className="hover:text-[hsl(var(--primary-gold))] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[hsl(var(--primary-gold))] after:scale-x-0 hover:after:scale-x-100 after:transition-transform whitespace-nowrap shrink-0"
          >
            Início
          </a>
          <a
            href="#servicos"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#servicos');
            }}
            className="hover:text-[hsl(var(--primary-gold))] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[hsl(var(--primary-gold))] after:scale-x-0 hover:after:scale-x-100 after:transition-transform whitespace-nowrap shrink-0"
          >
            Serviços
          </a>
          <a
            href="#sobre"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#sobre');
            }}
            className="hover:text-[hsl(var(--primary-gold))] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[hsl(var(--primary-gold))] after:scale-x-0 hover:after:scale-x-100 after:transition-transform whitespace-nowrap shrink-0"
          >
            Sobre
          </a>
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contato');
            }}
            className="hover:text-[hsl(var(--primary-gold))] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[hsl(var(--primary-gold))] after:scale-x-0 hover:after:scale-x-100 after:transition-transform whitespace-nowrap shrink-0"
          >
            Contato
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#120e0a] bg-[hsl(var(--primary-gold))] hover:bg-[hsl(var(--primary-gold-light))] rounded-full transition-all duration-300 hover:shadow-[0_0_20px_hsla(46,65%,53%,0.4)] whitespace-nowrap shrink-0 active:scale-95"
          >
            <span>Agendar Horário</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[hsl(var(--text-main))] hover:text-[hsl(var(--primary-gold))] transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[hsl(24,18%,6%,0.98)] border-b border-[hsla(46,65%,53%,0.2)] px-6 py-6 transition-all duration-300 backdrop-blur-xl">
          <nav className="flex flex-col gap-4 text-base tracking-wider uppercase">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#inicio');
              }}
              className="py-2 text-[hsl(var(--text-main))] hover:text-[hsl(var(--primary-gold))]"
            >
              Início
            </a>
            <a
              href="#servicos"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#servicos');
              }}
              className="py-2 text-[hsl(var(--text-main))] hover:text-[hsl(var(--primary-gold))]"
            >
              Serviços
            </a>
            <a
              href="#sobre"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#sobre');
              }}
              className="py-2 text-[hsl(var(--text-main))] hover:text-[hsl(var(--primary-gold))]"
            >
              Sobre
            </a>
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contato');
              }}
              className="py-2 text-[hsl(var(--text-main))] hover:text-[hsl(var(--primary-gold))]"
            >
              Contato
            </a>
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-center text-xs font-semibold uppercase tracking-widest text-[#120e0a] bg-[hsl(var(--primary-gold))] rounded-full"
              >
                Agendar Horário
              </button>
              <a
                href={`https://wa.me/${CLINIC_INFO.phoneSanitized}?text=${encodeURIComponent(
                  'Olá! Gostaria de informações sobre design de sobrancelhas na Clínica Realizar.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center text-xs font-semibold uppercase tracking-widest text-[hsl(var(--secondary-quartz))] border border-[hsla(330,81%,71%,0.4)] rounded-full hover:bg-[hsla(330,81%,71%,0.1)] transition-colors"
              >
                WhatsApp Direto
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
