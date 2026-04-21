'use client';

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { environments, type EnvironmentData } from '@/data/robotics';

interface MetricBarProps {
  label: string;
  value: number;
  maxValue: number;
  unit: string;
  color: string;
  icon: string;
}

function MetricBar({ label, value, maxValue, unit, color, icon }: MetricBarProps) {
  const percentage = Math.max(0, Math.min(100, (value / maxValue) * 100));
  const isWarning = percentage < 30;
  const isCritical = percentage < 15;

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <span className="text-gray-400 text-sm font-mono uppercase tracking-wider">
            {label}
          </span>
        </div>
        <motion.span
          className="font-mono text-sm font-bold"
          style={{ color: isCritical ? '#EF4444' : isWarning ? '#F59E0B' : color }}
          key={value}
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {typeof value === 'number' && value < 0 ? '' : ''}
          {value}{unit}
        </motion.span>
      </div>
      <div className="h-2 bg-[#1a2235] rounded-full overflow-hidden relative">
        <motion.div
          className="h-full rounded-full relative"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ type: 'spring', stiffness: 60, damping: 20 }}
          style={{
            background: isCritical
              ? 'linear-gradient(90deg, #EF4444, #DC2626)'
              : isWarning
              ? 'linear-gradient(90deg, #F59E0B, #D97706)'
              : `linear-gradient(90deg, ${color}80, ${color})`,
            boxShadow: `0 0 20px ${isCritical ? '#EF4444' : color}40`,
          }}
        />
        {/* Pulse effect for critical */}
        {isCritical && (
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{ opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 1 }}
            style={{ background: '#EF444420' }}
          />
        )}
      </div>
    </div>
  );
}

export default function EnvironmentMetrics() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const opacity = useTransform(springProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(springProgress, [0, 0.2, 0.8, 1], [80, 0, 0, -80]);

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-32 px-6"
      style={{ opacity, y }}
      id="environment-metrics"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            ENVIRONMENT{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F9C8F] to-[#D4A574]">
              ANALYSIS
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono tracking-wide">
            Performance metrics across extreme operational environments
          </p>
        </motion.div>

        {/* Environment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {environments.map((env, index) => (
            <motion.div
              key={env.id}
              className="relative group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div
                className="relative bg-[#0D1321]/90 backdrop-blur-xl border border-white/5 rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:border-opacity-30"
                style={{
                  borderColor: `${env.color}20`,
                }}
              >
                {/* Glow effect */}
                <div
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                  style={{ background: env.color }}
                />

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border"
                      style={{
                        background: `${env.color}10`,
                        borderColor: `${env.color}30`,
                      }}
                    >
                      {env.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl">{env.name}</h3>
                      <p className="text-gray-500 text-sm font-mono">
                        Frames {env.frameRange[0]}-{env.frameRange[1]}
                      </p>
                    </div>
                  </div>
                  <div
                    className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider"
                    style={{
                      background: `${env.color}15`,
                      color: env.color,
                      border: `1px solid ${env.color}30`,
                    }}
                  >
                    {env.id === 'standby' ? 'IDLE' : 'ACTIVE'}
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-5">
                  <MetricBar
                    label="Battery"
                    value={env.metrics.battery}
                    maxValue={100}
                    unit="%"
                    color={env.color}
                    icon="🔋"
                  />
                  <MetricBar
                    label="Speed"
                    value={env.metrics.speed}
                    maxValue={100}
                    unit=" km/h"
                    color={env.color}
                    icon="⚡"
                  />
                  <MetricBar
                    label="Durability"
                    value={env.metrics.durability}
                    maxValue={100}
                    unit="%"
                    color={env.color}
                    icon="🛡️"
                  />
                  <MetricBar
                    label="Temperature"
                    value={env.metrics.temperature}
                    maxValue={100}
                    unit="°C"
                    color={env.color}
                    icon="🌡️"
                  />
                  <MetricBar
                    label="Signal"
                    value={env.metrics.signal}
                    maxValue={100}
                    unit="%"
                    color={env.color}
                    icon="📶"
                  />
                </div>

                {/* Challenges */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <p className="text-gray-500 text-xs font-mono mb-3 uppercase tracking-wider">
                    Challenges
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {env.challenges.map((challenge) => (
                      <span
                        key={challenge}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono"
                        style={{
                          background: `${env.color}08`,
                          color: `${env.color}CC`,
                          border: `1px solid ${env.color}15`,
                        }}
                      >
                        {challenge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
