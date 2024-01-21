import { TFunction } from "i18next";
import { useState, useEffect } from "react";
import ReactGA from "react-ga";

const COOKIE_CONSENT_KEY = "consentMode";
interface CookieConsentProps {
  necessary: boolean;
  analytics: boolean;
  preferences: boolean;
  marketing: boolean;
}

interface CookiesConsentProps {
  locale: TFunction<"global">;
}

const CookiesConsent: React.FC<CookiesConsentProps> = ({ locale }) => {
  const [showConsentSettings, setShowConsentSettings] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(true);
  const [preferencesConsent, setPreferencesConsent] = useState(true);
  const [marketingConsent, setMarketingConsent] = useState(false);

  const handleAcceptAll = () => {
    setConsent({
      necessary: true,
      analytics: true,
      preferences: true,
      marketing: true,
    });
    setShowConsentSettings(false);
  };

  const handleAcceptSelection = () => {
    setConsent({
      necessary: true,
      analytics: analyticsConsent,
      preferences: preferencesConsent,
      marketing: marketingConsent,
    });
    setShowConsentSettings(false);
  };

  const handleRejectAll = () => {
    setConsent({
      necessary: false,
      analytics: false,
      preferences: false,
      marketing: false,
    });
    setShowConsentSettings(false);
  };

  function setConsent(consent: CookieConsentProps) {
    const consentMode = {
      functionality_storage: consent.necessary ? "granted" : "denied",
      security_storage: consent.necessary ? "granted" : "denied",
      ad_storage: consent.marketing ? "granted" : "denied",
      analytics_storage: consent.analytics ? "granted" : "denied",
      personalization: consent.preferences ? "granted" : "denied",
    };

    ReactGA.ga("consent", "update", consentMode);
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentMode));
    setShowConsentSettings(false);
  }

  useEffect(() => {
    const consentSettings = localStorage.getItem(COOKIE_CONSENT_KEY);
    const consentGiven = consentSettings !== null;
    if (!consentGiven) {
      setShowConsentSettings(true);
      return;
    }

    const consentSettingsObj = JSON.parse(consentSettings || "{}");
    setAnalyticsConsent(consentSettingsObj.analytics_storage === "granted");
    setPreferencesConsent(consentSettingsObj.personalization === "granted");
    setMarketingConsent(consentSettingsObj.ad_storage === "granted");
  }, [showConsentSettings]);

  return (
    <div>
      {!showConsentSettings && (
        <i
          className="bx bx-cookie cookie-consent-icon"
          title={locale("consent.title")}
          onClick={() => setShowConsentSettings(true)}
        ></i>
      )}
      {showConsentSettings && (
        <div id="cookie-consent-banner" className="cookie-consent-banner">
          <h3>{locale("consent.title")}</h3>
          <p>{locale("consent.description")}</p>
          <button
            id="btn-accept-all"
            className="cookie-consent-button btn-success"
            type="button"
            onClick={() => handleAcceptAll()}
          >
            {locale("consent.acceptAll")}
          </button>
          <button
            id="btn-accept-some"
            type="button"
            className="cookie-consent-button btn-outline"
            onClick={() => handleAcceptSelection()}
          >
            {locale("consent.acceptSelection")}
          </button>
          <button
            id="btn-reject-all"
            type="button"
            className="cookie-consent-button btn-grayscale"
            onClick={() => handleRejectAll()}
          >
            {locale("consent.rejectAll")}
          </button>
          <div className="toggle-wrapper">
            <label
              className="toggle"
              title={locale("consent.necessary")}
              htmlFor="consent-necessary"
            >
              <input
                className="toggle-input"
                id="consent-necessary"
                type="checkbox"
                value="Necessary"
                checked
                disabled
              />
              {""}
              <span
                className="toggle-label"
                data-on={locale("consent.necessary")}
                data-off={locale("consent.necessary")}
              ></span>
              <span className="toggle-handle"></span>
            </label>
            <label
              className="toggle"
              htmlFor="consent-analytics"
              title={locale("consent.analytics")}
            >
              <input
                className="toggle-input"
                id="consent-analytics"
                type="checkbox"
                value="Analytics"
                checked={analyticsConsent}
                onChange={() => setAnalyticsConsent(!analyticsConsent)}
              />
              {""}
              <span
                className="toggle-label"
                data-on={locale("consent.analytics")}
                data-off={locale("consent.analytics")}
              ></span>
              <span className="toggle-handle"></span>
            </label>
            <label
              className="toggle"
              htmlFor="consent-preferences"
              title={locale("consent.preferences")}
            >
              <input
                className="toggle-input"
                id="consent-preferences"
                type="checkbox"
                value="Preferences"
                checked={preferencesConsent}
                onChange={() => setPreferencesConsent(!preferencesConsent)}
              />
              {""}
              <span
                className="toggle-label"
                data-on={locale("consent.preferences")}
                data-off={locale("consent.preferences")}
              ></span>
              <span className="toggle-handle"></span>
            </label>
            <label
              className="toggle"
              htmlFor="consent-marketing"
              title={locale("consent.marketing")}
            >
              <input
                className="toggle-input"
                id="consent-marketing"
                type="checkbox"
                value="Marketing"
                checked={marketingConsent}
                onChange={() => setMarketingConsent(!marketingConsent)}
              />
              {""}
              <span
                className="toggle-label"
                data-on={locale("consent.marketing")}
                data-off={locale("consent.marketing")}
              ></span>
              <span className="toggle-handle"></span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookiesConsent;
