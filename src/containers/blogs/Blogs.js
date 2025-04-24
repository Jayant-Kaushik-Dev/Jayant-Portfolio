import React, {useState, useEffect, useContext} from "react";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

const GET_USER_BLOGS = `
query Publication {
  publication(host: "guptaachin.hashnode.dev") {
    posts(first: 20) {
      edges {
        node {
          title
          brief
          url
          publishedAt
          slug
          coverImage {
            url
          }
        }
      }
    }
  }
}
`;

async function fetchBlogs(query = {}) {
  const response = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query
    })
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const responseData = await response.json();
  console.log("data", responseData.data);
  return responseData.data.publication.posts.edges;
}

export default function Blogs() {
  const {isDark} = useContext(StyleContext);
  const [mediumBlogs, setMediumBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const fetchFreshBlogs = async () => {
    try {
      const response = await fetchBlogs(GET_USER_BLOGS);
      setBlogs(response);
    } catch (error) {
      console.error("Error fetching fresh blogs:", error);
    }
  };

  useEffect(() => {
    fetchFreshBlogs(); // Fetch fresh blogs on component mount
  }, []); // Empty dependency array ensures the effect runs only once on mount

  function setMediumBlogsFunction(array) {
    setMediumBlogs(array);
  }

  if (!blogSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text">{blogSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {blogSection.subtitle}
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {blogSection.displayMediumBlogs !== "true" ||
            mediumBlogs === "Error"
              ? blogs.map((blog, i) => {
                  return (
                    <BlogCard
                      key={i}
                      data={blog.node}
                      isDark={isDark}
                      // blog={{
                      //   url: blog.url,
                      //   title: blog.title,
                      //   brief: blog.brief
                      // }}
                    />
                  );
                })
              : blogs.map((blog, i) => {
                  return (
                    <BlogCard
                      key={i}
                      data={blog.node}
                      isDark={isDark}
                      // blog={{
                      //   url: blog.url,
                      //   title: blog.title,
                      //   brief: blog.brief
                      // }}
                    />
                  );
                })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
