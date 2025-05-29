import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";

const Login = () => {
  return (
    <Layouts>
      <PageBanner pageTitle={"Login"} pageDesc={"our values and vaulted us to the top of our industry."} />
      
      {/* Login Register Start */}
      <section className="gap login-register">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="faqs">
                <div className="question" >
                  <h3>What do I need to log in?</h3>
                  <p>Once you have registered you will be able to log in using your account number and your password.</p>
                </div>
                <div className="question" >
                  <h3>How do I sign up for paperless billing?</h3>
                  <p>Simply log into your account, select the My Details tab and update Send invoices by to Email.</p>
                </div>
                <div className="question" >
                  <h3>Register today and you will be able to:</h3>
                  <ul>
                    <li><i className="fa-solid fa-chevron-right" /> view the balance on your account</li>
                    <li><i className="fa-solid fa-chevron-right" /> make quick and secure payments using a debit or credit card</li>
                    <li><i className="fa-solid fa-chevron-right" /> let us know of any changes to your billing address or other details</li>
                    <li><i className="fa-solid fa-chevron-right" /> sign up for paperless billing and receive rent invoices directly to your inbox</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6" >
              <div className="box login">
                <h3>Log In Your Account</h3>
                <form onSubmit={(e) => {e.preventDefault();}}>
                  <input type="email" name="email" placeholder="Username or email address" />
                  <input type="password" name="password" placeholder="Password" />
                  <div className="remember">
                    <div className="first">
                      <input type="checkbox" name="checkbox" id="checkbox" />
                      <label htmlFor="checkbox">Remember me</label>
                    </div>
                    <div className="second">
                      <a href="#.">Forget a Password?</a>
                    </div>
                  </div>
                  <button type="submit" className="theme-btn">
                    <i className="fa-solid fa-angles-right" /> 
                    Login
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box register">
                <div className="parallax" style={{backgroundImage: "url(/images/pattren.png)"}} />
                <h3>Log In Your Account</h3>
                <form onSubmit={(e) => {e.preventDefault();}}>
                  <input type="text" name="text" placeholder="Complete Name" />
                  <input type="email" name="email" placeholder="Username or email address" />
                  <input type="password" name="password" placeholder="Password" />
                  <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                  <button type="submit" className="theme-btn">
                    <i className="fa-solid fa-angles-right" /> 
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Login Register End */}

    </Layouts>
  );
};
export default Login;