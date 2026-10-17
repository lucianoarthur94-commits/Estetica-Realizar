import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, MapPin, Instagram, Clock, Send, Sparkles, ExternalLink } from 'lucide-react';
import { CLINIC_INFO, SERVICES } from '../data';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [quickName, setQuickName] = useState('');
  const [quickService, setQuickService] = useState(SERVICES[0].name);
  const [quickMessage, setQuickMessage] = useState('');

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `Olá! Meu nome é ${quickName || 'Cliente'}.%0AGostaria de saber sobre o procedimento *${quickService}* na Clínica Realizar.%0A${quickMessage ? `Dúvida: ${quickMessage}` : ''}`;
    window.open(`https://wa.me/${CLINIC_INFO.phoneSanitized}?text=${formatted}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" aria-label="Contato e Localização" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-xl mb-16 md:mb-24">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[hsl(var(--primary-gold))] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Atendimento Exclusivo</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[hsl(var(--text-main))] tracking-tight">
            Entre em contato
          </h2>
          <p className="text-sm md:text-base text-[hsl(var(--text-muted))] font-light mt-3">
            Estamos prontas para receber você em nosso espaço com conforto, privacidade e sofisticação.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact Information Cards (4 Cards) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* 1. WhatsApp Card */}
            <motion.a
              href={`https://wa.me/${CLINIC_INFO.phoneSanitized}?text=${encodeURIComponent(
                'Olá! Gostaria de falar com uma especialista da Clínica Realizar.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group p-6 rounded-3xl bg-[hsl(var(--canvas-surface))] border border-[hsla(46,65%,53%,0.2)] hover:border-[hsl(var(--primary-gold))] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[hsla(46,65%,53%,0.1)] flex items-center justify-center text-[hsl(var(--primary-gold))] mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-[11px] uppercase tracking-widest text-[hsl(var(--secondary-quartz))] font-medium block">
                  WhatsApp Direto
                </span>
                <span className="font-serif text-xl sm:text-2xl text-[hsl(var(--text-main))] block mt-1 group-hover:text-[hsl(var(--primary-gold))] transition-colors">
                  {CLINIC_INFO.phoneRaw}
                </span>
                <p className="text-xs text-[hsl(var(--text-muted))] mt-1 font-light">
                  Resposta rápida e agendamento personalizado.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs text-[hsl(var(--primary-gold))] font-medium">
                <span>Conversar agora</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </motion.a>

            {/* 2. Instagram Card */}
            <motion.a
              href={CLINIC_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group p-6 rounded-3xl bg-[hsl(var(--canvas-surface))] border border-[hsla(330,81%,71%,0.2)] hover:border-[hsl(var(--secondary-quartz))] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[hsla(330,81%,71%,0.1)] flex items-center justify-center text-[hsl(var(--secondary-quartz))] mb-4 group-hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="text-[11px] uppercase tracking-widest text-[hsl(var(--primary-gold))] font-medium block">
                  Instagram
                </span>
                <span className="font-serif text-xl sm:text-2xl text-[hsl(var(--text-main))] block mt-1 group-hover:text-[hsl(var(--secondary-quartz))] transition-colors">
                  {CLINIC_INFO.instagram}
                </span>
                <p className="text-xs text-[hsl(var(--text-muted))] mt-1 font-light">
                  Inspirações, fotos reais e bastidores diários.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs text-[hsl(var(--secondary-quartz))] font-medium">
                <span>Acompanhar perfil</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </motion.a>

            {/* 3. Address Card */}
            <motion.a
              href={CLINIC_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group p-6 rounded-3xl bg-[hsl(var(--canvas-surface))] border border-[hsla(46,65%,53%,0.2)] hover:border-[hsl(var(--primary-gold))] transition-all duration-300 flex flex-col justify-between sm:col-span-2"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[hsla(46,65%,53%,0.1)] flex items-center justify-center text-[hsl(var(--primary-gold))] mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[11px] uppercase tracking-widest text-[hsl(var(--secondary-quartz))] font-medium block">
                  Localização Privilegiada
                </span>
                <p className="font-serif text-lg sm:text-xl text-[hsl(var(--text-main))] mt-1 group-hover:text-[hsl(var(--primary-gold))] transition-colors leading-relaxed">
                  {CLINIC_INFO.address}
                </p>
                <p className="text-xs text-[hsl(var(--text-muted))] mt-1 font-light">
                  Estacionamento fácil e ambiente climatizado em Lauro de Freitas - BA.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs text-[hsl(var(--primary-gold))] font-medium">
                <span>Abrir rota no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </motion.a>

            {/* 4. Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-3xl bg-[hsl(var(--canvas-surface))] border border-[hsla(46,65%,53%,0.15)] flex flex-col justify-between sm:col-span-2"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[hsla(330,81%,71%,0.1)] flex items-center justify-center text-[hsl(var(--secondary-quartz))] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[hsl(var(--primary-gold))] font-medium block">
                    Horário de Atendimento
                  </span>
                  <span className="font-serif text-lg text-[hsl(var(--text-main))] block mt-0.5">
                    {CLINIC_INFO.hours}
                  </span>
                  <p className="text-xs text-[hsl(var(--text-muted))] mt-1 font-light">
                    Garantimos dedicação total e pontualidade no seu momento de cuidado.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Lead Capture Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-8 rounded-3xl bg-[hsl(var(--canvas-surface))] border border-[hsla(46,65%,53%,0.3)] gold-border-glow flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[hsl(var(--secondary-quartz))] font-medium">
                Envio Rápido
              </span>
              <h3 className="font-serif text-2xl font-normal text-[hsl(var(--text-main))] mt-1 mb-2">
                Tire suas dúvidas
              </h3>
              <p className="text-xs text-[hsl(var(--text-muted))] font-light mb-6">
                Envie uma mensagem direta para a nossa equipe e receba um atendimento atencioso.
              </p>

              <form onSubmit={handleQuickContact} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[hsl(var(--text-muted))] mb-1 font-medium">
                    Seu Nome
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Como prefere ser chamada?"
                    value={quickName}
                    onChange={(e) => setQuickName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[hsl(var(--canvas-bg))] border border-white/10 text-xs text-[hsl(var(--text-main))] placeholder:text-white/20 focus:outline-none focus:border-[hsl(var(--primary-gold))]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[hsl(var(--text-muted))] mb-1 font-medium">
                    Procedimento de Interesse
                  </label>
                  <select
                    value={quickService}
                    onChange={(e) => setQuickService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[hsl(var(--canvas-bg))] border border-white/10 text-xs text-[hsl(var(--text-main))] focus:outline-none focus:border-[hsl(var(--primary-gold))]"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.name} className="bg-[hsl(var(--canvas-surface))]">
                        {s.name} — R$ {s.price}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[hsl(var(--text-muted))] mb-1 font-medium">
                    Mensagem ou Pergunta (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ex: Gostaria de saber sobre a cicatrização do microblading..."
                    value={quickMessage}
                    onChange={(e) => setQuickMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[hsl(var(--canvas-bg))] border border-white/10 text-xs text-[hsl(var(--text-main))] placeholder:text-white/20 focus:outline-none focus:border-[hsl(var(--secondary-quartz))] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-widest text-[#120e0a] bg-[hsl(var(--primary-gold))] hover:bg-[hsl(var(--primary-gold-light))] transition-all duration-300 shadow-[0_4px_24px_hsla(46,65%,53%,0.3)] flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar pelo WhatsApp</span>
                </button>
              </form>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <button
                onClick={onOpenBooking}
                className="text-xs text-[hsl(var(--secondary-quartz))] hover:text-[hsl(var(--primary-gold))] transition-colors tracking-wide underline underline-offset-4"
              >
                Ou clique aqui para abrir o Agendamento Online detalhado
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
