

export const RoadmapPage = () => {
  return (
    <div className="home-container">
      <div className="bg">
        <div className="bg-img" />
        <div className="bg-dim" />
        <div className="bg-shadow-flipped" style={{ top: '-350px', height: 'calc(100% + 350px)' }} />
        <div className="bg-shadow" style={{ top: '-1050px', height: 'calc(100% + 1050px)' }} />
        <div className="bg-gradient" />
      </div>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginTop: 20}}>
        <img src={require("../../Images/Projects/Roadmap.png")} width={"80%"}></img>
      </div>
    </div>
  )
}