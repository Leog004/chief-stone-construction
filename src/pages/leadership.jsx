import dynamic from "next/dynamic";
import Link from "next/link";

import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import ContactForm2Section from "@components/sections/ContactForm2";

const TeamSlider = dynamic( () => import("@components/sliders/Team"), { ssr: false } );

const Leadership = () => {
  const Content = {
    "team": [
        {
          "image": "/img/team-4.jpg",
          "name": "Marc Chiasson",
          "role": "Vice President, Civil Infrastructure",
          "tel": "(+120) 50 318 47 07",
          "social": [
              {
                  "link": "https://facebook.com/",
                  "icon": "fa-brands fa-facebook-f",
                  "title": "Facebook"
              },
              {
                  "link": "https://twitter.com/",
                  "icon": "fa-brands fa-twitter",
                  "title": "Twitter"
              }
          ],
          "link": "/team/team-4"
      },
      {
          "image": "/img/team-5.jpg",
          "name": "Ethan Keith",
          "role": "Vice President, Civil Infrastructure",
          "tel": "(+180) 50 318 47 07",
          "social": [
              {
                  "link": "https://facebook.com/",
                  "icon": "fa-brands fa-facebook-f",
                  "title": "Facebook"
              },
              {
                  "link": "https://twitter.com/",
                  "icon": "fa-brands fa-twitter",
                  "title": "Twitter"
              }
          ],
          "link": "/team/team-5"
      },
      {
          "image": "/img/team-6.jpg",
          "name": "Dennis Tyler",
          "role": "Vice President, Civil Infrastructure",
          "tel": "(+180) 50 318 47 07",
          "social": [
              {
                  "link": "https://facebook.com/",
                  "icon": "fa-brands fa-facebook-f",
                  "title": "Facebook"
              },
              {
                  "link": "https://twitter.com/",
                  "icon": "fa-brands fa-twitter",
                  "title": "Twitter"
              }
          ],
          "link": "/team/team-6"
      },
      {
          "image": "/img/team-7.jpg",
          "name": "Henry Nathan",
          "role": "Vice President, Civil Infrastructure",
          "tel": "(+180) 50 318 47 07",
          "social": [
              {
                  "link": "https://facebook.com/",
                  "icon": "fa-brands fa-facebook-f",
                  "title": "Facebook"
              },
              {
                  "link": "https://twitter.com/",
                  "icon": "fa-brands fa-twitter",
                  "title": "Twitter"
              }
          ],
          "link": "/team/team-7"
      }
    ]
  }

  return (
    <Layouts>
      <PageBanner pageTitle={"Leadership"} pageDesc={"our values and vaulted us to the top of our industry."} />
      
      {/* Team Style Two (Revolution) Start */}
      <section className="gap team-style-two revolution">
        <div className="container">
          <div className="row space">
            <div className="col-lg-7">
              <div className="head">
                <span>Our Leadership</span>
                <h2>The champions of a construction revolution</h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="head">
                <p>We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master new technologies. Our portfolio includes dozens of successfully completed projects of houses of different storeys, with high–quality finishes and good repairs. Building houses is our vocation!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {Content.team.map((item, key) => (
            <div key={`team-item-${key}`} className="col-lg-6 col-md-6" >
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
                        <a key={`teamsocial-item-${link_key}`} className="icon" href={link.link} target="_blank" title={link.title}>
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
      {/* Team Style Two (Revolution) End */}
      
      <ContactForm2Section />

      <TeamSlider />
      
    </Layouts>
  );
};
export default Leadership;