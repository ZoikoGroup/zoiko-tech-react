"use client"
import React, { useState } from "react";
import {
  Video,
  Network,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function BuildMediaExperiencesSection() {
  const [formData, setFormData] = useState({
    workEmail: "",
    organization: "",
    organizationType: "",
    primaryObjective: "",
    distributionModel: "",
    evaluationStage: "",
    acknowledge: false,
    updates: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4 text-white max-w-4xl">
          Build media experiences that stay
          operationally clear from launch to replay.
        </h2>

        {/* Grid Layout: Left Info vs Right Consultation Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-10">
          {/* Left Column: Details (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
                Talk with Zoiko Tech about the experience, systems and
                operational states that matter — and the product or integration
                path that fits your environment.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-3">
                  Begin with one defined <br />
                  experience.
                </h3>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  Establish the source, accountable operator, readiness checks
                  and supported delivery path before launch.
                </p>
              </div>

              {/* Bullet points with icons */}
              <div className="flex flex-col gap-4 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-950/80 border border-teal-700/40 flex items-center justify-center text-teal-300 shrink-0">
                    <Video className="w-4 h-4" />
                  </div>
                  <span className="text-xs md:text-sm text-gray-200 font-medium">
                    Live, streaming, content or community objective
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-950/80 border border-teal-700/40 flex items-center justify-center text-teal-300 shrink-0">
                    <Network className="w-4 h-4" />
                  </div>
                  <span className="text-xs md:text-sm text-gray-200 font-medium">
                    Source, destination and system boundaries
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-950/80 border border-teal-700/40 flex items-center justify-center text-teal-300 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs md:text-sm text-gray-200 font-medium">
                    Permissions, service states and evidence
                  </span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-300 hover:text-white transition-colors"
              >
                Explore Media & Streaming
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Start a Conversation Form (Span 7) */}
          <div className="lg:col-span-7 bg-[#0A2528]/80 border border-teal-800/40 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl">
            <div className="mb-6 pb-4 border-b border-teal-800/40">
              <span className="text-[10px] font-bold tracking-widest text-teal-400 uppercase block mb-1">
                Start a conversation
              </span>
              <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                Discuss your media architecture
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="text-xs text-gray-400 mb-1">
                Industry:{" "}
                <span className="text-gray-200 font-medium">
                  Media & Entertainment
                </span>
              </div>

              {/* Row 1: Email & Organization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-gray-300">
                    Work email
                  </label>
                  <input
                    type="email"
                    placeholder="name@organization.com"
                    value={formData.workEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, workEmail: e.target.value })
                    }
                    className="w-full bg-[#051517] border border-teal-800/50 rounded-lg px-3 py-2 text-xs md:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-gray-300">
                    Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Organization name"
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                    className="w-full bg-[#051517] border border-teal-800/50 rounded-lg px-3 py-2 text-xs md:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Organization Type & Primary Objective */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-gray-300">
                    Organization type
                  </label>
                  <select
                    value={formData.organizationType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        organizationType: e.target.value,
                      })
                    }
                    className="w-full bg-[#051517] border border-teal-800/50 rounded-lg px-3 py-2 text-xs md:text-sm text-gray-300 focus:outline-none focus:border-teal-500 transition-colors"
                  >
                    <option value="">Select organization type</option>
                    <option value="broadcaster">
                      Broadcaster / Media Network
                    </option>
                    <option value="streaming">Streaming Platform</option>
                    <option value="enterprise">Enterprise</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-gray-300">
                    Primary objective
                  </label>
                  <select
                    value={formData.primaryObjective}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        primaryObjective: e.target.value,
                      })
                    }
                    className="w-full bg-[#051517] border border-teal-800/50 rounded-lg px-3 py-2 text-xs md:text-sm text-gray-300 focus:outline-none focus:border-teal-500 transition-colors"
                  >
                    <option value="">Select primary objective</option>
                    <option value="live-events">Live Events & Streaming</option>
                    <option value="infrastructure">Media Infrastructure</option>
                    <option value="compliance">Reliability & Security</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Distribution Model & Evaluation Stage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-gray-300">
                    Distribution / operating model
                  </label>
                  <select
                    value={formData.distributionModel}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        distributionModel: e.target.value,
                      })
                    }
                    className="w-full bg-[#051517] border border-teal-800/50 rounded-lg px-3 py-2 text-xs md:text-sm text-gray-300 focus:outline-none focus:border-teal-500 transition-colors"
                  >
                    <option value="">
                      Select distribution / operating model
                    </option>
                    <option value="cloud">Cloud Native</option>
                    <option value="hybrid">Hybrid Architecture</option>
                    <option value="on-premise">On-Premise</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-gray-300">
                    Evaluation stage
                  </label>
                  <select
                    value={formData.evaluationStage}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        evaluationStage: e.target.value,
                      })
                    }
                    className="w-full bg-[#051517] border border-teal-800/50 rounded-lg px-3 py-2 text-xs md:text-sm text-gray-300 focus:outline-none focus:border-teal-500 transition-colors"
                  >
                    <option value="">Select evaluation stage</option>
                    <option value="exploratory">
                      Exploratory Architecture
                    </option>
                    <option value="active-pilot">Active Pilot</option>
                    <option value="ready-launch">
                      Ready for Bounded Launch
                    </option>
                  </select>
                </div>
              </div>

              {/* Add more context info */}
              <div className="text-[11px] text-teal-400 font-medium mt-1">
                Add more context (optional)
              </div>

              <p className="text-[10px] text-gray-400 leading-relaxed">
                Do not submit unreleased content, confidential rights material,
                stream keys, credentials, private event links, audience personal
                information or confidential production data.
              </p>

              {/* Checkboxes */}
              <div className="flex flex-col gap-2.5 mt-1">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.acknowledge}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        acknowledge: e.target.checked,
                      })
                    }
                    className="mt-0.5 rounded border-teal-800 bg-[#051517] text-teal-500 focus:ring-0"
                  />
                  <span className="text-[11px] text-gray-300 leading-tight">
                    I acknowledge that this preview does not send or store my
                    information.
                  </span>
                </label>

                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.updates}
                    onChange={(e) =>
                      setFormData({ ...formData, updates: e.target.checked })
                    }
                    className="mt-0.5 rounded border-teal-800 bg-[#051517] text-teal-500 focus:ring-0"
                  />
                  <span className="text-[11px] text-gray-300 leading-tight">
                    I would like to receive optional product updates
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full bg-teal-300 hover:bg-white text-gray-900 font-bold py-3 px-6 rounded-lg text-xs md:text-sm transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  Review consultation request
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
