import request, { gql } from "graphql-request";
const MASTER_URL = process.env.NEXT_PUBLIC_HYGRAPH_API_KEY;

const getCourseList = async () => {
  const query = gql`
    query GetCourseList {
      courseLists {
        author
        banner {
          url
        }
        free
        demoUrl
        description
        totalChapter
        id
        name
        chapter {
          ... on Chapter {
            id
            name
            video {
              url
            }
          }
        }
        sourceCode
        tag
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getSideBanner = async () => {
  const query = gql`
    query GetSidebanner {
      sideBanners {
        id
        name
        banner {
          id
          url
        }
        url
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getCourseById = async (courseId) => {
  const query = gql`
    query getCourseById {
      courseList(where: { id: "`+courseId+`" }) {
        author
        banner {
          url
          id
        }
        chapter {
          ... on Chapter {
            id
            name
            video {
              url
            }
          }
        }
        demoUrl
        description
        id
        name
        free
        youtubeUrl
        tag
        sourceCode
        totalChapter
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  getCourseList,
  getSideBanner,
  getCourseById
};
