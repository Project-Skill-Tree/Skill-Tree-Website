import "./home.css"
import {useEffect, useState} from "react";
import {useScrollContext} from "../SmoothScroll/scroll-context";

export const HomePage = ({}) => {
  const { updateScrollData, previous, current, rounding } = useScrollContext();
  useEffect(() => {
    updateScrollData({
      previous,
      current,
      rounding,
      ease: 0.05,
    })
  }, [])

  const [style, setStyle] = useState({});

  useEffect(() => {
    const blurAmount = Math.min(previous < 200 ? 0 : (previous-200) / 200, 5); // Adjust the divisor to control the speed of the blur effect
    const scaleAmount = 1 + previous/1000; // Adjust the divisor to control the speed of the scale effect
    const translateY = `${previous/3}px`; // Adjust the divisor to control the speed of the vertical movement

    setStyle({
      background: {
        filter: `blur(${blurAmount}px)`,
        transform: `scale(${scaleAmount}) translateY(${translateY})`,
      },
      landing: {
        opacity: 1 - previous/100,
        transform: `translateY(${-previous/5}px)`,
      },
      benefits: {
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
            <img src={require('../../Images/Icons/chestOpenHighlighted.png')} className="chest" />
            <div className="logo">
              <img src={require('../../Images/Logos/logo.png')} alt="Purple gold logo" id="Purple-Logo" />
            </div>

            <div className="User-Interface">
              <div className="Landing-Text">
                <p id="Landing-Text-Title">
                  Gamify <span style={{ color: 'White', marginLeft: 10 }}>your</span>
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
        {/*<div className="startBlock" style={{ height: '100%' }}>
          <div className="start-img" />
        </div>*/}
      </div>
      <div className="benefits" style={style?.benefits}>
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
      <div className="rewards-container" style={style?.rewards}>
        <div className="rewards-text-container">
          <b className="rewards-text">HIGH QUALITY GUIDES, REWARDS, CHALLENGES, AND MORE</b>
        </div>
        <div style={{ flex: 1, maxHeight: 800, maxWidth: '40%', alignItems: 'center',
          display: 'flex', justifyContent: 'center' }}>
          <img src={require('../../Images/Background/rewards.png')} className="rewards"/>
        </div>
      </div>
      <div style={{width: "100%", height: 100}}></div>
    </div>
  )
}