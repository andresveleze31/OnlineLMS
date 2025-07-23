import request, {gql} from "graphql-request"
const MASTER_URL = process.env.NEXT_PUBLIC_HYGRAPH_API_KEY;

const getCourseList = async() => {

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

}

export default{
    getCourseList
}
