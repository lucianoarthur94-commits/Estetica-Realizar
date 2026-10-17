import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, MessageCircle } from 'lucide-react';
import { CLINIC_INFO, IMAGES } from '../data';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const scrollToServices = () => {
    const el = document.getElementById('servicos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      aria-label="Início"
      className="relative min-h-[92vh] pt-28 pb-12 flex flex-col justify-between overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[hsla(46,65%,53%,0.08)] via-[hsl(var(--canvas-bg))] to-[hsl(var(--canvas-bg))]"
    >
      {/* Subtle ambient luxury light orbs */}
      <div
        className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[hsla(46,65%,53%,0.08)] blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -right-48 w-96 h-96 rounded-full bg-[hsla(330,81%,71%,0.08)] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        {/* Editorial Text Column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col items-start z-10"
        >
          {/* Subtle kicker without pill badge enclosure */}
          <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] text-[hsl(var(--primary-gold))] mb-4 font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Lauro de Freitas · Estética Facial</span>
          </div>

          {/* Single authoritative H1 with clamp */}
          <h1 className="font-serif text-[clamp(2.75rem,5.5vw,4.75rem)] font-normal leading-[1.05] tracking-tight text-[hsl(var(--text-main))] text-balance mb-6">
            Design de <br />
            <span className="italic font-light text-[hsl(var(--secondary-quartz))]">Sobrancelhas</span>
          </h1>

          {/* Slogan - Headline curto e marcante (7 palavras <= 8 palavras) */}
          <p className="text-xl md:text-2xl font-serif italic text-[hsl(var(--primary-gold))] mb-4 leading-snug">
            {CLINIC_INFO.headline}
          </p>

          {/* Frase de apoio enxuta e clara */}
          <p className="text-sm md:text-base text-[hsl(var(--text-muted))] leading-relaxed max-w-lg mb-8 font-light">
            {CLINIC_INFO.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase text-[#120e0a] bg-[hsl(var(--primary-gold))] hover:bg-[hsl(var(--primary-gold-light))] transition-all duration-300 shadow-[0_4px_24px_hsla(46,65%,53%,0.3)] hover:shadow-[0_6px_32px_hsla(46,65%,53%,0.5)] active:scale-95 text-center"
            >
              Entrar em contato
            </button>

            <a
              href={`https://wa.me/${CLINIC_INFO.phoneSanitized}?text=${encodeURIComponent(
                'Olá! Gostaria de agendar uma avaliação na Clínica Realizar.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-medium tracking-wider uppercase text-[hsl(var(--text-main))] border border-[hsla(46,65%,53%,0.35)] hover:border-[hsl(var(--primary-gold))] hover:text-[hsl(var(--primary-gold))] transition-all duration-300 hover:bg-[hsla(46,65%,53%,0.06)]"
            >
              <MessageCircle className="w-4 h-4 text-[hsl(var(--secondary-quartz))]" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Unboxed subtle social proof metadata */}
          <div className="mt-10 pt-6 border-t border-[hsla(46,65%,53%,0.15)] flex items-center gap-4 text-xs text-[hsl(var(--text-muted))] tracking-wide font-light">
            <span className="text-[hsl(var(--primary-gold))] font-serif text-sm italic">8+ anos</span>
            <span aria-hidden="true" className="text-[hsl(var(--secondary-quartz))]">·</span>
            <span>Visagismo Facial</span>
            <span aria-hidden="true" className="text-[hsl(var(--secondary-quartz))]">·</span>
            <span>Materiais Esterilizados</span>
          </div>
        </motion.div>

        {/* Hero Visual: Grand high-end clinic interior with quartz and gold detailing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 relative"
        >
          <div className="relative mx-auto rounded-3xl overflow-hidden gold-border-glow shadow-2xl bg-[hsl(var(--canvas-surface))] aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
            <img
              src={IMAGES.hero}
              alt="Ambiente luxuoso e refinado da Clínica de Estética Realizar em Lauro de Freitas"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter saturate-[1.05] brightness-[0.98] transition-transform duration-700 hover:scale-105"
            />
            {/* Elegant warm vignette overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--canvas-bg))] via-transparent to-transparent opacity-60 pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </div>

      {/* Peek invite to scroll */}
      <div className="text-center pt-8 flex justify-center">
        <button
          onClick={scrollToServices}
          className="group inline-flex flex-col items-center gap-1.5 text-xs text-[hsl(var(--text-muted))] hover:text-[hsl(var(--primary-gold))] transition-colors"
          aria-label="Rolar para os serviços"
        >
          <span className="tracking-widest uppercase text-[10px]">Descubra os procedimentos</span>
          <ArrowDown className="w-4 h-4 text-[hsl(var(--primary-gold))] animate-bounce" />
        </button>
      </div>
    </section>
  );
};
