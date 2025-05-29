import Data from "@data/sections/services.json";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <section className="gap service-style-one">
        <div className="container">
        <div className="row">
            {Data.items.map((item, key) => (
            <div key={`services-item-${key}`} className="col-lg-4 col-md-6 col-sm-12 text-center" >
            <div className="service-data">
                <div className="svg-icon d-flex-all">
                    <img className="light-icon" src={item.icon.light} alt={item.icon.alt} />
                    <img className="dark-icon" src={item.icon.dark} alt={item.icon.alt} />
                </div>
                <h3><Link href={item.link}>{item.title}</Link></h3>
                <p>{item.text}</p>
                <Link href={item.link} className="icon">
                    <i className="fa-solid fa-angles-right" />
                </Link>
            </div>
            </div>
            ))}
        </div>
        </div>
    </section>
  );
};

export default ServicesSection;