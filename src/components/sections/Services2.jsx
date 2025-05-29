import Data from "@data/sections/services-2.json";
import Link from "next/link";

const Services2Section = () => {
  return (
    <section className="gap service-style-two">
        <div className="heading">
            <figure>
                <img src="/img/heading-icon.png" alt="heading-icon" />
            </figure>
            <span>{Data.subtitle}</span>
            <h2>{Data.title}</h2>
        </div>
        <div className="container">
        <div className="row g-0">
            {Data.items.map((item, key) => (
            <div key={`services2-item-${key}`} className="col-lg-4 col-md-6 col-sm-12" >
            <div className="service-two-box">
                <h3><Link href={item.link}>{item.title}</Link></h3>
                <p>{item.text}</p>
                <div className="service-two-icon d-flex-all justify-content-start">
                    <img src={item.icon} alt={item.title} />
                    <Link href={item.link}>
                        <i className="fa-solid fa-arrow-up-long" />
                    </Link>
                </div>
            </div>
            </div>
            ))}

            <div className="col-lg-4 col-md-6 col-sm-12" >
                <div className="service-two-box last d-flex-all">
                    <Link href={Data.button.link}>
                        {Data.button.label}
                        <span className="d-flex-all d-inline-flex">
                            <i className="fa-solid fa-angles-right"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    </section>
  );
};

export default Services2Section;