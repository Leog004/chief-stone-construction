import Data from "@data/sections/about-3.json";
import Link from "next/link";

const About3Section = () => {
  return (
    <section className="gap history-style-one">
      <div className="heading heading-style-3">
        <figure>
          <img src="/img/image2vector-3.svg" alt="heading-icon" />
        </figure>
        <h2 dangerouslySetInnerHTML={{ __html: Data.title }} />
        <p dangerouslySetInnerHTML={{ __html: Data.description }} />
      </div>
      <div className="container">
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap', rowGap: '1rem' }}>
          {Data.items.map((item, key) => (
            <div
              key={`about3-item-${key}`}
              className="col-lg-4 col-md-6 col-sm-12" style={{ gap: '1rem' }} 
            >
              <div className="history-data" style={{ height: '100%' }}>
                <figure style={{ height: '100%' }}>
                  <img className="w-100" src={item.image} alt={item.title} style={{ height: '100%' }} />
                </figure>
                <div className="details">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link href={item.link}>
                    <i className="fa-solid fa-arrow-up-long" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About3Section;
