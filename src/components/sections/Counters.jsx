import Data from "@data/sections/counters.json";
import CountUp from 'react-countup';

const CountersSection = () => {
  return (
    <section className="gap no-top counter-style-one">
        <div className="container">
          <div className="row">
            {Data.items.map((item, key) => (
            <div key={`counters-item-${key}`} className="col-lg-4 col-md-6 col-sm-12" >
              <div className={ key % 2 != 0 ? "counter-data upper-space" : "counter-data" }>
                <div className="count">
                  <span className="counter">
                    <CountUp end={item.value} duration={7} enableScrollSpy={true} scrollSpyOnce={true} />
                  </span>
                  { item.plus == true &&
                  <>+</>
                  }
                  <i>{item.label}</i>
                </div>
                <h4>{item.title}</h4>
              </div>
            </div>
            ))}
          </div>
        </div>
    </section>
    );
};

export default CountersSection;