import "./terms.css"
import "../HomePage/home.css"
import {useScrollContext} from "../../components/SmoothScroll/scroll-context";
import {useEffect} from "react";

export const TermsPage = ({}) => {
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
          <span className="term-title">Terms of Service - Skilltree</span>
          <span className="terms" style={{fontWeight: "bold"}}>Last Updated: 27/01/24</span>
          <span className="terms">Welcome to Skilltree, the self-improvement app designed to help you track your habits and enhance your mental and physical well-being. This service is provided by Project Skill Tree LTD (“We”, “Our”, “Us”). By accessing, registering an account with, or using the Skilltree mobile application ("App"), you agree to abide by these Terms of service ("Terms"), as well as our Privacy Policy (collectively, the “Agreement”). If you do not agree to (or cannot comply with) the Agreement, you are not permitted to access or use the Service. Please read these Terms carefully before using the App.</span>
          <span className="term-subheading">Updates to Terms</span>
          <span className="terms">The App may update these Terms from time to time with or without notice to you. Updated Terms will be available on this webpage, marked with the latest date given above. Your continued use of the App after the posting of the updated Terms constitutes your acceptance of the changes. It is your responsibility to check back to this Terms of Service on a regular basis.</span>
          <span className="term-subheading">Feedback and Suggestions</span>
          <span className="terms">Project Skill Tree LTD values and welcomes the insights, suggestions, and feedback you may have regarding our services ("User Contributions"). By providing us with your User Contributions, whether through any form or medium, you acknowledge and agree that Project Skill Tree LTD shall become the sole owner of these User Contributions, including all associated rights and interests. As the exclusive owner of User Contributions, we possess the unrestricted rights to utilize, disclose, and process these contributions for any purpose, without any obligation to provide compensation to you. Furthermore, you hereby waive any claim asserting that our use, disclosure, and processing of your User Contributions infringe upon your rights, including but not limited to moral rights, privacy rights, rights to publicity, proprietary rights, or any rights to acknowledgement for the content or ideas contained within your contributions. </span>
          <span className="term-subheading">Software Usage</span>
          <span className="terms">In instances where the Service necessitates or incorporates downloadable software ("Software"), the Software may automatically update on your device as new versions or features become available. On certain platforms, there might be options to adjust your settings for automatic updates.
      <br/><br/>Project Skill Tree LTD hereby grants you a personal, worldwide, royalty-free, non-assignable, and non-exclusive license to utilize the Software published by Project Skill Tree LTD as an integral component of the Service. However, you may not copy, alter, distribute, sell, or lease any portion of Our Service or the included Software, or unless you have obtained written permission from Us.
      <br/><br/>Third-party applications are permitted to employ authorized logos and markers to signify their relevance to the Service. However, these applications are prohibited from asserting formal association with or impersonating Project Skill Tree LTD or Our staff without prior written consent. Third-party applications, their parent companies or providers, as well as their employees and representatives, are not authorized to make commitments on our behalf or modify the terms of this Agreement.
      <br/><br/>Under the Commercial Commons License CC-NC-SA 3.0 terms, personal and non-commercial uses such as fan art are permissible.
      <br/><br/>Except for the expressly permitted usage scenarios mentioned above, you may not employ our trademarks, service marks, trade names, logos, domain names, or taglines without a formal written agreement signed by us that grants you a license to do so.
      </span>
          <span className="term-subheading">User Eligibility</span>
          <span className="terms">You must be 13 years of age or older to use the App. By using the App, you represent and warrant that you are at least 13 years old.</span>
          <span className="term-subheading">Health Advice and Tracking</span>
          <span className="terms">The App provides informational health advice and habit-tracking features. Users acknowledge that the wellbeing, fitness, and mental health advice is not from professionals and is for informational purposes only. The App does not provide medical or psychological advice. Users are strongly advised to seek professional advice before making any health-related decisions based on the App's information.</span>
          <span className="term-subheading">Account Creation</span>
          <span className="terms">You may create an account on the App by providing accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials. You are solely responsible for all activities that occur under your account.</span>
          <span className="term-subheading">Intellectual Property</span>
          <span className="terms">All content, code, design, and assets of the App are protected by various intellectual property laws, including copyright and trademark regulations. Any unauthorized reproduction, modification, distribution, or dissemination of App assets, whether digitally or physically, without obtaining explicit and written consent, is strictly prohibited. Engaging in such activities may subject the infringing party to legal action, potentially resulting in civil remedies and criminal penalties.
          <br/><br/>You are granted the right to freely share screenshots, videos, and app-related content in commercial contexts such as YouTube videos and other media content intended for public consumption. This permission extends to showcasing the app's features and functionality. However, this allowance does not encompass the direct reproduction of the core functionality of the app or the creation of derivative works using assets protected under intellectual property laws.
          <br/><br/>Derivative works refer to works that adapt, modify, or incorporate elements from the original app assets. Replicating fundamental functionalities pertains to duplicating key interactive or operational aspects of the app that define its primary user experience.
          <br/><br/>These restrictions apply to all assets protected under intellectual property laws, including but not limited to images, designs, logos, and textual content.</span>
          <span className="term-subheading">Account Termination</span>
          <span className="terms">Users may terminate their accounts at any time using the App's functionality. Account termination will lead to the deletion of user data in accordance with the Privacy Policy. Project Skill Tree LTD retains the right, at its sole discretion, to introduce, modify, or remove functionalities or features from the Service, and to enhance, alter, or update the Service as needed. We also maintain the authority to temporarily suspend or permanently terminate the Service, with or without prior notice to you.
        <br/><br/>You have the option to discontinue your use of our Service whenever you choose. Furthermore, we hold the right to suspend or discontinue providing the Service to you under various circumstances, including but not limited to:
        <ul style={{paddingLeft: 50}}>
          <li>Your contravention of any aspect of the Agreement.</li>
          <li>Our discontinuation of Service availability within your region.</li>
        </ul>
        <br/>In the event that your account is terminated, you will lose access to it, including all related data and content. No refunds will be granted, and we shall bear no liability towards you. Additionally, we reserve the right to terminate any other accounts you may have established, along with access to any other Project Skill Tree LTD Service, without the obligation to provide refunds or assume liability. You acknowledge and consent to the inherent risk that your account may be suspended or terminated at our sole discretion and at any time.
      </span>
          <span className="term-subheading">Governing Law and Jurisdiction</span>
          <span className="terms">Any disputes arising from or related to these Terms shall be subject to arbitration or mediation as a preliminary step before pursuing litigation. The prevailing party in any dispute shall be entitled to recover reasonable attorney's fees and costs. These Terms are governed by and construed in accordance with the laws of the United Kingdom.</span>
          <span className="term-subheading">In-app Purchases</span>
          <span className="terms">The App is available to download for free, and provides in-app purchases of digital goods, as well as a paid subscription service (“Premium”) with additional features. Premium can be purchased as a monthly, biannual, or yearly subscription. First time subscribers are granted a 1 week free trial with access to the full functionality provided by Premium.
            <br/><br/>The app utilizes the standard in-app purchase mechanisms provided by Apple and Android. Users will be billed automatically at the beginning of each billing cycle for these purchases. We do not offer refunds for subscriptions or in-app purchases. All transactions are final.

          <br/><br/>All prices shown on the App are inclusive of any applicable sales taxes, levies, value-added taxes, or duties imposed by taxing authorities, and you are responsible for payment of all such taxes, levies, or duties. We may revise the pricing at any time and may, from time to time, modify, amend, or supplement our fees and fee-billing methods. Such changes shall be reflected in the app immediately after they're made available. If there is a dispute regarding payment of fees to us, we reserve the right to terminate or suspend your account at our sole discretion.

            <br/><br/>Android App users will lose access to paid features if there's an issue with their subscription renewal after 7 days for both monthly and biannual billing periods, and 14 days for the yearly billing period. IOS App users will lose access to paid features if there's an issue with their renewal after 3 days for monthly, biannual and yearly billing periods.
            Users can cancel their subscriptions at any time through the respective platforms (iOS/Android). Cancellations take effect at the end of the current billing cycle.

      <br/><br/>BY PURCHASING PREMIUM YOU EXPRESSLY UNDERSTAND AND AGREE TO OUR REFUND POLICY:
      <br/><br/>WE DO NOT OFFER REFUNDS FOR THE PURCHASE OF IN-APP GOODS OR OUR PREMIUM SUBSCRIPTION SERVICE. IF YOU BELIEVE THERE WAS AN ISSUE WITH YOUR PURCHASE YOU CAN CONTACT US AT SUPPORT@PROJECTSKILLTREE.COM. ANY PAYMENT REFUND IS SOLELY SUBJECT TO OUR DISCRETION. THE REFUND SHALL BE YOUR SOLE AND EXCLUSIVE REMEDY.

      <br/><br/>FOR ANY CUSTOMER WHO PURCHASED PREMIUM IN APPLE INC.'s APP STORE ("APP STORE"), PLEASE CONTACT APPLE INC.'s SUPPORT TEAM: https://reportaproblem.apple.com. APPLE'S APP STORE DOES NOT ALLOW DEVELOPERS TO ISSUE REFUND FOR APP STORE PURCHASES MADE BY CUSTOMERS.
      </span>
          <span className="term-subheading">Warranty Disclaiemer</span>
          <span className="terms">THE SERVICE AND ANY CONTENT MADE AVAILABLE BY PROJECT SKILL TREE LTD VIA THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, INCLUDING, WITHOUT LIMITATION, THAT THE SERVICE OR CONTENT WILL OPERATE ERROR-FREE OR THAT THE SERVICE OR CONTENT OR ITS SERVERS ARE FREE OF COMPUTER VIRUSES OR SIMILAR CONTAMINATION OR DESTRUCTIVE FEATURES.
      <br/><br/>WE DISCLAIM ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF TITLE, MERCHANTABILITY, NON-INFRINGEMENT OF THIRD PARTIES' RIGHTS, AND FITNESS FOR PARTICULAR PURPOSE AND ANY WARRANTIES ARISING FROM A COURSE OF DEALING, COURSE OF PERFORMANCE, OR USAGE OF TRADE.
      <br/><br/>WE RESERVE THE RIGHT TO MAKE CHANGES, CORRECTIONS, AND/OR IMPROVEMENTS TO THE SERVICE OR THE CONTENT AT ANY TIME WITHOUT NOTICE.
      <br/><br/>IN CONNECTION WITH ANY WARRANTY, CONTRACT, OR COMMON LAW TORT CLAIMS: WE AND OUR LICENSORS SHALL NOT BE LIABLE FOR ANY INCIDENTAL OR CONSEQUENTIAL DAMAGES, LOST PROFITS, OR DAMAGES RESULTING FROM LOST DATA RESULTING FROM THE USE OR INABILITY TO ACCESS AND USE THE SERVICE OR CONTENT POSTED BY PROJECT SKILL TREE LTD, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES
      <br/><br/>SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES. THEREFORE, SOME OF THE ABOVE LIMITATIONS ON WARRANTIES IN THIS SECTION MAY NOT APPLY TO YOU. NOTHING IN THIS AGREEMENT SHALL AFFECT ANY NON-WAIVABLE STATUTORY RIGHTS THAT APPLY TO YOU.
      </span>
          <span className="term-subheading">Liability Disclaimer</span>
          <span className="terms">The App shall not be liable for any adverse health outcomes resulting from the use of the App's advice or features. Users acknowledge and assume all risks associated with using the App's advice and features. Users agree to indemnify and hold the App, its owners, and affiliates harmless from any claims, damages, or liabilities arising from the user's use of the app.</span>
          <span className="term-subheading">Compliance with Applicable Laws</span>
          <span className="terms">The Service is based in the United Kingdom. We make no claims concerning whether the Service or posted content may be downloaded, viewed, or be appropriate for use outside of the United Kingdom. If you access the Service or such content from outside of the United Kingdom, you do so at your own risk. Whether inside or outside of the United Kingdom, you are solely responsible for ensuring compliance with the laws of your specific jurisdiction.</span>
          <span className="term-subheading">Communication</span>
          <span className="terms">The App may communicate important updates, notifications, or account-related information to you through the App interface or the email address associated with your account. You can manage your communication preferences within the App settings.</span>
          <span className="term-subheading">Severability</span>
          <span className="terms">If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect. By using the Skilltree App, you acknowledge that you have read, understood, and agreed to these Terms of Service. </span>
          <span className="term-subheading">Contact Us</span>
          <span className="terms">If you have any questions or concerns regarding these Terms, please contact us at <a
            href="mailto:support@projectskilltree.com">support@projectskilltree.com</a></span>
        </div>
      </div>
    </div>
  )
}