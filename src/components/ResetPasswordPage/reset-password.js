import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import "./reset-password.css"
import {useState} from "react"

export const ResetPasswordPage = ({}) => {
  const [errorText, setErrorText] = useState("")
  const [urlParams] = useSearchParams()
  const token = urlParams.get('token');
  const [password, setPassword] = useState(undefined)
  const [confirmPassword, setConfirmPassword] = useState("undefined")

  // Redirect to app on button click
  function submit() {
    if (!password || !confirmPassword) {
      setErrorText("Please enter a valid password and confirmation password")
      return
    }
    if (password != confirmPassword) {
      setErrorText("Passwords do not match")
      return
    }
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React Hooks POST Request Example' })
    };
    fetch('https://reqres.in/api/posts', requestOptions)
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
      <div className="d-flex justify-content-center align-items-center">
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">ENTER NEW PASSWORD</h5>
            <p className={"error-text"}>{errorText}</p>
            <div style={{display: "flex",flexDirection: "row", width: "100%", marginBottom: 15}}>
              <div style={{display: "flex",flexDirection: "column", alignItems: "flex-end", marginRight: 10}}>
                <p className={"card-text"}>PASSWORD:</p>
                <p className={"card-text"}>CONFIRM PASSWORD:</p>
              </div>
              <div style={{display: "flex",flex: 1, flexDirection: "column", alignItems: "flex-end", marginRight: 10}}>
                <input className={"password-input"} type="password" name="password"
                       onInput={e => setPassword(e.target.value)}></input>
                <input className={"password-input"} type="password" name="confirm-password"
                       onInput={e => setConfirmPassword(e.target.value)}></input>
              </div>
            </div>
            <a className="btn-primary" id="button-redirect" onClick={submit}>RESET</a>
          </div>
        </div>
      </div>
    </div>
  )
}