import React from 'react'

import { useEffect, useState } from "react";

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/raushan-thakur/repos");
        const data = await res.json();
        // Sort repos by last updated
        const sorted = data.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );
        setRepos(sorted);
      } catch (err) {
        console.error("Error fetching repos:", err);
      }
    };
    fetchRepos();
  }, []);

  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">My Projects</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {repos.map((repo) => (
            <li key={repo.id} className="blog-post-item">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <figure className="blog-banner-box">
                  <img
                    src="/assets/images/github-logo.png"
                    alt={repo.name}
                    loading="lazy"
                    style={{ width: "80px", margin: "20px auto" }}
                  />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">
                      {repo.language || "Unknown"}
                    </p>
                    <span className="dot"></span>
                    <time dateTime={repo.updated_at}>
                      {new Date(repo.updated_at).toDateString()}
                    </time>
                  </div>
                  <h3 className="h3 blog-item-title">{repo.name}</h3>
                  <p className="blog-text">
                    {repo.description || "No description provided."}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Projects;

