import {useSearchParams} from "react-router-dom";
import {useState} from "react";
import "./reset-password.css"

export const ResetPasswordPage = ({}) => {
  const [errorText, setErrorText] = useState("")
  const [urlParams] = useSearchParams()
  const token = urlParams.get('token');
  const [password, setPassword] = useState(undefined)
  const [confirmPassword, setConfirmPassword] = useState("undefined")
  const [passwordStrength, setPasswordStrength] = useState(0)
  const API_URL = "https://dev-api.projectskilltree.com"

  // Redirect to app on button click
  function submit() {
    if (!password || !confirmPassword) {
      setErrorText("Please enter a valid password and confirmation password")
      return;
    }
    if (password != confirmPassword) {
      setErrorText("Passwords do not match")
      return;
    }
    if(passwordStrength < 3) {
      setErrorText("Password is too weak");
      return;
    }

    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        token,
        password
      })
    };
    fetch(`${API_URL}/password-reset`, requestOptions)
  }

  const checkPasswordStrength = (password) => {
    const minLength = 6;
    const maxStrength = 4;
    let strength = 1;

    if (password.length >= minLength) {
      const hasLowerCase = /[a-z]/.test(password);
      const hasUpperCase = /[A-Z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSpecialChar = /[!@#$%^&*?_~\-().,]/.test(password);

      const conditions = [hasLowerCase, hasUpperCase, hasNumber, hasSpecialChar];
      const trueConditions = conditions.filter((condition) => condition);

      strength = Math.min(maxStrength, trueConditions.length);

      if (!hasLowerCase) {
        setErrorText("Password should contain at least one lowercase character");
      } else if (!hasUpperCase) {
        setErrorText("Password should contain at least one uppercase character");
      } else if (!hasSpecialChar) {
        setErrorText("Password should contain at least one special character");
      } else if (!hasNumber) {
        setErrorText("Password should contain at least one number");
      } else {
        setErrorText("");
      }
    } else {
      setErrorText("Password must be >5 characters");
    }

    setPasswordStrength(strength);
  };

  return (
    <div className="home-container">
      <div className="bg">
        <div className="bg-img"/>
        <div className="bg-dim"/>
        <div className="bg-shadow-flipped" style={{top: '-350px', height: 'calc(100% + 350px)'}}/>
        <div className="bg-shadow" style={{top: '-1050px', height: 'calc(100% + 1050px)'}}/>
        <div className="bg-gradient"/>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">ENTER NEW PASSWORD</h5>
            <p className={"error-text"}>{errorText}</p>
            <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
              <input className={"password-input"} type="password" name="password"
                     placeholder={"Password"}
                     onInput={(e) => {
                       checkPasswordStrength(e.target.value)
                       setPassword(e.target.value)
                     }}></input>
              {passwordStrength != 0 && (
                <div style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  marginBottom: 15,
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <p style={{fontSize: 15, marginRight: 15}}>Password Strength:</p>
                  <div
                    style={{
                      borderRadius: 30,
                      flex: 1,
                      height: 20,
                      overflow: "hidden",
                      backgroundColor: "black",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        height: 20,
                        width: ["0%", "25%", "50%", "75%", "100%"][passwordStrength],
                        backgroundColor:
                          passwordStrength >= 0
                            ? ["transparent", "red", "orange", "yellow", "green"][passwordStrength]
                            : "transparent"
                      }}
                    ></div>
                  </div>
                </div>
              )}
              <input className={"password-input"} type="password" name="confirm-password"
                     placeholder={"Confirm Password"}
                     onInput={e => setConfirmPassword(e.target.value)}></input>
            </div>
            <a className="btn-primary" id="button-redirect" onClick={submit}>RESET</a>
          </div>
        </div>
      </div>
    </div>
  )
}