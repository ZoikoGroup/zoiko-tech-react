import Image from "next/image";
import { ChevronRight } from "lucide-react";

type BuyerQuestion = {
  question: string;
};

const buyerQuestions: BuyerQuestion[] = [
  { question: "What is Zoiko Tech Modernization & Integration?" },
  { question: "Does modernization require replacing our existing systems?" },
  { question: "How should we decide what to modernize first?" },
  { question: "How are integrations designed?" },
  { question: "How do you reduce migration risk?" },
  { question: "How is data handled during modernization?" },
  { question: "How do we start?" },
];

export default function BuyerQuestionsSection() {
  return (
    <section className="w-full bg-white py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4">
            Buyer questions, answered directly
          </h2>
        </div>

        {/* Content Grid: Left Questions List, Right Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Questions List (7 cols) */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-slate-200 border-t border-b border-slate-200">
            {buyerQuestions.map((item, index) => (
              <div
                key={index}
                className="py-5 flex items-center justify-between group cursor-pointer hover:bg-slate-50 transition-colors px-4 rounded-xl"
              >
                <span className="text-slate-900 font-medium text-base md:text-lg">
                  {item.question}
                </span>
              </div>
            ))}
          </div>

          {/* Right Illustration Area (5 cols) */}
          <div className="lg:col-span-6 relative w-full h-[350px] sm:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/modern/18.png"
              alt="Buyer questions and technical support command center"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
