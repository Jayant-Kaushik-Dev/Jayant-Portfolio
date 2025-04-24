fs = require("fs");
const https = require("https");
process = require("process");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;
const HASHNODE_USERNAME = process.env.HASHNODE_USERNAME;
const HASHNODE_SECRET_KEY = process.env.HASHNODE_SECRET_KEY;

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct.",
  requestFailedHashnode: "The request to Hashnode didn't succeed."
};
if (USE_GITHUB_DATA === "true") {
  if (GITHUB_USERNAME === undefined) {
    throw new Error(ERR.noUserName);
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
  var data = JSON.stringify({
    query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`
  });
  const default_options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node"
    }
  };

  const req = https.request(default_options, res => {
    let data = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      throw new Error(ERR.requestFailed);
    }

    res.on("data", d => {
      data += d;
    });
    res.on("end", () => {
      fs.writeFile("./public/profile.json", data, function (err) {
        if (err) return console.log(err);
        console.log("saved file to public/profile.json");
      });
    });
  });

  req.on("error", error => {
    throw error;
  });

  req.write(data);
  req.end();
}

// if (MEDIUM_USERNAME !== undefined) {
//   console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);
//   const options = {
//     hostname: "api.rss2json.com",
//     path: `/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
//     port: 443,
//     method: "GET"
//   };

//   const req = https.request(options, res => {
//     let mediumData = "";

//     console.log(`statusCode: ${res.statusCode}`);
//     if (res.statusCode !== 200) {
//       throw new Error(ERR.requestMediumFailed);
//     }

//     res.on("data", d => {
//       mediumData += d;
//     });
//     res.on("end", () => {
//       fs.writeFile("./public/blogs.json", mediumData, function (err) {
//         if (err) return console.log(err);
//         console.log("saved file to public/blogs.json");
//       });
//     });
//   });

//   req.on("error", error => {
//     throw error;
//   });

//   req.end();
// }
if (HASHNODE_USERNAME !== undefined) {
  console.log(`Fetching Hashnode blogs data for ${HASHNODE_USERNAME}`);
  const query = `
  query Publication {
    publication(host: "guptaachin.hashnode.dev") {
      isTeam
      title
      posts(first: 10) {
        edges {
          node {
            title
            brief
            url
          }
        }
      }
    }
  }
  `;
  const fetchPosts = async () => {
    try {
      const res = await fetch("https://gql.hashnode.com/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${HASHNODE_SECRET_KEY}`
        },
        body: JSON.stringify({query})
      });
      const data = await res.json();
      // console.log(data);
      // Check if the file exists before attempting to delete it
      if (fs.existsSync("./public/blogs.json")) {
        // Delete the file
        fs.unlinkSync("./public/blogs.json");
        console.log("File deleted successfully");
      } else {
        console.log("File does not exist");
      }
      fs.writeFile(
        "./public/blogs.json",
        JSON.stringify(data, null, 2),
        function (err) {
          if (err) return console.log(err);
          console.log("saved file to public/blogs.json");
        }
      );
    } catch (error) {
      console.error("Error fetching Hashnode blogs:", error);
    }
  };
  // fetchPosts();
}
