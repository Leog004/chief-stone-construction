import Data from "@data/sections/locations.json";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const LocationsSection = () => {
  const styles = {
    parallax: {
        "backgroundImage": "url(/images/pattren-6.png)"
    }
  }

  return (
    <section className="gap where-we-work">
        <div className="parallax" style={styles.parallax} />

        <div className="container">
        <div className="row">
            <div className="col-lg-6">
            <div className="heading-style-2">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                    <div className="data">
                        <span>{Data.subtitle}</span>
                        <h2>{Data.title}</h2>
                    </div>
                    </div>          
                </div>
            </div>
            <div className="first">
                <Tabs
                    defaultActiveKey="tab-country-0"
                    id="locationsTabContent"
                    className="tab-content"
                >
                {Data.countries.map((country, country_key) => (
                <Tab key={`countries-item-${country_key}`} eventKey={`tab-country-${country_key}`} title={country.name}>
                    <div className="tab-data">
                        <figure>
                            <img src={country.map.url} alt={country.map.alt} />
                        </figure>
                        <ul>
                            {country.locations.map((location, location_key) => (
                            <li key={`c${country_key}-location-item-${location_key}`} className={location_key == 0 ? "map-pin active" : "map-pin"}>
                                <div className="location">
                                    <figure>
                                        <img src={location.image} alt={location.title} />
                                    </figure>
                                    <div className="data">
                                        <p>{location.text}</p>
                                    </div>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                </Tab>
                ))}
                </Tabs>
            </div>
            </div>
            <div className="col-lg-6">
                <div className="second">
                    <p className="des">{Data.description}</p>
                    <div className="w-counter">
                        <ul>
                            {Data.numbers.map((item, key) => (
                            <li key={`locations-numbers-item-${key}`}>
                                <h2>{item.value}</h2>
                                <p>{item.label}</p>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
  );
};

export default LocationsSection;