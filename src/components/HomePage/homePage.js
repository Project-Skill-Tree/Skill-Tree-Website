import "./home.css"

export const HomePage = ({}) => {
  return (
    <div className="home-container">
      <div className="bg">
        <div className="bg-img" />
        <div className="bg-dim" />
        <div className="bg-shadow-flipped" style={{ top: '-350px', height: 'calc(100% + 350px)' }} />
        <div className="bg-shadow" style={{ top: '-1050px', height: 'calc(100% + 1050px)' }} />
        <div className="bg-gradient" />
      </div>
      <div className="Landing-Wrapper">
        <div className="Landing-Container">
          <div className="Landing-Grid">
            <img src={require('../../Images/Icons/chestOpenHighlighted.png')} className="chest" />
            <div className="logo">
              <img src={require('../../Images/Logos/logo.png')} alt="Purple gold logo" id="Purple-Logo" />
            </div>

            <div className="User-Interface">
              <div className="Landing-Text">
                <p id="Landing-Text-Title">
                  Gamify <span style={{ color: 'White' }}>your</span>
                </p>
                <p id="Landing-Text-Subtitle">self-improvement</p>
              </div>

              <div className="Landing-Buttons-Section">
                <div className="Landing-Button">
                  <a target="_blank" href="https://apps.apple.com/us/app/skilltree/id6459107901">
                    <img src={require('../../Images/Icons/appstore.png')} />
                  </a>
                </div>
                <div className="Landing-Button">
                  <a target="_blank" href="https://play.google.com/store/apps/details?id=com.projectskilltree.skilltree">
                    <img src={require('../../Images/Icons/googleplay.webp')} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="startBlock" style={{ height: '100%' }}>
          <div className="start-img" />
        </div>
      </div>

      <div className="benefits">
        <div className="benefits-images">
          <div className="benefit-container">
            <img src={require('../../Images/Icons/challenge.webp')} className="benefit" />
            <b className="benefit-text">CHALLENGE YOURSELF</b>
          </div>
          <div className="benefit-container">
            <img src={require('../../Images/Icons/habits.webp')} className="benefit" />
            <b className="benefit-text">BUILD HABITS</b>
          </div>
          <div className="benefit-container">
            <img src={require('../../Images/Icons/level.webp')} className="benefit" />
            <b className="benefit-text">LEVEL UP IRL</b>
          </div>
        </div>
      </div>
      <div className="rewards-container">
        <div className="rewards-text-container">
          <b className="rewards-text">HIGH QUALITY GUIDES, REWARDS, CHALLENGES, AND MORE</b>
        </div>
        <div style={{ flex: 1, maxWidth: '50%', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
          <img src={require('../..//Images/Icons/rewards.webp')} className="rewards" />
        </div>
      </div>
    </div>
  )
}