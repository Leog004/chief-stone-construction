import Data from "@data/sections/renovation.json";
import { ConsultationLink } from "@components/ConsultationModal";

const RenovationSection = () => {
  const styles = {
    parallax: {
        "backgroundImage": "url("+Data.bg_image+")"
    }
  }
  return (
    <section className="gap renovation">
        <div className="parallax" style={styles.parallax}></div>
        <div className="container">
        <div className="row">
            <div className="col-lg-12">
            <div className="reno-data">
                <h3>{Data.subtitle}</h3>
                <h2>{Data.title}</h2>
                <p>{Data.description}</p>
                <div className="bbtn">
                <ConsultationLink className="renovation-consultation-button">
                    <img className="circle-layer" src={Data.image_circle_text.url} alt="" aria-hidden="true" />
                    <i className="fa-solid fa-arrow-up-long" aria-hidden="true"></i>
                    <span className="consultation-sr-only">Request a free consultation</span>
                </ConsultationLink>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
  );
};

export default RenovationSection;