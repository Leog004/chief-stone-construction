import { useMemo, useState } from "react";
import Layouts from "@layouts/Layouts";
import Link from "next/link";

import { getSortedProjectsData } from "@library/projects";
import PageBanner from "@components/PageBanner";

// UI options (slug matches your markdown values)
const CATEGORY_OPTIONS = [
  { slug: "all", label: "All" }, // UI-only sentinel; not expected in MD
  { slug: "home-improvement", label: "Home Improvement" },
  { slug: "fencing", label: "Fencing" },
  { slug: "roofing", label: "Roofing" },
  { slug: "general-contracting", label: "General Contracting" },
];

const Portfolio = (props) => {
  const { projects = [] } = props;

  // "all" = show everything
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter projects by category slug (case-insensitive). "all" => no filter.
  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    const ac = activeCategory.toLowerCase();
    return projects.filter(
      (p) => String(p?.category || "").toLowerCase() === ac
    );
  }, [projects, activeCategory]);

  return (
    <Layouts>
      <PageBanner
        pageTitle={"Our Projects"}
        pageDesc={"Built on Trust. Grounded in Stone."}
      />

      {/* Category filter pills */}
      <section className="gap no-top project-completed" style={{ paddingTop: 24, paddingBottom: 24 }}>
        <div className="container">
          <div
            className="category-filter"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              alignItems: "center",
            }}
          >
            {CATEGORY_OPTIONS.map(({ slug, label }) => {
              const isActive = activeCategory === slug;
              return (
                <button
                  key={slug}
                  onClick={() => setActiveCategory(slug)}
                  aria-pressed={isActive}
                  className={`cat-pill ${isActive ? "active" : ""}`}
                  title={slug === "all" ? "Show all projects" : `Show ${label}`}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "6px",
                    border: "1px solid #ddd",
                    background: isActive ? "#111" : "#fff",
                    color: isActive ? "#fff" : "#111",
                    cursor: "pointer",
                    fontSize: ".9rem",
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Project One Start */}
      <section className="gap no-top no-bottom project-completed our-projects-one">
        {filteredProjects.length === 0 ? (
          <div className="container">
            <p style={{ margin: 0, paddingTop: 16 }}>
              No projects found in{" "}
              <strong>
                {
                  CATEGORY_OPTIONS.find((c) => c.slug === activeCategory)
                    ?.label
                }
              </strong>
              .
            </p>
          </div>
        ) : (
          filteredProjects.map((item, key) => (
            <div key={`projects-item-${key}`} className="prj-post">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="proj-data">
                      <h3 style={{ fontSize: "2rem" }}>
                        <Link href={`/projects/${item.id}`}>{item.title}</Link>
                      </h3>
                      <p>{item.short}</p>
                      {/* 
                      <div className="loc-date">
                        <div>
                          <span>LOCATION:</span>
                          <span>{item.location}</span>
                        </div>
                        <div>
                          <span>DATE:</span>
                          <span>{item.dates}</span>
                        </div>
                      </div> 
                      */}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <Link href={`/projects/${item.id}`}>
                      <div className="data">
                        <figure>
                          <img src={item.image} alt={item.title} />
                        </figure>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
      {/* Our Project One End */}
    </Layouts>
  );
};

export default Portfolio;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();
  return {
    props: {
      projects: allProjects,
    },
  };
}
