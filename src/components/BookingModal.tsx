import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, User, Phone, CheckCircle, MessageCircle } from 'lucide-react';
import { SERVICES, CLINIC_INFO } from '../data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
}) => {
  const [selectedService, setSelectedService] = useState(
    initialServiceId || SERVICES[0].id
  );
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('Manhã (09h - 12h)');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      setSelectedService(initialServiceId);
    }
  }, [initialServiceId]);

  // Set default min date to today
  const todayStr = new Date().toISOString().split('T')[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceObj = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];

    const message = `Olá! Gostaria de agendar um horário na Clínica Realizar:%0A%0A*Procedimento:* ${serviceObj.name} (R$ ${serviceObj.price})%0A*Data de preferência:* ${selectedDate || 'A combinar'}%0A*Período:* ${selectedPeriod}%0A*Nome:* ${clientName || 'Cliente'}%0A*Telefone:* ${clientPhone || 'Não informado'}%0A%0APor favor, confirmem a disponibilidade!`;

    setSubmitted(true);

    setTimeout(() => {
      window.open(`https://wa.me/${CLINIC_INFO.phoneSanitized}?text=${message}`, '_blank', 'noopener,noreferrer');
      onClose();
      setSubmitted(false);
    }, 900);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[hsl(var(--canvas-surface))] border border-[hsla(46,65%,53%,0.3)] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8 text-[hsl(var(--text-main))]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-[hsl(var(--text-muted))] hover:text-[hsl(var(--primary-gold))] hover:bg-white/5 transition-colors"
              aria-label="Fechar janela de agendamento"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[hsl(var(--secondary-quartz))]">
                Agendamento Online
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[hsl(var(--text-main))] mt-1">
                Reserve seu atendimento
              </h3>
              <p className="text-xs text-[hsl(var(--text-muted))] mt-1">
                Selecione o procedimento e confirme os detalhes pelo WhatsApp oficial.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <CheckCircle className="w-12 h-12 text-[hsl(var(--primary-gold))] animate-bounce mb-3" />
                <h4 className="font-serif text-xl font-normal text-[hsl(var(--text-main))]">
                  Redirecionando para o WhatsApp...
                </h4>
                <p className="text-xs text-[hsl(var(--text-muted))] mt-1">
                  Sua mensagem personalizada foi gerada com sucesso.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[hsl(var(--text-muted))] mb-2">
                    Procedimento
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {SERVICES.map((s) => {
                      const isSelected = selectedService === s.id;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setSelectedService(s.id)}
                          className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                            isSelected
                              ? 'border-[hsl(var(--primary-gold))] bg-[hsla(46,65%,53%,0.1)] text-[hsl(var(--text-main))] shadow-[0_0_15px_hsla(46,65%,53%,0.2)]'
                              : 'border-white/10 hover:border-white/20 bg-white/[0.02] text-[hsl(var(--text-muted))]'
                          }`}
                        >
                          <div>
                            <span className="text-sm font-medium block text-[hsl(var(--text-main))]">
                              {s.name}
                            </span>
                            <span className="text-[11px] text-[hsl(var(--text-muted))]">
                              {s.duration} · {s.tagline}
                            </span>
                          </div>
                          <span className="font-serif text-base font-medium text-[hsl(var(--primary-gold))]">
                            R$ {s.price}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Date & Period */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[hsl(var(--text-muted))] mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[hsl(var(--primary-gold))]" />
                      Data preferida
                    </label>
                    <input
                      type="date"
                      min={todayStr}
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-[hsl(var(--canvas-bg))] border border-white/10 text-xs text-[hsl(var(--text-main))] focus:outline-none focus:border-[hsl(var(--primary-gold))]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[hsl(var(--text-muted))] mb-1.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[hsl(var(--secondary-quartz))]" />
                      Período
                    </label>
                    <select
                      value={selectedPeriod}
                      onChange={(e) => setSelectedPeriod(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-[hsl(var(--canvas-bg))] border border-white/10 text-xs text-[hsl(var(--text-main))] focus:outline-none focus:border-[hsl(var(--secondary-quartz))]"
                    >
                      <option value="Manhã (09h - 12h)" className="bg-[hsl(var(--canvas-surface))]">Manhã (09h - 12h)</option>
                      <option value="Tarde (13h - 17h)" className="bg-[hsl(var(--canvas-surface))]">Tarde (13h - 17h)</option>
                      <option value="Final de tarde (17h - 19h)" className="bg-[hsl(var(--canvas-surface))]">Final de tarde (17h - 19h)</option>
                    </select>
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[hsl(var(--text-muted))] mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[hsl(var(--primary-gold))]" />
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      placeholder="Nome completo"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-[hsl(var(--canvas-bg))] border border-white/10 text-xs text-[hsl(var(--text-main))] placeholder:text-white/20 focus:outline-none focus:border-[hsl(var(--primary-gold))]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[hsl(var(--text-muted))] mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[hsl(var(--secondary-quartz))]" />
                      WhatsApp / Telefone
                    </label>
                    <input
                      type="tel"
                      placeholder="(71) 99999-9999"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-[hsl(var(--canvas-bg))] border border-white/10 text-xs text-[hsl(var(--text-main))] placeholder:text-white/20 focus:outline-none focus:border-[hsl(var(--secondary-quartz))]"
                    />
                  </div>
                </div>

                {/* Submit CTA */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-widest text-[#120e0a] bg-[hsl(var(--primary-gold))] hover:bg-[hsl(var(--primary-gold-light))] transition-all duration-300 shadow-[0_4px_24px_hsla(46,65%,53%,0.3)] flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Confirmar no WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-center text-[hsl(var(--text-muted))] mt-2 font-light">
                    Sem taxa de agendamento online. Atendimento seguro e confidencial.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
