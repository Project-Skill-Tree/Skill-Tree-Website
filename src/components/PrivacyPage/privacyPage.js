import "./privacy.css"
import "../HomePage/home.css"
import {useScrollContext} from "../SmoothScroll/scroll-context";
import {useEffect} from "react";

export const PrivacyPage = ({}) => {
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
      <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: 100}}>
        <div className="term-container">
          <span className="term-title">Privacy Policy - Skilltree</span>
          <span className="terms" style={{fontWeight: "bold"}}>Last Updated: 15/08/23</span>
          <span className="terms">We’re Project Skill Tree LTD (‘we’, ‘us’, ‘our’) and operate under the name SkillTree. This Privacy Policy explains how we collect, use, and protect your personal information when you use our mobile application SkillTree. By accessing, registering an account with, or using the Skilltree mobile application ("App"), you agree to abide by this Privacy Policy, as well as our Terms of Service ("Terms") (collectively, the “Agreement”). If you do not agree to (or cannot comply with) the Agreement, you are not permitted to access or use the Service. Please read these Terms carefully before using the App. </span>
          <span className="terms">We’re registered with the UK data protection authority (the Information Comissioner’s Office or ICO) under number - ZB576554 </span>
          <span className="term-subheading">Information Collection</span>
          <span className="terms">User-Generated Information: When you register an account with SkillTree, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, email address and usage data.
            <br/><br/>App Usage Information: We gather certain non-identifiable information about your app usage, such as the number date you joined, your usage, and your habit tracking data. This data is used for improving the app and enhancing the user experience.

          </span>
          <span className="term-subheading">Use of Information</span>
          <span className="terms">
            <ul style={{marginLeft: 50}}>
              <li>Providing the Service: The non-identifiable usage information is primarily used to provide the service and enable you to store your in-app data and to manage your registration as a user of SkillTree. The Personal Data you provide can give you access to different functionalities of the app that are available to you as a registered user.</li>
              <li>App Improvement: We will use non-identifiable data to understand how users interact with the app and to make improvements based on user behaviour and preferences. For instance, using usage statistics to improve the difficulty of skills.</li>
              <li>Email Marketing: For users who voluntarily opt-in, we may use the provided email address to send product updates, announcements, and occasional marketing emails. You can unsubscribe from these communications at any time.</li>
                <li>For other purposes: We may use your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</li>
            </ul>
          </span>
          <span className="term-subheading">Children's Privacy</span>
          <span className="terms">
            SkillTree is not intended for use by children under the age of 13. By using the app, you confirm that you are at least 13 years of age or older. We do not knowingly collect personal information from children under the age of 13.
          </span>
          <span className="term-subheading">Sharing User Data</span>
          <span className="terms">
            <ul style={{marginLeft: 50}}>
              <li>With other users: When you share personal information or otherwise interact in the public areas of the app with other users, such information may be viewed by users you have explicitly added.</li>
              <li>With Third Parties: SkillTree uses the expo push notification API, meaning the content of some push notifications may be viewable by expo staff. We do not share your data with advertisers or analytics companies.</li>
            </ul>
          </span>
          <span className="term-subheading">Data Retention</span>
          <span className="terms">Your user-generated data, including username and email, will be retained as long as you maintain an active account. If you choose to delete your account, your data will be immediately removed from our systems.</span>
          <span className="term-subheading">User Rights</span>
          <span className="terms">
            <ul style={{marginLeft: 50}}>
              <li>Data Deletion: You have the right to delete your user account and associated data at any time through the app's settings. Deleting your account will permanently remove your personal information from our records.</li>
              <li>Updating Information: You can update your email address, username, or password directly within the app's settings.</li>
            </ul>
          </span>
          <span className="term-subheading">Data Transfer</span>
          <span className="terms">As a global application, SkillTree may use multiple databases distributed globally for storing and processing user data. By using the app, you acknowledge and agree that your personal information may be transferred to and stored in countries outside of your own, including countries that may have different data protection laws from those in your jurisdiction. We will take necessary measures to ensure your personal data remains protected and in compliance with this Privacy Policy.
            <br/><br/>Wherever your data is transferred, we will take steps to ensure that it is treated securely and in accordance with this Privacy Policy. We rely on secure data transfer mechanisms, including contractual agreements, standard contractual clauses, and other appropriate safeguards, to protect the transfer of your data to countries that may not have the same level of data protection as your home country.
          </span>
          <span className="term-subheading">Legal Basis for Processing</span>
          <span className="terms">Our legal basis for processing your personal information depends on the specific context in which we collect
          it and the specific purposes for which it is used. The legal basis for processing your data may include:
          <ul style={{marginLeft: 50}}>
            <li>Consent: In some cases, we may rely on your explicit consent to process your personal data. For
              instance, we may seek your consent to send you marketing communications or to collect certain types of
              non-identifiable usage information.
            </li>
            <li>Contractual Necessity: In certain situations, we may need to process your personal information to
              fulfill our contractual obligations with you. For example, we require your user-generated information to
              provide you with access to the SkillTree app and its features.
            </li>
            <li>Legitimate Interests: We may process your personal data based on our legitimate interests to improve our
              app, optimize user experience, and provide you with relevant updates and announcements. We will always
              ensure that our legitimate interests do not override your fundamental rights and freedoms.
            </li>
            <li>Legal Compliance: We may process your personal data to comply with applicable legal obligations, such as
              responding to lawful requests or orders from law enforcement agencies.
            </li>
          </ul>
          </span>
          <span className="term-subheading">Data Breach Notification</span>
          <span className="terms">
            In the event of a data breach that poses a significant risk to your rights and freedoms, we are committed to notifying you and any applicable supervisory authorities without undue delay. We will take all necessary measures to assess, contain, and mitigate the impact of the breach and will keep you informed about the steps we take to address the incident.
            <br/><br/>Please note that exercising your data subject rights may be subject to certain legal conditions and requirements. If you wish to exercise any of these rights or have questions about them, please contact us using the details provided in the "Contact Us" section of this Privacy Policy.
          </span>
          <span className="term-subheading">Security Measures</span>
          <span className="terms">
            We take the security of your data seriously. All user-generated data is stored in a secure, encrypted database accessible only with an access token, ensuring that your information remains protected. We also implement industry-standard measures to prevent unauthorized access or disclosure of your personal information. Passwords are also protected using a set of password strength requirements.
          </span>
          <span className="term-subheading">Changes to this Policy</span>
          <span className="terms">We may update this Privacy Policy from time to time, with or without notice to you. Any changes will be posted on our website, and the updated version will have a new effective date. Your continued use of the App after the posting of the updated Privacy Policy constitutes your acceptance of the changes. It is your responsibility to check back to this Privacy Policy on a regular basis.
          <br/>
          If the Company is involved in a merger, acquisition or asset sale, your personal data may be transferred. We will provide notice before your personal data is transferred and becomes subject to a different Privacy Policy
</span>
          <span className="term-subheading">Contact Us</span>
          <span className="terms">If you have any questions or concerns regarding these Terms, please contact us at <a
            href="mailto:support@projectskilltree.com">support@projectskilltree.com</a></span>
        </div>
      </div>
    </div>
  )
}