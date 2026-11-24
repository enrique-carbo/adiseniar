import React, {useState} from 'react';
import {CheckCircle2, Mail, MapPin, MessageCircle, Send} from 'lucide-react';
import {buildWhatsAppUrl, CONTACT_EMAIL, WHATSAPP_NUMBER_DISPLAY} from '../data/siteData';

const PROJECT_TYPES = [
  'Aplicación Web / React & TypeScript',
  'Aplicación de Escritorio (Rust & Tauri)',
  'Despliegue en Servidor (Dokploy & Docker)',
  'Diseño Gráfico / Identidad Visual con IA',
];

export function ContactSection() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim() || !message.trim()) {
      setError('Por favor completa tu nombre, medio de contacto y breve descripción del proyecto.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const compiledWhatsAppMessage = `Hola ADISENIAR, soy ${name || 'un interesado'}. Me comunico por: ${projectType}. Contacto: ${contact || 'vía WhatsApp'}. Detalle: ${message}`;

  return (
    <section id="contacto" className="bg-[#FAFAFA] py-16 sm:py-20 dark:bg-[#090D16]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Direct WhatsApp & Studio Info */}
          <div className="lg:col-span-5">
            <p className="text-xs font-medium text-[#8A0E0E] dark:text-[#FCA5A5]">
              Contacto Directo
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#111827] [text-wrap:balance] sm:text-4xl dark:text-white">
              Hablemos de tu próximo proyecto técnico o visual.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
              Atención directa sin intermediarios. Respondemos consultas sobre arquitectura web,
              apps de escritorio en Rust/Tauri, servidores Dokploy y diseño gráfico asistido por IA.
            </p>

            <div className="mt-8 space-y-4 rounded-2xl border border-[#E5E7EB] bg-white p-6 dark:border-[#1F2937] dark:bg-[#111827]">
              <div>
                <p className="text-xs font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                  WhatsApp Directo
                </p>
                <a
                  href={buildWhatsAppUrl(
                    'Hola ADISENIAR, quiero consultar por servicios de desarrollo o diseño.',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 font-mono text-base font-semibold text-[#0B1F4B] tabular-nums hover:text-[#8A0E0E] dark:text-[#93C5FD] dark:hover:text-[#FCA5A5]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>{WHATSAPP_NUMBER_DISPLAY}</span>
                </a>
              </div>

              <div className="border-t border-[#E5E7EB] pt-4 dark:border-[#1F2937]">
                <p className="text-xs font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                  Correo Electrónico
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-[#111827] hover:text-[#0B1F4B] dark:text-[#F3F4F6] dark:hover:text-[#93C5FD]"
                >
                  <Mail className="h-4 w-4 text-[#4B5563] dark:text-[#9CA3AF]" aria-hidden="true" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </div>

              <div className="border-t border-[#E5E7EB] pt-4 dark:border-[#1F2937]">
                <p className="text-xs font-medium text-[#6B7280] dark:text-[#9CA3AF]">Cobertura</p>
                <p className="mt-1 inline-flex items-center gap-2 text-sm text-[#374151] dark:text-[#D1D5DB]">
                  <MapPin
                    className="h-4 w-4 text-[#4B5563] dark:text-[#9CA3AF]"
                    aria-hidden="true"
                  />
                  <span>Entre Ríos, Argentina · Trabajo remoto global</span>
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={buildWhatsAppUrl(
                    'Hola ADISENIAR, quiero iniciar una consulta directa por WhatsApp.',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#0B1F4B] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#132E6B] dark:bg-[#2563EB] dark:hover:bg-[#3B82F6]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Abrir chat en WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 sm:p-8 dark:border-[#1F2937] dark:bg-[#111827]">
              {submitted ? (
                <div className="py-8">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F5F7] text-[#0B1F4B] dark:bg-[#161F30] dark:text-[#93C5FD]">
                    <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-[#111827] dark:text-white">
                    Consulta preparada correctamente
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#4B5563] dark:text-[#D1D5DB]">
                    Gracias, <strong className="text-[#111827] dark:text-white">{name}</strong>.
                    Para una respuesta inmediata podés enviar este resumen directo a nuestro
                    WhatsApp o por correo.
                  </p>

                  <div className="mt-6 rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] p-4 text-xs leading-relaxed text-[#374151] dark:border-[#1F2937] dark:bg-[#161F30] dark:text-[#D1D5DB]">
                    <p>
                      <strong>Especialidad:</strong> {projectType}
                    </p>
                    <p className="mt-1">
                      <strong>Contacto:</strong> {contact}
                    </p>
                    <p className="mt-1">
                      <strong>Mensaje:</strong> {message}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href={buildWhatsAppUrl(compiledWhatsAppMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0B1F4B] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#132E6B] dark:bg-[#2563EB] dark:hover:bg-[#3B82F6]"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      <span>Enviar ahora por WhatsApp</span>
                    </a>
                    <a
                      href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Consulta ADISENIAR: ${projectType}`)}&body=${encodeURIComponent(compiledWhatsAppMessage)}`}
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#F4F5F7] dark:border-[#1F2937] dark:bg-[#161F30] dark:text-[#F3F4F6] dark:hover:bg-[#1E293B]"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      <span>Abrir en Email</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setContact('');
                        setMessage('');
                      }}
                      className="min-h-[44px] px-3 text-xs font-medium text-[#4B5563] underline underline-offset-4 hover:text-[#111827] dark:text-[#9CA3AF] dark:hover:text-white"
                    >
                      Editar consulta
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[#111827] dark:text-white">
                      Cuéntanos qué necesitas construir
                    </h3>
                    <p className="mt-1 text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                      Completa los campos para estructurar tu requerimiento y enviarlo al instante.
                    </p>
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="rounded-lg border border-[#8A0E0E]/30 bg-[#8A0E0E]/5 px-4 py-3 text-xs font-medium text-[#8A0E0E] dark:border-[#FCA5A5]/30 dark:bg-[#FCA5A5]/10 dark:text-[#FCA5A5]"
                    >
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium text-[#111827] dark:text-[#E5E7EB]"
                      >
                        Nombre y apellido
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej. Laura Gómez"
                        className="mt-1.5 min-h-[44px] w-full rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] px-3.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:border-[#0B1F4B] focus:bg-white focus:outline-none dark:border-[#1F2937] dark:bg-[#0D1320] dark:text-[#F3F4F6] dark:placeholder:text-[#6B7280] dark:focus:border-[#3B82F6] dark:focus:bg-[#161F30]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-info"
                        className="block text-xs font-medium text-[#111827] dark:text-[#E5E7EB]"
                      >
                        Email o WhatsApp
                      </label>
                      <input
                        id="contact-info"
                        type="text"
                        required
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="tu@empresa.com o +54..."
                        className="mt-1.5 min-h-[44px] w-full rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] px-3.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:border-[#0B1F4B] focus:bg-white focus:outline-none dark:border-[#1F2937] dark:bg-[#0D1320] dark:text-[#F3F4F6] dark:placeholder:text-[#6B7280] dark:focus:border-[#3B82F6] dark:focus:bg-[#161F30]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-type"
                      className="block text-xs font-medium text-[#111827] dark:text-[#E5E7EB]"
                    >
                      Área principal
                    </label>
                    <select
                      id="contact-type"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="mt-1.5 min-h-[44px] w-full rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] px-3.5 text-sm text-[#111827] focus:border-[#0B1F4B] focus:bg-white focus:outline-none dark:border-[#1F2937] dark:bg-[#0D1320] dark:text-[#F3F4F6] dark:focus:border-[#3B82F6] dark:focus:bg-[#161F30]"
                    >
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-[#111827] dark:text-[#E5E7EB]"
                    >
                      Resumen del proyecto
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe brevemente el objetivo, plazos estimados o si ya cuentas con un servidor o diseño previo..."
                      className="mt-1.5 w-full rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] p-3.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:border-[#0B1F4B] focus:bg-white focus:outline-none dark:border-[#1F2937] dark:bg-[#0D1320] dark:text-[#F3F4F6] dark:placeholder:text-[#6B7280] dark:focus:border-[#3B82F6] dark:focus:bg-[#161F30]"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                    <span className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                      Respuesta habitual en menos de 24 hs hábiles.
                    </span>

                    <button
                      type="submit"
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0B1F4B] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#132E6B] dark:bg-[#2563EB] dark:hover:bg-[#3B82F6]"
                    >
                      <Send className="h-4 w-4" aria-hidden="true" />
                      <span>Preparar consulta</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
