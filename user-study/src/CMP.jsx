import { useState, useEffect, useRef } from 'react';
import { logEvent } from "./logger";
import { EVENT_TARGETS, EVENT_TYPES, TOGGLE_CATEGORIES, META } from "./constants";

function CMP({ sessionId, siteName, index, toggles, onClose, onToggle }) {
  const hasLoggedRef = useRef(false);

  useEffect(() => {
    if (hasLoggedRef.current) return; 
    hasLoggedRef.current = true;

    logEvent(
      sessionId,
      siteName,
      index,
      EVENT_TYPES.CMP_SHOWN,
      EVENT_TARGETS.CMP_FIRST_LAYER
    );
  }, [sessionId, siteName, index]);

  function toggleCategory(cat) {
    onToggle(prev => {
      const next = {
        ...prev,
        [cat]: !prev[cat]
      };

      localStorage.setItem(META.TOGGLES, JSON.stringify(next));
      return next;
    });
  }

  function ToggleRow({ label, checked, toggleCat, logTarget }) {
    return (
      <div className="flex items-center justify-between w-full py-2">
        <span className="text-lg">{label}</span>
        <Toggle checked={checked} toggleCat={toggleCat} logTarget={logTarget} />
      </div>
    );
  }

  function Toggle({ logTarget, checked, toggleCat }) {
    const [isOn, setIsOn] = useState(checked);

    function toggle() {
      logEvent(
            sessionId,
            siteName,
            index,
            isOn ? EVENT_TYPES.TOGGLE_OFF : EVENT_TYPES.TOGGLE_ON,
            logTarget
          );
      const newValue = !isOn;
      setIsOn(newValue);
      toggleCategory(toggleCat);
    }

    return (
      <div
        onClick={() => toggle()}
        className={`
          w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-all
          ${isOn ? "bg-blue-500" : "bg-gray-300"}
        `}
      >
        <div
          className={`
            w-4 h-4 bg-white rounded-full shadow-md transform transition-transform
            ${isOn ? "ml-auto" : "ml-0"}
          `}
        />
      </div>
    );
  } 

  function Button({ label, logTarget, extraOnClick }) {
    return (
      <button
        className="w-40 h-10 bg-blue-500 text-white uppercase hover:bg-blue-300"
        onClick={() => {
          logEvent(
            sessionId,
            siteName,
            index,
            EVENT_TYPES.BUTTON_CLICK,
            logTarget
          );

          if (extraOnClick) extraOnClick();
        }}
      >
        {label}
      </button>
    );
  }

  // function handleButtonClick(target) {
  //   logEvent(
  //           sessionId,
  //           siteName,
  //           index,
  //           EVENT_TYPES.BUTTON_CLICK,
  //           EVENT_TARGETS.BTN_CLOSE_CMP
  //         );

  //   onClose(target); 
  // }

  // function handleMoreOptions(showMoreOptions) {
  //   logEvent(
  //     sessionId,
  //     siteName,
  //     index,
  //     showMoreOptions ? EVENT_TYPES.PANEL_OPEN : EVENT_TYPES.PANEL_CLOSE,
  //     EVENT_TARGETS.BTN_MORE_OPTIONS
  //   );

  //   setShowMoreOptions(showMoreOptions)
  // }

  // if (showMoreOptions) {
  //   return (
  //     <div className="bg-white w-1/2 h-3/4 shadow-lg shadow-black"
  //           onClick={(e) => e.stopPropagation()}>
  //       <span className="relative left-4 top-4 cursor-pointer text-xl" onClick={() => handleButtonClick(EVENT_TARGETS.CMP_SECOND_LAYER)}>
  //         X
  //       </span>

  //       <div className="p-6">
  //         <p className="text-2xl font-bold mb-4">More Options</p>
  //         <p className="text-base mb-4">This is where your detailed settings will go.</p>
  //         <ToggleRow label={"Ads and third party consent"} logTarget={EVENT_TARGETS.TOGGLE_MARKETING}></ToggleRow>
  //         <ToggleRow label={"Tracking across devices"} logTarget={EVENT_TARGETS.TOGGLE_TRACKING}></ToggleRow>
  //         <ToggleRow label={"Statistics and internal development"} logTarget={EVENT_TARGETS.TOGGLE_ANALYTICS}></ToggleRow>
  //         <ToggleRow label={"Essential cookies"} logTarget={EVENT_TARGETS.TOGGLE_NECESSARY}></ToggleRow>
  //         <div className="flex justify-evenly w-full mt-10">
  //           <Button label={"back"} logTarget={EVENT_TARGETS.BTN_BACK} extraOnClick={() => handleMoreOptions(false)}></Button>
  //           <Button label={"submit"} logTarget={EVENT_TARGETS.BTN_SAVE_CUSTOM} extraOnClick={() => onClose(EVENT_TARGETS.CMP_SECOND_LAYER)}></Button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="bg-white w-1/2 h-3/4 shadow-lg shadow-black"
        onClick={(e) => e.stopPropagation()}>
      <div className="m-14 flex-col">
        <p className="text-4xl font-bold text-center">Manage Automatic Consent Settings</p>
        <p className="text-base">Configure your privacy consent settings, which will be applied on every website visited.</p>
        <ToggleRow 
          label={"Ads and third party consent"} 
          logTarget={EVENT_TARGETS.TOGGLE_MARKETING}
          checked={toggles.marketing}
          toggleCat={TOGGLE_CATEGORIES.MARKETING}
        />
        <ToggleRow 
          label={"Tracking across devices"} 
          logTarget={EVENT_TARGETS.TOGGLE_TRACKING}
          checked={toggles.tracking}
          toggleCat={TOGGLE_CATEGORIES.TRACKING}
        />
        <ToggleRow 
          label={"Statistics and internal development"} 
          logTarget={EVENT_TARGETS.TOGGLE_ANALYTICS}
          checked={toggles.analytics}
          toggleCat={TOGGLE_CATEGORIES.ANALYTICS}
        />
        <ToggleRow 
          label={"Essential cookies"} 
          logTarget={EVENT_TARGETS.TOGGLE_NECESSARY}
          checked={toggles.necessary}
          toggleCat={TOGGLE_CATEGORIES.NECESSARY}
        />
        <div className="flex justify-center w-full mt-10">
          <Button label={"confirm"} logTarget={EVENT_TARGETS.BTN_CONFIRM_GLOBAL_DEFAULT} extraOnClick={() => onClose(EVENT_TARGETS.CMP_FIRST_LAYER)}></Button>
        </div>
      </div>
    </div>
  );
}

export default CMP;