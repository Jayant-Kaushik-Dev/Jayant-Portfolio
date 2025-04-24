import React from "react";
import "./BlogCard.scss";

export default function BlogCard({
  data: {title, url, brief, publishedAt, slug, coverImage},
  blog,
  isDark
}) {
  const imgPath = coverImage.url || coverImage;
  const date = publishedAt;

  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div onClick={() => openUrlInNewTab(url, title)}>
      <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
        <a
          className={
            isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"
          }
          href="#blog"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              height: "100%",
              overflow: "hidden",
              position: "relative"
            }}
          >
            <img
              src={imgPath}
              alt="Description of the image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                // display: "block",
                // position: "absolute",
                top: 0,
                left: 0
              }}
            />
          </div>
          <div
            style={{
              height: "10%", // 40% - 30%
              flex: "1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
              {title}
            </h3>
          </div>
          <div
            style={{
              height: "30%", // Remaining 60% - 30%
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <p className={isDark ? "small-dark small" : "small"}>{brief}</p>
          </div>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>

    // <div onClick={() => openUrlInNewTab(url, title)}>
    //   <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
    //     <a
    //       className={
    //         isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"
    //       }
    //       href="#blog"
    //     >
    //       <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
    //         <img
    //           src={imgPath}
    //           style={{maxWidth: "100%", maxHeight: "100%", display: "block"}}
    //         />
    //         <br />
    //         {title}
    //       </h3>

    //       {/* <p className={isDark ? "small-dark small" : "small"}>{brief}</p> */}

    //       <div className="go-corner">
    //         <div className="go-arrow">→</div>
    //       </div>
    //     </a>
    //   </div>
    // </div>
  );
}
