import { ConsultationLink } from "@components/ConsultationModal";
import Data from '@data/sections/contact-form.json';
import Accordion from 'react-bootstrap/Accordion';

const ContactFormSection = () => {
  const styles = {
    parallax: {
      backgroundImage: 'url(/images/pattren.png)',
    },
  };

  return (
    <section className="contact-form-one">
      <div className="heading">
        <figure>
          <img src="/img/image2vector-3.svg" alt="heading-icon" />
        </figure>
        <span>{Data.subtitle}</span>
        <h2>{Data.title}</h2>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="acc2">
              <Accordion defaultActiveKey="contact-acc-0" alwaysOpen>
                {Data.items.map((item, key) => (
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
          <div className="col-lg-6">
            <div className="c-form-2">
              <div className="parallax" style={styles.parallax} />

              <div className="consultation-invite">
                <p className="consultation-eyebrow">Free consultation · No obligation</p>
                <h3>Let’s make a plan for your project.</h3>
                <p>Select your services, share your priorities, and tell us how to reach you. Not sure about materials or measurements? We’ll help.</p>
                <ConsultationLink className="consultation-primary">Start my project <i className="fa-solid fa-arrow-right" aria-hidden="true" /></ConsultationLink>
                <p>Prefer to talk? <a href="tel:+14053881577">Call (405) 388-1577</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
