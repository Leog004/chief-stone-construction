import { ConsultationLink } from "@components/ConsultationModal";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import appData from "@data/app.json";
import { observeHeaderHeight } from "@library/header-height";

const HeaderMenu = ({ items }) => {
  const menuRef = useRef(null);
  useEffect(() => {
    const dismiss = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) menuRef.current.open = false;
    };
    document.addEventListener('pointerdown', dismiss);
    return () => document.removeEventListener('pointerdown', dismiss);
  }, []);
  const close = () => { if (menuRef.current) menuRef.current.open = false; };
  return (
    <details ref={menuRef} className="home-navigation" onKeyDown={event => {
      if (event.key === 'Escape') {
        close();
        menuRef.current?.querySelector('summary')?.focus();
      }
    }}>
      <summary aria-label="Open navigation menu"><span /><span /><span /></summary>
      <nav className="home-navigation-panel" aria-label="Main navigation">
        <ul>
          {items.map(item => (
            <li key={item.link}>
              <Link href={item.link} onClick={close}>{item.label}</Link>
              {Array.isArray(item.children) && item.children.length > 0 && (
                <ul>{item.children.map(child => (
                  <li key={child.link}><Link href={child.link} onClick={close}>{child.label}</Link></li>
                ))}</ul>
              )}
            </li>
          ))}
        </ul>
        <div onClick={close}><ConsultationLink className="home-header-consultation">Request a consultation</ConsultationLink></div>
      </nav>
    </details>
  );
};

const DefaultHeader = () => {
  const headerRef = useRef(null);
  const router = useRouter();
  useEffect(() => observeHeaderHeight(headerRef.current, document.documentElement, window), []);

  return (
    <header ref={headerRef} className="header-style-one home-header">
      <div className="container">
        <div className="row">
          <div className="desktop-nav" id="stickyHeader">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="d-flex-all justify-content-between header-main-row">
                    <div className="header-logo">
                      <Link href="/" className="home-brand" aria-label="Chief Stone Construction home">
                        <img className="home-brand-mark" src="/img/Untitled_Artwork%204.png" alt="" width="950" height="820" />
                        <span className="home-brand-name"><strong>Chief Stone</strong><span>Construction</span></span>
                      </Link>
                    </div>
                    <HeaderMenu key={router.asPath} items={appData.header.menu} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default DefaultHeader;
