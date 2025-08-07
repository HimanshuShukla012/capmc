import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Why Choose Dubai For Starting A Business?",
    answer:
      "Dubai is a strategic global business destination offering world-class infrastructure, a strategic location connecting major markets, tax-friendly policies, political stability, and a diverse, innovative economy.",
  },
  {
    question: "What Support Does Dubai Offer Entrepreneurs Starting A Business?",
    answer:
      "Dubai offers extensive support to entrepreneurs through simplified business setup processes, competitive licensing options, investor visas, and dedicated free zones with numerous incentives.",
  },
  {
    question: "What Are My Options For Company Formation In The UAE, And How Much Does It Cost?",
    answer:
      "You can establish your business in a Freezone, Mainland, or Offshore jurisdiction. Cost varies by setup type, jurisdiction, activity, and license.",
  },
  {
    question: "What Kind Of Business Licenses Are Available In Dubai?",
    answer:
      "Dubai offers Commercial, Professional, Industrial, and Tourism licenses. Each caters to different business sectors.",
  },
  {
    question: "How Long Does The Company Formation Process Take In Dubai, And What Documents Are Required?",
    answer:
      "It usually takes 3 weeks to a few months. Documents include passport copies, visa (if applicable), proof of address, business plan, and regulatory approvals.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 md:px-24 bg-[#000D1A] text-white fade-in rounded-[2rem] shadow-2xl">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
        <span className="text-[#FFC72C]">Frequently</span> Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-[#001f33] border border-white/10 rounded-xl shadow-lg transition-all duration-300"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                onClick={() => toggleFAQ(idx)}
              >
                <span className="text-lg font-semibold text-white">
                  {item.question}
                </span>
                {isOpen ? (
                  <ChevronUp className="text-[#FFC72C]" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>
              <div
                className={`px-6 pt-0 pb-5 text-gray-300 text-sm transition-all duration-300 ease-in-out ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;
