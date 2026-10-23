import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SiteMonitorMockup } from './ProjectMockups.tsx';
import { BrushUnderline } from './BrushUnderline.tsx';
import { useLang, type Dict } from '../i18n.tsx';

type ProjectId = keyof Dict['work']['projects'];

interface Project {
  id: ProjectId;
  technologies: string;
  image: string;
  url: string;
}

// Titles and descriptions live in i18n.tsx under work.projects.
// Tech tags are each project's real stack (checked against its source and the live site).
const projects: Project[] = [
  {
    id: 'powermaas',
    technologies: 'WordPress · Elementor · Rank Math SEO · TranslatePress',
    image: '/projects/powermaas-laptop.jpg',
    url: 'https://powermaas.com/',
  },
  {
    id: 'rapture',
    technologies: 'HTML5 · CSS3 · JavaScript · Node.js · SEO',
    image: '/projects/rapbuss-laptop.jpg',
    url: 'https://rapbuss.com/',
  },
  {
    id: 'nafitha',
    technologies: 'PHP · JavaScript · CSS3 · Admin Panel',
    image: '/projects/nafsacl-laptop.jpg',
    url: 'https://nafsacl.com/',
  },
  {
    id: 'razeem',
    technologies: 'Next.js · TypeScript · Prisma · MariaDB · Tailwind',
    image: '/projects/razeemre-laptop.jpg',
    url: 'https://razeemre.com/',
  },
  {
    id: 'sbs',
    technologies: 'HTML5 · CSS3 · JavaScript · Vite',
    image: '/projects/ccube-laptop.jpg',
    url: 'https://ccube.sbs/',
  },
];

const ProjectCard: React.FC<{ project: Project; hidden?: boolean }> = ({ project, hidden }) => {
  const { t } = useLang();
  const copy = t.work.projects[project.id];

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      className="group shrink-0 w-[250px] sm:w-[270px] bg-white border border-[#EAE5E1] rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#D8D0C7]"
    >
      {/* Monitor Preview */}
      <div className="bg-[#FFF8F4] w-full flex items-center justify-center border-b border-[#F0ECE7] px-3 py-2 transition-colors group-hover:bg-[#FFF3EB]">
        <SiteMonitorMockup src={project.image} alt={copy.title} />
      </div>

      {/* Info */}
      <div className="p-4 flex-1 flex flex-col bg-white">
        <h3 className="text-[15px] font-bold text-[#151515] group-hover:text-[#F36B21] transition-colors mb-1.5">
          {copy.title}
        </h3>
        <p className="text-[12px] text-[#626262] leading-relaxed mb-3 flex-1">{copy.description}</p>
        <div className="text-[11px] font-medium text-[#777] mb-3" dir="ltr">
          {project.technologies}
        </div>

        {/* View Project */}
        <span className="inline-flex items-center justify-center gap-1.5 w-full bg-[#151515] group-hover:bg-[#F36B21] text-white text-[12px] font-semibold px-4 py-2 rounded-lg transition-colors">
          <span>{t.work.view}</span>
          <ArrowUpRight size={14} strokeWidth={2.2} className="rtl:-scale-x-100" />
        </span>
      </div>
    </a>
  );
};

export const SelectedWork: React.FC = () => {
  const { t } = useLang();

  return (
    <section id="work" className="py-12 sm:py-16">
      {/* Section Heading */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[#151515] tracking-tight mb-1.5">
          {t.work.title}
        </h2>
        <BrushUnderline className="w-11" />
      </div>

      {/* Moving strip — the list is rendered twice so the loop is seamless */}
      <div className="marquee">
        <div className="marquee-track">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {projects.map((project) => (
            <ProjectCard key={`${project.id}-copy`} project={project} hidden />
          ))}
        </div>
      </div>
    </section>
  );
};
