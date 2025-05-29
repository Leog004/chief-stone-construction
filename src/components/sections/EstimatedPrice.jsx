import Data from "@data/sections/estimated-price.json";
import { useEffect } from "react";
import { estimatedFormSteps } from "@common/utilits";
import { Formik, Field } from 'formik';
import appData from "@data/app.json";

const EstimatedPriceSection = () => {
  useEffect(() => {
    estimatedFormSteps();
  }, []);
    
  return (
    <section className="gap estimated-price">
        <div className="heading-style-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="data">
                            <span>{Data.subtitle}</span>
                            <h2>{Data.title}</h2>
                        </div>
                    </div> 
                    <div className="col-lg-6" />         
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row bg-wh">
                <div className="col-lg-7" >
                <div className="est-form">
                    <p>{Data.description}</p>
                    <Formik
                    initialValues = {{ email: '', name: '', message: '', materials: '1', area: '', room: '', bathroom: '' }}
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
                        data.append('email', values.email);
                        data.append('message', values.message);
                        data.append('area', values.area);
                        data.append('room', values.room);
                        data.append('bathroom', values.bathroom);
                        data.append('materials', values.materials);

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

                        <div className="est-form-step-1">
                        <div className="row">
                            <div className="form-group col-md-12">
                                <label htmlFor="inputState-1">House Area</label>
                                <div className="select-wrapper">
                                <select 
                                  id="inputState-1" 
                                  name="area" 
                                  className="form-control"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.area}
                                >
                                    <option>Choose Area</option>
                                    <option value="to 50 sq.m">to 50 sq.m</option>
                                    <option value="from 100 - 150 sq.m">from 100 - 150 sq.m</option>
                                    <option value="from 150 - 250 sq.m">from 150 - 250 sq.m</option>
                                    <option value="250 sq.m and more">250 sq.m and more</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6 space">
                                <label htmlFor="inputState-2">Room</label>
                                <div className="select-wrapper">
                                    <select 
                                      id="inputState-2" 
                                      name="room" 
                                      className="form-control"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.room}
                                    >
                                        <option>Select Room</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6 and more">6 and more</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputState-3">Bathroom</label>
                                <div className="select-wrapper gg">
                                    <select 
                                      id="inputState-3" 
                                      name="bathroom" 
                                      className="form-control" 
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.bathroom}
                                    >
                                        <option>Select Bathroom</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3 and more">3 and more</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row checkk g-0">
                            <p>Building Materials</p>
                            <div className="form-group col-md-6">
                                <div className="custom-control custom-radio">
                                    <Field 
                                      type="radio" 
                                      id="customRadio1" 
                                      name="materials" 
                                      className="custom-control-input"
                                      value="1" 
                                    />
                                    <label className="custom-control-label" htmlFor="customRadio1">A+ Grey Structure</label>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="custom-control custom-radio">
                                    <Field 
                                      type="radio" 
                                      id="customRadio2" 
                                      name="materials" 
                                      className="custom-control-input"
                                      value="2"
                                    />
                                    <label className="custom-control-label" htmlFor="customRadio2">Premium Finishing</label>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="est-form-step-2">
                            <div className="row">
                                <div className="form-group col-md-6 space">
                                    <label htmlFor="inputState-4">Name</label>
                                    <input 
                                      type="text" 
                                      id="inputState-4" 
                                      className="form-control" 
                                      placeholder="John Doe"
                                      name="name"
                                      required="required" 
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.name} 
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputState-5">Email</label>
                                    <input 
                                      type="email" 
                                      id="inputState-5" 
                                      className="form-control" 
                                      placeholder="johndoe@gmail.com"
                                      name="email"
                                      required="required" 
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.email} 
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputState-6">Message</label>
                                    <textarea 
                                      id="inputState-6" 
                                      className="form-control" 
                                      placeholder="Additional Details"
                                      name="message"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.message} 
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="est-main">
                            <p>Submit Form and get full estimate details</p>
                            <div className="est-price">
                                <a href="#." id="estFormContinue" className="theme-btn">
									<span>Get an estimate</span>
									<i className="fas fa-angle-double-right"></i>
								</a>
                                <button type="submit" id="estFormSubmit" className="theme-btn theme-btn-2">
									<span>Submit Form</span>
									<i className="fas fa-angle-double-right"></i>
								</button>
                                <div className="form-status" id="contactFormStatus" />
                                <a href="#." id="estFormBack" className="back">
                                    Back
                                </a>
                            </div>
                        </div>
                    </form>
                    )}
                    </Formik>
                </div>
            </div>
            <div className="col-lg-5" >
                <figure className="est-img">
                    <img src={Data.image.url} alt={Data.image.alt} />
                </figure>
            </div>
        </div>
        </div>
    </section>
  );
};

export default EstimatedPriceSection;