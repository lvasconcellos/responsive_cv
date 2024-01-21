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
  const [showPopup, setShowPopup] = useState(false);
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
    setShowPopup(false);
  };

  const handleAcceptSelection = () => {
    setConsent({
      necessary: true,
      analytics: analyticsConsent,
      preferences: preferencesConsent,
      marketing: marketingConsent,
    });
    setShowPopup(false);
  };

  const handleRejectAll = () => {
    setConsent({
      necessary: false,
      analytics: false,
      preferences: false,
      marketing: false,
    });
    setShowPopup(false);
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
    setShowPopup(false);
  }

  useEffect(() => {
    const consentGiven = localStorage.getItem(COOKIE_CONSENT_KEY) !== null;
    if (!consentGiven) {
      setShowPopup(true);
    }
  }, [showPopup]);

  return (
    <div>
      {showPopup && (
        <div id="cookie-consent-banner" className="cookie-consent-banner">
          <h3>{locale("consent.title")}</h3>
          <p>{locale("consent.description")}</p>
          <button
            id="btn-accept-all"
            className="cookie-consent-button btn-success"
            onClick={() => handleAcceptAll()}
          >
            {locale("consent.acceptAll")}
          </button>
          <button
            id="btn-accept-some"
            className="cookie-consent-button btn-outline"
            onClick={() => handleAcceptSelection()}
          >
            {locale("consent.acceptSelection")}
          </button>
          <button
            id="btn-reject-all"
            className="cookie-consent-button btn-grayscale"
            onClick={() => handleRejectAll()}
          >
            {locale("consent.rejectAll")}
          </button>
          <div className="cookie-consent-options">
            <label>
              <input
                id="consent-necessary"
                type="checkbox"
                value="Necessary"
                checked
                disabled
              />
              {locale("consent.necessary")}
            </label>
            <label>
              <input
                id="consent-analytics"
                type="checkbox"
                value="Analytics"
                checked
                onChange={() => setAnalyticsConsent(!analyticsConsent)}
              />
              {locale("consent.analytics")}
            </label>
            <label>
              <input
                id="consent-preferences"
                type="checkbox"
                value="Preferences"
                checked
                onChange={() => setPreferencesConsent(!preferencesConsent)}
              />
              {locale("consent.preferences")}
            </label>
            <label>
              <input
                id="consent-marketing"
                type="checkbox"
                value="Marketing"
                onChange={() => setMarketingConsent(!marketingConsent)}
              />
              {locale("consent.marketing")}
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookiesConsent;
