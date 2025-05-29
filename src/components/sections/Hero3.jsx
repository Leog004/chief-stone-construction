import Data from "@data/sections/hero-3.json";

const Hero3Section = () => {
    const styles = {
        parallax: {
            "backgroundImage": "url(/images/pattren-2.png)"
        }
    }

    return (
        <section className="featured-section-three">
            <div className="parallax" style={styles.parallax} />

            <div className="container">
                <div className="row space align-items-center">
                    <div className="col-lg-6">
                        <div className="data">
                            <h2>{Data.title}</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="data space">
                            <p>
                                {Data.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="image">
                            <video autoPlay muted loop>
                                <source src={Data.video.url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <figure>
                                <img src={Data.video.poster} alt={Data.video.alt} />
                                <figcaption />
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="info">
                        <p 
                            dangerouslySetInnerHTML={{__html: Data.info}}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero3Section;