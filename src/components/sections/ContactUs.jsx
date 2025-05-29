import Data from "@data/sections/contact-us.json";
import { useEffect } from "react";
import { contactUsNavigation } from "@common/utilits";

const ContactUsSection = () => {
  useEffect(() => {
    contactUsNavigation();
  }, []);

  return (
    <section className="gap no-top contact-us">
        <div className="heading">
            <span>{Data.subtitle}</span>
            <h2>{Data.title}</h2>
        </div>
        <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-7 col-md-12" >
            <div className="c-data">
                <figure>
                    <img className="w-100" src="/images/map.png" alt="map" />
                </figure>
                <ul>
                    {Data.items.map((item, key) => (
                    <li key={`contactus-item-${key}`}>
                        <a href="#." className={key == 0 ? "active" : ""}>
                            <figure>
                                <img src={item.image} alt={item.name} />
                            </figure>
                            <i className="fa-solid fa-check"></i>
                        </a>
                    </li>
                    ))}
                </ul>
            </div>
            </div>
            <div className="col-lg-5 col-md-12" >
            <div className="c-cards">
                {Data.items.map((item, key) => (
                <div key={`contactus-item-${key}`} className={key == 0 ? "card active" : "card"}>
                <div className="details">
                    <h2>{item.name}</h2>
                    <span>{item.role}</span>
                </div>
                <div className="contacts-info">
                    <ul>
                        <li>
                            <span>Email:</span> <span className="email">{item.email}</span>
                        </li>
                        <li>
                            <span>Phone:</span> <span>{item.tel}</span>
                        </li>
                    </ul>
                </div>
                <div className="address">
                    {item.address}
                </div>  
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    </section>
  );
};

export default ContactUsSection;