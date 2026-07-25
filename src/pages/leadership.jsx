import dynamic from "next/dynamic";
import Link from "next/link";

import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import ContactForm2Section from "@components/sections/ContactForm2";

const TeamSlider = dynamic(() => import("@components/sliders/Team"), {
  ssr: false,
});

const Leadership = () => {
  const Content = {
    team: [
      {
        image: "/img/team-4.jpg",
        name: "Marc Chiasson",
        role: "Vice President, Civil Infrastructure",
        tel: "(+120) 50 318 47 07",
        social: [
          {
            link: "https://facebook.com/",
            icon: "fa-brands fa-facebook-f",
            title: "Facebook",
          },
        ],
        link: "/team/team-4",
      },
      {
        image: "/img/team-5.jpg",
        name: "Ethan Keith",
        role: "Vice President, Civil Infrastructure",
        tel: "(+180) 50 318 47 07",
        social: [
          {
            link: "https://facebook.com/",
            icon: "fa-brands fa-facebook-f",
            title: "Facebook",
          },
        ],
        link: "/team/team-5",
      },
      {
        image: "/img/team-6.jpg",
        name: "Dennis Tyler",
        role: "Vice President, Civil Infrastructure",
        tel: "(+180) 50 318 47 07",
        social: [
          {
            link: "https://facebook.com/",
            icon: "fa-brands fa-facebook-f",
            title: "Facebook",
          },
        ],
        link: "/team/team-6",
      },
      {
        image: "/img/team-7.jpg",
        name: "Henry Nathan",
        role: "Vice President, Civil Infrastructure",
        tel: "(+180) 50 318 47 07",
        social: [
          {
            link: "https://facebook.com/",
            icon: "fa-brands fa-facebook-f",
            title: "Facebook",
          },
        ],
        link: "/team/team-7",
      },
    ],
  };

  return (
    <Layouts>
      <PageBanner
        pageTitle={"Meet The Founder"}
        pageDesc={"Faith that shaped the mission"}
      />

      {/* Team Style Two (Revolution) Start */}
      <section className="gap team-style-two revolution">
        <div className="container">
          <div className="row space">
            <div className="col-lg-7">
              <div className="head">
                <span>Meet the Founder</span>
                <h2>
                  Leading with faith, integrity, and a commitment to excellence.
                </h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="head">
                <p>
                  "I started Chief Stone Construction with one simple goal: to
                  honor God through my work while serving others with integrity
                  and exceptional craftsmanship. Every project is an opportunity
                  to earn trust, solve problems, and build something that lasts.
                  My hope is to create places where families, friends, and
                  communities can gather, and my prayer is that Christ would be
                  present in those moments. If the way we serve, communicate,
                  and care for others plants even one seed that points someone
                  toward Him, then our work has accomplished something far
                  greater than construction alone."
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {Content.team.map((item, key) => (
              <div key={`team-item-${key}`} className="col-lg-6 col-md-6">
                <div className="team-data">
                  <h3>
                    <Link href={item.link}>{item.name}</Link>
                  </h3>
                  <p>{item.role}</p>
                  <div className="contact">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="40"
                        height="62"
                        viewBox="0 0 40 62"
                      >
                        <defs>
                          <clipPath id="sdfsdfsas">
                            <rect width="40" height="62" />
                          </clipPath>
                        </defs>
                        <g id="Mobsdsdffsdw3ile" clipPath="url(#sdfsdfsas)">
                          <path
                            id="Path_1fghddddgsfdffs"
                            data-name="Path 1"
                            d="M10,6a4,4,0,0,0-4,4V50a4,4,0,0,0,4,4H28a4,4,0,0,0,4-4V10a4,4,0,0,0-4-4H10m0-6H28A10,10,0,0,1,38,10V50A10,10,0,0,1,28,60H10A10,10,0,0,1,0,50V10A10,10,0,0,1,10,0Z"
                            transform="translate(1 1)"
                          />
                          <path
                            id="Path_24fsdfsd32r"
                            data-name="Path 2"
                            d="M2.5,0h7a2.5,2.5,0,0,1,0,5h-7a2.5,2.5,0,0,1,0-5Z"
                            transform="translate(14 48)"
                          />
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
                        <a
                          key={`teamsocial-item-${link_key}`}
                          className="icon"
                          href={link.link}
                          target="_blank"
                          title={link.title}
                        >
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
