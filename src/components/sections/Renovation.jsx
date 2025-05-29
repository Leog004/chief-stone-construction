import Data from "@data/sections/renovation.json";
import Link from "next/link";

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
                <figure>
                    <img className="w-auto circle-layer" src={Data.image_circle_text.url} alt={Data.image_circle_text.alt} />
                </figure>
                <Link href={Data.link}>
                    <i className="fa-solid fa-arrow-up-long"></i>
                </Link>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
  );
};

export default RenovationSection;