import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Clock, Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data';

interface ServicesProps {
  onOpenBooking: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const microblading = SERVICES[0];
  const design = SERVICES[1];
  const micropigmentacao = SERVICES[2];

  return (
    <section id="servicos" aria-label="Procedimentos e Serviços" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header: Minimal, high elegance */}
        <div className="max-w-xl mb-20 md:mb-28">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[hsl(var(--secondary-quartz))] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[hsl(var(--primary-gold))]" />
            <span>Procedimentos Exclusivos</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[hsl(var(--text-main))] tracking-tight">
            Precisão que valoriza sua essência
          </h2>
        </div>

        {/* SERVICE 1: Microblading — Image Left, Editorial Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-28 md:mb-36">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl overflow-hidden gold-border-glow aspect-[4/3] bg-[hsl(var(--canvas-surface))] group">
              <img
                src={microblading.image}
                alt={microblading.imageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--canvas-bg))] via-transparent to-transparent opacity-40 pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <span className="font-serif text-sm tracking-widest text-[hsl(var(--primary-gold))] uppercase mb-2">
              01 · Fio a Fio
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[hsl(var(--text-main))] mb-3">
              {microblading.name}
            </h3>
            <p className="text-sm text-[hsl(var(--secondary-quartz))] font-medium mb-4">
              {microblading.tagline}
            </p>
            <p className="text-sm sm:text-base text-[hsl(var(--text-muted))] font-light leading-relaxed mb-6">
              {microblading.description}
            </p>

            <ul className="space-y-2.5 mb-8 w-full text-xs text-[hsl(var(--text-main))]">
              {microblading.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary-gold))]" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-serif text-3xl sm:text-4xl font-light text-[hsl(var(--primary-gold))]">
                R$ {microblading.price}
              </span>
              <span className="text-xs text-[hsl(var(--text-muted))] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[hsl(var(--secondary-quartz))]" />
                Duração aprox. {microblading.duration}
              </span>
            </div>

            <button
              onClick={() => onOpenBooking(microblading.id)}
              className="px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-widest text-[#120e0a] bg-[hsl(var(--primary-gold))] hover:bg-[hsl(var(--primary-gold-light))] transition-all duration-300 shadow-[0_4px_20px_hsla(46,65%,53%,0.25)] flex items-center gap-2"
            >
              <span>Agendar Microblading</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        </div>

        {/* SERVICE 2: Design Personalizado — Inverted Rhythm: Editorial Content Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-28 md:mb-36">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-2 lg:order-1 flex flex-col items-start"
          >
            <span className="font-serif text-sm tracking-widest text-[hsl(var(--secondary-quartz))] uppercase mb-2">
              02 · Visagismo
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[hsl(var(--text-main))] mb-3">
              {design.name}
            </h3>
            <p className="text-sm text-[hsl(var(--primary-gold))] font-medium mb-4">
              {design.tagline}
            </p>
            <p className="text-sm sm:text-base text-[hsl(var(--text-muted))] font-light leading-relaxed mb-6">
              {design.description}
            </p>

            <ul className="space-y-2.5 mb-8 w-full text-xs text-[hsl(var(--text-main))]">
              {design.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--secondary-quartz))]" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-serif text-3xl sm:text-4xl font-light text-[hsl(var(--secondary-quartz))]">
                R$ {design.price}
              </span>
              <span className="text-xs text-[hsl(var(--text-muted))] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[hsl(var(--primary-gold))]" />
                Duração aprox. {design.duration}
              </span>
            </div>

            <button
              onClick={() => onOpenBooking(design.id)}
              className="px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-widest text-[#120e0a] bg-[hsl(var(--secondary-quartz))] hover:bg-[hsl(var(--secondary-quartz-light))] transition-all duration-300 shadow-[0_4px_20px_hsla(330,81%,71%,0.25)] flex items-center gap-2"
            >
              <span>Agendar Design</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <div className="relative rounded-3xl overflow-hidden quartz-border-glow aspect-[4/3] bg-[hsl(var(--canvas-surface))] group">
              <img
                src={design.image}
                alt={design.imageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--canvas-bg))] via-transparent to-transparent opacity-40 pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* SERVICE 3: Micropigmentação — Asymmetric Editorial Panoramic Split */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-[hsl(var(--canvas-surface))] border border-[hsla(46,65%,53%,0.25)] relative overflow-hidden"
        >
          {/* Subtle quartz background glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[hsla(330,81%,71%,0.07)] blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="font-serif text-sm tracking-widest text-[hsl(var(--primary-gold))] uppercase mb-2 block">
                03 · Shadow & Powder
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[hsl(var(--text-main))] mb-3">
                {micropigmentacao.name}
              </h3>
              <p className="text-sm text-[hsl(var(--secondary-quartz))] font-medium mb-4">
                {micropigmentacao.tagline}
              </p>
              <p className="text-sm sm:text-base text-[hsl(var(--text-muted))] font-light leading-relaxed mb-6">
                {micropigmentacao.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {micropigmentacao.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[hsl(var(--text-main))]">
                    <Check className="w-3.5 h-3.5 text-[hsl(var(--primary-gold))] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-baseline gap-4 mb-6">
                <span className="font-serif text-3xl sm:text-4xl font-light text-[hsl(var(--primary-gold))]">
                  R$ {micropigmentacao.price}
                </span>
                <span className="text-xs text-[hsl(var(--text-muted))] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[hsl(var(--secondary-quartz))]" />
                  Duração aprox. {micropigmentacao.duration}
                </span>
              </div>

              <button
                onClick={() => onOpenBooking(micropigmentacao.id)}
                className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#120e0a] bg-[hsl(var(--primary-gold))] hover:bg-[hsl(var(--primary-gold-light))] transition-all duration-300 shadow-[0_4px_24px_hsla(46,65%,53%,0.3)] flex items-center gap-2"
              >
                <span>Agendar Micropigmentação</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[hsl(var(--canvas-bg))] gold-border-glow">
                <img
                  src={micropigmentacao.image}
                  alt={micropigmentacao.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
