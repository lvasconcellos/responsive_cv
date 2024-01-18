import { useState, useEffect } from "react";

const CookiesConsent = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowPopup(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowPopup(false);
  };

  useEffect(() => {
    const consentGiven = localStorage.getItem("cookieConsent") === "true";
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
                <i className="bx bx-cookie cookies-popup__icon"></i>
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
                >
                  Accept
                </button>
                <button
                  className="cookies-popup__button"
                  onClick={handleDecline}
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
