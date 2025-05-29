import Link from "next/link";
import { useState, useEffect } from "react";
import appData from "@data/app.json";
import { useLocalStorage } from "@common/useLocalStorage";

const DefaultHeader = ({ contactButton, cartButton }) => {
  const navItems = [];

  appData.header.menu.forEach((item, index) => {
    let s_class1 = '';

    if ( item.children != 0 ) {
      s_class1 = 'menu-item-has-children';
    }
    let newobj = Object.assign({}, item, { "classes" :  s_class1 });
    navItems.push(newobj);
  });

  const [themeUI, setThemeUIToggle] = useLocalStorage('theme_ui', '');
  const [desktopMenu, desktopMenuToggle] = useState(false);
  const [mobileMenu, mobileMenuToggle] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  
  const clickedCartButton = (e) => {
    e.preventDefault();
    setCartOpen(!cartOpen);
  }

  const clickedDesktopMenu = (e) => {
    e.preventDefault();
    desktopMenuToggle(!desktopMenu);
    document.getElementsByClassName('desktop-menu')[0].classList.toggle('open');
  }

  const clickedMobileMenu = (e) => {
    e.preventDefault();
    mobileMenuToggle(!mobileMenu);
    document.getElementsByClassName('mobile-menu')[0].classList.toggle('open');
  }
  const clickedMobileMenuItemParent = (e) => {
    e.preventDefault();
    e.target.parentNode.classList.toggle('active');
  }

  const clickedThemeUI = () => {
    setThemeUIToggle(!themeUI);
    
    const lightmodeToggle = document.querySelector('#theme-icon');
    if ( themeUI ) {
      document.body.classList.remove('light-d');
      lightmodeToggle.src = '/images/sun.png';
    } else {
      document.body.classList.add('light-d');
      lightmodeToggle.src = '/images/moon.png';
    }
  }

  useEffect(() => {
    const lightmodeToggle = document.querySelector('#theme-icon');

    if ( themeUI ) {
      document.body.classList.add('light-d');
      lightmodeToggle.src = '/images/moon.png';
    } else {
      document.body.classList.remove('light-d');
      lightmodeToggle.src = '/images/sun.png';
    }
  }, []);

  return (
    <header className="header-style-one" >
      <div className="container">
        <div className="row">
          <div className="desktop-nav" id="stickyHeader">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="d-flex-all justify-content-between">
                    <div className="header-logo">
                      <Link href="/">
                        <figure>
                          <img src={appData.header.logo.image} alt={appData.header.logo.alt} />
                        </figure>
                      </Link>
                    </div>
                    <div className="nav-bar">
                      <ul>
                        {navItems.map((item, key) => (
                        <li key={`headernav-item-${key}`} className={item.classes}>
                          <Link href={item.link}>{item.label}</Link>
                          {item.children != 0 &&
                          <ul className="sub-menu">
                            {item.children.map((subitem, key) => (
                            <li key={`headernavsub-item-${key}`} className={subitem.children != 0 ? "menu-item-has-children" : ""}>
                              <Link href={subitem.link}>{subitem.label}</Link>
                              {subitem.children != 0 &&
                              <ul className="sub-menu">
                                {subitem.children.map((subsubitem, key) => (
                                <li key={`headernavsub2-item-${key}`}><Link href={subsubitem.link}>{subsubitem.label}</Link></li>
                                ))}
                              </ul>
                              }
                            </li>
                            ))}
                          </ul>
                          }
                        </li>
                        ))}
                      </ul>
                      
                      <div className="extras">
                        <div className="theme-color">
                          <img 
                            src={ 1 ? "/images/moon.png" : "/images/sun.png"} 
                            alt="theme color" 
                            id="theme-icon" 
                            onClick={() => clickedThemeUI() } 
                          />
                        </div>
                        <a href="#" id="mobile-menu" className={mobileMenu ? "menu-start open" : "menu-start"} onClick={ (e) => clickedMobileMenu(e) }>
                          <svg id="ham-menu" viewBox="0 0 100 100"> <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" /> <path className="line line2" d="M 20,50 H 80" /> <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" /> </svg>
                        </a>
                        <a href="#" id="desktop-menu" className={desktopMenu ? "menu-start open" : "menu-start"} onClick={ (e) => clickedDesktopMenu(e) }>
                          <svg id="ham-menue" viewBox="0 0 100 100"> <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" /> <path className="line line2" d="M 20,50 H 80" /> <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" /> </svg>
                        </a>
                        {cartButton == 1 &&
                          <>
                            <a href="#" className="pr-cart" onClick={ (e) => clickedCartButton(e) }>
                              <svg id="Shoping-bags" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m452 120h-60.946c-7.945-67.478-65.477-120-135.054-120s-127.109 52.522-135.054 120h-60.946c-11.046 0-20 8.954-20 20v352c0 11.046 8.954 20 20 20h392c11.046 0 20-8.954 20-20v-352c0-11.046-8.954-20-20-20zm-196-80c47.484 0 87.019 34.655 94.659 80h-189.318c7.64-45.345 47.175-80 94.659-80zm176 432h-352v-312h40v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h192v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h40z"/></g></svg>
                            </a>
                            <div className={cartOpen ? "cart-popup show-cart" : "cart-popup"}>
                              <ul>
                                <li className="d-flex align-items-center position-relative">
                                  <div className="p-img light-bg">
                                    <img src="/img/product1.jpeg" alt="Product Image" />
                                  </div>
                                  <div className="p-data">
                                    <h3 className="font-semi-bold">Pastoral Principles Cards</h3>
                                    <p className="theme-clr font-semi-bold">1 x $25.00</p>
                                  </div>
                                  <a href="#" id="crosss"></a>
                                </li>
                                <li className="d-flex align-items-center position-relative">
                                  <div className="p-img light-bg">
                                    <img src="/img/product2.jpeg" alt="Product Image" />
                                  </div>
                                  <div className="p-data">
                                    <h3 className="font-semi-bold">Pastoral Principles Cards</h3>
                                    <p className="theme-clr font-semi-bold">1 x $25.00</p>
                                  </div>
                                  <a href="#" id="cross"></a>
                                </li>
                              </ul>

                              <div className="cart-total d-flex align-items-center justify-content-between">
                                <span className="font-semi-bold">Total:</span>
                                <span className="font-semi-bold">$60.00</span>
                              </div>

                              <div className="cart-btns d-flex align-items-center justify-content-between">
                                <Link className="font-bold" href="/cart">View Cart</Link>
                                <Link className="font-bold theme-bg-clr text-white checkout" href="/checkout">Checkout</Link>
                              </div>
                            </div>
                          </>
                        }
                        {contactButton != 1 &&
                        <a href="tel:+02101283492" className="theme-btn">
                          +021 01283492 
                          <i>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40" height="62" viewBox="0 0 40 62">
                              <defs>
                                <clipPath id="saddasdasdasdasda">
                                  <rect width="40" height="62"/>
                                </clipPath>
                              </defs>
                              <g id="Mobisdfle" clipPath="url(#saddasdasdasdasda)">
                                <path id="Path_125" data-name="Path 1" d="M10,6a4,4,0,0,0-4,4V50a4,4,0,0,0,4,4H28a4,4,0,0,0,4-4V10a4,4,0,0,0-4-4H10m0-6H28A10,10,0,0,1,38,10V50A10,10,0,0,1,28,60H10A10,10,0,0,1,0,50V10A10,10,0,0,1,10,0Z" transform="translate(1 1)"/>
                                <path id="Path_4342" data-name="Path 2" d="M2.5,0h7a2.5,2.5,0,0,1,0,5h-7a2.5,2.5,0,0,1,0-5Z" transform="translate(14 48)"/>
                              </g>
                            </svg>
                          </i>
                        </a>
                        }
                        {contactButton == 1 &&
                        <Link href="/contact" className="theme-btn simple">
                          Get a Quote
                        </Link>
                        }

                      </div>

                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-nav mobile-menu" id="mobile-nav">
            <div className="res-log">
              <Link href="/">
                <img src={appData.header.logo.image} alt={appData.header.logo.alt} />
              </Link>
            </div>

            <ul>
              {navItems.map((item, key) => (
              <li key={`mobilenav-item-${key}`} className={item.classes}>
                <Link href={item.link} onClick={item.children != 0 ? (e) => clickedMobileMenuItemParent(e) : ""}>{item.label}</Link>
                {item.children != 0 &&
                <ul className="sub-menu">
                  {item.children.map((subitem, key) => (
                  <li key={`mobilenavsub-item-${key}`} className={subitem.children != 0 ? "menu-item-has-children" : ""}>
                    <Link href={subitem.link}>{subitem.label}</Link>
                    {subitem.children != 0 &&
                    <ul className="sub-menu">
                      {subitem.children.map((subsubitem, key) => (
                      <li key={`mobilenavsub2-item-${key}`}><Link href={subsubitem.link}>{subsubitem.label}</Link></li>
                      ))}
                    </ul>
                    }
                  </li>
                  ))}
                </ul>
                }
              </li>
              ))}
            </ul>

            <a href="#" id="res-cross" onClick={ (e) => clickedMobileMenu(e) }></a>
          </div>

          <div className="mobile-nav desktop-menu">
            <h2>We Build Building and Great Homes.</h2>
            <p className="des">We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master new technologies.</p>
            
            <figure>
              <img src="/img/project1.jpeg" alt="image" />
            </figure>

            <h3>Get in touch</h3>
            <p className="num">(+380) 50 318 47 07</p>
            <p className="adrs">65 Allerton Street 901 N Pitt Str, Suite 170, VA 22314, USA</p>

            <div className="social-medias">
              {appData.social.map((item, key) => (
                <a href={item.link} target="_blank" key={`hsocial-item-${key}`}>{item.title}</a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
export default DefaultHeader;
