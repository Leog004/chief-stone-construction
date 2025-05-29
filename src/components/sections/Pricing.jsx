import Data from "@data/sections/pricing.json";
import Link from "next/link";

const PricingSection = () => {
    
    return (
    <section className="gap no-top pricing-plans">
        <div className="heading">
          <figure>
            <img src="/img/heading-icon.png" alt="heading-icon" />
          </figure>
          <span>{Data.subtitle}</span>
          <h2>{Data.title}</h2>
        </div>
        <div className="container">
          <div className="row">
            {Data.items.map((item, key) => (
            <div key={`pricing-item-${key}`} className="col-lg-4 col-md-6 col-sm-12" >
              <div className="main-price">
                <div className="price-box">
                  <h3>{item.title}</h3>
                  <div className="price">
                    <h2>{item.price}</h2>
                    <div>
                      <p>{item.price_after_1}</p>
                      <p>{item.price_after_2}</p>
                    </div>
                  </div>
                  <p>{item.description}</p>
                  <Link href={item.button.link} className="theme-btn">
                    {item.button.label} 
                    <i className="fa-solid fa-angles-right" />
                  </Link>
                </div>
                <div className="features">
                  <ul>
                    {item.list.map((element, element_key) => (
                    <li key={`pricinglist${key}-item-${element_key}`}><i className="fa-solid fa-circle-check" /> {element}</li>
                    ))}
                  </ul>
                </div>
                <div className="price-img">
                  <figure>
                    <img src={item.image} alt={item.title} />
                  </figure>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
    </section>
    );
};

export default PricingSection;