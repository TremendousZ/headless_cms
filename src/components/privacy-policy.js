import React ,{Component} from 'react';
import './privacy-policy.css';

export default () => {
    return (
        <div className = "body-container">
                <div className = "privacy-content">
                    <div className = "privacy-title">Privacy Policy</div>
                    <div className = "privacy-description">
                    <p>The Nerdy takes your privacy very seriously and the following privacy guide outlines 
                        our policies in regards to what information we collect from you,
                         and how we use this information.</p>
                    <h1>Information Collection</h1>
                    <ul>
                        <li>
                            <h3>Information You Provide to Us.</h3>
                            <p>The Nerdy may collect and store any information voluntarily supplied to us.
                                 This may include, but not be limited to: E-mails, post comments, tip submissions,
                                  story submissions, search requests, contest and/or giveaway entries.</p>
                        </li>
                        <li>
                            <h3>Automated information Collection</h3>
                            <p>Automated information is gathered about you anonymously via the use of “cookies”. Cookies are small files that are stored in your computer’s browser that helps the site determine your preferences and help to identify how many times your browser has been to our site in a given time period.
                            Information about your Internet connection speed is gathered every time you connect to The Nerdy to help the site determine how to best display the site to you. This also aids us in knowing what sort of Internet speeds our site should be optimized for during any redesigns.
                            Anonymous data is also collected on your visit that tells us what browser you are using, your general geographical location, operating system and so on which helps us better design the site for your browsing ease.</p>
                        </li>
                        <li>
                            <h3>Information from Other Sources</h3>
                            <p>The Nerdy provides outgoing links to other sites that are either informational for the needs of a story, or via advertising. Some of these sites will provide anonymous information back to us based on your visits to them after having been referred by our site.
                                We do not have any control or say in the privacy policies of these third-party sites and you should refer to their policies in regards to their service.</p>
                        </li>
                        <li>
                            <h3>Third Party Servers</h3>
                            <p>
                            We may use third-party advertising companies to serve ads when you visit our Web Site. If so, a list of these ad serving companies will be available here. These companies may use information (generally, not including your name, address, e-mail address or telephone number) about your visits to this Web Site and to other web sites in order to provide advertisements about goods and services of interest to you. These companies may employ cookies and clear GIFs to measure advertising effectiveness. Any information that these third parties collect via cookies and clear GIFs is generally not personally identifiable (unless, for example, you provide personally identifiable information to them through an ad or e-mail message). We encourage you to read these businesses’ privacy policies if you should have any concerns about how they will care for your personal information. If you would like more information about this practice and to know your choices about not having this information used by these companies, see the Network Advertising Initiative’s consumer web site at http://www.networkadvertising.org/managing/opt_out.asp.
                            </p>
                        </li>
                    </ul>
                    <h1>Questions on Privacy</h1>
                    <p className = "privacy-questions-text">If you have questions or concerns about the privacy practices of The Nerdy, please contact us.</p>
                    </div>
                </div>
            </div>
    )
}