import React from 'react';
import { ArrowUp, Instagram, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[hsl(24,18%,4%)] border-t border-[hsla(46,65%,53%,0.15)] py-16 text-[hsl(var(--text-muted))]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-serif text-2xl font-normal text-[hsl(var(--text-main))] tracking-wide">
            <span className="italic font-light">Clínica</span> Realizar
          </span>
          <p className="text-xs text-[hsl(var(--text-muted))] mt-1 font-light max-w-sm">
            Design de sobrancelhas, visagismo e micropigmentação de alta precisão em Lauro de Freitas - BA.
          </p>
        </div>

        {/* Quiet Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-widest">
          <a href="#inicio" className="hover:text-[hsl(var(--primary-gold))] transition-colors">
            Início
          </a>
          <a href="#servicos" className="hover:text-[hsl(var(--primary-gold))] transition-colors">
            Serviços
          </a>
          <a href="#sobre" className="hover:text-[hsl(var(--primary-gold))] transition-colors">
            Sobre
          </a>
          <a href="#contato" className="hover:text-[hsl(var(--primary-gold))] transition-colors">
            Contato
          </a>
        </div>

        {/* Social & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={`https://wa.me/${CLINIC_INFO.phoneSanitized}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-white/10 hover:border-[hsl(var(--primary-gold))] flex items-center justify-center text-[hsl(var(--text-main))] hover:text-[hsl(var(--primary-gold))] transition-colors"
            aria-label="WhatsApp da Clínica Realizar"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <a
            href={CLINIC_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-white/10 hover:border-[hsl(var(--secondary-quartz))] flex items-center justify-center text-[hsl(var(--text-main))] hover:text-[hsl(var(--secondary-quartz))] transition-colors"
            aria-label="Instagram da Clínica Realizar"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full border border-white/10 hover:border-[hsl(var(--primary-gold))] flex items-center justify-center text-[hsl(var(--text-main))] hover:text-[hsl(var(--primary-gold))] transition-colors"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-light text-[hsl(var(--text-muted))] gap-3 text-center">
        <span>
          © {new Date().getFullYear()} {CLINIC_INFO.name}. Todos os direitos reservados.
        </span>
        <span>
          Lauro de Freitas · Bahia · Brasil
        </span>
      </div>
    </footer>
  );
};
