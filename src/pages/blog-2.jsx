import { PER_PAGE } from './blog/page/[page]'
import Link from "next/link";
import Date from '@library/date';

import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";

import { getPaginatedPostsData } from "@library/posts";

const Blog = ( { posts, totalPosts, currentPage } ) => {
  return (
    <Layouts>
      <PageBanner pageTitle={"Our Blog"} pageDesc={"our values and vaulted us to the top of our industry."} />

      {/* Blog Style Three Start */}
      <section className="gap blog-style-one blog-style-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {posts.map((item, key) => (
              <div className="col-lg-12" key={`post-${key}`}>
                <div className="blog-post">
                  <div className="blog-image">
                    <figure>
                      <img src={item.image} alt={item.title} />
                    </figure>
                  </div>
                  <div className="blog-data">
                    <span className="blog-date"><Date dateString={item.date} /></span>
                    <h2>
                      <Link href={`/blog/${item.id}`}>{item.title}</Link>
                    </h2>
                    <div className="blog-author d-flex-all justify-content-start">
                      <div className="author-img">
                        <figure>
                          <img src={item.author.avatar} alt={item.author.name} />
                        </figure>
                      </div>
                      <div className="details">
                        <h3><span>by</span> {item.author.name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </div>
            <div className="col-lg-4">
              <aside className="sidebar">
                <div className="box recent-posts">
                  <h3>Recent Posts</h3>
                  <ul>
                    <li>
                      <p>Consulted admitting is power acuteness.</p>
                      <Link href="/blog/play-to-your-strength-and-supercharge-your-business">
                        <i className="fa-solid fa-arrow-up-long"></i>
                      </Link>
                    </li>
                    <li>
                      <p>Consulted admitting is power acuteness.</p>
                      <a href="/blog/play-to-your-strength-and-supercharge-your-business">
                        <i className="fa-solid fa-arrow-up-long"></i>
                      </a>
                    </li>
                    <li>
                      <p>Consulted admitting is power acuteness.</p>
                      <a href="/blog/play-to-your-strength-and-supercharge-your-business">
                        <i className="fa-solid fa-arrow-up-long"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="box recent-cmnts">
                  <h3>Recent Comments</h3>
                  <ul>
                    <li>
                      <h4>Thomas Walkar</h4>
                      <p>Consulted admitting is power acuteness.</p>
                    </li>
                    <li>
                      <h4>Thomas Walkar</h4>
                      <p>Consulted admitting is power acuteness.</p>
                    </li>
                    <li>
                      <h4>Thomas Walkar</h4>
                      <p>Consulted admitting is power acuteness.</p>
                    </li>
                  </ul>
                </div>
                <div className="box categories">
                  <h3>Categories</h3>
                  <ul>
                    <li>
                      <a href="#" onClick={(e) => {e.preventDefault();}}>
                        <p>Uncategorized</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => {e.preventDefault();}}>
                        <p>Construction</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => {e.preventDefault();}}>
                        <p>Projects</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => {e.preventDefault();}}>
                        <p>Expansion</p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="box categories">
                  <h3>Archives</h3>
                  <ul>
                    <li>
                      <a href="#" onClick={(e) => {e.preventDefault();}}>
                        <p>July 2021</p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="box categories">
                  <h3>Meta</h3>
                  <ul>
                    <li>
                      <a href="#" onClick={(e) => {e.preventDefault();}}>
                        <p>Log in</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => {e.preventDefault();}}>
                        <p>Entries feed</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => {e.preventDefault();}}>
                        <p>Comments feed</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => {e.preventDefault();}}>
                        <p>WordPress.org</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>

        <div className="container" >
          <div className="row">
            <div className="builty-pagination">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" href="#" onClick={(e) => {e.preventDefault();}}><i className='fa-solid fa-arrow-left-long'></i></a></li>
                  <li className="page-item"><a className="page-link" href="#" onClick={(e) => {e.preventDefault();}}>01</a></li>
                  <li className="page-item"><a className="page-link" href="#" onClick={(e) => {e.preventDefault();}}>02</a></li>
                  <li className="page-item"><a className="page-link" href="#" onClick={(e) => {e.preventDefault();}}>03</a></li>
                  <li className="page-item space"><a className="page-link" href="#" onClick={(e) => {e.preventDefault();}}>..........</a></li>
                  <li className="page-item"><a className="page-link" href="#" onClick={(e) => {e.preventDefault();}}>08</a></li>
                  <li className="page-item"><a className="page-link" href="#" onClick={(e) => {e.preventDefault();}}><i className='fa-solid fa-arrow-right-long'></i> </a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Style Three End */}
      
    </Layouts>
  );
};
export default Blog;

export async function getStaticProps() {
  const { posts, total } = getPaginatedPostsData( PER_PAGE, 1 );

  return {
    props: {
      posts,
      totalPosts: total,
      currentPage: 1
    }
  }
}