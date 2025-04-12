export function discussionGql(ghDiscussionCategoryId: string | undefined) {
  return `{
        repository(owner: "Squirrel68", name: "tblog_save") {
            discussions(first: 100, categoryId: "${ghDiscussionCategoryId}") {
              nodes {
                title
                url
                number
                bodyHTML
                bodyText
                createdAt
                lastEditedAt
                author {
                  login
                  url
                  avatarUrl
                }
                 labels(first: 100) {
                  nodes {
                    name
                  }
                }
              }
            }
          }
    }`
}

// Single post
export function discussionDetailGql(postId: number | undefined) {
  return `{
    repository(owner: "Squirrel68", name: "tblog_save") {
      discussion(number: ${postId}) {
        title
        bodyHTML
        createdAt
        author {
          login
          url
          avatarUrl
        }
      }
    }
  }`
}
