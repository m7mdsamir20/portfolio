import React from 'react';
import {
  CodeXml,
  Languages,
  Search,
  LayoutTemplate,
  Server,
  Plug,
  Database,
  Layers,
  Container,
  Workflow,
  Network,
  Cloud,
} from 'lucide-react';
import { BrushUnderline } from './BrushUnderline.tsx';
import { useLang } from '../i18n.tsx';

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

const lucide = { size: 22, strokeWidth: 1.7, className: 'text-[#151515]' };

// Row 1 — front-end & web
const frontSkills: SkillItem[] = [
  {
    name: 'JavaScript',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    icon: (
      <div className="w-6 h-6 rounded border border-[#151515] flex items-center justify-center font-bold text-[10px] text-[#151515] tracking-tighter">
        TS
      </div>
    ),
  },
  {
    name: 'React.js',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#151515" strokeWidth="1.6">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="#151515" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    icon: (
      <div className="w-6 h-6 rounded-full border border-[#151515] flex items-center justify-center font-bold text-[11px] text-[#151515]">
        N
      </div>
    ),
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#151515" strokeWidth="1.8" strokeLinecap="round">
        <path d="M3 10 C5 7, 8 7, 10 10 C12 13, 15 13, 17 10 C19 7, 21 8, 22 9" />
        <path d="M6 16 C8 13, 11 13, 13 16 C15 19, 18 19, 20 16" />
      </svg>
    ),
  },
  { name: 'HTML / CSS', icon: <CodeXml {...lucide} /> },
  { name: 'Arabic RTL', icon: <Languages {...lucide} /> },
  { name: 'SEO', icon: <Search {...lucide} /> },
  { name: 'WordPress', icon: <LayoutTemplate {...lucide} /> },
  {
    name: 'Git & GitHub',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#151515" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
];

// Row 2 — back-end, data & DevOps
const backSkills: SkillItem[] = [
  {
    name: 'Node.js',
    icon: (
      <div className="w-6 h-6 rounded border border-[#151515] flex items-center justify-center font-bold text-[9px] text-[#151515]">
        JS
      </div>
    ),
  },
  { name: 'Express.js', icon: <Server {...lucide} /> },
  { name: 'NestJS', icon: <Server {...lucide} /> },
  { name: 'Laravel', icon: <Server {...lucide} /> },
  { name: 'REST / GraphQL', icon: <Plug {...lucide} /> },
  { name: 'PostgreSQL', icon: <Database {...lucide} /> },
  { name: 'MySQL', icon: <Database {...lucide} /> },
  {
    name: 'MongoDB',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#151515" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C12 2 7 9 7 14C7 17.5 9 21 12 22C15 21 17 17.5 17 14C17 9 12 2 12 2Z" />
        <line x1="12" y1="2" x2="12" y2="22" strokeWidth="1.2" />
      </svg>
    ),
  },
  { name: 'Redis', icon: <Database {...lucide} /> },
  { name: 'Prisma ORM', icon: <Layers {...lucide} /> },
  { name: 'Docker', icon: <Container {...lucide} /> },
  { name: 'CI / CD', icon: <Workflow {...lucide} /> },
  { name: 'Nginx', icon: <Network {...lucide} /> },
  { name: 'VPS / Cloud', icon: <Cloud {...lucide} /> },
];

const SkillCard: React.FC<{ skill: SkillItem; hidden?: boolean }> = ({ skill, hidden }) => (
  <div
    aria-hidden={hidden || undefined}
    className="shrink-0 w-[104px] sm:w-[112px] bg-white border border-[#EAE5E1] rounded-2xl py-3.5 px-2 flex flex-col items-center justify-center text-center shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs hover:border-[#F36B21]"
  >
    <div className="h-8 flex items-center justify-center mb-1.5">{skill.icon}</div>
    <span dir="ltr" className="text-[11.5px] font-medium text-[#222] whitespace-nowrap">
      {skill.name}
    </span>
  </div>
);

// One moving row; the list is rendered twice so the loop is seamless
const SkillRow: React.FC<{ skills: SkillItem[]; reverse?: boolean }> = ({ skills, reverse }) => (
  <div className={`marquee ${reverse ? 'marquee-reverse' : ''}`} style={{ '--marquee-duration': '38s', '--marquee-gap': '12px' } as React.CSSProperties}>
    <div className="marquee-track">
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
      {skills.map((skill) => (
        <SkillCard key={`${skill.name}-copy`} skill={skill} hidden />
      ))}
    </div>
  </div>
);

export const Skills: React.FC = () => {
  const { t } = useLang();

  return (
    <section id="skills" className="py-12 sm:py-16">
      {/* Section Heading with hand-drawn underline */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[#151515] tracking-tight mb-1.5">
          {t.skills.title}
        </h2>
        <BrushUnderline className="w-11" />
      </div>

      {/* Two strips moving in opposite directions */}
      <div className="flex flex-col gap-1">
        <SkillRow skills={frontSkills} />
        <SkillRow skills={backSkills} reverse />
      </div>
    </section>
  );
};
