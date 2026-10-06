"use client";

import React, { useState } from "react";

export default function ContactConsultationSection() {
  const [formData, setFormData] = useState({
    email: "",
    organization: "",
    intent: "Choose one",
    stage: "Choose one",
    topic: "",
    acknowledge: false,
    updates: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry submitted for review.");
  };

  return (
    <section
      id="contact"
      className="w-full text-white py-16 md:py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(129deg, rgba(0, 0, 0, 1) 0%, rgba(10, 37, 40, 1) 48%, rgba(36, 119, 128, 1) 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column Content */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[49px] leading-[1.15] tracking-[-0.0204em] text-white mb-3">
                Final conversion
              </h2>
              <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#C4D7D9]">
                Keep evaluation and collaboration context safe.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4">
              <h3 className="font-poppins font-bold text-lg sm:text-xl text-white">
                Research inquiry, deliberately scoped.
              </h3>
              <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#C4D7D9]">
                No artifact identifiers or publication records are passed because the
                approved catalog was not supplied.
              </p>
              <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#C4D7D9]">
                Canonical Zoiko Research, Developer Resources and Trust URLs require
                verification before launch.
              </p>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7">
            <form
              id="consultation"
              onSubmit={handleSubmit}
              className="bg-white rounded-[4px] border border-[#DCE8E8] p-6 sm:p-9 shadow-[0px_15px_45px_0px_rgba(21,59,62,0.04)] flex flex-col gap-5 text-[#102E31]"
            >
              <h3 className="font-poppins font-bold text-xl sm:text-2xl text-[#102E31]">
                Discuss research context
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Work Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-poppins font-bold text-xs uppercase tracking-wider text-[#173E43]">
                    Work email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full h-[46px] px-3.5 rounded-[5px] bg-[#F8FBFB] border border-[#CCDEDF] text-[#102E31] text-sm focus:outline-none focus:border-[#247780]"
                  />
                </div>

                {/* Organization */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-poppins font-bold text-xs uppercase tracking-wider text-[#173E43]">
                    Organization
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Organization or Institution"
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                    className="w-full h-[46px] px-3.5 rounded-[5px] bg-[#F8FBFB] border border-[#CCDEDF] text-[#102E31] text-sm focus:outline-none focus:border-[#247780]"
                  />
                </div>

                {/* Research Intent */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-poppins font-bold text-xs uppercase tracking-wider text-[#173E43]">
                    Research intent
                  </label>
                  <select
                    value={formData.intent}
                    onChange={(e) =>
                      setFormData({ ...formData, intent: e.target.value })
                    }
                    className="w-full h-[46px] px-3 rounded-[5px] bg-[#F8FBFB] border border-[#CCDEDF] text-[#20474B] font-poppins font-bold text-sm focus:outline-none focus:border-[#247780]"
                  >
                    <option value="Choose one">Choose one</option>
                    <option value="Technical evaluation">Technical evaluation</option>
                    <option value="Benchmark review">Benchmark review</option>
                    <option value="Academic inquiry">Academic inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Stage */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-poppins font-bold text-xs uppercase tracking-wider text-[#173E43]">
                    Stage
                  </label>
                  <select
                    value={formData.stage}
                    onChange={(e) =>
                      setFormData({ ...formData, stage: e.target.value })
                    }
                    className="w-full h-[46px] px-3 rounded-[5px] bg-[#F8FBFB] border border-[#CCDEDF] text-[#20474B] font-poppins font-bold text-sm focus:outline-none focus:border-[#247780]"
                  >
                    <option value="Choose one">Choose one</option>
                    <option value="Exploration">Exploration</option>
                    <option value="Proof of Concept">Proof of Concept</option>
                    <option value="Evaluation">Evaluation</option>
                    <option value="Production Planning">Production Planning</option>
                  </select>
                </div>
              </div>

              {/* Topic or Evaluation Context */}
              <div className="flex flex-col gap-1.5">
                <label className="font-poppins font-bold text-xs uppercase tracking-wider text-[#173E43]">
                  Topic or evaluation context (optional)
                </label>
                <textarea
                  rows={4}
                  value={formData.topic}
                  onChange={(e) =>
                    setFormData({ ...formData, topic: e.target.value })
                  }
                  placeholder="Provide context regarding your evaluation or research interests..."
                  className="w-full p-3.5 rounded-[5px] bg-[#F8FBFB] border border-[#CCDEDF] text-[#102E31] text-sm focus:outline-none focus:border-[#247780] resize-none"
                />
              </div>

              {/* Data Safeguard Note */}
              <p className="font-poppins text-xs leading-[19.2px] text-[#6A8285]">
                Do not submit unpublished findings, manuscript text, restricted
                datasets, credentials, production secrets, personal data or sensitive
                incident details.
              </p>

              {/* Checkboxes */}
              <div className="flex flex-col gap-3 pt-1">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.acknowledge}
                    onChange={(e) =>
                      setFormData({ ...formData, acknowledge: e.target.checked })
                    }
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-[#247780] focus:ring-[#247780]"
                  />
                  <span className="font-poppins text-xs leading-[19.2px] text-[#173E43]">
                    I acknowledge this preview does not send or store information.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.updates}
                    onChange={(e) =>
                      setFormData({ ...formData, updates: e.target.checked })
                    }
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-[#247780] focus:ring-[#247780]"
                  />
                  <span className="font-poppins text-xs leading-[19.2px] text-[#173E43]">
                    Optional updates when an approved live service is connected.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-2 py-3 px-6 rounded-[5px] bg-[#247780] hover:bg-[#1e656d] text-white font-poppins font-bold text-sm leading-[22.4px] transition-colors duration-200"
              >
                Review inquiry →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
