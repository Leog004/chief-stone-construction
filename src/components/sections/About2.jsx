import Data from "@data/sections/about-2.json";

const About2Section = () => {
    return (
      <section className="gap our-goal">
        <div className="heading">
          <figure>
            <img src="/img/heading-icon.png" alt="heading-icon" />
          </figure>
          <span>{Data.subtitle}</span>
          <h2>{Data.title}</h2>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" >
              {Data.items.map((item, key) => (
              <div key={`about2-item-${key}`} className={key != 0 ? "data p2" : "data" }>
                <h4>{item.title}</h4>
                <div dangerouslySetInnerHTML={{__html : item.text}} />
              </div>
              ))}
            </div>
            <div className="col-lg-6" >
              <div className="data">
                <figure className="goal-img">
                  <img src={Data.image.url} alt={Data.image.alt} />
                </figure>
                <figure className="goal-mov">
                  <img src={Data.image_text_rotate.url} alt={Data.image_text_rotate.alt} />
                </figure>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="70" height="57" viewBox="0 0 70 57">
                  <defs>
                    <clipPath id="clip-Builty_Logo_Icon">
                      <rect width="70" height="57" />
                    </clipPath>
                  </defs>
                  <g id="Builty_Logo_Icon" data-name="Builty Logo Icon" clipPath="url(#clip-Builty_Logo_Icon)">
                    <path id="Path_9" data-name="Path 9" d="M26.5,53A26.528,26.528,0,0,1,2.083,36.815c-.064-.151-.121-.289-.175-.424l22.607-22.3,12.53,12.7,3.9-4.474L24.515,6.093l-13,13.471.109-4.856-3.887-2.03L4.725,16.043l2.842-.986-.016,2.7-.035,5.962L.4,31.1A26.5,26.5,0,1,1,51.9,34.071l-9.387-9.388-20.2,20.407h8.2L42.515,32.678l6.7,7.484A26.482,26.482,0,0,1,26.5,53ZM43,42v2h2V42Zm-3,0v2h2V42Zm3-3v2h2V39Zm-3,0v2h2V39ZM24.551,15.725,4.063,36.437l.172.235L24.368,18.551l9.808,7.917.279-.329-9.9-10.414ZM25,28v3h3V28Zm-4,0v3h3V28Zm4-5v3h3V23Zm-4,0v3h3V23Z" transform="translate(15 2)"/>
                    <path id="Path_4sffdfs" data-name="Path 4" d="M900.563,546.922l-.586-4.5-14.4,18.8Z" transform="translate(-885 -514)"/>
                    <path id="Path_7sdsdffsd" data-name="Path 7" d="M22.516,25.5l0,5.47-.705-5.3Z"/>
                    <path id="Path_8t4gdfg" data-name="Path 8" d="M898.221,545.8l-.536-3.8-12.1,15.507Z" transform="matrix(1, 0.017, -0.017, 1, -866.028, -530.46)"/>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About2Section;