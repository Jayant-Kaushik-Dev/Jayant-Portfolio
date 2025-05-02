import React, { useContext } from "react";
import "./Podcast.scss";
import { podcastSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Podcast() {
  const { isDark } = useContext(StyleContext);

  // Check if podcastSection is defined and should be displayed
  if (!podcastSection || !podcastSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main">
        <div className="podcast-header">
          <h1 className="podcast-header-title">{podcastSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode podcast-header-subtitle"
                : "subTitle podcast-header-subtitle"
            }
          >
            {podcastSection.subtitle}
          </p>
        </div>

        <div className="podcast-main-div">
          {podcastSection.podcast.map((podcast, i) => {
            if (!podcast.link) {
              console.warn(`Missing link for podcast entry at index ${i}`);
              return null;
            }

            return (
              <div key={i} className="podcast-item">
                <a
                  href={podcast.link.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="podcast-link"
                >
                  {podcast.companylogo && (
                    <img
                      src={podcast.companylogo}
                      alt={`Logo for recommendation ${i + 1}`}
                      className="podcast-logo-img"
                    />
                  )}
                </a>
                {podcast.description && (
                  <p className="podcast-description">{podcast.description}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
