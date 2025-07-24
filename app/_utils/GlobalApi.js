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
  const query =
    gql`
    query getCourseById {
      courseList(where: { id: "` +
    courseId +
    `" }) {
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

const enrollToCourse = async (courseId, email) => {
  const query =
    gql`
    mutation MyMutation {
      createUserEnrollCourse(
        data: {
          courseId: "` +
    courseId +
    `"
          userEmail: "` +
    email +
    `"
          courseList: { connect: { id: "` +
    courseId +
    `" } }
        }
      ) {
        courseId
        id
      }
        publishManyUserEnrollCoursesConnection {
    edges {
      node {
        id
      }
    }
  }
        
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const checkUserEnrolledToCourse = async (courseId, email) => {
  const query =
    gql`
      query MyQuery {
        userEnrollCourses(where: { courseId: "` +
    courseId +
    `", userEmail: "` +
    email +
    `" }) {
          id
        }
      }
    `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getUserEnrolledCourseDetails = async (id, email) => {
  const query =
    gql`
    query MyQuery {
      userEnrollCourses(where: { id: "` +
    id +
    `", userEmail: "` +
    email +
    `" }) {
        completedChapter {
          ... on CompletedChapter {
            id
          }
        }
        courseList {
          author
          banner {
            url
          }
          chapter {
            ... on Chapter {
              id
              name
              shortDesc
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
          slug
          sourceCode
          totalChapter
        }
        courseId
        userEmail
        id
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const markChapterCompleted = async (enrollId, chapterId) => {
  const query =
    gql`
    mutation MyMutation {
      updateUserEnrollCourse(
        data: {
          completedChapter: {
            create: { CompletedChapter: { data: { chapterId: "` +
    chapterId +
    `" } } }
          }
        }
        where: { id: "` +
    enrollId +
    `" }
      ) {
        id
      }
      publishUserEnrollCourse(where: { id: "` +
    enrollId +
    `" }) {
        id
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getUserAllEnrolledCourse = async (email) => {
  const query = gql`
    query MyQuery {
      userEnrollCourses(where: { userEmail: "`+email+`" }) {
        completedChapter {
          ... on CompletedChapter {
            id
            chapterId
          }
        }
        courseId
        courseList {
          id
          name
          totalChapter
          slug
          sourceCode
          free
          description
          demoUrl
          chapter {
            ... on Chapter {
              id
              name
            }
          }
          author
          banner {
            url
          }
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  getCourseList,
  getSideBanner,
  getCourseById,
  enrollToCourse,
  checkUserEnrolledToCourse,
  getUserEnrolledCourseDetails,
  markChapterCompleted,
  getUserAllEnrolledCourse,
};
