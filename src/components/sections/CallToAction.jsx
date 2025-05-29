import Data from "@data/sections/call-to-action.json";
import Link from "next/link";

const CallToActionSection = () => {
  return (
    <section className="cta-section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="cta-data">
                        <h2>{Data.title}</h2>
                        <p>{Data.description}</p>
                        <Link href={Data.button.link} className="theme-btn">
                            {Data.button.label}  
                            <i className="fa-solid fa-angles-right" />
                        </Link>
                    </div>
                </div>
                <div className="col-lg-5" >
                    <div className="cta-data">
                        <figure>
                            <img src={Data.image.url} alt={Data.image.alt} />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default CallToActionSection;