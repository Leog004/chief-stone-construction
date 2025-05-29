import Data from "@data/sections/contact-form.json";
import Accordion from 'react-bootstrap/Accordion';
import appData from "@data/app.json";
import { Formik } from 'formik';

const ContactFormSection = () => {
  const styles = {
    parallax: {
        "backgroundImage": "url(/images/pattren.png)"
    }
  }

  return (
    <section className="contact-form-one">
        <div className="heading">
            <figure>
                <img src="/images/heading-icon.png" alt="heading-icon" />
            </figure>
            <span>{Data.subtitle}</span>
            <h2>{Data.title}</h2>
        </div>
        <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6" >
                <div className="acc2">
                    <Accordion defaultActiveKey="contact-acc-0" alwaysOpen>
                        {Data.items.map((item, key) => (
                        <Accordion.Item key={`contact-item-${key}`} eventKey={`contact-acc-${key}`}>
                            <Accordion.Header>
                                {item.title}
                            </Accordion.Header>
                            <Accordion.Body>
                                <p>{item.text}</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        ))}
                    </Accordion>
                </div>
            </div>
            <div className="col-lg-6" >
                <div className="c-form-2">
                    <div className="parallax" style={styles.parallax} />

                    <Formik
                    initialValues = {{ email: '', name: '', subject: '', message: '', phone: '' }}
                    validate = { values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit = {( values, { setSubmitting } ) => {
                        const form = document.getElementById("contactForm");
                        const status = document.getElementById("contactFormStatus");
                        const data = new FormData();

                        data.append('name', values.name);
                        data.append('subject', values.subject);
                        data.append('email', values.email);
                        data.append('phone', values.phone);
                        data.append('message', values.message);

                        fetch(form.action, {
                            method: 'POST',
                            body: data,
                            headers: {
                                'Accept': 'application/json'
                            }
                        }).then(response => {
                            if (response.ok) {
                                status.innerHTML = "Thanks for your submission!";
                                form.reset()
                            } else {
                                response.json().then(data => {
                                    if (Object.hasOwn(data, 'errors')) {
                                        status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                                    } else {
                                        status.innerHTML = "Oops! There was a problem submitting your form"
                                    }
                                })
                            }
                        }).catch(error => {
                            status.innerHTML = "Oops! There was a problem submitting your form"
                        });

                        setSubmitting(false);
                    }}
                    >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                    <form onSubmit={handleSubmit} id="contactForm" action={appData.settings.formspreeURL}>
                        <div className="row g-0">
                            <input 
                              type="text" 
                              className="form-control" 
                              id="exampleInputText1" 
                              placeholder="Complete Name"
                              name="name"
                              required="required" 
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name} 
                            />
                        </div>
                        <div className="row g-0">
                            <input 
                              type="email" 
                              className="form-control" 
                              id="exampleInputEmail1" 
                              placeholder="Email Address"
                              name="email"
                              required="required" 
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email} 
                            />
                        </div>
                        <div className="row g-0">
                            <input 
                              type="tel" 
                              className="form-control" 
                              id="exampleInputPassword1" 
                              placeholder="Phone No"
                              name="phone" 
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.phone} 
                            />
                        </div>
                        <div className="row g-0">
                            <div className="select-wrapper">
                            <select 
                              id="inputState-111" 
                              className="form-control" 
                              name="subject" 
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.subject}
                            >
                                <option>Subject</option>
                                <option value="1">Subject 1</option>
                                <option value="2">Subject 2</option>
                                <option value="3">Subject 3</option>
                            </select>
                            </div>
                        </div>
                        <div className="row g-0">
                            <textarea 
                              placeholder="Question / Message?"
                              name="message"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.message}
                            />
                        </div>
                        <button type="submit" className="theme-btn">
                            Submit Now 
                            <i className="fa-solid fa-angles-right" />
                        </button>

                        <div className="form-status" id="contactFormStatus" />
                    </form>
                    )}
                    </Formik>
                </div>
            </div>
        </div>
        </div>
    </section>
  );
};

export default ContactFormSection;