import "./footer.css"

export const Footer = () => {
  return (
    <div id="footer">
      <footer className="footer">
        <div className="footer-socials">
          <ul>
            <li>
              <a rel="external" target="_blank" href="https://discord.gg/CKKshDe8rx">
                <div className="Discord-Icon"/>
              </a>
            </li>

            <li>
              <a rel="external" target="_blank" href="https://www.instagram.com/project_skilltree/">
                <div className="Instagram-Icon"/>
              </a>
            </li>

            <li>
              <a rel="external" target="_blank" href="https://www.youtube.com/channel/UCjGRx-cMBQgYxfwq0PuhomA">
                <div className="Youtube-Icon"/>
              </a>
            </li>

            <li>
              <a rel="external" target="_blank" href="https://twitter.com/SkillTree_">
                <div className="Twitter-Icon"/>
              </a>
            </li>

            <li>
              <a rel="external" target="_blank" href="https://github.com/Project-Skill-Tree">
                <div className="Github-Icon"/>
              </a>
            </li>
            <li>
              <a rel="external" target="_blank" href="https://www.patreon.com/project_skilltree">
                <div className="Patreon-Icon"/>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-text">
          <p>
            PROJECT SKILL TREE LTD | 2023
          </p>
        </div>
        <div className={"footer-links"}>
          <a href={"./#/terms"} className={"footer-link"}>Terms of Service</a>
          <a href={"./#/privacy"} className={"footer-link"}>Privacy Policy</a>
        </div>
      </footer>
    </div>
  )
}