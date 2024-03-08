import {TreeLine} from "../../modules/GUIHelper";
import {useScrollContext} from "../SmoothScroll/scroll-context";
import {useEffect, useState} from "react";

export const TreePath = ({x1,y1, x2, y2, startAnim, completed=true}) => {
  const [path, setPath] = useState("")
  const {previous} = useScrollContext();

  useEffect(() => {
    setPath(TreeLine(x1, y1, x2, y2,
      20, Math.min(Math.max((previous - startAnim) / 300, 0), 1)));
  }, [previous, x1, x2, y1, y2])

  return (
    <path d={path} fill={"transparent"} stroke={completed ? "#FFCE00" : "rgba(165, 59, 255, 1)"} strokeWidth={5}/>
  )
}