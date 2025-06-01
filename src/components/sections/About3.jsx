import Data from '@data/sections/about-3.json';
import Link from 'next/link';

const About3Section = () => {
  return (
    <section className="gap history-style-one">
      <div className="heading heading-style-3">
        <h2 dangerouslySetInnerHTML={{ __html: Data.title }} />
        <p dangerouslySetInnerHTML={{ __html: Data.description }} />
      </div>
      <div className="container">
        <div className="row">
          {Data.items.map((item, key) => (
            <div
              key={`about3-item-${key}`}
              className="col-lg-4 col-md-6 col-sm-12"
            >
              <div className="history-data">
                <figure>
                  <img className="w-100" src={item.image} alt={item.title} />
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
