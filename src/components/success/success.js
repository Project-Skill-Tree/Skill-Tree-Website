import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import "./success.css"

export const Success = ({}) => {
  const purposes = {
    "authenticated": {
      "body": "You have successfully authenticated.",
      "subtitle": "If you aren't automatically redirected to the app, click the return button.",
      "button": true,
    },
    "email-verified": {
      "body": "You have successfully verified your email address.",
      "subtitle": "You can now return to the app."
    },
    "password-changed": {
      "body": "You have successfully changed your password.",
      "subtitle": "You have been logged out of all your devices, please log back in."
    }
  }
  const [urlParams] = useSearchParams()
  const appURI = urlParams.get('redirect');
  const purpose = urlParams.get('purpose');
  console.log(appURI, purpose)

  // Get query string for redirect from /success?redirect=appURI
  useEffect(() => {
    const content = purposes[purpose]

    document.getElementById("text-body").textContent = content.body;
    document.getElementById("text-subtitle").textContent = content.subtitle;
    document.getElementById("button-redirect").hidden = !appURI;


    // Redirect to app after 5 seconds
    setTimeout(function () {
      redirectApp();
    }, 10000);
  }, [])

  // Redirect to app on button click
  function redirectApp() {
    if (!appURI) return;
    window.location.href = appURI;
  }

  return (
    <div className="home-container">
      <div className="bg">
        <div className="bg-img"/>
        <div className="bg-dim"/>
        <div className="bg-shadow-flipped" style={{top: '-350px', height: 'calc(100% + 350px)'}}/>
        <div className="bg-shadow" style={{top: '-1050px', height: 'calc(100% + 1050px)'}}/>
        <div className="bg-gradient"/>
      </div>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">SUCCESS</h5>
            <p className="card-text" id="text-body">You have successfully authenticated.</p>
            <p className="card-subtitle" id="text-subtitle">If you aren't automatically redirected to the app, click the
              return button.</p>
            <a className="btn btn-primary" id="button-redirect" onClick={redirectApp}>RETURN</a>
          </div>
        </div>
      </div>
    </div>
  )
}