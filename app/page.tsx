'use client';

import { motion } from 'framer-motion';
import { b } from 'framer-motion/client';
import {
  ArrowUpRight,
  Code,
  Cpu,
  Github,
  Globe,
  Layers,
  Linkedin,
  Smartphone,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// --- SŁOWNIK TŁUMACZEŃ ---
const translations = {
  pl: {
    role: 'Programista Flutter i Web',
    heroTitle: 'Cześć, tu Grzegorz.',
    heroDesc: (
      <>
        Łączę świat aplikacji mobilnych z nowoczesnym webem. Student Informatyki
        na <span className='text-gray-200'>Politechnice Śląskiej</span>.
        Specjalizuję się w ekosystemie Flutter oraz wydajnych rozwiązaniach
        frontendowych.
      </>
    ),
    skillsTitle: 'Stack Technologiczny',
    skills: {
      mobile: 'Aplikacje Mobilne',
      web: 'Frontend i Web',
      core: 'Fundamenty i Edukacja',
    },
    project: {
      header: 'Główny Projekt',
      subHeader: 'APLIKACJA / PRODUKCJA',
      title: 'GabinetPro',
      category: 'Organizer dla Specjalistów',
      description: (
        <>
          Profesjonalny terminarz i asystent dla specjalistów, fizjoterapeutów,
          branży beauty i freelancerów. Aplikacja stawia na{' '}
          <strong>Prywatność Local-First</strong> - wszystkie dane są szyfrowane
          lokalnie na urządzeniu, bez chmury. Posiada system szablonów SMS,
          notatki głosowe i raporty wraz z eksportem do PDF/Excel.
        </>
      ),
      features: [
        '✓ 100% prywatność & zgodność z RODO',
        '✓ Szyfrowana lokalna baza danych',
        '✓ Kopia zapasowa na Google Drive',
      ],
      tags: ['Flutter', 'Dart', 'Android', 'Lokalna Baza', 'iOS wkrótce'],
      button: 'Zobacz',
      available: 'v1.1.1 Dostępna',
    },
    phone: {
      days: ['Pn', 'Wt', 'Śr', 'Cz', 'Pt'],
    },
    buildInfo: 'Zaprojektowano i zbudowano używając Next.js',
  },
  en: {
    role: 'Flutter & Web Developer',
    heroTitle: "Hi, I'm Grzegorz.",
    heroDesc: (
      <>
        Bridging the world of mobile apps with the modern web. Computer Science
        student at{' '}
        <span className='text-gray-200'>Silesian University of Technology</span>
        . I specialize in the Flutter ecosystem and high-performance frontend
        solutions.
      </>
    ),
    skillsTitle: 'Tech Stack',
    skills: {
      mobile: 'Mobile Development',
      web: 'Frontend & Web',
      core: 'Core & Education',
    },
    project: {
      header: 'Featured Project',
      subHeader: 'APP / PRODUCTION',
      title: 'GabinetPro',
      category: 'Organizer for Specialists',
      description: (
        <>
          Professional scheduler and assistant for specialists,
          physiotherapists, beauty industry, and freelancers. The app focuses on{' '}
          <strong>Local-First Privacy</strong> - all data is encrypted locally
          on the device, no cloud involved. Features SMS templates, voice notes,
          and reports with PDF/Excel export.
        </>
      ),
      features: [
        '✓ 100% Privacy & GDPR Compliance',
        '✓ Encrypted Local Database',
        '✓ Backup to Google Drive',
      ],
      tags: ['Flutter', 'Dart', 'Android', 'Local DB', 'iOS coming soon'],
      button: 'View Live',
      available: 'v1.1.1 Available',
    },
    phone: {
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    },
    buildInfo: 'Designed & Built with Next.js',
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Komponent z główną treścią (wymaga Suspense)
function HomeContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Pobierz język z URL, jeśli brak lub inny niż 'en', ustaw 'pl'
  const langParam = searchParams.get('lang');
  const currentLang = langParam === 'en' ? 'en' : 'pl';

  const t = translations[currentLang];

  // Funkcja zmiany języka aktualizująca URL
  const changeLanguage = (newLang: 'pl' | 'en') => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', newLang);
    // replace zmienia URL bez odświeżania i scroll: false zapobiega skakaniu
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // Definicja skills
  const skillsData = [
    {
      category: t.skills.mobile,
      icon: <Smartphone className='text-purple-400' size={20} />,
      items: ['Flutter', 'Dart', 'Firebase'],
    },
    {
      category: t.skills.web,
      icon: <Globe className='text-blue-400' size={20} />,
      items: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
      ],
    },
    {
      category: t.skills.core,
      icon: <Cpu className='text-emerald-400' size={20} />,
      items:
        currentLang === 'pl'
          ? ['Algorytmy i Struktury Danych', 'C#', 'Python', 'SQL', 'C++', 'Node.js']
          : ['Algorithms & Data Structures', 'C#', 'Python', 'SQL', 'C++', 'Node.js'],
    },
  ];

  return (
    <main className='min-h-screen flex flex-col items-center justify-center p-8 md:p-24 selection:bg-purple-500/30 relative'>
      {/* --- PRZEŁĄCZNIK JĘZYKA (HEADER) --- */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className='fixed top-6 right-6 z-50'
      >
        <div className='bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-full p-1.5 flex gap-1 shadow-2xl'>
          <button
            onClick={() => changeLanguage('pl')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
              currentLang === 'pl'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/40'
                : 'text-gray-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            PL
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
              currentLang === 'en'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/40'
                : 'text-gray-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            ENG
          </button>
        </div>
      </motion.nav>

      <motion.div
        variants={staggerContainer}
        initial='hidden'
        animate='visible'
        className='max-w-4xl w-full space-y-20'
      >
        <motion.div variants={fadeInUp} className='space-y-4'>
          <div className='flex items-center gap-3 text-purple-400 font-mono text-sm tracking-wider uppercase'>
            <Smartphone size={16} />
            <span>{t.role}</span>
          </div>

          <h1 className='text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white via-gray-200 to-gray-500 pb-2'>
            {t.heroTitle}
          </h1>

          <p className='text-xl text-gray-400 max-w-2xl leading-relaxed'>
            {t.heroDesc}
          </p>

          <div className='flex gap-6 pt-4'>
            <SocialLink
              href='https://github.com/lvvndlord'
              icon={<Github />}
              label='GitHub'
            />
            <SocialLink
              href='https://www.linkedin.com/in/grzegorz-piluk-422306376/'
              icon={<Linkedin />}
              label='LinkedIn'
            />
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className='space-y-8'>
          <div className='flex items-center gap-2'>
            <Code className='text-purple-400' />
            <h2 className='text-2xl font-semibold'>{t.skillsTitle}</h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className='bg-neutral-900/40 border border-neutral-800 p-6 rounded-2xl hover:border-purple-500/30 transition-colors group'
              >
                <div className='mb-4 bg-neutral-800/50 w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/10 transition-colors'>
                  {skill.icon}
                </div>
                <h3 className='text-lg font-medium text-gray-200 mb-3'>
                  {skill.category}
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className='text-sm text-gray-500 bg-neutral-900 px-2 py-1 rounded border border-neutral-800'
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className='h-px w-full bg-linear-to-r from-transparent via-gray-800 to-transparent' />

        <motion.div variants={fadeInUp} className='space-y-8'>
          <div className='flex items-center justify-between'>
            <h2 className='text-2xl font-semibold flex items-center gap-2'>
              <Layers className='text-purple-400' />
              {t.project.header}
            </h2>
            <span className='text-xs font-mono text-gray-500'>
              {t.project.subHeader}
            </span>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className='group relative bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors'
          >
            <div className='grid md:grid-cols-2 gap-0'>
              <div className='h-80 md:h-auto bg-linear-to-br from-neutral-800 to-neutral-900 flex items-center justify-center p-8 relative overflow-hidden'>
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(168,85,247,0.15),transparent_70%)]' />

                <div className='relative w-44 h-75 bg-neutral-950 rounded-4xl border-[6px] border-neutral-800 shadow-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 ease-out z-10 overflow-hidden'>
                  <div className='absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-neutral-800 rounded-b-lg z-20' />

                  <div className='w-full h-full bg-[#0a0a0a] flex flex-col pt-6 relative'>
                    <div className='flex justify-between items-center px-4 mb-3'>
                      <div className='h-2 w-4 bg-neutral-800 rounded-full'></div>
                      <div className='bg-purple-600/20 border border-purple-500/30 px-3 py-1 rounded-md'>
                        <div className='h-1.5 w-8 bg-purple-400 rounded-full'></div>
                      </div>
                      <div className='h-2 w-4 bg-neutral-800 rounded-full'></div>
                    </div>

                    <div className='flex justify-between items-center px-3 mb-4 border-b border-neutral-800 pb-2'>
                      {t.phone.days.map((day, i) => {
                        const isActive = i === 2; // Środa/Wed jako aktywna
                        return (
                          <div
                            key={day}
                            className={`flex flex-col items-center gap-1 ${isActive ? '' : 'opacity-50'}`}
                          >
                            {isActive ? (
                              <>
                                <div className='w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-[10px] font-bold text-white shadow-lg shadow-purple-900/50'>
                                  3
                                </div>
                                <div className='text-[8px] text-purple-400 font-bold font-mono'>
                                  {day}
                                </div>
                              </>
                            ) : (
                              <>
                                <div className='w-2 h-2 rounded-full bg-neutral-700'></div>
                                <div className='text-[8px] text-gray-500 font-mono'>
                                  {day}
                                </div>
                              </>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div className='flex flex-col gap-3 px-3 overflow-hidden'>
                      <div className='flex gap-2 items-start'>
                        <span className='text-[8px] text-gray-500 font-mono mt-1'>
                          08:00
                        </span>
                        <div className='flex-1 bg-neutral-900 border-l-2 border-purple-500 p-2 rounded-r-md border shadow-sm'>
                          <div className='w-16 h-1.5 bg-purple-500/40 rounded-full mb-1.5'></div>
                          <div className='w-10 h-1.5 bg-neutral-700 rounded-full'></div>
                        </div>
                      </div>

                      <div className='flex gap-2 items-start'>
                        <span className='text-[8px] text-gray-500 font-mono mt-1'>
                          09:00
                        </span>
                        <div className='flex-1 bg-neutral-900 border-l-2 border-yellow-500 p-2 rounded-r-md border shadow-sm'>
                          <div className='w-20 h-1.5 bg-yellow-500/40 rounded-full mb-1.5'></div>
                          <div className='w-12 h-1.5 bg-neutral-700 rounded-full'></div>
                        </div>
                      </div>

                      <div className='flex gap-2 items-center opacity-40'>
                        <span className='text-[8px] text-gray-500 font-mono'>
                          09:45
                        </span>
                        <div className='flex-1 border-t border-dashed border-neutral-600'></div>
                      </div>

                      <div className='flex gap-2 items-start'>
                        <span className='text-[8px] text-gray-500 font-mono mt-1'>
                          10:00
                        </span>
                        <div className='flex-1 bg-neutral-900 border-l-2 border-emerald-500 p-2 rounded-r-md border shadow-sm'>
                          <div className='w-14 h-1.5 bg-emerald-500/40 rounded-full mb-1.5'></div>
                          <div className='w-8 h-1.5 bg-neutral-700 rounded-full'></div>
                        </div>
                      </div>
                    </div>

                    <div className='absolute bottom-4 right-4 w-8 h-8 bg-purple-600 rounded-full shadow-lg flex items-center justify-center text-white font-bold text-sm shadow-purple-900/40'>
                      +
                    </div>
                  </div>
                </div>

                <div className='absolute bottom-4 right-4 bg-neutral-950/80 backdrop-blur-sm border border-neutral-800 px-3 py-1 rounded-full text-[10px] font-mono text-emerald-400'>
                  {t.project.available}
                </div>
              </div>

              <div className='p-8 flex flex-col justify-center space-y-5'>
                <div>
                  <h3 className='text-3xl font-bold text-white group-hover:text-purple-300 transition-colors'>
                    {t.project.title}
                  </h3>
                  <p className='text-purple-400 text-xs font-mono tracking-wider mt-1 uppercase'>
                    {t.project.category}
                  </p>
                </div>

                <p className='text-gray-400 text-sm leading-relaxed'>
                  {t.project.description}
                </p>

                <ul className='text-xs text-gray-500 space-y-1 font-mono'>
                  {t.project.features.map((feature, index) => (
                    <li key={index} className='flex items-center gap-2'>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className='flex flex-wrap gap-2 pt-2'>
                  {t.project.tags.map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1 bg-neutral-800 rounded-full text-xs text-gray-300 border border-neutral-700'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='pt-4 flex gap-3 items-center'>
                  <Link
                    href='https://gabpro.pl'
                    target='_blank'
                    className='flex items-center gap-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-purple-900/20'
                  >
                    {t.project.button} <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.footer
        variants={fadeInUp}
        className='w-full mt-24 py-8 border-t border-neutral-800 flex flex-col items-center justify-center gap-2 text-neutral-500 text-xs font-mono'
      >
        <div className='flex items-center gap-2'>
          <span>© {new Date().getFullYear()} Grzegorz Piluk</span>
          <span className='w-px h-3 bg-neutral-800'></span>
          <div
            className='flex items-center gap-1.5'
            title='Proudly from Poland'
          >
            <span className='relative flex h-2 w-2'>
              <span className='absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-red-600'></span>
            </span>
            <span>PL</span>
          </div>
        </div>
        <p className='opacity-50'>{t.buildInfo}</p>
      </motion.footer>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className='min-h-screen bg-[#0a0a0a]' />}>
      <HomeContent />
    </Suspense>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      target='_blank'
      className='p-3 bg-neutral-900 border border-neutral-800 rounded-lg hover:bg-neutral-800 hover:border-gray-600 hover:text-purple-400 transition-all duration-300 group relative'
      aria-label={label}
    >
      {icon}
      <span className='absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-neutral-700'>
        {label}
      </span>
    </Link>
  );
}
