import React from 'react'
import { motion } from 'framer-motion'

import '../../Styles/Policies/PolicyPage.css'

function PrivacyPolicy() {
  return (
    <motion.div
        id="privacy-policy"
        className='policy'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <div className='policy-container'>
            <div className="heading-container" animate="false">
                <h2 className="policy-heading" select="false">Privacy Policy</h2>
            </div>
            <span className="policy-divider"></span>
            <div className="policy-content">
                <div className="initial-container">
                    <div className="policy-introduction">
                        <div className="policy-introduction-content">
                        Thank you for visiting Soil Boys at <a href="soil-boys.netlify.app">soil-boys.netlify.app</a> ( the <b>“Website”</b> ). Soil Boys is an international company, and we are committed to respecting and protecting your privacy globally. This Privacy Policy outlines how we collect, use, and safeguard any information you provide to us while using our Website.
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
                            <div className="clause-heading-text">Information We Collect</div>
                        </h4>
                        <p className="clause-text">
                            We do not collect any personally identifiable information (PII) or user data on our Website. We respect your privacy, and you can browse our Website anonymously.
                        </p>
                    </div>
                    <div className="clause">
                        <h4 className="clause-heading">
                            <div className="clause-heading-point" select="false">2.</div>
                            <div className="clause-heading-text">Use of Cookies</div>
                        </h4>
                        <p className="clause-text">
                            We do not use cookies or any tracking technologies on our Website.
                        </p>
                    </div>
                    <div className="clause">
                        <h4 className="clause-heading">
                            <div className="clause-heading-point" select="false">3.</div>
                            <div className="clause-heading-text">Links to Other Websites</div>
                        </h4>
                        <p className="clause-text">
                            Our Website may contain links to other websites. Please note that we have no control over the content and practices of these sites and cannot be responsible for the protection and privacy of any information you provide while visiting such sites. Please exercise caution and review the privacy policies of the linked websites.
                        </p>
                    </div>
                    <div className="clause">
                        <h4 className="clause-heading">
                            <div className="clause-heading-point" select="false">4.</div>
                            <div className="clause-heading-text">International Data Transfers</div>
                        </h4>
                        <p className="clause-text">
                            As an international company, we may transfer and process your information outside of your country of residence. By using our Website, you consent to the transfer of your data to any country where we operate.
                        </p>
                    </div>
                    <div className="clause">
                        <h4 className="clause-heading">
                            <div className="clause-heading-point" select="false">5.</div>
                            <div className="clause-heading-text">Changes to this Privacy Policy</div>
                        </h4>
                        <p className="clause-text">
                            We may update our Privacy Policy from time to time. Any changes will be posted on this page with the updated date. It is your responsibility to check this page periodically for changes.
                        </p>
                    </div>
                </div>
                <div className="contact-part">
                    <h5 className="contact-heading">Contact Us</h5>
                    <p className="contact-text">
                        If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:soilboys.dev@gmail.com">soilboys.dev@gmail.com</a>.
                    </p>
                </div>
                <div className="ending-text">By using our Website, you consent to this Privacy Policy.</div>
            </div>
        </div>
    </motion.div>
  )
}

export default PrivacyPolicy