import {useEffect, useRef} from "react";
import {romanise} from "../../modules/romanise";

export const Skill = ({skill, onClick}) => {
  let constrain = 20;
  let ref = useRef();

  function transforms(x, y, el) {
    let box = el.getBoundingClientRect();
    let calcX = -(y - (box.height / 2)) / constrain;
    let calcY = (x - (box.width / 2)) / constrain;

    return "perspective(100px) "
      + "   rotateX("+ calcX +"deg) "
      + "   rotateY("+ calcY +"deg)";
  };

  function transformElement(el, xyEl) {
    el.style.transform  = transforms.apply(null, xyEl);
  }

  function approachValue(currentValue, targetValue) {
    const delta = (targetValue - currentValue) * 0.1;
    return currentValue + delta
  }

  useEffect(() => {
    if (!ref.current) return;

    ref.current.onmousemove = function (e) {
      let bounds = ref.current.getBoundingClientRect();
      let xy = [e.clientX - bounds.left, e.clientY - bounds.top];
      let position = xy.concat([ref.current]);

      window.requestAnimationFrame(function () {
        transformElement(ref.current, position);
      });
    }

    ref.current.onmouseleave = function (e) {
      let bounds = ref.current.getBoundingClientRect();
      let xy = [e.clientX - bounds.left, e.clientY - bounds.top];
      let iterations = 0;
      const animation = setInterval(() => {
        xy = [approachValue(xy[0], 100/2), approachValue(xy[1], 160/2)]
        let position = xy.concat([ref.current]);

        window.requestAnimationFrame(function () {
          transformElement(ref.current, position);
        });

        iterations += 1;
        if (iterations > 50) {
          clearInterval(animation);
        }
      }, 10);
    }
  }, [ref.current])

  return (
    <div className={"skill"} ref={skill.ref}>
      <div className={"card-container"} onClick={() => {
        if (skill.clickable) onClick(skill)
      }}>
        <div className={"card"} ref={ref} style={!skill.clickable ? {backgroundColor: "#555555", cursor: "default"} : {}}>
          <div className="card-bg"/>
          {skill.clickable && (
            <img src={skill.image} style={{objectFit: "contain"}}/>
          )}
          {!skill.clickable && (
            <span style={{color: "#555555", fontSize: 30}}>???</span>
          )}
        </div>
      </div>
      {skill.clickable && (<span>{skill.title} {romanise(skill.level)}</span>)}
    </div>
  )
}