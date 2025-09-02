"use client"; // only needed if you're on the App Router

import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import { Formik } from "formik";
import { useState } from "react";
import appData from "@data/app.json";

export default function Contact() {
  const [status, setStatus] = useState("");

  return (
    <Layouts>
      <PageBanner
        pageTitle="Contact Us"
        pageDesc="our values and vaulted us to the top of our industry."
      />

      <section className="gap contact-form-2">
        <div className="container">
          <div className="row">
            {/* LEFT: Contact form */}
            <div className="col-lg-7">
              <div className="data">
                <span>How can we help?</span>
                <h2>Quality &amp; Passion With Contact Form</h2>
                <p>
                  Have questions or want to chat? Fill out our contact form, and
                  we’ll put you in touch with the right people.
                </p>

                <Formik
                  initialValues={{
                    email: "",
                    name: "",
                    subject: "",
                    message: "",
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = "Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email";
                    }
                    if (!values.name) errors.name = "Required";
                    if (!values.message) errors.message = "Required";
                    return errors;
                  }}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                    setStatus("");
                    try {
                      const data = new FormData();
                      data.append("name", values.name);
                      data.append("subject", values.subject);
                      data.append("email", values.email);
                      data.append("message", values.message);

                      const resp = await fetch(appData.settings.formspreeURL, {
                        method: "POST",
                        headers: { Accept: "application/json" },
                        body: data,
                      });

                      if (resp.ok) {
                        setStatus("Thanks for your submission!");
                        resetForm();
                      } else {
                        const json = await resp.json().catch(() => ({}));
                        if (json?.errors?.length) {
                          setStatus(
                            json.errors.map((e) => e.message).join(", ")
                          );
                        } else {
                          setStatus(
                            "Oops! There was a problem submitting your form."
                          );
                        }
                      }
                    } catch {
                      setStatus(
                        "Oops! There was a problem submitting your form."
                      );
                    } finally {
                      setSubmitting(false);
                    }
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
                  }) => (
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="row g-0">
                        <textarea
                          name="message"
                          placeholder="Question / Message?"
                          required
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.message}
                        />
                        {touched.message && errors.message && (
                          <small className="text-danger">
                            {errors.message}
                          </small>
                        )}
                      </div>

                      <div className="row g-0">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Complete Name"
                          required
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />
                        {touched.name && errors.name && (
                          <small className="text-danger">{errors.name}</small>
                        )}
                      </div>

                      <div className="row g-0">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          name="email"
                          required
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        {touched.email && errors.email && (
                          <small className="text-danger">{errors.email}</small>
                        )}
                      </div>

                      <div className="row g-0">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                          name="subject"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.subject}
                        />
                      </div>

                      <button
                        type="submit"
                        className="theme-btn"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message{" "}
                            <i className="fa-solid fa-angles-right" />
                          </>
                        )}
                      </button>

                      <div className="form-status" aria-live="polite">
                        {status}
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>

            {/* RIGHT: Info/Bio */}
            <div className="col-lg-4 offset-lg-1">
              <div className="bio">
                <div className="data">
                  <figure>
                    <img
                      className="author"
                      src="/img/caleb_moni.jpg"
                      alt="Bio Image"
                    />
                  </figure>
                  <br />
                  <h3>Caleb N. Toney</h3>
                  <p>Owner - Chief Stone Construction</p>
                </div>
              </div>
              <div className="info">
                <ul className="contact">
                  <li>
                    <div>
                      <h3>Address:</h3>
                      <p>1601 Whispering Creek Dr, Edmond, OK 73013</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>Telephone:</h3>
                      <p>
                        Tel:{" "}
                        <a
                          href="tel:+14053881577"
                          className="text-decoration-none"
                          style={{ color: "inherit"}}
                        >
                          (+1) 405-388-1577
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>Email:</h3>
                      <p>caleb@chiefstoneco.com</p>
                    </div>
                  </li>
                </ul>
                <ul className="social-medias">
                  <li>
                    <a
                      className="fb"
                      href="https://facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p>Facebook</p>
                      <i className="fa-brands fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="tw"
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p>Twitter</p>
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /RIGHT */}
          </div>
        </div>
      </section>
    </Layouts>
  );
}
