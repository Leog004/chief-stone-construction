import Data from "@data/sections/latest-posts-2.json";
import Date from '@library/date';
import Link from "next/link";

const LatestPosts2Section = ( { posts } ) => {
    return (
        <section className="gap blog-style-three">
            <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="blog-heading">
                        <span>{Data.subtitle}</span>
                        <h2>{Data.title}</h2>
                        <p>{Data.description}</p>
                        <Link href={Data.button.link} className="theme-btn">
                            {Data.button.label} 
                            <i className="fa-solid fa-angles-right" />
                        </Link>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="blog-posts row">
                        {posts.slice(0, Data.numOfItems).map((item, key) => (
                        <div key={`latest-post2-item-${key}`} className="col-lg-6 col-md-6 col-sm-12">
                        <div className="boxx">
                            <figure>
                                <img src={item.image} alt={item.title} />
                            </figure>
                            <div className="space">
                            <span className="date"><Date dateString={item.date} /></span>
                            <h3>
                                <Link href={`/blog/${item.id}`}>
                                    {item.title}
                                </Link>
                            </h3>
                            </div>
                        </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default LatestPosts2Section;