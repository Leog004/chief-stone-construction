import Data from "@data/sections/owners.json";
import Link from "next/link";

const OwnersSection = () => {
  return (
    <section className="gap no-top team-style-two">
        <div className="heading">
            <figure>
                <img src="/images/heading-icon.png" alt="heading-icon" />
            </figure>
            <span>{Data.subtitle}</span>
            <h2>{Data.title}</h2>
        </div>
        <div className="container">
        <div className="row">
            {Data.items.map((item, key) => (
            <div key={`owners-item-${key}`} className="col-lg-6 col-md-6 col-sm-12" >
            <div className="team-data">
                <h3><Link href={item.link}>{item.name}</Link></h3>
                <p>{item.role}</p>
                <div className="contact">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40" height="62" viewBox="0 0 40 62">
                            <defs>
                                <clipPath id="sdfsdfsas">
                                    <rect width="40" height="62"/>
                                </clipPath>
                            </defs>
                            <g id="Mobsdsdffsdw3ile" clipPath="url(#sdfsdfsas)">
                                <path id="Path_1fghddddgsfdffs" data-name="Path 1" d="M10,6a4,4,0,0,0-4,4V50a4,4,0,0,0,4,4H28a4,4,0,0,0,4-4V10a4,4,0,0,0-4-4H10m0-6H28A10,10,0,0,1,38,10V50A10,10,0,0,1,28,60H10A10,10,0,0,1,0,50V10A10,10,0,0,1,10,0Z" transform="translate(1 1)"/>
                                <path id="Path_24fsdfsd32r" data-name="Path 2" d="M2.5,0h7a2.5,2.5,0,0,1,0,5h-7a2.5,2.5,0,0,1,0-5Z" transform="translate(14 48)"/>
                            </g>
                        </svg>
                    </span>
                    <p>{item.tel}</p>
                </div>
                <div className="team-social-medias">
                    <Link href={item.link}>
                        <i className="fa-solid fa-arrow-up-long"></i>
                    </Link>
                    <div className="team-social-media">
                        {item.social.map((link, link_key) => (
                        <a key={`ownerssocial-item-${link_key}`} className="icon" href={link.link} target="_blank" title={link.title}>
                            <i className={link.icon} />
                        </a>
                        ))}
                    </div>
                </div>
                <figure className="team-image">
                    <img src={item.image} alt={item.name} />
                </figure>
            </div>
            </div>
            ))}
        </div>
        </div>
    </section>
  );
};

export default OwnersSection;