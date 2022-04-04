import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Card className="bg-dark text-blank">
                <Card.Img src="https://images.unsplash.com/photo-1619252584172-a83a949b6efd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Privacy Policy</Card.Title>
                    <Card.Text>
                        This privacy policy has been compiled to better serve those who are concerned with how their ‘Personally identifiable information’ (PII) is being used online. PII, as used in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.

                        What personal information do we collect from the people that visit our website or blog?

                        When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, mailing address, phone number or other details to help you with your experience.

                        When do we collect information?

                        We collect information from you when you subscribe to a newsletter, respond to a survey, fill out a form or enter information on our site.

                        How do we use your information?

                        We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:

                        • To personalize user’s experience and to allow us to deliver the type of content and product offerings in which you are most interested.
                        • To improve our website in order to better serve you.
                        • To administer a contest, promotion, survey or other site feature.

                        How do we protect visitor information?

                        We do not use vulnerability scanning and/or scanning to PCI standards.
                        We use regular Malware Scanning.

                        We do not use an SSL certificate

                        We do not need an SSL because: We only provide affiliate products, articles and information
                    </Card.Text>
                    <Card.Title>Does our site allow third party behavioral tracking?</Card.Title>
                    <Card.Text>
                        It’s also important to note that we allow third party behavioral tracking.
                    </Card.Text>
                    <Card.Title>Fair Information Practices</Card.Title>
                    <Card.Text>
                        The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.

                        In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:
                        We will notify the users via email
                        • Within 7 business days
                        We also agree to the individual redress principle, which requires that individuals have a right to pursue legally enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or a government agency to investigate and/or prosecute non-compliance by data processors.
                    </Card.Text>
                    <Card.Title>Contacting Us</Card.Title>
                    <Card.Text>
                        If there are any questions regarding this privacy policy you may contact us using the information below.

                        Tech Land & Engineering Ltd.

                        6th floor, 28 Kazi Nazrul Islam Ave,

                        Navana Zohura Square, Dhaka 1000

                        Phone: 09678002003
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default About;