import { useState } from 'react';
import Data from "@data/sections/features.json";
import Accordion from 'react-bootstrap/Accordion';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';

const FeaturesSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="core-features">
        <div className="container">
        <div className="row">
            <div className="col-lg-6" >
            <div className="space">
                <div className="heading-style-2">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="data">
                            <span>{Data.subtitle}</span>
                            <h2>{Data.title}</h2>
                        </div>
                    </div>         
                    </div>
                </div>
                </div>

                <Accordion defaultActiveKey="features-acc-0">
                    {Data.items.map((item, key) => (
                    <Accordion.Item key={`features-item-${key}`} eventKey={`features-acc-${key}`}>
                        <Accordion.Header>
                            <span className="num">{item.num}</span> {item.title}
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>{item.text}</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    ))}
                </Accordion>

            </div>
            </div>
            <div className="col-lg-6" >
                <div className="shape">
                    <div className="video">
                        <figure>
                            <img src={Data.image.url} alt={Data.image.alt} />
                        </figure>
                        <a className="video-play-btn" onClick={() => setOpen(true)} style={{ "cursor" : "pointer" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="35" height="56" viewBox="0 0 35 56"> <defs> <clipPath id="clip-video_arrow"> <rect width="35" height="56"/> </clipPath> </defs> <g id="video_arrow" data-name="video arrow" clipPath="url(#clip-video_arrow)"> <path id="Shape_1" data-name="Shape 1" d="M1362,5000.8,1327,4972V5027Z" transform="translate(-1326.998 -4971.996)" fill="rgba(0,0,0,0)"/> <path id="Shape_1_-_Outline" data-name="Shape 1 - Outline" d="M1333,5015.017l19.29-14.437L1333,4984.7v30.313M1327,5027V4972l35,28.807Z" transform="translate(-1326.998 -4971.996)"/> </g> </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <ModalVideo channel='youtube' isOpen={isOpen} videoId={Data.yt_video_id} onClose={() => setOpen(false)} />
    </section>
  );
};

export default FeaturesSection;