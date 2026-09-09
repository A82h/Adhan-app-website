import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export interface FAQItemData {
  question: string;
  answer: string;
  category: string;
}

export const FAQAccordion: React.FC<{ items: FAQItemData[] }> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const buttonId = `faq-btn-${idx}`;
        const panelId = `faq-panel-${idx}`;

        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-[#047857]/40 shadow-sm'
                : 'bg-white/80 border-slate-200 hover:border-slate-300'
            }`}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] cursor-pointer min-h-[44px]"
              >
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-[#ECFDF5] text-[#064E3B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-mono">
                    ?
                  </span>
                  <div>
                    <span className="text-xs font-mono text-emerald-700 font-medium block mb-1">
                      {item.category}
                    </span>
                    <span className="font-bold text-slate-900 text-base sm:text-lg leading-snug">
                      {item.question}
                    </span>
                  </div>
                </div>

                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#ECFDF5] text-[#064E3B] rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
            </h3>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 animate-in fade-in duration-150"
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
