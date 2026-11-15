import appData from "@data/app.json";
import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Accordion from "react-bootstrap/Accordion";
import ConsultationForm from "@components/ConsultationForm";

const Contact = () => {
  const faqData = {
    items: [
      {
        title: "How do I choose the right contractor?",
        text: "Choose a contractor you trust, not just the lowest price. Look for clear communication, quality workmanship, proven experience, and someone who stands behind their work. The right contractor protects your investment long after the project is complete.",
      },
      {
        title: "Is the lowest price always the best value?",
        text: "Not always. A lower price can mean corners are being cut in preparation, materials, or workmanship. We believe in providing lasting value through quality craftsmanship, honest recommendations, and solutions built to perform for years to come.",
      },
      {
        title: "How do you ensure quality?",
        text: "From the initial consultation to the final walkthrough, we keep you informed every step of the way. You’ll know what’s happening, what comes next, and who to contact if you have questions. Our goal is to make the construction process as smooth and stress-free as possible.",
      },
      {
        title: "What can I expect during my project?",
        text: "From the initial consultation to the final walkthrough, we keep you informed every step of the way. You’ll know what’s happening, what comes next, and who to contact if you have questions. Our goal is to make the construction process as smooth and stress-free as possible.",
      },
      {
        title: "What types of projects do you take on?",
        text: "We specialize in remodeling, renovations, repairs, and custom residential and commercial projects throughout Oklahoma. If you’re unsure whether your project is a good fit, we’d be happy to discuss it during a consultation.",
      },
      {
        title: "How do I get started?",
        text: "It starts with a conversation. Contact us to schedule a consultation, tell us about your project, and we'll guide you through the next steps with honest advice and clear expectations.",
      },
      {
        title: "What makes Chief Stone Construction different?",
        text: "At Chief Stone Construction, we believe construction is about more than building beautiful spaces—it’s about building trust. Our work is guided by faith, integrity, and a commitment to excellence. We take the time to understand your goals, communicate clearly throughout the process, and never compromise on the details that ensure lasting quality. We don’t believe in cutting corners or treating clients like just another job. Every home and business is treated with the same care and respect we would give our own, because we’re not just building projects, we’re building relationships that last long after the work is complete.",
      },
    ],
  };

  return (
    <Layouts>
      <PageBanner
        pageTitle={"Free Consultation"}
        pageDesc={"Your Vision Starts Here"}
      />

      {/* Contact Form 2 Start */}
      <section className="gap contact-form-2" id="consultation">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="data">
                <span>Let’s plan your next project</span>
                <h2>Your project. Your priorities.</h2>
                <p>
                  Tell us what you have in mind. We’ll help you explore the scope,
                  materials and next steps—without needing every detail figured out.
                </p>
                <ConsultationForm />
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1">
              <div className="bio">
                <div className="data">
                  <figure>
                    <img
                      className="author"
                      src="/img/team-1.2.jpg"
                      alt="Bio Image"
                    />
                  </figure>
                  <h3>Caleb Toney</h3>
                  <p>CEO of Chief Stone Construction</p>
                  <figure>
                    <img src="/img/signature.png" alt="Signature Image" />
                  </figure>
                </div>
              </div>
              <aside className="consultation-next" aria-label="What happens next">
                <h3>What happens next?</h3>
                <ol>
                  <li>We review your project and priorities.</li>
                  <li>We reach out to clarify the scope and discuss your options.</li>
                  <li>We arrange the appropriate next step together.</li>
                </ol>
              </aside>
              <div className="info">
                <ul className="contact">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="79"
                      height="94"
                      viewBox="0 0 79 94"
                    >
                      {" "}
                      <defs>
                        {" "}
                        <clipPath id="clip-location_Bd">
                          {" "}
                          <rect width="79" height="94" />{" "}
                        </clipPath>{" "}
                      </defs>{" "}
                      <g
                        id="location_Bd"
                        data-name="location B"
                        clipPath="url(#clip-location_B)"
                      >
                        {" "}
                        <path
                          id="Path_1gfhjfjytkd"
                          data-name="Path 1"
                          d="M962.855,575.375a3,3,0,0,1-2.1-.861l-26.263-25.826c-11.03-11.993-13.791-27.653-7.492-42a38.334,38.334,0,0,1,34.959-23.117l1.346.009c15.262,0,27.868,8.452,33.722,22.609,6.152,14.878,3.046,31.554-7.912,42.485-.528.555-24.064,25.75-24.064,25.75a3,3,0,0,1-2.129.951Zm-.9-85.8A31.924,31.924,0,0,0,932.49,509.1c-5.313,12.1-2.954,25.342,6.31,35.419l23.963,23.559c15.027-16.085,20.179-21.585,22.274-23.488l-.164-.165c9.233-9.209,11.825-23.318,6.605-35.944a29.677,29.677,0,0,0-28.177-18.9Z"
                          transform="translate(-922.725 -482.15)"
                        />{" "}
                        <path
                          id="Path_24cr2r"
                          data-name="Path 2d"
                          d="M15,6a9,9,0,1,0,9,9,9.01,9.01,0,0,0-9-9m0-6A15,15,0,1,1,0,15,15,15,0,0,1,15,0Z"
                          transform="translate(25 26)"
                        />{" "}
                      </g>{" "}
                    </svg>
                    <div>
                      <h3>Service Area:</h3>
                      <p>{appData.footer.info.serviceArea}</p>
                    </div>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="40"
                      height="62"
                      viewBox="0 0 40 62"
                    >
                      {" "}
                      <defs>
                        {" "}
                        <clipPath id="fsddffsdfsdfsdf">
                          {" "}
                          <rect width="40" height="62" />{" "}
                        </clipPath>{" "}
                      </defs>{" "}
                      <g id="Mobsfddfsdile" clipPath="url(#fsddffsdfsdfsdf)">
                        {" "}
                        <path
                          id="Pafdth_1dfhgfhgjjdfhgddffgdfgdfgdfgdfgd"
                          data-name="Path 1"
                          d="M10,6a4,4,0,0,0-4,4V50a4,4,0,0,0,4,4H28a4,4,0,0,0,4-4V10a4,4,0,0,0-4-4H10m0-6H28A10,10,0,0,1,38,10V50A10,10,0,0,1,28,60H10A10,10,0,0,1,0,50V10A10,10,0,0,1,10,0Z"
                          transform="translate(1 1)"
                        />{" "}
                        <path
                          id="Padfth_2"
                          data-name="Path 2"
                          d="M2.5,0h7a2.5,2.5,0,0,1,0,5h-7a2.5,2.5,0,0,1,0-5Z"
                          transform="translate(14 48)"
                        />{" "}
                      </g>
                    </svg>
                    <div>
                      <h3>Telephone:</h3>
                      <p>Tel: +1 (405) 388-1577</p>
                    </div>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="102"
                      height="93"
                      viewBox="0 0 102 93"
                    >
                      {" "}
                      <defs>
                        {" "}
                        <clipPath id="clip-Emaidl_Bhf">
                          {" "}
                          <rect width="102" height="93" />{" "}
                        </clipPath>{" "}
                      </defs>{" "}
                      <g
                        id="Emaidfgsdl_B"
                        data-name="Email B"
                        clipPath="url(#clip-Email_Bsdfhf)"
                      >
                        {" "}
                        <path
                          id="Pathsdf_1"
                          data-name="Path 1"
                          d="M969.85,550.4,927.766,528.2l2.8-5.307,39.229,20.7,37.712-20.677,2.885,5.261Z"
                          transform="translate(-918 -492)"
                        />{" "}
                        <path
                          id="Path_2dfsdsffgs"
                          data-name="Path 2"
                          d="M969.562,494.385l48.391,25.361,0,1.818c-.023,17.272-.043,42.814-.012,47.124l.012.024v.709c0,5.426-1.516,9.425-4.508,11.885a10.4,10.4,0,0,1-6.575,2.344l-75.5-.016c-3.557.071-5.965-.931-7.717-2.752-2.4-2.5-3.517-6.391-3.317-11.577l.065-1.194c.116-5.315.029-29.954-.067-46.535l-.011-1.842Zm42.386,28.988-42.411-22.227-43.2,22.238c.189,32.939.239,42.8-.143,46.148l.13.005c-.168,4.351.8,6.309,1.645,7.185a3.342,3.342,0,0,0,2.458.984l76.043-.071a4.65,4.65,0,0,0,3.16-.963c1.517-1.248,2.319-3.754,2.319-7.25h.09C1011.893,566.689,1011.9,557.566,1011.947,523.373Z"
                          transform="translate(-918 -492)"
                        />{" "}
                      </g>{" "}
                    </svg>
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
                      href="https://www.facebook.com/share/1CgeUqgWvX/?mibextid=wwXIfr"
                      target="_blank"
                    >
                      <p>Facebook</p>
                      <i className="fa-brands fa-facebook" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form 2 End */}

      {/* Contact Faqs Start */}
      <section className="contact-faqs">
        <div className="heading">
          <figure>
            <img src="/images/heading-icon.png" alt="Heading Icon" />
          </figure>
          <span>Frequently asked questions</span>
          <h2>Planning your project? Start here.</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="acc2">
                <Accordion defaultActiveKey="contact-acc-0" alwaysOpen>
                  {faqData.items.map((item, key) => (
                    <Accordion.Item
                      key={`contact-item-${key}`}
                      eventKey={`contact-acc-${key}`}
                    >
                      <Accordion.Header>{item.title}</Accordion.Header>
                      <Accordion.Body>
                        <p>{item.text}</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Faqs End */}

    </Layouts>
  );
};
export default Contact;
