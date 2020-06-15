import { extractPertinentData } from "./helpers"
const commitObject = {
  "sha": "076578ce2cb954ab97a9960d8f40ea9f356ffe23",
  "node_id": "MDY6Q29tbWl0MjYxMjM5NjY1OjA3NjU3OGNlMmNiOTU0YWI5N2E5OTYwZDhmNDBlYTlmMzU2ZmZlMjM=",
  "commit": {
    "author": {
      "name": "Francis Bourgouin",
      "email": "netbeuix@gmail.com",
      "date": "2020-06-10T15:57:31Z"
    },
    "committer": {
      "name": "Francis Bourgouin",
      "email": "netbeuix@gmail.com",
      "date": "2020-06-10T15:57:31Z"
    },
    "message": "add w7d3 lecture",
    "tree": {
      "sha": "f50e74c48d3f4ea4187072ca23a65e50234e1ea1",
      "url": "https://api.github.com/repos/FrancisBourgouin/lectures-2020-east-apr27/git/trees/f50e74c48d3f4ea4187072ca23a65e50234e1ea1"
    },
    "url": "https://api.github.com/repos/FrancisBourgouin/lectures-2020-east-apr27/git/commits/076578ce2cb954ab97a9960d8f40ea9f356ffe23",
    "comment_count": 0,
    "verification": {
      "verified": false,
      "reason": "unsigned",
      "signature": null,
      "payload": null
    }
  },
  "url": "https://api.github.com/repos/FrancisBourgouin/lectures-2020-east-apr27/commits/076578ce2cb954ab97a9960d8f40ea9f356ffe23",
  "html_url": "https://github.com/FrancisBourgouin/lectures-2020-east-apr27/commit/076578ce2cb954ab97a9960d8f40ea9f356ffe23",
  "comments_url": "https://api.github.com/repos/FrancisBourgouin/lectures-2020-east-apr27/commits/076578ce2cb954ab97a9960d8f40ea9f356ffe23/comments",
  "author": {
    "login": "FrancisBourgouin",
    "id": 11548647,
    "node_id": "MDQ6VXNlcjExNTQ4NjQ3",
    "avatar_url": "https://avatars2.githubusercontent.com/u/11548647?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/FrancisBourgouin",
    "html_url": "https://github.com/FrancisBourgouin",
    "followers_url": "https://api.github.com/users/FrancisBourgouin/followers",
    "following_url": "https://api.github.com/users/FrancisBourgouin/following{/other_user}",
    "gists_url": "https://api.github.com/users/FrancisBourgouin/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/FrancisBourgouin/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/FrancisBourgouin/subscriptions",
    "organizations_url": "https://api.github.com/users/FrancisBourgouin/orgs",
    "repos_url": "https://api.github.com/users/FrancisBourgouin/repos",
    "events_url": "https://api.github.com/users/FrancisBourgouin/events{/privacy}",
    "received_events_url": "https://api.github.com/users/FrancisBourgouin/received_events",
    "type": "User",
    "site_admin": false
  },
  "committer": {
    "login": "FrancisBourgouin",
    "id": 11548647,
    "node_id": "MDQ6VXNlcjExNTQ4NjQ3",
    "avatar_url": "https://avatars2.githubusercontent.com/u/11548647?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/FrancisBourgouin",
    "html_url": "https://github.com/FrancisBourgouin",
    "followers_url": "https://api.github.com/users/FrancisBourgouin/followers",
    "following_url": "https://api.github.com/users/FrancisBourgouin/following{/other_user}",
    "gists_url": "https://api.github.com/users/FrancisBourgouin/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/FrancisBourgouin/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/FrancisBourgouin/subscriptions",
    "organizations_url": "https://api.github.com/users/FrancisBourgouin/orgs",
    "repos_url": "https://api.github.com/users/FrancisBourgouin/repos",
    "events_url": "https://api.github.com/users/FrancisBourgouin/events{/privacy}",
    "received_events_url": "https://api.github.com/users/FrancisBourgouin/received_events",
    "type": "User",
    "site_admin": false
  },
  "parents": [
    {
      "sha": "81eeb1adbd07d9b11498e8060800a37cb03ab7d8",
      "url": "https://api.github.com/repos/FrancisBourgouin/lectures-2020-east-apr27/commits/81eeb1adbd07d9b11498e8060800a37cb03ab7d8",
      "html_url": "https://github.com/FrancisBourgouin/lectures-2020-east-apr27/commit/81eeb1adbd07d9b11498e8060800a37cb03ab7d8"
    }
  ]
}

describe("returns null if the commit object is invalid (empty or doesn't have a commit property)", () => {
  it('should return null if object is empty', () => {
    const result = extractPertinentData({})

    expect(result).toBe(null)
  })
  it('should return null if object is invalid', () => {
    const newCommitObject = { ...commitObject, commit: undefined }
    const result = extractPertinentData(newCommitObject)

    expect(result).toBe(null)
  })
})

describe("returns author name, committer, message, date when given a valid object", () => {
  it('testing for a valid object', () => {
    const result = extractPertinentData(commitObject)
    const expectedResult = {
      committerName: "Francis Bourgouin",
      authorName: "Francis Bourgouin",
      message: "add w7d3 lecture",
      date: "2020-06-10T15:57:31Z"
    }
    expect(result.authorName).toBe("Francis Bourgouin")
    expect(result.committerName).toBe("Francis Bourgouin")
    expect(result.message).toBe("add w7d3 lecture")
    expect(result.date).toBe("2020-06-10T15:57:31Z")

    expect(result).toStrictEqual(expectedResult)
  })
})