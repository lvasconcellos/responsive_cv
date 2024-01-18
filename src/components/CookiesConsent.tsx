import { useState, useEffect } from "react";

const COOKIE_CONSENT_KEY = "cookieConsent";

const CookiesConsent = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    setShowPopup(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "false");
    setShowPopup(false);
  };

  useEffect(() => {
    const consentGiven = localStorage.getItem(COOKIE_CONSENT_KEY) === "true";
    if (!consentGiven) {
      setShowPopup(true);
    }
  }, []);

  return (
    <div>
      {showPopup && (
        <div className="cookies-popup container">
          <div className="cookies-popup__container">
            <div className="cookies-popup__content">
              <header className="cookies-popup__header">
                <i
                  className="bx bx-cookie cookies-popup__icon"
                  aria-hidden="true"
                ></i>
                <h2 className="cookies-popup__title">Cookie Consent</h2>
              </header>
              <div className="cookies-popup__description">
                <p>
                  We use cookies to ensure you get the best experience on our
                  website.
                </p>
                <p>
                  By clicking "Accept," you consent to the use of all cookies.
                  If you prefer to decline, click "Decline" to restrict
                  non-essential cookies.
                </p>
              </div>
              <div className="cookies-popup__buttons">
                <button
                  className="cookies-popup__button"
                  onClick={handleAccept}
                  aria-label="Accept Cookies"
                >
                  Accept
                </button>
                <button
                  className="cookies-popup__button"
                  onClick={handleDecline}
                  aria-label="Decline Cookies"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookiesConsent;
