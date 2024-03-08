import React from "react"

const BADGE = {
  flex: 1,
  margin: 0,
  padding: 0,
  alignItems: "center",
  aspectRatio: 4 / 5,
}

const BADGE_ICON = {
  position: "absolute",
  marginTop: "32%",
  marginLeft: "25%",
  width: "30%",
  height: "20%",
  resizeMode: "contain",
  tintColor: "#FFCE00",
}

const fetchBadge = (badge) => {
  switch (badge) {
    case 1:
      return require("../../images/badges/1.png")
    case 2:
      return require("../../images/badges/2.png")
    case 3:
      return require("../../images/badges/3.png")
    case 4:
      return require("../../images/badges/4.png")
    case 5:
      return require("../../images/badges/5.png")
    case 6:
      return require("../../images/badges/6.png")
    case 7:
      return require("../../images/badges/7.png")
    case 8:
      return require("../../images/badges/8.png")
    case "custom":
      return require("../../images/badges/CustomBadge.png")
    default:
      return require("../../images/badges/empty.png")
  }
}

/**
 * Creates a badge component using a level and an icon
 * @param {number} level - 1 - 8
 * @param {string} icon - string identifier for skills
 * @constructor
 */
export const Badge = ({level, icon}) => {
  return (
    <div style={BADGE}>
      <img src={fetchBadge(level)} style={{width: "100%", height: "100%", resize: "contain"}}  alt={"badge"}/>
      <img src={icon} style={BADGE_ICON} alt={"badge-icon"}/>
    </div>
  )
}