'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, useVelocity } from 'framer-motion';
import { environments, type EnvironmentData } from '@/data/robotics';

const TOTAL_FRAMES = 192;
const FRAME_PREFIX = '/frames/ezgif-frame-';

function getFramePath(index: number): string {
  const padded = String(index).padStart(3, '0');
  return `${FRAME_PREFIX}${padded}.jpg`;
}

export default function HeroCanvasAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentEnv, setCurrentEnv] = useState<EnvironmentData>(environments[0]);
  const [scrollVelocity, setScrollVelocity] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [1, TOTAL_FRAMES]);

  // Anti-gravity float effect based on scroll velocity
  const floatY = useSpring(0, { stiffness: 50, damping: 20 });
  const floatRotate = useSpring(0, { stiffness: 40, damping: 15 });

  // Track scroll velocity for anti-gravity effect
  const rawScrollVelocity = useVelocity(scrollYProgress);
  useMotionValueEvent(rawScrollVelocity, 'change', (velocity) => {
    const clampedVelocity = Math.max(-2, Math.min(2, velocity));
    setScrollVelocity(clampedVelocity);
    floatY.set(clampedVelocity * -30);
    floatRotate.set(clampedVelocity * 3);
  });

  // Determine current environment based on frame
  useMotionValueEvent(frameIndex, 'change', (latest) => {
    const frame = Math.round(latest);
    const env = environments.find(
      (e) => frame >= e.frameRange[0] && frame <= e.frameRange[1]
    );
    if (env && env.id !== currentEnv.id) {
      setCurrentEnv(env);
    }
  });

  // Preload all frames
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loaded++;
        setLoadingProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
        if (loaded === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        loaded++;
        setLoadingProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
        if (loaded === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;
  }, []);

  // Canvas rendering
  const renderFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const frameIdx = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(index) - 1));
      const img = imagesRef.current[frameIdx];

      if (img && img.complete && img.naturalWidth > 0) {
        // Cover-fit the image
        const scale = Math.max(
          canvas.width / img.naturalWidth,
          canvas.height / img.naturalHeight
        );
        const x = (canvas.width - img.naturalWidth * scale) / 2;
        const y = (canvas.height - img.naturalHeight * scale) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);
      }
    },
    []
  );

  // Responsive canvas sizing
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      renderFrame(frameIndex.get());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [renderFrame, frameIndex]);

  // Subscribe to frame changes
  useMotionValueEvent(frameIndex, 'change', (latest) => {
    renderFrame(latest);
  });

  const progressPercent = useTransform(smoothProgress, [0, 1], [0, 100]);

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Loading Screen */}
        {!isLoaded && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0F1A]">
            <motion.div
              className="relative"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <div className="text-6xl mb-8">🤖</div>
            </motion.div>
            <div className="w-64 h-2 bg-[#1a2235] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #4F9C8F, #D4A574)',
                  width: `${loadingProgress}%`,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="text-[#4F9C8F] mt-4 font-mono text-sm tracking-wider">
              LOADING SIMULATION... {loadingProgress}%
            </p>
          </div>
        )}

        {/* Robot Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: isLoaded ? 1 : 0 }}
        />

        {/* Cinematic Overlay Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at center, transparent 30%, #0A0F1A 80%),
                linear-gradient(to bottom, transparent 60%, #0A0F1A 100%)
              `,
            }}
          />
        </div>

        {/* Anti-Gravity Floating UI Elements */}
        <motion.div
          className="absolute top-8 left-8 z-20"
          style={{ y: floatY, rotate: floatRotate }}
        >
          <div className="bg-[#0A0F1A]/80 backdrop-blur-xl border border-[#4F9C8F]/30 rounded-2xl px-6 py-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{currentEnv.icon}</span>
              <div>
                <motion.h2
                  key={currentEnv.id}
                  className="text-white font-bold text-lg"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {currentEnv.name}
                </motion.h2>
                <p className="text-[#4F9C8F] text-xs font-mono tracking-wider">
                  ENVIRONMENT ACTIVE
                </p>
              </div>
            </div>
            <motion.p
              key={currentEnv.description}
              className="text-gray-400 text-sm max-w-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {currentEnv.description}
            </motion.p>
          </div>
        </motion.div>

        {/* Title Overlay */}
        <motion.div
          className="absolute bottom-16 left-0 right-0 z-20 text-center"
          style={{ y: floatY }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight"
            style={{
              textShadow: '0 0 60px rgba(79, 156, 143, 0.5), 0 0 120px rgba(79, 156, 143, 0.2)',
            }}
          >
            ROBOT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F9C8F] to-[#D4A574]">SIMULATOR</span>
          </motion.h1>
          <p className="text-gray-400 text-lg tracking-[0.3em] font-mono uppercase">
            Scroll to Simulate • Design • Build
          </p>
        </motion.div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 z-30">
          <motion.div
            className="h-full"
            style={{
              width: useTransform(progressPercent, (v) => `${v}%`),
              background: `linear-gradient(90deg, #4F9C8F, ${currentEnv.color}, #D4A574)`,
            }}
          />
        </div>

        {/* Environment Timeline Markers */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
          {environments.map((env) => (
            <motion.div
              key={env.id}
              className="flex items-center gap-3 cursor-pointer group"
              whileHover={{ x: -8 }}
              style={{ y: floatY }}
            >
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  currentEnv.id === env.id
                    ? 'scale-125 shadow-lg'
                    : 'opacity-40 group-hover:opacity-70'
                }`}
                style={{
                  borderColor: env.color,
                  backgroundColor: currentEnv.id === env.id ? env.color : 'transparent',
                  boxShadow: currentEnv.id === env.id ? `0 0 20px ${env.color}60` : 'none',
                }}
              />
              <span
                className={`text-xs font-mono transition-all duration-300 ${
                  currentEnv.id === env.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                }`}
                style={{ color: env.color }}
              >
                {env.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Velocity Indicator */}
        <motion.div
          className="absolute bottom-8 right-8 z-20"
          style={{ y: floatY, rotate: floatRotate }}
        >
          <div className="bg-[#0A0F1A]/80 backdrop-blur-xl border border-[#D4A574]/20 rounded-xl px-4 py-3">
            <p className="text-[#D4A574] text-xs font-mono mb-1">SCROLL VELOCITY</p>
            <div className="flex items-center gap-2">
              <div className="w-16 h-2 bg-[#1a2235] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#4F9C8F] to-[#D4A574] rounded-full"
                  style={{ width: `${Math.min(100, Math.abs(scrollVelocity) * 50)}%` }}
                />
              </div>
              <span className="text-white text-xs font-mono">
                {Math.abs(scrollVelocity).toFixed(1)}x
              </span>
            </div>
          </div>
        </motion.div>

        {/* Scroll Hint (visible only at top) */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
          style={{ opacity: useTransform(smoothProgress, [0, 0.05], [1, 0]) }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#4F9C8F]">
              <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
          <p className="text-[#4F9C8F]/60 text-xs font-mono mt-2">SCROLL TO BEGIN</p>
        </motion.div>
      </div>
    </div>
  );
}
