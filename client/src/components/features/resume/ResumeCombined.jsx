import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FileText, Target } from 'lucide-react';
import ResumeAudit from './ResumeAudit';
import ResumeTailor from './ResumeTailor';

const ResumeCombined = () => {
  const [activeTab, setActiveTab] = useState('audit');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const tabs = [
    { id: 'audit', label: 'Resume Auditor', icon: FileText, blurb: 'Parse, score, and fix your resume' },
    { id: 'tailor', label: 'Resume Tailor', icon: Target, blurb: 'Align resume to any job description' },
  ];

  const tabSpring = {
    type: 'spring',
    stiffness: 320,
    damping: 26,
  };

  return (
    <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="sticky top-16 sm:top-20 z-20 bg-[#0f172a]/90 backdrop-blur-md rounded-2xl border border-white/5 shadow-lg shadow-indigo-500/10 px-3 sm:px-4 py-3 sm:py-4 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-semibold text-sm sm:text-base transition-all border border-white/10 ${
                  activeTab === tab.id
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                <tab.icon size={18} className="text-indigo-300" />
                <div className="text-left">
                  <p className="leading-tight">{tab.label}</p>
                  <p className="text-[11px] sm:text-xs text-gray-500 hidden sm:block">{tab.blurb}</p>
                </div>
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="tabGlow"
                    transition={tabSpring}
                    className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-indigo-500/40 via-purple-500/30 to-pink-500/30 blur-sm"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'audit' && (
          <motion.div
            key="audit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="scroll-mt-24"
          >
            <ResumeAudit />
          </motion.div>
        )}

        {activeTab === 'tailor' && (
          <motion.div
            key="tailor"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="scroll-mt-24"
          >
            <ResumeTailor />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResumeCombined;
