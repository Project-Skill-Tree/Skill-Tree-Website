import "./home.css"
import {useEffect, useRef, useState} from "react";
import {useScrollContext} from "../../components/SmoothScroll/scroll-context";
import {isMobile} from 'react-device-detect';
import {GlitchText} from "../../components/glitch-text/glitch-text";
import {Skill, Tree} from "../../components/tree/tree";

export const HomePage = ({}) => {
  const { updateScrollData, previous, current, rounding } = useScrollContext();

  useEffect(() => {
    updateScrollData({
      previous,
      current,
      rounding,
      ease: isMobile ? 1 : 0.1,
    })
  }, [])

  const [style, setStyle] = useState({});

  useEffect(() => {
    const blurAmount = Math.min(previous < 200 ? 0 : (previous-200) / 200, 5); // Adjust the divisor to control the speed of the blur effect
    const scaleAmount = 1 + previous/1000; // Adjust the divisor to control the speed of the scale effect
    const translateY = `${previous/2}px`; // Adjust the divisor to control the speed of the vertical movement

    setStyle({
      background: {
        transform: `translateY(${translateY})`,
      },
      landing: {
        opacity: 1 - previous/100,
        transform: `translateY(${-previous/5}px)`,
      },
      tree: {
        transform: `translateY(${-previous/5}px)`,
        opacity: -1 + previous/200,
      },
      rewards: {
        opacity: -1 + previous/200,
      }
    })
  }, [previous])

  return (
    <div className="home-container">
      <div className="home-background">
        <div className="home-background-image" style={style?.background}/>
      </div>
      <div className="Landing-Wrapper" style={style?.landing}>
        <div className="Landing-Container">
          <div className="Landing-Grid">
            {/*<img src={require('../../Images/Icons/chestOpenHighlighted.png')} className="chest" />*/}
            <div className="logo">
              <img src={require('../../images/logos/logo.png')} alt="Purple gold logo" id="Purple-Logo" />
            </div>

            <div className="User-Interface">
              <div className="Landing-Text-Container">
                <p id="Landing-Text">
                  <span style={{ color: 'White', marginRight: 10 }}>
                    Ready to turn
                  </span>
                  YOUR LIFE
                </p>
                <p id="Landing-Text">
                  <span style={{ color: 'White', marginRight: 10 }}>
                    into a
                  </span>
                  <GlitchText text={"VIDEO GAME"}/>
                  ?
                </p>
              </div>
            </div>
            <div className="Landing-Buttons-Section">
              <div className="Landing-Button">
                <a target="_blank" href="https://apps.apple.com/us/app/skilltree/id6459107901">
                  <img src={require('../../images/icons/appstore.png')} />
                </a>
              </div>
              <div className="Landing-Button">
                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.projectskilltree.skilltree">
                  <img src={require('../../images/icons/googleplay.webp')} />
                </a>
              </div>
            </div>
          </div>
          <div className="Start-Arrow">
            <p>START YOUR JOURNEY</p>
            <img src={require("../../images/icons/down.png")}/>
          </div>
        </div>
      </div>
      <div className={"tree"}>
        <Tree/>
      </div>
      <div className="rewards-container" style={style?.rewards}>
        <div className="rewards-text-container">
          <b className="rewards-text">HIGH QUALITY GUIDES, REWARDS, CHALLENGES, AND MORE</b>
        </div>
        <div style={{ flex: 1, maxHeight: 800, maxWidth: '40%', alignItems: 'center',
          display: 'flex', justifyContent: 'center' }}>
          <img src={require('../../images/background/rewards.png')} className="rewards"/>
        </div>
      </div>
      <div style={{width: "100%", padding: 50, backgroundColor: "rgba(60, 20, 100, 0.5)", marginTop: 100, display: "flex",
      justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <span style={{fontSize: 45, color: "white", fontFamily: "Russo One"}}>Download Skilltree!</span>
        <div className="Landing-Buttons-Section">
          <div className="Landing-Button">
            <a target="_blank" href="https://apps.apple.com/us/app/skilltree/id6459107901">
              <img src={require('../../images/icons/appstore.png')} />
            </a>
          </div>
          <div className="Landing-Button">
            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.projectskilltree.skilltree">
              <img src={require('../../images/icons/googleplay.webp')} />
            </a>
          </div>
        </div>
      </div>
      <div style={{width: "100%", height: 100}}></div>
    </div>
  )
}