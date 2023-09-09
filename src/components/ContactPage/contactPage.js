
import "../HomePage/home.css"

export const ContactPage = () => {
  return (
    <div className="home-container">
      <div className="bg">
        <div className="bg-img" />
        <div className="bg-dim" />
        <div className="bg-shadow-flipped" style={{ top: '-350px', height: 'calc(100% + 350px)' }} />
        <div className="bg-shadow" style={{ top: '-1050px', height: 'calc(100% + 1050px)' }} />
        <div className="bg-gradient" />
      </div>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <div className="text-container">
          <span className="title">CONTACT US</span>
          <span className="text"> You can contact us at&nbsp;<a
            href="mailto:support@projectskilltree.com">support@projectskilltree.com</a>.</span>
            <br/><br/>
            <span className="text">
            Please read our&nbsp;<a href={"./#/privacy"}>Privacy Policy</a>&nbsp;before sending product suggestions.</span>
        </div>
      </div>
    </div>
  )
}
