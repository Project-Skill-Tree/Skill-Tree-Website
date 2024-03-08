import {createRef, useEffect, useRef, useState} from "react";
import "./tree.css"
import {Popup} from "../popup/popup";
import {romanise} from "../../modules/romanise";
import {fetchSkillData} from "../../modules/skills";
import {Skill} from "./skill";
import Duration from "./duration";
import {XP} from "./XP";
import {useScrollContext} from "../SmoothScroll/scroll-context";
import {TreeLine} from "../../modules/GUIHelper";
import {TreePath} from "./tree-path";

export const Tree = () => {
  const ref = useRef();
  const background = useRef();
  const {previous} = useScrollContext();
  const [selectedSkill, setSelectedSkill] = useState(null)
  const [skills, setSkills] = useState([]);
  const [bounds, setBounds] = useState({width: 0, height: 0})

  // Generate an array of numbers representing rows
  const rows = Array.from({length: 20}, (_, index) => index + 1);
  // Generate an array of numbers representing columns
  const columns = Array.from({length: 50}, (_, index) => index + 1);

  const calculateBounds = () => {
    const bounds = ref.current.getBoundingClientRect();
    setBounds({width: bounds.right - bounds.left, height: 100})
  }

  useEffect(() => {
    const skills = fetchSkillData()
    skills.forEach((x) => {
      x.ref = createRef();
      return x;
    })
    setSkills(skills)
  }, [])

  useEffect(() => {
    if (previous > 200) {
      skills[0].ref.current.classList.add('active');
    }
    if (previous > 600) {
      skills[1].ref.current.classList.add('active');
    }
    if (previous > 500) {
      skills[2].ref.current.classList.add('active');
    }
    if (previous > 800) {
      skills[3].ref.current.classList.add('active');
    }
    if (previous > 860) {
      skills[4].ref.current.classList.add('active');
    }
    if (previous > 890) {
      skills[5].ref.current.classList.add('active');
    }
    if (previous > 830) {
      skills[6].ref.current.classList.add('active');
    }

    background.current.style.setProperty("--scroll", `${Math.round(previous)}`);
    background.current.style.setProperty("--opacity", Math.min(previous/500, 0.8));

    calculateBounds()
    window.addEventListener('resize', calculateBounds)

    ref.current.onmousemove = (e) => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
    return () => {
      window.removeEventListener("resize", calculateBounds)
    }
  }, [previous]);

  return (
    <div className={"tree-view"} ref={ref}>
      <div ref={background} className={"tree-background"}>
      </div>
      {/*<div ref={background} className={"tree-background"}>
        {rows.map(row => (
          <div key={row} className="row">
            {columns.map(column => {
              const visible = (previous + randomSeed(row * column) * 100) > (20 - row) * 30
              return <div key={column} className="cube"
                   style={{opacity: visible ? 1 : 0}}/>
            })}
          </div>
        ))}
      </div>*/}
      <Popup show={selectedSkill != null} onClose={() => setSelectedSkill(null)}>
        {selectedSkill && (
          <div className={"skill-popup-body"}>
            <div className={"close-btn"} onClick={() => setSelectedSkill(null)}>×</div>
            <div style={{padding: 20}}>
              <span style={{fontSize: 25}}>{selectedSkill.title} {romanise(selectedSkill.level)}</span>
              <br/><br/>
              <span style={{fontSize: 20}}>{selectedSkill.goal}</span>
              <div style={{
                marginTop: 30, display: "flex", flexDirection: "row",
                justifyContent: "space-between", alignItems: "flex-end"
              }}>
                <Duration timelimit={selectedSkill.timelimit}/>
                <XP xp={selectedSkill.xp}/>
              </div>
            </div>
          </div>
        )}
      </Popup>

      {skills.length > 0 && (
        <div style={{flexDirection: "column", width: "100%"}}>
          <Skill skill={skills[0]}
                 onClick={setSelectedSkill}/>
          <svg height={100} width={"100%"}>
            <TreePath x1={bounds.width * 0.5} y1={0}
                      x2={bounds.width * 0.76} y2={bounds.height}
            startAnim={200}/>
            <TreePath x1={bounds.width * 0.5} y1={0}
                      x2={bounds.width * 0.26} y2={bounds.height}
                      startAnim={300}/>
          </svg>
          <div style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
          }}>
            <Skill skill={skills[1]}
                   onClick={setSelectedSkill}/>
            <Skill skill={skills[2]}
                   onClick={setSelectedSkill}/>
          </div>
          <svg height={100} width={"100%"}>
            <TreePath x1={bounds.width * 0.26} y1={0}
                      x2={bounds.width * 0.13} y2={bounds.height}
                      startAnim={550} completed={false}/>
            <TreePath x1={bounds.width * 0.26} y1={0}
                      x2={bounds.width * 0.37} y2={bounds.height}
                      startAnim={650} completed={true}/>
            <TreePath x1={bounds.width * 0.76} y1={0}
                      x2={bounds.width * 0.63} y2={bounds.height}
                      startAnim={600} completed={false}/>
            <TreePath x1={bounds.width * 0.76} y1={0}
                      x2={bounds.width * 0.88} y2={bounds.height}
                      startAnim={500} completed={false}/>
          </svg>
          <div style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
          }}>
            <Skill skill={skills[3]}
                   onClick={setSelectedSkill}/>
            <Skill skill={skills[4]}
                   onClick={setSelectedSkill}/>
            <Skill skill={skills[5]}
                   onClick={setSelectedSkill}/>
            <Skill skill={skills[6]}
                   onClick={setSelectedSkill}/>
          </div>
        </div>
      )}
    </div>
  )
}