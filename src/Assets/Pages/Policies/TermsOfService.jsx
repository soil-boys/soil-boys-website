import React from 'react'
import { motion } from 'framer-motion'

import '../../Styles/Policies/PolicyPage.css'

function TermsOfService() {

    document.title = "Terms of Service"

  return (
    <motion.div
        id="terms-of-service"
        className='policy'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <div className='policy-container'>
            <div className="heading-container" animate="false">
                <h2 className="policy-heading" select="false">Terms of Service</h2>
            </div>
            <span className="policy-divider"></span>
            <div className="policy-content">
                <div className="initial-container">
                    <div className="policy-introduction">
                        <div className="policy-introduction-content">
                            Welcome to Soil Boys! These Terms of Service ( <b>“Terms”</b> ) outline the rules and regulations for the use of the Soil Boys website, located at <a href="https://soil-boys.netlify.app">https://soil-boys.netlify.app</a> ( <b>“the Site”</b> ). By accessing this website, we assume you accept these terms and conditions. Do not continue to use Soil Boys if you do not agree to all of the terms and conditions stated on this page.
                        </div>
                    </div>
                    <div className="policy-dates" select="false">
                        <div className="date-field">
                            <p className="date-label">Updated</p>
                            <p className="date-value">December 21, 2023</p>
                        </div>
                        <div className="date-field">
                            <p className="date-label">Effective</p>
                            <p className="date-value">December 25, 2023</p>
                        </div>
                    </div>
                </div>
                <div className="policy-clauses">
                    <div className="clause">
                        <h4 className="clause-heading">
                            <div className="clause-heading-point" select="false">1.</div>
                            <div className="clause-heading-text">Website Content</div>
                        </h4>
                        <p className="clause-text">
                            The content of the pages of this website is for your general information and use only. It is subject to change without notice.
                        </p>
                    </div>
                    <div className="clause">
                        <h4 className="clause-heading">
                            <div className="clause-heading-point" select="false">2.</div>
                            <div className="clause-heading-text">No User Data Collection</div>
                        </h4>
                        <p className="clause-text">
                            Soil Boys does not collect any user data or personal information. We respect your privacy and maintain a commitment to not engage in any unauthorized data collection.
                        </p>
                    </div>
                    <div className="clause">
                        <h4 className="clause-heading">
                            <div className="clause-heading-point" select="false">3.</div>
                            <div className="clause-heading-text">Cookies</div>
                        </h4>
                        <p className="clause-text">
                            We do not use cookies for tracking purposes. However, third-party services utilized on our website may use cookies to enhance user experience. Please refer to our Privacy Policy for more information.
                        </p>
                    </div>
                    <div className="clause">
                        <h4 className="clause-heading">
                            <div className="clause-heading-point" select="false">4.</div>
                            <div className="clause-heading-text">Third-Party Links</div>
                        </h4>
                        <p className="clause-text">
                            This website may include links to third-party websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
                        </p>
                    </div>
                    <div className="clause">
                        <h4 className="clause-heading">
                            <div className="clause-heading-point" select="false">5.</div>
                            <div className="clause-heading-text">Intellectual Property</div>
                        </h4>
                        <p className="clause-text">
                            All trademarks reproduced in this website, which is not the property of, or licensed to the operator, are acknowledged on the website.
                        </p>
                    </div>
                    <div className="clause">
                        <h4 className="clause-heading">
                            <div className="clause-heading-point" select="false">6.</div>
                            <div className="clause-heading-text">Limitations of Liability</div>
                        </h4>
                        <p className="clause-text">
                            Soil Boys shall not be responsible for and disclaims all liability for any loss, liability, damage (whether direct, indirect, or consequential), personal injury, or expense of any nature whatsoever which may be suffered by you or any third party.
                        </p>
                    </div>
                    <div className="clause">
                        <h4 className="clause-heading">
                            <div className="clause-heading-point" select="false">7.</div>
                            <div className="clause-heading-text">Governing Law</div>
                        </h4>
                        <p className="clause-text">
                            Your use of this website and any dispute arising out of such use is subject to the laws of India.
                        </p>
                    </div>
                    <div className="clause">
                        <h4 className="clause-heading">
                            <div className="clause-heading-point" select="false">8.</div>
                            <div className="clause-heading-text">Changes to Terms of Service</div>
                        </h4>
                        <p className="clause-text">
                            Soil Boys reserves the right to make changes to these Terms at any time without prior notice. It is your responsibility to review this page periodically for updates.
                        </p>
                    </div>
                </div>
                <div className="contact-part">
                    <h5 className="contact-heading">Contact Information</h5>
                    <p className="contact-text">
                        If you have any questions about these Terms, please contact us at <a href="mailto:soilboys.dev@gmail.com">soilboys.dev@gmail.com</a>.
                    </p>
                </div>
                <div className="ending-text">By using our website, you hereby consent to our Terms of Service and agree to abide by them.</div>
            </div>
        </div>
    </motion.div>
  )
}

export default TermsOfService