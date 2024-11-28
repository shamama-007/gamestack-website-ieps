import "../customStyle.scss";


const ContactComponent = () => {
    return (
        <div><section className="plan-container contact-page-sec">
            <div className="text-center pb-5" data-aos="zoom-in"
                data-aos-delay="100"
                data-aos-duration="500">
                <h2>CONTACT US</h2>
                <h6>Have a question or need support?</h6>
            </div>
            <div className="container">
                {/* Contact Form */}
                <div className="row">
                    <div className="col-md-8" data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="500">
                        <form className="form">
                            <h3>Get in Touch</h3>
                            <div className="flex-column">
                                <label>Name</label>
                            </div>
                            <div className="inputForm">
                                <input type="text" className="input" placeholder="Enter Your Name" />
                            </div>

                            <div className="flex-column">
                                <label>Email</label>
                            </div>
                            <div className="inputForm">
                                <input type="text" className="input" placeholder="Enter Your Email" />
                            </div>

                            <div className="flex-column">
                                <label>Phone Number</label>
                            </div>
                            <div className="inputForm">
                                <input type="text" className="input" placeholder="03XX-XXXXXXX" />
                            </div>


                            <div className="flex-column">
                                <label>Message</label>
                            </div>
                            <div className="textareaForm">
                                <textarea type="text" className="textarea" rows={6} placeholder="Give me your opinion!" ></textarea>
                            </div>


                            <div><button type='button' className='button-submit'>Send Now</button></div>
                        </form>
                    </div>
                    <div className="col-md-4" data-aos="fade-left"
                        data-aos-delay="100"
                        data-aos-duration="500">
                        <div className="contact-page-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109741.02912911311!2d76.69348873658222!3d30.73506264436677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1553497921355" width="100%" height="450" style={{ border: 0 }} allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

                {/* Contact Detail */}
                <div className="row my-5">
                    <div className="col-md-4" data-aos="zoom-in"
                        data-aos-delay="200"
                        data-aos-duration="500">
                        <div className="contact-info">
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="fas fa-map-marked"></i>
                                </div>
                                <div className="contact-info-text">
                                    <h2>address</h2>
                                    <span>1215 Lorem Ipsum, Ch 176080 </span>
                                    <span>Chandigarh , INDIA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="zoom-in"
                        data-aos-delay="400"
                        data-aos-duration="500">
                        <div className="contact-info">
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="contact-info-text">
                                    <h2>E-mail</h2>
                                    <span>johnsmith@gmail.com</span>
                                    <span>johnsmith@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="zoom-in"
                        data-aos-delay="600"
                        data-aos-duration="500">
                        <div className="contact-info">
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div className="contact-info-text">
                                    <h2>Contact Me</h2>
                                    <span>+923555256799</span>
                                    <span>+923455542747</span>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section></div>
    )
}

export default ContactComponent