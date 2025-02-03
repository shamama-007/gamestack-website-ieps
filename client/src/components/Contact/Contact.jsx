import "../customStyle.scss";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { ContactSchema } from "../../schemas/validator";

const postContact = async (data) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/contact`, {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data)
    })
    return await response.json();
}


const ContactComponent = () => {

    // Login Schema
    const loginFormik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
        validationSchema: ContactSchema,
        onSubmit: async (values, action) => {
            console.log(values);
            const { success, message, retryAfter } = await postContact(values)
            if (success == true) {
                toast.success(message)
            } else {
                toast.error(message + ' ' + retryAfter)

            }
            action.resetForm();
        },
    });

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
                        <form className="form" onSubmit={loginFormik.handleSubmit}>
                            <h3>Contact Me</h3>
                            <div className="flex-column">
                                <label>Name</label>
                            </div>
                            <div className="inputForm">
                                <input type="text" className="input" onChange={loginFormik.handleChange}
                                    value={loginFormik.values.name} name="name" placeholder="Enter Your Name" />
                            </div>

                            {loginFormik.touched.name && loginFormik.errors.name ? (
                                <span className="text-danger">{loginFormik.errors.name}</span>
                            ) : null}

                            <div className="flex-column">
                                <label>Email</label>
                            </div>
                            <div className="inputForm">
                                <input type="text" className="input" onChange={loginFormik.handleChange}
                                    value={loginFormik.values.email} name="email" placeholder="Enter Your Email" />
                            </div>
                            {loginFormik.touched.email && loginFormik.errors.email ? (
                                <span className="text-danger">{loginFormik.errors.email}</span>
                            ) : null}
                            <div className="flex-column">
                                <label>Phone Number</label>
                            </div>
                            <div className="inputForm">
                                <input type="text" className="input" onChange={loginFormik.handleChange}
                                    value={loginFormik.values.phone} name="phone" placeholder="03XX-XXXXXXX" />
                            </div>
                            {loginFormik.touched.phone && loginFormik.errors.phone ? (
                                <span className="text-danger">{loginFormik.errors.phone}</span>
                            ) : null}

                            <div className="flex-column">
                                <label>Message</label>
                            </div>
                            <div className="textareaForm">
                                <textarea type="text" className="textarea" rows={6} onChange={loginFormik.handleChange}
                                    value={loginFormik.values.message} name="message" placeholder="Give me your opinion!" ></textarea>
                            </div>
                            {loginFormik.touched.message && loginFormik.errors.message ? (
                                <span className="text-danger">{loginFormik.errors.message}</span>
                            ) : null}

                            <div><button type='submit' className='button-submit'>Send Now</button></div>
                        </form>
                    </div>
                    <div className="col-md-4" data-aos="fade-left"
                        data-aos-delay="100"
                        data-aos-duration="500">
                        <div className="contact-page-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d14477.783174313992!2d67.066206!3d24.8827712!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2s!4v1738585262880!5m2!1sen!2s" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                                    <span>Office #201, 2nd Floor, Jan Centre, opp. Tooso, Char Minar Chowrangi, Bahadurabad Karachi, Sindh, Pakistan-79001</span>

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
                                    <span>gamestackpk@gmail.com</span>
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
                                    <span>+92 21 34912160</span>
                                    <span>+92333-7542778</span>
                                    <span>+92333-0372982</span>
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