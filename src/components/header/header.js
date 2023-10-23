import "./header.css"

export const Header = () => {
  const burgerMenu = () => {
    var burgerNav = document.getElementById("burger-nav");
    if (burgerNav) {
      if (burgerNav.style.display === "block") {
        burgerNav.style.display = "none";
      } else {
        burgerNav.style.display = "block";
      }
    }
  }
  return (
    <>
      <header>
        <a href="../">
          <div className="header_logo" />
        </a>
        <nav className="top-nav">
          <ul className="navlist">
            <li className="navitem">
              <a href={`./`}>Home</a>
            </li>
            <li className="navitem"><a href="./#/about">About Us</a></li>
            <li className="navitem"><a href="./#/contact-us">Contact Us</a></li>
            <li className="navitem"><a href="./#/roadmap">Roadmap</a></li>
          </ul>
        </nav>
        <a className="burger-menu" onClick={burgerMenu}>
          <img src={require("../../Images/Icons/burger.png")} alt="Burger Icon" />
        </a>
        <div className="Socials Header-Socials">
          <ul>
            <li>
              <a rel="external" target="_blank" href="https://discord.gg/CKKshDe8rx">
                <div className="Discord-Icon" />
              </a>
            </li>

            <li>
              <a rel="external" target="_blank" href="https://www.instagram.com/project_skilltree/">
                <div className="Instagram-Icon" />
              </a>
            </li>

            <li>
              <a rel="external" target="_blank" href="https://www.youtube.com/channel/UCjGRx-cMBQgYxfwq0PuhomA">
                <div className="Youtube-Icon" />
              </a>
            </li>

            <li>
              <a rel="external" target="_blank" href="https://twitter.com/SkillTree_">
                <div className="Twitter-Icon" />
              </a>
            </li>

            <li>
              <a rel="external" target="_blank" href="https://github.com/Project-Skill-Tree">
                <div className="Github-Icon" />
              </a>
            </li>
            <li>
              <a rel="external" target="_blank" href="https://www.patreon.com/project_skilltree">
                <div className="Patreon-Icon" />
              </a>
            </li>
          </ul>
        </div>
      </header>
        <div className="burger-dropdown" id="burger-nav">
          <ul className="burger-nav">
            <li className="navitem burgeritem">
              <a href="./">Home</a>
            </li>
            <li className="navitem burgeritem"><a href="./#/about">About Us</a></li>
            <li className="navitem burgeritem"><a href="./#/contact-us">Contact Us</a></li>
          </ul>
        </div>
    </>
  );
}