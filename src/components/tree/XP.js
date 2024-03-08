import "./tree.css"

export const XP = ({xp}) => {
  //"#73FF79"
  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      <span className={"xp-text"} style={{color: "#1A4117"}}>+{xp}</span>
      <span className={"xp-text"} style={{marginLeft: 5}}>XP</span>
    </div>
  )
}