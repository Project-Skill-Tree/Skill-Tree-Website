
import "../HomePage/home.css"
import {useScrollContext} from "../../components/SmoothScroll/scroll-context";
import {useEffect} from "react";

export const ContactPage = ({}) => {
  const { updateScrollData, previous, current, rounding } = useScrollContext();

  useEffect(() => {
    updateScrollData({
      previous,
      current,
      rounding,
      ease: 1,
    })
  }, [])

  return (
    <div className="home-container">
      <div className="bg">
        <div className="bg-gradient" />
      </div>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: 150}}>
        <div className="text-container">
          <span className="title">CONTACT US</span>
          <p className="text" style={{display: "inline-block", textAlign: "center"}}> You can contact us at&nbsp;<a
            href="mailto:support@projectskilltree.com">support@projectskilltree.com</a>.</p>
            <br/><br/>
            <p className="text" style={{display: "inline-block", textAlign: "center"}}>
              Please read our <a href={"./#/privacy"}>
              Privacy Policy</a>
              &nbsp;before sending product suggestions.</p>
        </div>
      </div>
    </div>
  )
}
