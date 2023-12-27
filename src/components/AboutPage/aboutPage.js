
import "./about.css"
import "../HomePage/home.css"
import {useScrollContext} from "../SmoothScroll/scroll-context";
import {useEffect} from "react";

export const AboutPage = () => {
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
      <div className="bg-img" />
      <div className="bg-dim" />
      <div className="bg-shadow-flipped" style={{ top: '-350px', height: 'calc(100% + 350px)' }} />
      <div className="bg-shadow" style={{ top: '-1050px', height: 'calc(100% + 1050px)' }} />
      <div className="bg-gradient" />
    </div>
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: 100}}>
      <div className="text-container">
        <span className="title">ABOUT US</span>
        <b className="text">Millions of young people around the world are struggling with their mental and physical
          health,
          not knowing where to get help or how to improve their lives. Skilltree was founded with the mission of solving
          this
          problem, making it effortless for young people to build good habits, improve their mental and physical health,
          and take back control of their lives.</b>
        <b className="text">
          By providing a concrete step-by-step structure, the SkillTree is optimised to make that next step effortless.
          With
          our high quality guides, rewards, levels, xp, achievements and more, SkillTree turns self-improvement into a
          real-life video-game. We're sick of boring corporate apps and endless paywalls. SkillTree will remain free and
          available in its entirety *forever*, to maximise our impact on your developmental journey, not just our bottom
          line.
          To support our mission, you can get access to a tonne of additional features, content, analytics, and social
          features with our premium app subscription.</b>
      </div>
    </div>
  </div>
)
}
