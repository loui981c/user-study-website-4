import Zalando from "./assets/zalando.png";
import eu_health from "./assets/eu_health.png";
import Santander from "./assets/santander.png";

export const WEBSITES = {
  ZALANDO: "zalando",
  EU_HEALTH: "eu_health",
  SANTANDER: "santander",
};

export const DESIGN_APPROACH = {
  AUTOMATION_W_RESULTS: "automation_w_results" 
}

export const EVENT_TYPES = {
  // --- Page-level ---
  PAGE_VIEW: "page_view",
  PAGE_RELOADED: "page_reloaded",
  PAGE_LOADED: "page_loaded",
  NEXT_PAGE: "next_page",
  PAGE_TOO_SMALL: "page_too_small",
  VALIDATION_FAILED: "validation_failed",

  // --- CMP lifecycle ---
  CMP_SHOWN: "cmp_shown",
  CMP_CLOSED: "cmp_closed",

  // --- Consent choices ---
  CMP_ACCEPT: "cmp_accept",
  CMP_REJECT: "cmp_reject",
  CMP_SAVE_PREFERENCES: "cmp_save_preferences",
  CHOICE_AUTOMATION_OVERRIDDEN: "choice_automation_overridden",

  // --- Interactions ---
  CLICK: "click",
  BUTTON_CLICK: "button_click",
  TOGGLE_ON: "toggle_on",
  TOGGLE_OFF: "toggle_off",
  PANEL_OPEN: "panel_open",
  PANEL_CLOSE: "panel_close",
  LINK_CLICK: "link_click",
  SCROLL: "scroll",

  // --- Feedback ---
  SUMMARY_SHOWN: "summary_shown",
  SUMMARY_CLOSE: "summary_close",

  // --- History system ---
  HISTORY_ITEM_UPDATE: "history_item_update",
  HISTORY_PANEL_OPEN: "history_panel_open",
  HISTORY_PANEL_CLOSE: "history_panel_close",

  // --- Session-level ---
  SESSION_STARTED: "session_started",
  SESSION_ENDED: "session_ended",
};

export const EVENT_TARGETS = {
  // --- CMP structural targets ---
  CMP_FIRST_LAYER: "cmp_first_layer",
  CMP_SECOND_LAYER: "cmp_second_layer",

  SUMMARY: "summary",
  BTN_ACCEPTED_COOKIES: "btn_accepted_cookies",
  BTN_DECLINED_COOKIES: "btn_declined_cookies",  
  BTN_CLOSE_SUMMARY: "btn_close_summary",
  SUMMARY_OPEN_MORE_DETAILS: "summary_open_more_details",
  SUMMARY_CLOSE_MORE_DETAILS: "summary_close_more_details",

  // --- Buttons ---
  BTN_ACCEPT_ALL: "btn_accept_all",
  BTN_REJECT_ALL: "btn_reject_all",
  BTN_MORE_OPTIONS: "btn_more_options",
  BTN_SAVE_CUSTOM: "btn_save_custom",
  BTN_CLOSE_CMP: "btn_close_cmp",
  BTN_BACK: "btn_back",

  // --- Toggles ---
  TOGGLE_NECESSARY: "toggle_necessary",
  TOGGLE_TRACKING: "toggle_tracking",
  TOGGLE_ANALYTICS: "toggle_analytics",
  TOGGLE_MARKETING: "toggle_marketing",

  // --- Links ---
  LINK_PRIVACY_POLICY: "link_privacy_policy",
  LINK_FEEDBACK_VENDORS: "link_feedback_vendors",
  LINK_FEEDBACK_CATEGORIES: "link_feedback_categories",

  // --- Notifications ---
  NOTIFICATION_AUTO_HANDLED: "notification_auto_handled",
  BTN_OPEN_CMP_FROM_NOTIFICATION: "btn_open_cmp_from_notification",

  // --- Global default dialog ---
  BTN_CONFIRM_GLOBAL_DEFAULT: "btn_confirm_global_default",

  // --- Feedback summary ---
  BAR_FEEDBACK_SUMMARY: "bar_feedback_summary",
  TEXT_FEEDBACK_SUMMARY: "text_feedback_summary",

  // --- Consent history ---
  ICON_CONSENT_HISTORY: "icon_consent_history",
  PANEL_CONSENT_HISTORY: "panel_consent_history",
  HISTORY_LIST_SITES: "history_list_sites",
  HISTORY_ITEM_SITE: "history_item_site",
  HISTORY_ITEM_CATEGORY_TOGGLE: "history_item_category_toggle",
  BTN_HISTORY_SAVE_CHANGES: "btn_history_save_changes",
  BTN_HISTORY_DISCARD_CHANGES: "btn_history_discard_changes",

  // --- Your additional targets ---
  OUTSIDE_CMP: "outside_cmp",
  NEXT_BUTTON: "next_button",

  // --- Page/system targets ---
  WINDOW: "window",
  DOCUMENT: "document",
};

export const META = {
  SESSION_ID: "session_id",
  ORDER: "order",
  STEP: "timestamp",
  SHOW_CMP: "show_cmp",
  SESSION_STARTED: "sessionStarted",
  SESSION_ENDED: "sessionEnded",
  TOGGLES: "toggles",
  COOKIE_STATS: "cookie_stats"
}

export const TOGGLE_CATEGORIES = {
  MARKETING: "marketing",
  TRACKING: "tracking",
  ANALYTICS: "analytics",
  NECESSARY: "necessary"
};

export const PAGES = [
  { id: 0, image: Zalando, name: WEBSITES.ZALANDO },
  { id: 1, image: eu_health, name: WEBSITES.EU_HEALTH },
  { id: 2, image: Santander, name: WEBSITES.SANTANDER }, 
];

export const COOKIE_MODEL = {
  [WEBSITES.ZALANDO]: {
    total: 100,
    categories: {
      marketing: 50,
      tracking: 27,
      analytics: 18,
      necessary: 5,
    },
  },
  [WEBSITES.EU_HEALTH]: {
    total: 20,
    categories: {
      marketing: 2,
      tracking: 3,
      analytics: 5,
      necessary: 10,
    },
  },
  [WEBSITES.SANTANDER]: {
    total: 30,
    categories: {
      marketing: 5,
      tracking: 8,
      analytics: 7,
      necessary: 10,
    },
  },
};