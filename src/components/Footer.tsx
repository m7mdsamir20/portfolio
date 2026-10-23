import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check } from 'lucide-react';
import { BrushUnderline } from './BrushUnderline.tsx';
import { useLang } from '../i18n.tsx';

export const Footer: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { t } = useLang();

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('m7mdsamir2000@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <footer id="contact" className="pt-10 pb-16">
      {/* Warm Background Card Container */}
      <div className="bg-[#FFF8F4] border border-[#F0ECE7] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xs">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-6 items-start">
          {/* Call to action */}
          <div className="md:col-span-5 flex flex-col justify-start">
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#151515] tracking-tight leading-snug">
              {t.footer.line1} <br />
              {t.footer.line2} <span className="text-[#F36B21]">{t.footer.accent}</span>
            </h2>
            <BrushUnderline className="w-11 mt-2.5" />
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 flex flex-col justify-center space-y-3">
            {/* Email with copy action */}
            <div
              onClick={handleCopyEmail}
              className="group flex items-center gap-2.5 text-xs sm:text-[13px] text-[#555] hover:text-[#151515] transition-colors cursor-pointer"
              title={t.footer.copyTitle}
            >
              <Mail size={15} className="text-[#333] shrink-0" strokeWidth={1.8} />
              <span className="font-medium select-all" dir="ltr">m7mdsamir2000@gmail.com</span>
              {copiedEmail ? (
                <span className="text-[10px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded font-semibold flex items-center gap-1">
                  <Check size={10} /> {t.footer.copied}
                </span>
              ) : (
                <span className="text-[10px] text-[#999] opacity-0 group-hover:opacity-100 transition-opacity">
                  {t.footer.copy}
                </span>
              )}
            </div>

            {/* Phone */}
            <a
              href="tel:+966558434257"
              className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#555] hover:text-[#151515] transition-colors"
            >
              <Phone size={15} className="text-[#333] shrink-0" strokeWidth={1.8} />
              <span className="font-medium" dir="ltr">+966 55 843 4257</span>
            </a>

            {/* Location */}
            <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#555]">
              <MapPin size={15} className="text-[#333] shrink-0" strokeWidth={1.8} />
              <span className="font-medium">{t.footer.location}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 flex flex-col justify-start md:items-start">
            <h3 className="text-xs sm:text-[13px] font-bold text-[#151515] mb-3">{t.footer.connect}</h3>

            {/* Social Icon Buttons */}
            <div className="flex items-center gap-2.5">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/m7mdsamir"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.footer.linkedin}
                className="w-9 h-9 bg-white border border-[#EAE5E1] rounded-lg flex items-center justify-center text-[#151515] hover:border-[#F36B21] hover:text-[#F36B21] transition-all shadow-2xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.750-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/966558434257"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.footer.whatsapp}
                className="w-9 h-9 bg-white border border-[#EAE5E1] rounded-lg flex items-center justify-center text-[#151515] hover:border-[#F36B21] hover:text-[#F36B21] transition-all shadow-2xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:m7mdsamir2000@gmail.com"
                aria-label={t.footer.email}
                className="w-9 h-9 bg-white border border-[#EAE5E1] rounded-lg flex items-center justify-center text-[#151515] hover:border-[#F36B21] hover:text-[#F36B21] transition-all shadow-2xs"
              >
                <Mail size={16} strokeWidth={1.8} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Line at Bottom */}
      <div className="mt-8 text-center flex items-center justify-center gap-1.5 text-xs text-[#888]">
        <span>{t.footer.rights}</span>
        <span className="text-[#F36B21]">🧡</span>
      </div>
    </footer>
  );
};
