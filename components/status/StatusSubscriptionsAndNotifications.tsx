import React from "react";
import {
  Mail,
  LayoutGrid,
  Bell,
  FileText,
  ShieldCheck,
  MailPlus,
  UserCheck,
  Lock,
} from "lucide-react";

export default function StatusSubscriptionsAndNotifications() {
  const cards = [
    {
      icon: <Mail className="w-6 h-6" style={{ color: "#6FD0F6" }} />,
      title: "Channels",
      description:
        "Only source-supported channels are shown. Email, SMS, webhook, RSS or app notifications are never invented.",
    },
    {
      icon: <LayoutGrid className="w-6 h-6" style={{ color: "#6FD0F6" }} />,
      title: "Scope selection",
      description:
        "Component, incident or category selection only when the source supports it.",
    },
    {
      icon: <Bell className="w-6 h-6" style={{ color: "#6FD0F6" }} />,
      title: "Purpose",
      description:
        "Operational notifications only, separate from marketing consent.",
    },
    {
      icon: <FileText className="w-6 h-6" style={{ color: "#6FD0F6" }} />,
      title: "Consent",
      description:
        "Explicit, channel-specific consent and a privacy notice where required.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" style={{ color: "#6FD0F6" }} />,
      title: "Verification",
      description: "Provider or source verification flow only when supported.",
    },
    {
      icon: <MailPlus className="w-6 h-6" style={{ color: "#6FD0F6" }} />,
      title: "Unsubscribe",
      description:
        "Easy, reliable and channel-appropriate. No login unless technically necessary and approved.",
    },
    {
      icon: <UserCheck className="w-6 h-6" style={{ color: "#6FD0F6" }} />,
      title: "Data minimization",
      description:
        "Minimum contact information. No account or customer enrichment for marketing.",
    },
    {
      icon: <Lock className="w-6 h-6" style={{ color: "#6FD0F6" }} />,
      title: "Security",
      description:
        "Tokens and verification values never enter analytics, unsafe URLs, logs or public UI.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-3 text-white">
            Status subscriptions and notifications
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl">
            Guidelines and design contracts for managing user alerts,
            communication channels, and secure notification preferences.
          </p>
        </div>

        {/* 4-Column Grid Layout (2 Rows x 4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item, index) => (
            <div
              key={index}
              style={{ backgroundColor: "#FFFFFF0F", borderColor: "#7FD0D959" }}
              className="border rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="mb-4 flex items-center justify-center sm:justify-start">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 tracking-tight text-center sm:text-left">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed text-center sm:text-left">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
