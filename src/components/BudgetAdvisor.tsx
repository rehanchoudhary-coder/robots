'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  robotComponents,
  getBestValueComponents,
  categoryMeta,
  type RobotComponent,
} from '@/data/robotics';

const BUDGET_PRESETS = [50, 100, 200, 500];

function ComponentCard({
  component,
  index,
  isSelected,
}: {
  component: RobotComponent;
  index: number;
  isSelected: boolean;
}) {
  const meta = categoryMeta[component.category];
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative"
    >
      <div
        className={`relative bg-[#0D1321]/90 backdrop-blur-xl border rounded-2xl p-6 cursor-pointer transition-all duration-500 ${
          isSelected
            ? 'border-[#4F9C8F]/50 shadow-lg shadow-[#4F9C8F]/10'
            : 'border-white/5 hover:border-white/10'
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Best Value Badge */}
        {isSelected && (
          <motion.div
            className="absolute -top-3 -right-3 z-10"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="bg-gradient-to-r from-[#4F9C8F] to-[#D4A574] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              ★ BEST VALUE
            </div>
          </motion.div>
        )}

        {/* Glow */}
        <div
          className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-15 transition-opacity duration-700"
          style={{ background: meta.color }}
        />

        {/* Header Row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-xl border"
              style={{
                background: `${meta.color}10`,
                borderColor: `${meta.color}25`,
              }}
            >
              {meta.icon}
            </div>
            <div>
              <h4 className="text-white font-bold text-base">{component.name}</h4>
              <p
                className="text-xs font-mono uppercase tracking-wider"
                style={{ color: meta.color }}
              >
                {meta.label}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-white font-black text-xl">${component.price}</p>
            <p className="text-gray-500 text-xs font-mono">USD</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex items-center gap-4 mb-4">
          <div
            className="px-3 py-1 rounded-lg text-xs font-mono"
            style={{
              background: `${meta.color}10`,
              color: meta.color,
              border: `1px solid ${meta.color}20`,
            }}
          >
            {component.performanceImpact}
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{
                  background: i < Math.floor(component.rating) ? meta.color : `${meta.color}20`,
                }}
              />
            ))}
            <span className="text-gray-500 text-xs ml-1 font-mono">{component.rating}</span>
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed">{component.description}</p>

        {/* Expandable Specs */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-2 gap-3">
                {Object.entries(component.specs).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-gray-500 text-xs font-mono uppercase">{key}</p>
                    <p className="text-white text-sm font-mono">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand hint */}
        <div className="mt-4 flex items-center justify-center">
          <motion.svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-gray-500"
            animate={{ rotate: isExpanded ? 180 : 0 }}
          >
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function BudgetAdvisor() {
  const [budget, setBudget] = useState(200);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const bestValue = useMemo(() => getBestValueComponents(budget), [budget]);
  const bestValueIds = useMemo(
    () => new Set(bestValue.components.map((c) => c.id)),
    [bestValue]
  );

  const filteredComponents = useMemo(() => {
    if (selectedCategory === 'all') return robotComponents;
    return robotComponents.filter((c) => c.category === selectedCategory);
  }, [selectedCategory]);

  const affordableComponents = useMemo(
    () => filteredComponents.filter((c) => c.price <= budget),
    [filteredComponents, budget]
  );

  const categories = ['all', ...Object.keys(categoryMeta)] as const;

  return (
    <section className="relative py-32 px-6" id="budget-advisor">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            COMPONENT{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A574] to-[#4F9C8F]">
              ARCHITECT
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono tracking-wide">
            Input your budget and we&apos;ll recommend the optimal component stack
          </p>
        </motion.div>

        {/* Budget Input Section */}
        <motion.div
          className="max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-[#0D1321]/90 backdrop-blur-xl border border-[#4F9C8F]/10 rounded-3xl p-8">
            {/* Budget Slider */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <label className="text-gray-400 font-mono text-sm uppercase tracking-wider">
                  Your Budget
                </label>
                <div className="flex items-baseline gap-1">
                  <span className="text-[#4F9C8F] text-sm font-mono">$</span>
                  <input
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(Math.max(0, Math.min(1000, Number(e.target.value))))}
                    className="bg-transparent text-white text-3xl font-black w-24 text-right outline-none focus:text-[#4F9C8F] transition-colors"
                  />
                </div>
              </div>
              <input
                type="range"
                min="10"
                max="1000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-[#1a2235] rounded-full appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-[#4F9C8F] [&::-webkit-slider-thumb]:to-[#D4A574]
                  [&::-webkit-slider-thumb]:cursor-pointer
                  [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-[#4F9C8F]/30
                  [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white/20
                "
              />
              <div className="flex justify-between mt-2">
                <span className="text-gray-600 text-xs font-mono">$10</span>
                <span className="text-gray-600 text-xs font-mono">$1,000</span>
              </div>
            </div>

            {/* Quick Presets */}
            <div className="flex gap-3 mb-8">
              {BUDGET_PRESETS.map((preset) => (
                <motion.button
                  key={preset}
                  onClick={() => setBudget(preset)}
                  className={`px-4 py-2 rounded-xl text-sm font-mono transition-all duration-300 ${
                    budget === preset
                      ? 'bg-gradient-to-r from-[#4F9C8F] to-[#D4A574] text-white shadow-lg shadow-[#4F9C8F]/20'
                      : 'bg-[#1a2235] text-gray-400 hover:text-white hover:bg-[#243050]'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ${preset}
                </motion.button>
              ))}
            </div>

            {/* Best Value Summary */}
            <AnimatePresence mode="wait">
              <motion.div
                key={budget}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0A0F1A] rounded-2xl p-6 border border-[#4F9C8F]/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold text-lg">🎯 Optimal Build</h3>
                  <div className="text-right">
                    <p className="text-[#4F9C8F] font-black text-xl">${bestValue.totalCost}</p>
                    <p className="text-gray-500 text-xs font-mono">
                      ${bestValue.remaining} remaining
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {bestValue.components.map((comp) => {
                    const meta = categoryMeta[comp.category];
                    return (
                      <div
                        key={comp.id}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg"
                        style={{
                          background: `${meta.color}08`,
                          border: `1px solid ${meta.color}15`,
                        }}
                      >
                        <span className="text-sm">{meta.icon}</span>
                        <div className="min-w-0">
                          <p className="text-white text-xs font-bold truncate">{comp.name}</p>
                          <p className="text-gray-500 text-xs font-mono">${comp.price}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {bestValue.components.length === 0 && (
                  <p className="text-gray-500 text-sm text-center py-4 font-mono">
                    Budget too low for any components
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const meta = cat === 'all' ? null : categoryMeta[cat as keyof typeof categoryMeta];
            const isActive = selectedCategory === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-mono uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-lg'
                    : 'bg-[#0D1321] border border-white/5 text-gray-500 hover:text-white hover:border-white/10'
                }`}
                style={
                  isActive
                    ? {
                        background: meta
                          ? `linear-gradient(135deg, ${meta.color}30, ${meta.color}10)`
                          : 'linear-gradient(135deg, #4F9C8F30, #D4A57410)',
                        border: `1px solid ${meta ? meta.color : '#4F9C8F'}30`,
                        boxShadow: `0 8px 30px ${meta ? meta.color : '#4F9C8F'}15`,
                      }
                    : undefined
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {meta && <span>{meta.icon}</span>}
                {cat === 'all' ? '🔧 All' : meta?.label}
              </motion.button>
            );
          })}
        </div>

        {/* Components Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {affordableComponents.map((component, index) => (
              <ComponentCard
                key={component.id}
                component={component}
                index={index}
                isSelected={bestValueIds.has(component.id)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {affordableComponents.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">💸</div>
            <p className="text-gray-400 font-mono text-lg">
              No components available at this budget
            </p>
            <p className="text-gray-600 text-sm font-mono mt-2">
              Try increasing your budget above ${Math.min(...robotComponents.map((c) => c.price))}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
