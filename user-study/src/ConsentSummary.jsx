import { useState, useEffect } from "react";
import { logEvent } from "./logger";
import { EVENT_TARGETS, EVENT_TYPES, META } from "./constants";

function ConsentSummary({ sessionId, site, step }) {
  const [showDetails, setShowDetails] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const statsRaw = localStorage.getItem(META.COOKIE_STATS);
  const cookieStats = statsRaw ? JSON.parse(statsRaw) : {};
  const statsForCurrent = cookieStats[site.id] || { accepted: 0, declined: 0 };

  useEffect(() => {
    logEvent(
      sessionId,
      site.name,
      step,
      EVENT_TYPES.SUMMARY_SHOWN,
      EVENT_TARGETS.SUMMARY
    );
  }, [site, step, sessionId]);

  function logStaticEvents(target) {
    logEvent(
      sessionId,
      site.name,
      step,
      EVENT_TYPES.BUTTON_CLICK,
      target
    );
  }

  function onClose() {
    logEvent(
      sessionId,
      site.name,
      step,
      EVENT_TYPES.BUTTON_CLICK,
      EVENT_TARGETS.BTN_CLOSE_SUMMARY,
    );

    logEvent(
      sessionId,
      site.name,
      step,
      EVENT_TYPES.SUMMARY_CLOSE,
      EVENT_TARGETS.SUMMARY
    )

    setIsOpen(false);
  }

  function onShowDetails() {
    logEvent(
      sessionId,
      site.name,
      step,
      EVENT_TYPES.BUTTON_CLICK,
      showDetails ? EVENT_TARGETS.SUMMARY_CLOSE_MORE_DETAILS : EVENT_TARGETS.SUMMARY_OPEN_MORE_DETAILS
    )
    console.log(showDetails)
    setShowDetails(!showDetails)
  }

  if (!isOpen) return null;

  return (
    <div onClick={(e) => e.stopPropagation()}
      className={`
        absolute 
        bottom-6 right-6      
        bg-blue-600 
        text-white 
        rounded-xl 
        shadow-lg 
        p-4 
        w-60
        text-sm
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-2 font-semibold mb-2 text-base">
        <span>Consent summary</span>
        <span className="cursor-pointer" onClick={onClose}>X</span>
      </div>

      {/* Accepted */}
      <div className="flex items-center gap-2 py-1 border-b border-blue-400"
        onClick={() => logStaticEvents(EVENT_TARGETS.BTN_ACCEPTED_COOKIES)}
        >
        <span className="text-green-400 text-lg">✔</span>
        <span>{statsForCurrent.accepted} cookies accepted</span>
      </div>

      {/* Declined */}
      <div className="flex items-center gap-2 py-1"
        onClick={() => logStaticEvents(EVENT_TARGETS.BTN_DECLINED_COOKIES)}
      >
        <span className="text-red-400 text-lg">✖</span>
        <span>{statsForCurrent.declined} cookies declined</span>
      </div>

      {/* Mock link/button */}
      <button
        className="mt-2 underline text-white/90 hover:text-white cursor-pointer text-left bg-transparent border-none"
        onClick={() => onShowDetails()}
      >
        Want to know more?
      </button>

      {/* Hidden/Shown section */}
      {showDetails && (
        <p className="mt-2 text-white/90 text-xs italic">
          Here you would see more info about your accepted and declined cookies, but it is not implemented yet. Keep this in mind when continuing the study.
        </p>
      )}
    </div>
  );
}

export default ConsentSummary;
