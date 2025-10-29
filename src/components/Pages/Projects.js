import React, { useEffect, useState } from "react";

const GITHUB_API = "https://api.github.com/repos";

// 🧮 Helper — format time difference to “x years/months/weeks/days ago”
function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}

// 🧩 Fetch repository info and commits count
const fetchRepoData = async (url) => {
  try {
    const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) return null;
    const [, owner, repo] = match;

    const headers = {
      Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
    };

    // Fetch repo details
    const repoRes = await fetch(`${GITHUB_API}/${owner}/${repo}`, { headers });
    if (!repoRes.ok) throw new Error("Failed to fetch repo data");
    const repoData = await repoRes.json();

    // Fetch commits and count total
    const commitsRes = await fetch(`${GITHUB_API}/${owner}/${repo}/commits?per_page=1`, {
      headers,
    });
    if (!commitsRes.ok) throw new Error("Failed to fetch commits");

    let totalCommits = 1;
    const link = commitsRes.headers.get("Link");
    if (link) {
      const match = link.match(/&page=(\d+)>; rel="last"/);
      if (match) totalCommits = parseInt(match[1], 10);
    }

    return {
      updatedAt: repoData.updated_at,
      commits: totalCommits,
    };
  } catch (err) {
    console.error("Failed to fetch repo data:", err);
    return null;
  }
};

// Individual Project Card
const ProjectCard = ({ title, description, tech, github, live }) => {
  const [lastUpdated, setLastUpdated] = useState("Fetching...");
  const [commits, setCommits] = useState(null);

  useEffect(() => {
    const getRepoDetails = async () => {
      const data = await fetchRepoData(github);
      if (data?.updatedAt) {
        setLastUpdated(timeAgo(data.updatedAt));
      } else {
        setLastUpdated("Unknown");
      }
      if (data?.commits) setCommits(data.commits);
    };
    getRepoDetails();
  }, [github]);

  return (
    <div className="card">
      <h4 className="heading-4 card__heading">{title}</h4>
      <div className="card__content">
        <div className="con">
          <span className="con--circle"> </span>
        </div>
        <p className="card__text">
          {description}
          <br />
          Technologies used: {tech}
          <span className="live-links">
            <a href={github} target="_blank" rel="noreferrer">
              Source code
            </a>
            <a href={live} target="_blank" rel="noreferrer">
              Live demo
            </a>
          </span>
          <span className="card__last-updated">
            Last updated · {lastUpdated}
            {commits !== null && ` · ${commits} commits`}
          </span>
        </p>
      </div>
    </div>
  );
};

function Projects({ darkMode }) {
  const projects = [
    {
      title: "KiamaTrading",
      description: `Mastering financial pattern recognition with Python. Analyzes, 
        opens and closes trades, and evaluates trading algorithm performance.`,
      tech: "Python, Numpy, Yahoo Finance",
      github: "https://github.com/davidkiama/KiamaTrading",
      live: "https://github.com/davidkiama/KiamaTrading",
    },

    {
      title: "Bankist",
      description: `Banking web app for deposits, withdrawals, loan requests, 
        and money transfers between users.`,
      tech: "MongoDB, Express, React, NodeJs, Netlify",
      github: "https://github.com/davidkiama/Bankist",
      live: "https://bankist-kiama.netlify.app/",
    },
    {
      title: "Pizzeria-45",
      description: `A web application for a fictional pizza restaurant. Users can 
        place, edit, and pay for orders using cryptocurrency.`,
      tech: "ReactJs, NodeJs, Coniqvest, Netlify, Heroku",
      github: "https://github.com/davidkiama/Pizzeria-45",
      live: "https://pizzeria-45.netlify.app/",
    },
    {
      title: "Forkify",
      description: `Recipe web application where users can search, 
      bookmark, and add recipes.`,
      tech: "Vanilla JS, Heroku, Surge.sh",
      github: "https://github.com/davidkiama/Forkify",
      live: "https://forkify-kiama.surge.sh/",
    },

    {
      title: "Foto Moto",
      description:
        "Web image gallery categorized by location and category. Users can search and filter images.",
      tech: "PostgreSQL, Django, Heroku",
      github: "https://github.com/davidkiama/Foto-Moto-",
      live: "https://foto-moto.herokuapp.com/",
    },
    {
      title: "Neighbourhood",
      description:
        "Web app allowing users to find and share posts in their neighbourhood and view local businesses.",
      tech: "PostgreSQL, Django, Heroku",
      github: "https://github.com/davidkiama/NeighbourHood",
      live: "https://neighbourhood-xxiv.herokuapp.com/",
    },
    {
      title: "Pitches",
      description:
        "Flask web app where users can create, vote, and comment on pitches shared on the platform.",
      tech: "PostgreSQL, Flask, Heroku",
      github: "https://github.com/davidkiama/Flask-Pitches",
      live: "https://flask-pitches.herokuapp.com/",
    },
    {
      title: "Quotes",
      description:
        "Web app showcasing user-created quotes. Users can create, upvote, downvote, or delete quotes.",
      tech: "Angular, TypeScript, CSS",
      github: "https://github.com/davidkiama/Quotes",
      live: "https://davidkiama.github.io/Quotes/",
    },
    {
      title: "Github Search",
      description:
        "Displays a GitHub user's profile and repositories. Users can search for GitHub accounts by username.",
      tech: "Angular, TypeScript, CSS, GitHub API",
      github: "https://github.com/davidkiama/Github-Search",
      live: "https://davidkiama.github.io/Github-Search/",
    },
    {
      title: "Burger Palace",
      description:
        "A fictional restaurant website for Fingerlicking Good Burgers, inspired by a design by Justin Murithi.",
      tech: "HTML, CSS",
      github: "https://github.com/davidkiama/Burger-Palace",
      live: "https://davidkiama.github.io/Burger-Palace/",
    },
    {
      title: "Cute-Pet",
      description:
        "Landing page for a fictional pet care website, created in collaboration with Lyons Masawa.",
      tech: "HTML, CSS",
      github: "https://github.com/davidkiama/Cute-Pet",
      live: "https://davidkiama.github.io/Cute-Pet/",
    },
    {
      title: "Letuce Eat",
      description:
        "Fictional restaurant website promoting healthy and affordable dishes inspired by Moringa Restaurant.",
      tech: "HTML, CSS",
      github: "https://github.com/davidkiama/Letuce-Eat",
      live: "https://davidkiama.github.io/Letuce-Eat/",
    },
  ];

  return (
    <main className={`${darkMode ? "dark-2" : ""} main`}>
      <section className="content content-work">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </section>
    </main>
  );
}

export default Projects;
