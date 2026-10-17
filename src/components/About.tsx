import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { IMAGES } from '../data';

export const About: React.FC = () => {
  return (
    <section id="sobre" aria-label="Sobre a Clínica" className="py-24 md:py-32 relative bg-[hsl(var(--canvas-surface))] border-y border-[hsla(46,65%,53%,0.15)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual: Architectural luxury studio arch */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden gold-border-glow aspect-[4/3] bg-[hsl(var(--canvas-bg))]">
              <img
                src={IMAGES.aboutStudio}
                alt="Espaço da Clínica Realizar em Lauro de Freitas com arcos e detalhes em quartzo e ouro"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[hsl(24,18%,6%,0.8)] via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </motion.div>

          {/* Editorial Content: Concise, zero fluff, powerful typography */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[hsl(var(--primary-gold))] font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Maestria e Visagismo</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[hsl(var(--text-main))] mb-6 leading-tight">
              Oito anos dedicados à arte de realçar sua beleza natural.
            </h2>

            <p className="text-base text-[hsl(var(--text-muted))] font-light leading-relaxed mb-8">
              Acreditamos que cada olhar tem uma arquitetura singular. Não seguimos moldes prontos: cada arco é esculpido com proporção áurea, conforto absoluto e pigmentos selecionados para valorizar os seus traços únicos.
            </p>

            {/* Real verified statistics/trust markers from brief */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[hsla(46,65%,53%,0.2)] w-full">
              <div>
                <span className="font-serif text-4xl sm:text-5xl font-light text-[hsl(var(--primary-gold))] block tabular-nums">
                  8+
                </span>
                <span className="text-xs uppercase tracking-wider text-[hsl(var(--secondary-quartz))] font-medium block mt-1">
                  Anos de Experiência
                </span>
                <span className="text-xs text-[hsl(var(--text-muted))] block mt-1">
                  Técnicas manuais de precisão
                </span>
              </div>

              <div>
                <span className="font-serif text-4xl sm:text-5xl font-light text-[hsl(var(--secondary-quartz))] block tabular-nums">
                  100%
                </span>
                <span className="text-xs uppercase tracking-wider text-[hsl(var(--primary-gold))] font-medium block mt-1">
                  Personalizado
                </span>
                <span className="text-xs text-[hsl(var(--text-muted))] block mt-1">
                  Visagismo sob medida
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 text-xs text-[hsl(var(--text-muted))]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[hsl(var(--primary-gold))]" />
                <span>Protocolo de biossegurança rigoroso</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[hsl(var(--secondary-quartz))]" />
                <span>Atendimento exclusivo com hora marcada</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
