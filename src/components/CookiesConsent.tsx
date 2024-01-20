import { useState, useEffect } from "react";
import ReactGA from "react-ga";

const COOKIE_CONSENT_KEY = "consentMode";
interface CookieConsentProps {
  necessary: boolean;
  analytics: boolean;
  preferences: boolean;
  marketing: boolean;
}

const CookiesConsent = () => {
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
          <h3>Cookie settings</h3>
          <p>
            We use cookies to provide you with the best possible experience.
            They also allow us to analyze user behavior in order to constantly
            improve the website for you.
          </p>
          <button
            id="btn-accept-all"
            className="cookie-consent-button btn-success"
            onClick={() => handleAcceptAll()}
          >
            Accept All
          </button>
          <button
            id="btn-accept-some"
            className="cookie-consent-button btn-outline"
            onClick={() => handleAcceptSelection()}
          >
            Accept Selection
          </button>
          <button
            id="btn-reject-all"
            className="cookie-consent-button btn-grayscale"
            onClick={() => handleRejectAll()}
          >
            Reject All
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
              Necessary
            </label>
            <label>
              <input
                id="consent-analytics"
                type="checkbox"
                value="Analytics"
                checked
                onChange={() => setAnalyticsConsent(!analyticsConsent)}
              />
              Analytics
            </label>
            <label>
              <input
                id="consent-preferences"
                type="checkbox"
                value="Preferences"
                checked
                onChange={() => setPreferencesConsent(!preferencesConsent)}
              />
              Preferences
            </label>
            <label>
              <input
                id="consent-marketing"
                type="checkbox"
                value="Marketing"
                onChange={() => setMarketingConsent(!marketingConsent)}
              />
              Marketing
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookiesConsent;
