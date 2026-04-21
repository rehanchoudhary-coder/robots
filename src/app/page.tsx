'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const HeroCanvasAnimation = dynamic(
  () => import('@/components/HeroCanvasAnimation'),
  { ssr: false }
);
const EnvironmentMetrics = dynamic(
  () => import('@/components/EnvironmentMetrics'),
  { ssr: false }
);
const BudgetAdvisor = dynamic(
  () => import('@/components/BudgetAdvisor'),
  { ssr: false }
);

const seededValue = (index: number, salt: number) => {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
};

const floatingParticles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  size: seededValue(i, 1) * 4 + 1,
  left: seededValue(i, 2) * 100,
  top: seededValue(i, 3) * 100,
  background: i % 3 === 0 ? '#4F9C8F' : i % 3 === 1 ? '#D4A574' : '#ffffff',
  opacity: seededValue(i, 4) * 0.3 + 0.05,
  driftY: -(seededValue(i, 5) * 100 + 50),
  driftX: seededValue(i, 6) * 60 - 30,
  activeOpacity: seededValue(i, 7) * 0.3 + 0.1,
  duration: seededValue(i, 8) * 8 + 8,
  delay: seededValue(i, 9) * 5,
}));

/* ── Floating Particles Background ──────────────────────────────────────────── */
function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            background: particle.background,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, particle.driftY, 0],
            x: [0, particle.driftX, 0],
            opacity: [0.05, particle.activeOpacity, 0.05],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}

/* ── Navbar ─────────────────────────────────────────────────────────────────── */
function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4F9C8F] to-[#D4A574] flex items-center justify-center text-white font-black text-sm shadow-lg shadow-[#4F9C8F]/20">
            RS
          </div>
          <div>
            <h1 className="text-white font-bold text-sm tracking-wider">ROBO<span className="text-[#4F9C8F]">SIM</span></h1>
            <p className="text-gray-500 text-[10px] font-mono tracking-[0.2em]">ARCHITECT v2.0</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Simulator', href: '#hero' },
            { label: 'Environments', href: '#environment-metrics' },
            { label: 'Architect', href: '#budget-advisor' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-400 text-sm font-mono tracking-wider hover:text-[#4F9C8F] transition-colors duration-300 uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        <motion.a
          href="#budget-advisor"
          className="px-5 py-2.5 rounded-xl text-sm font-mono font-bold tracking-wider bg-gradient-to-r from-[#4F9C8F]/20 to-[#D4A574]/20 text-[#4F9C8F] border border-[#4F9C8F]/20 hover:border-[#4F9C8F]/50 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          BUILD →
        </motion.a>
      </div>
    </motion.nav>
  );
}

/* ── Divider ─────────────────────────────────────────────────────────────────── */
function SectionDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className="relative py-20">
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-full max-w-4xl h-px"
          style={{
            background: flip
              ? 'linear-gradient(90deg, transparent, #D4A574, transparent)'
              : 'linear-gradient(90deg, transparent, #4F9C8F, transparent)',
            opacity: 0.3,
          }}
        />
      </div>
      <div className="relative flex justify-center">
        <motion.div
          className="w-3 h-3 rounded-full"
          style={{
            background: flip
              ? 'linear-gradient(135deg, #D4A574, #4F9C8F)'
              : 'linear-gradient(135deg, #4F9C8F, #D4A574)',
            boxShadow: `0 0 30px ${flip ? '#D4A574' : '#4F9C8F'}40`,
          }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
}

/* ── Stats Section ──────────────────────────────────────────────────────────── */
function StatsBar() {
  const stats = [
    { label: 'Components', value: '20+', icon: '🔧' },
    { label: 'Environments', value: '4', icon: '🌍' },
    { label: 'Frames', value: '192', icon: '🎬' },
    { label: 'Categories', value: '6', icon: '📦' },
  ];

  return (
    <motion.section
      className="py-20 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="relative bg-[#0D1321]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6 text-center group hover:border-[#4F9C8F]/20 transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="absolute -top-8 -right-8 w-16 h-16 rounded-full blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-[#4F9C8F]" />
            <div className="text-3xl mb-3">{stat.icon}</div>
            <p className="text-3xl md:text-4xl font-black text-white mb-1 glow-text">{stat.value}</p>
            <p className="text-gray-500 text-xs font-mono uppercase tracking-[0.2em]">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

/* ── Features Section ───────────────────────────────────────────────────────── */
function FeaturesSection() {
  const features = [
    {
      icon: '🎮',
      title: 'Scroll-to-Simulate',
      description: 'Control your robot frame-by-frame with intuitive scroll mechanics. 192 unique frames of animation.',
      color: '#4F9C8F',
    },
    {
      icon: '🌐',
      title: 'Multi-Environment',
      description: 'Test across Mars, Deep Sea, and smart factory environments with real-time performance telemetry.',
      color: '#E85D3A',
    },
    {
      icon: '💡',
      title: 'Smart Advisor',
      description: 'AI-powered component recommendation engine that optimizes your build for any budget.',
      color: '#D4A574',
    },
    {
      icon: '⚡',
      title: 'Anti-Gravity UI',
      description: 'Physics-based floating elements that respond to your scroll velocity for an immersive experience.',
      color: '#A78BFA',
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            PLATFORM{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F9C8F] to-[#D4A574]">
              FEATURES
            </span>
          </h2>
          <p className="text-gray-400 text-lg font-mono">Next-generation simulation technology</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group relative bg-[#0D1321]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-opacity-30 transition-all duration-500"
              style={{ '--hover-color': feature.color } as React.CSSProperties}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div
                className="absolute -top-12 -left-12 w-24 h-24 rounded-full blur-[60px] opacity-0 group-hover:opacity-15 transition-opacity duration-700"
                style={{ background: feature.color }}
              />
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 border"
                style={{
                  background: `${feature.color}10`,
                  borderColor: `${feature.color}20`,
                }}
              >
                {feature.icon}
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Footer ─────────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="relative py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4F9C8F] to-[#D4A574] flex items-center justify-center text-white font-black text-sm">
              RS
            </div>
            <h3 className="text-white font-bold text-lg tracking-wider">
              ROBO<span className="text-[#4F9C8F]">SIM</span>
            </h3>
          </div>
          <p className="text-gray-500 text-sm font-mono mb-8 max-w-md mx-auto">
            Smart Robot Simulator & Architect Platform. Design, simulate, and build your next robot.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            {['Simulator', 'Environments', 'Architect'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-500 text-xs font-mono uppercase tracking-wider hover:text-[#4F9C8F] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          <div
            className="w-full max-w-xs mx-auto h-px mb-8"
            style={{
              background: 'linear-gradient(90deg, transparent, #4F9C8F30, transparent)',
            }}
          />
          <p className="text-gray-600 text-xs font-mono">
            © 2026 RoboSim. Built with Next.js 14 • Framer Motion • Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

/* ── Main Page Assembly ─────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main className="relative min-h-screen grid-pattern">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Navigation */}
      <Navbar />

      {/* Hero — Scroll-Driven Robot Canvas */}
      <section id="hero">
        <HeroCanvasAnimation />
      </section>

      {/* Stats Bar */}
      <StatsBar />

      <SectionDivider />

      {/* Features */}
      <FeaturesSection />

      <SectionDivider flip />

      {/* Environment Metrics */}
      <EnvironmentMetrics />

      <SectionDivider />

      {/* Budget Advisor / Component Architect */}
      <BudgetAdvisor />

      {/* Footer */}
      <Footer />
    </main>
  );
}
