export const extractPertinentData = (commitObject) => {
  if (commitObject && commitObject.commit) {
    return {
      authorName: commitObject.commit.author.name,
      committerName: commitObject.commit.committer.name,
      message: commitObject.commit.message,
      date: commitObject.commit.author.date,
    }
  } else {
    return null
  }
}
