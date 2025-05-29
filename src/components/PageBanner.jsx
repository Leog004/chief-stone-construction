import Head from 'next/head';
import Link from "next/link";
import appData from "@data/app.json";

const PageBanner = ({ pageTitle, pageDesc }) => {
  const styles = {
    "parallax": {
      "backgroundImage": "url(/images/pattren-3.png)"
    }
  }
  const headTitle = `${appData.settings.siteName} - ${pageTitle}`;

  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
      <section className="banner-style-one">
        <div className="parallax" style={styles.parallax} />

        <div className="container">
          <div className="row">
            <div className="banner-details">
              <h2>{pageTitle}</h2>
              <p>{pageDesc}</p>
            </div>
          </div>
        </div>
        <div className="breadcrums">
          <div className="container">
            <div className="row">
              <ul>
                <li>
                  <Link href="/">
                    <i className="fa-solid fa-house"></i>
                    <p>Home</p>
                  </Link>
                </li>
                <li className="current">
                  <p>{pageTitle}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PageBanner;
