import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const E404 = () => {
  return (
    <Layouts noFooter>
      {/* 404 */}
      <section className="sb-404">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="sb-404__num">404</div>
              <h1 className="sb-404__title">Oops! Where are we?</h1>
              <p className="sb-404__description"> We are unable to find the page you are looking for.</p> 
              {/* search form */}
              <form role="search" method="get" className="search-form" action=""> 
                <label> 
                  <span className="screen-reader-text">Search for:</span> 
                  <input type="search" className="search-field" placeholder="Search …" name="s" title="Search for:" /> 
                </label> 
                <input type="submit" className="search-submit" value="Search" />
              </form> 
              {/* button */} 
              <Link href="/" className="theme-btn"> 
                <span>Back to Home</span> 
                <i className="fa-solid fa-angles-right" />
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="sb-404__img">
                <figure>
                  <img src="/img/building-2.png" alt="404" className="sb-man" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 404 end */}
    </Layouts>
  );
};
export default E404;
