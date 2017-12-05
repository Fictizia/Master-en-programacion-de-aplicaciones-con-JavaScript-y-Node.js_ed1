### Github | Social Network Project

![logo](https://enterprise.github.com/assets/aws/aws-animation-teaser-large-5ac827d7617d87a2c90d5094773516f2b882ab8abe654bbc30f4ba816bfba51c.jpg)

Hagamos una aplicación web que nos pregunte por un usuario de github...

**Características**
- Devolveremos su información de perfil incluyendo el email.
- Si el email no aparece, utilizaremos los eventos para mostrarlo.


### Recursos (ejemplo: @baumannzone)

**Perfil**
- [https://api.github.com/users/{{user_id}}](https://api.github.com/users/baumannzone)

```json
{
  "login": "baumannzone",
  "id": 5422102,
  "avatar_url": "https://avatars0.githubusercontent.com/u/5422102?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/baumannzone",
  "html_url": "https://github.com/baumannzone",
  "followers_url": "https://api.github.com/users/baumannzone/followers",
  "following_url": "https://api.github.com/users/baumannzone/following{/other_user}",
  "gists_url": "https://api.github.com/users/baumannzone/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/baumannzone/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/baumannzone/subscriptions",
  "organizations_url": "https://api.github.com/users/baumannzone/orgs",
  "repos_url": "https://api.github.com/users/baumannzone/repos",
  "events_url": "https://api.github.com/users/baumannzone/events{/privacy}",
  "received_events_url": "https://api.github.com/users/baumannzone/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Jorge Baumann",
  "company": null,
  "blog": "http://baumannzone.com",
  "location": "Madrid",
  "email": null,
  "hireable": true,
  "bio": "Front-End 🎖 web developer & designer. 👾",
  "public_repos": 27,
  "public_gists": 0,
  "followers": 19,
  "following": 42,
  "created_at": "2013-09-09T21:51:48Z",
  "updated_at": "2017-12-05T14:39:41Z"
}
```

**Actividad**
- [https://api.github.com/users/{{user_id}}/events](https://api.github.com/users/baumannzone/events)

```json
[
  {
    "id": "6946069962",
    "type": "WatchEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 89562316,
      "name": "creotip/vue-particles",
      "url": "https://api.github.com/repos/creotip/vue-particles"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2017-12-05T15:50:18Z"
  },
  {
    "id": "6945638499",
    "type": "WatchEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 88311661,
      "name": "baumannzone/gameboy-css",
      "url": "https://api.github.com/repos/baumannzone/gameboy-css"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2017-12-05T14:37:17Z"
  },
  {
    "id": "6944318050",
    "type": "WatchEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 14440270,
      "name": "getify/You-Dont-Know-JS",
      "url": "https://api.github.com/repos/getify/You-Dont-Know-JS"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2017-12-05T09:57:17Z"
  },
  {
    "id": "6942173156",
    "type": "PushEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 112969886,
      "name": "baumannzone/dang-node-app",
      "url": "https://api.github.com/repos/baumannzone/dang-node-app"
    },
    "payload": {
      "push_id": 2170760213,
      "size": 1,
      "distinct_size": 1,
      "ref": "refs/heads/master",
      "head": "8e77af50e324824e4a3811a42b326877b5a81601",
      "before": "3f11f95c341d4da00418f6ae5b63c1c4825c7719",
      "commits": [
        {
          "sha": "8e77af50e324824e4a3811a42b326877b5a81601",
          "author": {
            "email": "jorge.baumann.aguilar@gmail.com",
            "name": "Jorge Baumann"
          },
          "message": "step 9",
          "distinct": true,
          "url": "https://api.github.com/repos/baumannzone/dang-node-app/commits/8e77af50e324824e4a3811a42b326877b5a81601"
        }
      ]
    },
    "public": true,
    "created_at": "2017-12-04T22:46:07Z"
  },
  {
    "id": "6941866837",
    "type": "IssueCommentEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 70817499,
      "name": "wesbos/Wes-Bos-Captions",
      "url": "https://api.github.com/repos/wesbos/Wes-Bos-Captions"
    },
    "payload": {
      "action": "created",
      "issue": {
        "url": "https://api.github.com/repos/wesbos/Wes-Bos-Captions/issues/42",
        "repository_url": "https://api.github.com/repos/wesbos/Wes-Bos-Captions",
        "labels_url": "https://api.github.com/repos/wesbos/Wes-Bos-Captions/issues/42/labels{/name}",
        "comments_url": "https://api.github.com/repos/wesbos/Wes-Bos-Captions/issues/42/comments",
        "events_url": "https://api.github.com/repos/wesbos/Wes-Bos-Captions/issues/42/events",
        "html_url": "https://github.com/wesbos/Wes-Bos-Captions/issues/42",
        "id": 278830002,
        "number": 42,
        "title": "No captions in Learn Node ",
        "user": {
          "login": "baumannzone",
          "id": 5422102,
          "avatar_url": "https://avatars0.githubusercontent.com/u/5422102?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/baumannzone",
          "html_url": "https://github.com/baumannzone",
          "followers_url": "https://api.github.com/users/baumannzone/followers",
          "following_url": "https://api.github.com/users/baumannzone/following{/other_user}",
          "gists_url": "https://api.github.com/users/baumannzone/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/baumannzone/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/baumannzone/subscriptions",
          "organizations_url": "https://api.github.com/users/baumannzone/orgs",
          "repos_url": "https://api.github.com/users/baumannzone/repos",
          "events_url": "https://api.github.com/users/baumannzone/events{/privacy}",
          "received_events_url": "https://api.github.com/users/baumannzone/received_events",
          "type": "User",
          "site_admin": false
        },
        "labels": [

        ],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [

        ],
        "milestone": null,
        "comments": 2,
        "created_at": "2017-12-03T22:50:41Z",
        "updated_at": "2017-12-04T21:37:16Z",
        "closed_at": null,
        "author_association": "NONE",
        "body": "Hello, I'm watching your videos through your platform (courses.wesbos.com) and at the moment, the first 3 videos of learn node, have no subtitles.  \r\nAny idea whats happening @wesbos ? Clicking in the `[cc]` icon does nothing. \r\n  \r\nThanks."
      },
      "comment": {
        "url": "https://api.github.com/repos/wesbos/Wes-Bos-Captions/issues/comments/349114111",
        "html_url": "https://github.com/wesbos/Wes-Bos-Captions/issues/42#issuecomment-349114111",
        "issue_url": "https://api.github.com/repos/wesbos/Wes-Bos-Captions/issues/42",
        "id": 349114111,
        "user": {
          "login": "baumannzone",
          "id": 5422102,
          "avatar_url": "https://avatars0.githubusercontent.com/u/5422102?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/baumannzone",
          "html_url": "https://github.com/baumannzone",
          "followers_url": "https://api.github.com/users/baumannzone/followers",
          "following_url": "https://api.github.com/users/baumannzone/following{/other_user}",
          "gists_url": "https://api.github.com/users/baumannzone/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/baumannzone/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/baumannzone/subscriptions",
          "organizations_url": "https://api.github.com/users/baumannzone/orgs",
          "repos_url": "https://api.github.com/users/baumannzone/repos",
          "events_url": "https://api.github.com/users/baumannzone/events{/privacy}",
          "received_events_url": "https://api.github.com/users/baumannzone/received_events",
          "type": "User",
          "site_admin": false
        },
        "created_at": "2017-12-04T21:37:16Z",
        "updated_at": "2017-12-04T21:37:16Z",
        "author_association": "NONE",
        "body": "Sure: \r\n![image](https://user-images.githubusercontent.com/5422102/33577542-a4a7c4e8-d943-11e7-821b-516d027fd322.png)\r\n"
      }
    },
    "public": true,
    "created_at": "2017-12-04T21:37:16Z"
  },
  {
    "id": "6941724050",
    "type": "IssueCommentEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 70817499,
      "name": "wesbos/Wes-Bos-Captions",
      "url": "https://api.github.com/repos/wesbos/Wes-Bos-Captions"
    },
    "payload": {
      "action": "created",
      "issue": {
        "url": "https://api.github.com/repos/wesbos/Wes-Bos-Captions/issues/42",
        "repository_url": "https://api.github.com/repos/wesbos/Wes-Bos-Captions",
        "labels_url": "https://api.github.com/repos/wesbos/Wes-Bos-Captions/issues/42/labels{/name}",
        "comments_url": "https://api.github.com/repos/wesbos/Wes-Bos-Captions/issues/42/comments",
        "events_url": "https://api.github.com/repos/wesbos/Wes-Bos-Captions/issues/42/events",
        "html_url": "https://github.com/wesbos/Wes-Bos-Captions/issues/42",
        "id": 278830002,
        "number": 42,
        "title": "No captions in Learn Node ",
        "user": {
          "login": "baumannzone",
          "id": 5422102,
          "avatar_url": "https://avatars0.githubusercontent.com/u/5422102?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/baumannzone",
          "html_url": "https://github.com/baumannzone",
          "followers_url": "https://api.github.com/users/baumannzone/followers",
          "following_url": "https://api.github.com/users/baumannzone/following{/other_user}",
          "gists_url": "https://api.github.com/users/baumannzone/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/baumannzone/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/baumannzone/subscriptions",
          "organizations_url": "https://api.github.com/users/baumannzone/orgs",
          "repos_url": "https://api.github.com/users/baumannzone/repos",
          "events_url": "https://api.github.com/users/baumannzone/events{/privacy}",
          "received_events_url": "https://api.github.com/users/baumannzone/received_events",
          "type": "User",
          "site_admin": false
        },
        "labels": [

        ],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [

        ],
        "milestone": null,
        "comments": 0,
        "created_at": "2017-12-03T22:50:41Z",
        "updated_at": "2017-12-04T21:06:46Z",
        "closed_at": null,
        "author_association": "NONE",
        "body": "Hello, I'm watching your videos through your platform (courses.wesbos.com) and at the moment, the first 3 videos of learn node, have no subtitles.  \r\nAny idea whats happening @wesbos ? Clicking in the `[cc]` icon does nothing. \r\n  \r\nThanks."
      },
      "comment": {
        "url": "https://api.github.com/repos/wesbos/Wes-Bos-Captions/issues/comments/349105514",
        "html_url": "https://github.com/wesbos/Wes-Bos-Captions/issues/42#issuecomment-349105514",
        "issue_url": "https://api.github.com/repos/wesbos/Wes-Bos-Captions/issues/42",
        "id": 349105514,
        "user": {
          "login": "baumannzone",
          "id": 5422102,
          "avatar_url": "https://avatars0.githubusercontent.com/u/5422102?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/baumannzone",
          "html_url": "https://github.com/baumannzone",
          "followers_url": "https://api.github.com/users/baumannzone/followers",
          "following_url": "https://api.github.com/users/baumannzone/following{/other_user}",
          "gists_url": "https://api.github.com/users/baumannzone/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/baumannzone/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/baumannzone/subscriptions",
          "organizations_url": "https://api.github.com/users/baumannzone/orgs",
          "repos_url": "https://api.github.com/users/baumannzone/repos",
          "events_url": "https://api.github.com/users/baumannzone/events{/privacy}",
          "received_events_url": "https://api.github.com/users/baumannzone/received_events",
          "type": "User",
          "site_admin": false
        },
        "created_at": "2017-12-04T21:06:46Z",
        "updated_at": "2017-12-04T21:06:46Z",
        "author_association": "NONE",
        "body": "Edit\r\n---\r\nTesting with Chrome (v62) in macOS high sierra (v10.13)\r\nSecond day in the videos, watching without subtitles. \r\nAny help?\r\n\r\n**Edit while editing:**\r\nIt's working with Safari."
      }
    },
    "public": true,
    "created_at": "2017-12-04T21:06:46Z"
  },
  {
    "id": "6938567684",
    "type": "PushEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 88836148,
      "name": "OSWeekends/welcome.osweekends.com",
      "url": "https://api.github.com/repos/OSWeekends/welcome.osweekends.com"
    },
    "payload": {
      "push_id": 2168903746,
      "size": 1,
      "distinct_size": 1,
      "ref": "refs/heads/dev",
      "head": "dfb234d52313444e222e496877d506996d82580a",
      "before": "6756f918bac3c832d2c8105171f44660d683a00e",
      "commits": [
        {
          "sha": "dfb234d52313444e222e496877d506996d82580a",
          "author": {
            "email": "jorge.baumann.aguilar@gmail.com",
            "name": "Jorge Baumann"
          },
          "message": "Update BITACORA.md",
          "distinct": true,
          "url": "https://api.github.com/repos/OSWeekends/welcome.osweekends.com/commits/dfb234d52313444e222e496877d506996d82580a"
        }
      ]
    },
    "public": true,
    "created_at": "2017-12-04T10:28:28Z",
    "org": {
      "id": 22908549,
      "login": "OSWeekends",
      "gravatar_id": "",
      "url": "https://api.github.com/orgs/OSWeekends",
      "avatar_url": "https://avatars.githubusercontent.com/u/22908549?"
    }
  },
  {
    "id": "6938516383",
    "type": "PushEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 88836148,
      "name": "OSWeekends/welcome.osweekends.com",
      "url": "https://api.github.com/repos/OSWeekends/welcome.osweekends.com"
    },
    "payload": {
      "push_id": 2168877042,
      "size": 1,
      "distinct_size": 1,
      "ref": "refs/heads/dev",
      "head": "6756f918bac3c832d2c8105171f44660d683a00e",
      "before": "de9e9b77e89e7b82446eefdbf0d79e2ee33c6efd",
      "commits": [
        {
          "sha": "6756f918bac3c832d2c8105171f44660d683a00e",
          "author": {
            "email": "jorge.baumann.aguilar@gmail.com",
            "name": "Jorge Baumann"
          },
          "message": "Fix typo",
          "distinct": true,
          "url": "https://api.github.com/repos/OSWeekends/welcome.osweekends.com/commits/6756f918bac3c832d2c8105171f44660d683a00e"
        }
      ]
    },
    "public": true,
    "created_at": "2017-12-04T10:17:34Z",
    "org": {
      "id": 22908549,
      "login": "OSWeekends",
      "gravatar_id": "",
      "url": "https://api.github.com/orgs/OSWeekends",
      "avatar_url": "https://avatars.githubusercontent.com/u/22908549?"
    }
  },
  {
    "id": "6936787257",
    "type": "CreateEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 112969886,
      "name": "baumannzone/dang-node-app",
      "url": "https://api.github.com/repos/baumannzone/dang-node-app"
    },
    "payload": {
      "ref": "master",
      "ref_type": "branch",
      "master_branch": "master",
      "description": null,
      "pusher_type": "user"
    },
    "public": true,
    "created_at": "2017-12-03T23:33:01Z"
  },
  {
    "id": "6936717423",
    "type": "IssuesEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 70817499,
      "name": "wesbos/Wes-Bos-Captions",
      "url": "https://api.github.com/repos/wesbos/Wes-Bos-Captions"
    },
    "payload": {
      "action": "opened",
      "issue": {
        "url": "https://api.github.com/repos/wesbos/Wes-Bos-Captions/issues/42",
        "repository_url": "https://api.github.com/repos/wesbos/Wes-Bos-Captions",
        "labels_url": "https://api.github.com/repos/wesbos/Wes-Bos-Captions/issues/42/labels{/name}",
        "comments_url": "https://api.github.com/repos/wesbos/Wes-Bos-Captions/issues/42/comments",
        "events_url": "https://api.github.com/repos/wesbos/Wes-Bos-Captions/issues/42/events",
        "html_url": "https://github.com/wesbos/Wes-Bos-Captions/issues/42",
        "id": 278830002,
        "number": 42,
        "title": "No captions in Learn Node ",
        "user": {
          "login": "baumannzone",
          "id": 5422102,
          "avatar_url": "https://avatars0.githubusercontent.com/u/5422102?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/baumannzone",
          "html_url": "https://github.com/baumannzone",
          "followers_url": "https://api.github.com/users/baumannzone/followers",
          "following_url": "https://api.github.com/users/baumannzone/following{/other_user}",
          "gists_url": "https://api.github.com/users/baumannzone/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/baumannzone/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/baumannzone/subscriptions",
          "organizations_url": "https://api.github.com/users/baumannzone/orgs",
          "repos_url": "https://api.github.com/users/baumannzone/repos",
          "events_url": "https://api.github.com/users/baumannzone/events{/privacy}",
          "received_events_url": "https://api.github.com/users/baumannzone/received_events",
          "type": "User",
          "site_admin": false
        },
        "labels": [

        ],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [

        ],
        "milestone": null,
        "comments": 0,
        "created_at": "2017-12-03T22:50:41Z",
        "updated_at": "2017-12-03T22:50:41Z",
        "closed_at": null,
        "author_association": "NONE",
        "body": "Hello, I'm watching your videos through your platform (courses.wesbos.com) and at the moment, the first 3 videos of learn node, have no subtitles.  \r\nAny idea whats happening @wesbos ? Clicking in the `[cc]` icon does nothing. \r\n  \r\nThanks."
      }
    },
    "public": true,
    "created_at": "2017-12-03T22:50:41Z"
  },
  {
    "id": "6936699509",
    "type": "CreateEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 112969886,
      "name": "baumannzone/dang-node-app",
      "url": "https://api.github.com/repos/baumannzone/dang-node-app"
    },
    "payload": {
      "ref": null,
      "ref_type": "repository",
      "master_branch": "master",
      "description": null,
      "pusher_type": "user"
    },
    "public": true,
    "created_at": "2017-12-03T22:40:04Z"
  },
  {
    "id": "6925524148",
    "type": "WatchEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 105070029,
      "name": "jdonsan/pills",
      "url": "https://api.github.com/repos/jdonsan/pills"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2017-11-30T16:11:00Z"
  },
  {
    "id": "6925404886",
    "type": "IssueCommentEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 65889120,
      "name": "petervmeijgaard/vue-2-boilerplate",
      "url": "https://api.github.com/repos/petervmeijgaard/vue-2-boilerplate"
    },
    "payload": {
      "action": "created",
      "issue": {
        "url": "https://api.github.com/repos/petervmeijgaard/vue-2-boilerplate/issues/52",
        "repository_url": "https://api.github.com/repos/petervmeijgaard/vue-2-boilerplate",
        "labels_url": "https://api.github.com/repos/petervmeijgaard/vue-2-boilerplate/issues/52/labels{/name}",
        "comments_url": "https://api.github.com/repos/petervmeijgaard/vue-2-boilerplate/issues/52/comments",
        "events_url": "https://api.github.com/repos/petervmeijgaard/vue-2-boilerplate/issues/52/events",
        "html_url": "https://github.com/petervmeijgaard/vue-2-boilerplate/issues/52",
        "id": 274591186,
        "number": 52,
        "title": "Login not using defined API endpoint",
        "user": {
          "login": "aidanbigg",
          "id": 30320917,
          "avatar_url": "https://avatars3.githubusercontent.com/u/30320917?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/aidanbigg",
          "html_url": "https://github.com/aidanbigg",
          "followers_url": "https://api.github.com/users/aidanbigg/followers",
          "following_url": "https://api.github.com/users/aidanbigg/following{/other_user}",
          "gists_url": "https://api.github.com/users/aidanbigg/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/aidanbigg/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/aidanbigg/subscriptions",
          "organizations_url": "https://api.github.com/users/aidanbigg/orgs",
          "repos_url": "https://api.github.com/users/aidanbigg/repos",
          "events_url": "https://api.github.com/users/aidanbigg/events{/privacy}",
          "received_events_url": "https://api.github.com/users/aidanbigg/received_events",
          "type": "User",
          "site_admin": false
        },
        "labels": [

        ],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [

        ],
        "milestone": null,
        "comments": 0,
        "created_at": "2017-11-16T17:03:10Z",
        "updated_at": "2017-11-30T15:50:58Z",
        "closed_at": null,
        "author_association": "NONE",
        "body": "I've set my api endpoint the config however when I attempt to login ect it doesn't use the API"
      },
      "comment": {
        "url": "https://api.github.com/repos/petervmeijgaard/vue-2-boilerplate/issues/comments/348229482",
        "html_url": "https://github.com/petervmeijgaard/vue-2-boilerplate/issues/52#issuecomment-348229482",
        "issue_url": "https://api.github.com/repos/petervmeijgaard/vue-2-boilerplate/issues/52",
        "id": 348229482,
        "user": {
          "login": "baumannzone",
          "id": 5422102,
          "avatar_url": "https://avatars0.githubusercontent.com/u/5422102?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/baumannzone",
          "html_url": "https://github.com/baumannzone",
          "followers_url": "https://api.github.com/users/baumannzone/followers",
          "following_url": "https://api.github.com/users/baumannzone/following{/other_user}",
          "gists_url": "https://api.github.com/users/baumannzone/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/baumannzone/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/baumannzone/subscriptions",
          "organizations_url": "https://api.github.com/users/baumannzone/orgs",
          "repos_url": "https://api.github.com/users/baumannzone/repos",
          "events_url": "https://api.github.com/users/baumannzone/events{/privacy}",
          "received_events_url": "https://api.github.com/users/baumannzone/received_events",
          "type": "User",
          "site_admin": false
        },
        "created_at": "2017-11-30T15:50:58Z",
        "updated_at": "2017-11-30T15:50:58Z",
        "author_association": "NONE",
        "body": "Can you show the code? Can't help without it."
      }
    },
    "public": true,
    "created_at": "2017-11-30T15:50:58Z"
  },
  {
    "id": "6919772702",
    "type": "WatchEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 62996705,
      "name": "petervmeijgaard/jwt-example",
      "url": "https://api.github.com/repos/petervmeijgaard/jwt-example"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2017-11-29T16:23:06Z"
  },
  {
    "id": "6918194722",
    "type": "WatchEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 21125024,
      "name": "typicode/husky",
      "url": "https://api.github.com/repos/typicode/husky"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2017-11-29T11:15:11Z"
  },
  {
    "id": "6890726133",
    "type": "WatchEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 18049133,
      "name": "kenwheeler/slick",
      "url": "https://api.github.com/repos/kenwheeler/slick"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2017-11-22T14:55:16Z"
  },
  {
    "id": "6890669084",
    "type": "WatchEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 97393123,
      "name": "justinkames/vuejs-logger",
      "url": "https://api.github.com/repos/justinkames/vuejs-logger"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2017-11-22T14:45:05Z"
  },
  {
    "id": "6890608999",
    "type": "WatchEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 65889120,
      "name": "petervmeijgaard/vue-2-boilerplate",
      "url": "https://api.github.com/repos/petervmeijgaard/vue-2-boilerplate"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2017-11-22T14:34:02Z"
  },
  {
    "id": "6883197571",
    "type": "PushEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 107950181,
      "name": "baumannzone/playing-with-hugo",
      "url": "https://api.github.com/repos/baumannzone/playing-with-hugo"
    },
    "payload": {
      "push_id": 2139126014,
      "size": 2,
      "distinct_size": 2,
      "ref": "refs/heads/master",
      "head": "f2d6658d0e2da68f8347c8577ffe9becc05cf88a",
      "before": "8a939ef10b73bd2acb2b719191cfcf739abd2eb6",
      "commits": [
        {
          "sha": "1416053b2cf2bd31b4c6e3ad28ce4d5110504940",
          "author": {
            "email": "badges@fossa.io",
            "name": "fossabot"
          },
          "message": "Add license scan report and status",
          "distinct": true,
          "url": "https://api.github.com/repos/baumannzone/playing-with-hugo/commits/1416053b2cf2bd31b4c6e3ad28ce4d5110504940"
        },
        {
          "sha": "f2d6658d0e2da68f8347c8577ffe9becc05cf88a",
          "author": {
            "email": "jorge.baumann.aguilar@gmail.com",
            "name": "Jorge Baumann"
          },
          "message": "Merge pull request #3 from fossabot/master\n\nAdd license scan report and status",
          "distinct": true,
          "url": "https://api.github.com/repos/baumannzone/playing-with-hugo/commits/f2d6658d0e2da68f8347c8577ffe9becc05cf88a"
        }
      ]
    },
    "public": true,
    "created_at": "2017-11-21T08:30:20Z"
  },
  {
    "id": "6883197555",
    "type": "PullRequestEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 107950181,
      "name": "baumannzone/playing-with-hugo",
      "url": "https://api.github.com/repos/baumannzone/playing-with-hugo"
    },
    "payload": {
      "action": "closed",
      "number": 3,
      "pull_request": {
        "url": "https://api.github.com/repos/baumannzone/playing-with-hugo/pulls/3",
        "id": 153824980,
        "html_url": "https://github.com/baumannzone/playing-with-hugo/pull/3",
        "diff_url": "https://github.com/baumannzone/playing-with-hugo/pull/3.diff",
        "patch_url": "https://github.com/baumannzone/playing-with-hugo/pull/3.patch",
        "issue_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/issues/3",
        "number": 3,
        "state": "closed",
        "locked": false,
        "title": "Add license scan report and status",
        "user": {
          "login": "fossabot",
          "id": 29791463,
          "avatar_url": "https://avatars0.githubusercontent.com/u/29791463?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/fossabot",
          "html_url": "https://github.com/fossabot",
          "followers_url": "https://api.github.com/users/fossabot/followers",
          "following_url": "https://api.github.com/users/fossabot/following{/other_user}",
          "gists_url": "https://api.github.com/users/fossabot/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/fossabot/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/fossabot/subscriptions",
          "organizations_url": "https://api.github.com/users/fossabot/orgs",
          "repos_url": "https://api.github.com/users/fossabot/repos",
          "events_url": "https://api.github.com/users/fossabot/events{/privacy}",
          "received_events_url": "https://api.github.com/users/fossabot/received_events",
          "type": "User",
          "site_admin": false
        },
        "body": "Your FOSSA integration was successful! Attached in this PR is a badge and license report to track scan status in your README.\n\nBelow are docs for integrating FOSSA license checks into your CI:\n\n- [CircleCI](http://fossa.io/docs/integrating-tools/circleci/)\n- [TravisCI](http://fossa.io/docs/integrating-tools/travisci/)\n- [Jenkins](https://github.com/fossas/fossa-jenkins-plugin)\n- [Other](https://github.com/fossas/license-cli)",
        "created_at": "2017-11-21T08:27:00Z",
        "updated_at": "2017-11-21T08:30:19Z",
        "closed_at": "2017-11-21T08:30:19Z",
        "merged_at": "2017-11-21T08:30:19Z",
        "merge_commit_sha": "f2d6658d0e2da68f8347c8577ffe9becc05cf88a",
        "assignee": null,
        "assignees": [

        ],
        "requested_reviewers": [

        ],
        "milestone": null,
        "commits_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/pulls/3/commits",
        "review_comments_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/pulls/3/comments",
        "review_comment_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/pulls/comments{/number}",
        "comments_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/issues/3/comments",
        "statuses_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/statuses/1416053b2cf2bd31b4c6e3ad28ce4d5110504940",
        "head": {
          "label": "fossabot:master",
          "ref": "master",
          "sha": "1416053b2cf2bd31b4c6e3ad28ce4d5110504940",
          "user": {
            "login": "fossabot",
            "id": 29791463,
            "avatar_url": "https://avatars0.githubusercontent.com/u/29791463?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/fossabot",
            "html_url": "https://github.com/fossabot",
            "followers_url": "https://api.github.com/users/fossabot/followers",
            "following_url": "https://api.github.com/users/fossabot/following{/other_user}",
            "gists_url": "https://api.github.com/users/fossabot/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/fossabot/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/fossabot/subscriptions",
            "organizations_url": "https://api.github.com/users/fossabot/orgs",
            "repos_url": "https://api.github.com/users/fossabot/repos",
            "events_url": "https://api.github.com/users/fossabot/events{/privacy}",
            "received_events_url": "https://api.github.com/users/fossabot/received_events",
            "type": "User",
            "site_admin": false
          },
          "repo": {
            "id": 111520517,
            "name": "playing-with-hugo",
            "full_name": "fossabot/playing-with-hugo",
            "owner": {
              "login": "fossabot",
              "id": 29791463,
              "avatar_url": "https://avatars0.githubusercontent.com/u/29791463?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/fossabot",
              "html_url": "https://github.com/fossabot",
              "followers_url": "https://api.github.com/users/fossabot/followers",
              "following_url": "https://api.github.com/users/fossabot/following{/other_user}",
              "gists_url": "https://api.github.com/users/fossabot/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/fossabot/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/fossabot/subscriptions",
              "organizations_url": "https://api.github.com/users/fossabot/orgs",
              "repos_url": "https://api.github.com/users/fossabot/repos",
              "events_url": "https://api.github.com/users/fossabot/events{/privacy}",
              "received_events_url": "https://api.github.com/users/fossabot/received_events",
              "type": "User",
              "site_admin": false
            },
            "private": false,
            "html_url": "https://github.com/fossabot/playing-with-hugo",
            "description": "Playing with Hugo - Static site generator",
            "fork": true,
            "url": "https://api.github.com/repos/fossabot/playing-with-hugo",
            "forks_url": "https://api.github.com/repos/fossabot/playing-with-hugo/forks",
            "keys_url": "https://api.github.com/repos/fossabot/playing-with-hugo/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/fossabot/playing-with-hugo/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/fossabot/playing-with-hugo/teams",
            "hooks_url": "https://api.github.com/repos/fossabot/playing-with-hugo/hooks",
            "issue_events_url": "https://api.github.com/repos/fossabot/playing-with-hugo/issues/events{/number}",
            "events_url": "https://api.github.com/repos/fossabot/playing-with-hugo/events",
            "assignees_url": "https://api.github.com/repos/fossabot/playing-with-hugo/assignees{/user}",
            "branches_url": "https://api.github.com/repos/fossabot/playing-with-hugo/branches{/branch}",
            "tags_url": "https://api.github.com/repos/fossabot/playing-with-hugo/tags",
            "blobs_url": "https://api.github.com/repos/fossabot/playing-with-hugo/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/fossabot/playing-with-hugo/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/fossabot/playing-with-hugo/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/fossabot/playing-with-hugo/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/fossabot/playing-with-hugo/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/fossabot/playing-with-hugo/languages",
            "stargazers_url": "https://api.github.com/repos/fossabot/playing-with-hugo/stargazers",
            "contributors_url": "https://api.github.com/repos/fossabot/playing-with-hugo/contributors",
            "subscribers_url": "https://api.github.com/repos/fossabot/playing-with-hugo/subscribers",
            "subscription_url": "https://api.github.com/repos/fossabot/playing-with-hugo/subscription",
            "commits_url": "https://api.github.com/repos/fossabot/playing-with-hugo/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/fossabot/playing-with-hugo/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/fossabot/playing-with-hugo/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/fossabot/playing-with-hugo/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/fossabot/playing-with-hugo/contents/{+path}",
            "compare_url": "https://api.github.com/repos/fossabot/playing-with-hugo/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/fossabot/playing-with-hugo/merges",
            "archive_url": "https://api.github.com/repos/fossabot/playing-with-hugo/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/fossabot/playing-with-hugo/downloads",
            "issues_url": "https://api.github.com/repos/fossabot/playing-with-hugo/issues{/number}",
            "pulls_url": "https://api.github.com/repos/fossabot/playing-with-hugo/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/fossabot/playing-with-hugo/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/fossabot/playing-with-hugo/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/fossabot/playing-with-hugo/labels{/name}",
            "releases_url": "https://api.github.com/repos/fossabot/playing-with-hugo/releases{/id}",
            "deployments_url": "https://api.github.com/repos/fossabot/playing-with-hugo/deployments",
            "created_at": "2017-11-21T08:26:54Z",
            "updated_at": "2017-11-21T08:26:57Z",
            "pushed_at": "2017-11-21T08:27:00Z",
            "git_url": "git://github.com/fossabot/playing-with-hugo.git",
            "ssh_url": "git@github.com:fossabot/playing-with-hugo.git",
            "clone_url": "https://github.com/fossabot/playing-with-hugo.git",
            "svn_url": "https://github.com/fossabot/playing-with-hugo",
            "homepage": "https://baumannzone.github.io/playing-with-hugo/",
            "size": 16895,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "CSS",
            "has_issues": false,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "open_issues_count": 0,
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "master"
          }
        },
        "base": {
          "label": "baumannzone:master",
          "ref": "master",
          "sha": "8a939ef10b73bd2acb2b719191cfcf739abd2eb6",
          "user": {
            "login": "baumannzone",
            "id": 5422102,
            "avatar_url": "https://avatars0.githubusercontent.com/u/5422102?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/baumannzone",
            "html_url": "https://github.com/baumannzone",
            "followers_url": "https://api.github.com/users/baumannzone/followers",
            "following_url": "https://api.github.com/users/baumannzone/following{/other_user}",
            "gists_url": "https://api.github.com/users/baumannzone/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/baumannzone/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/baumannzone/subscriptions",
            "organizations_url": "https://api.github.com/users/baumannzone/orgs",
            "repos_url": "https://api.github.com/users/baumannzone/repos",
            "events_url": "https://api.github.com/users/baumannzone/events{/privacy}",
            "received_events_url": "https://api.github.com/users/baumannzone/received_events",
            "type": "User",
            "site_admin": false
          },
          "repo": {
            "id": 107950181,
            "name": "playing-with-hugo",
            "full_name": "baumannzone/playing-with-hugo",
            "owner": {
              "login": "baumannzone",
              "id": 5422102,
              "avatar_url": "https://avatars0.githubusercontent.com/u/5422102?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/baumannzone",
              "html_url": "https://github.com/baumannzone",
              "followers_url": "https://api.github.com/users/baumannzone/followers",
              "following_url": "https://api.github.com/users/baumannzone/following{/other_user}",
              "gists_url": "https://api.github.com/users/baumannzone/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/baumannzone/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/baumannzone/subscriptions",
              "organizations_url": "https://api.github.com/users/baumannzone/orgs",
              "repos_url": "https://api.github.com/users/baumannzone/repos",
              "events_url": "https://api.github.com/users/baumannzone/events{/privacy}",
              "received_events_url": "https://api.github.com/users/baumannzone/received_events",
              "type": "User",
              "site_admin": false
            },
            "private": false,
            "html_url": "https://github.com/baumannzone/playing-with-hugo",
            "description": "Playing with Hugo - Static site generator",
            "fork": false,
            "url": "https://api.github.com/repos/baumannzone/playing-with-hugo",
            "forks_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/forks",
            "keys_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/teams",
            "hooks_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/hooks",
            "issue_events_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/issues/events{/number}",
            "events_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/events",
            "assignees_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/assignees{/user}",
            "branches_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/branches{/branch}",
            "tags_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/tags",
            "blobs_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/languages",
            "stargazers_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/stargazers",
            "contributors_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/contributors",
            "subscribers_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/subscribers",
            "subscription_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/subscription",
            "commits_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/contents/{+path}",
            "compare_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/merges",
            "archive_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/downloads",
            "issues_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/issues{/number}",
            "pulls_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/labels{/name}",
            "releases_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/releases{/id}",
            "deployments_url": "https://api.github.com/repos/baumannzone/playing-with-hugo/deployments",
            "created_at": "2017-10-23T08:00:55Z",
            "updated_at": "2017-10-24T06:19:27Z",
            "pushed_at": "2017-11-21T08:30:19Z",
            "git_url": "git://github.com/baumannzone/playing-with-hugo.git",
            "ssh_url": "git@github.com:baumannzone/playing-with-hugo.git",
            "clone_url": "https://github.com/baumannzone/playing-with-hugo.git",
            "svn_url": "https://github.com/baumannzone/playing-with-hugo",
            "homepage": "https://baumannzone.github.io/playing-with-hugo/",
            "size": 16895,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "CSS",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": true,
            "forks_count": 1,
            "mirror_url": null,
            "archived": false,
            "open_issues_count": 0,
            "forks": 1,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "master"
          }
        },
        "_links": {
          "self": {
            "href": "https://api.github.com/repos/baumannzone/playing-with-hugo/pulls/3"
          },
          "html": {
            "href": "https://github.com/baumannzone/playing-with-hugo/pull/3"
          },
          "issue": {
            "href": "https://api.github.com/repos/baumannzone/playing-with-hugo/issues/3"
          },
          "comments": {
            "href": "https://api.github.com/repos/baumannzone/playing-with-hugo/issues/3/comments"
          },
          "review_comments": {
            "href": "https://api.github.com/repos/baumannzone/playing-with-hugo/pulls/3/comments"
          },
          "review_comment": {
            "href": "https://api.github.com/repos/baumannzone/playing-with-hugo/pulls/comments{/number}"
          },
          "commits": {
            "href": "https://api.github.com/repos/baumannzone/playing-with-hugo/pulls/3/commits"
          },
          "statuses": {
            "href": "https://api.github.com/repos/baumannzone/playing-with-hugo/statuses/1416053b2cf2bd31b4c6e3ad28ce4d5110504940"
          }
        },
        "author_association": "NONE",
        "merged": true,
        "mergeable": null,
        "rebaseable": null,
        "mergeable_state": "unknown",
        "merged_by": {
          "login": "baumannzone",
          "id": 5422102,
          "avatar_url": "https://avatars0.githubusercontent.com/u/5422102?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/baumannzone",
          "html_url": "https://github.com/baumannzone",
          "followers_url": "https://api.github.com/users/baumannzone/followers",
          "following_url": "https://api.github.com/users/baumannzone/following{/other_user}",
          "gists_url": "https://api.github.com/users/baumannzone/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/baumannzone/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/baumannzone/subscriptions",
          "organizations_url": "https://api.github.com/users/baumannzone/orgs",
          "repos_url": "https://api.github.com/users/baumannzone/repos",
          "events_url": "https://api.github.com/users/baumannzone/events{/privacy}",
          "received_events_url": "https://api.github.com/users/baumannzone/received_events",
          "type": "User",
          "site_admin": false
        },
        "comments": 1,
        "review_comments": 0,
        "maintainer_can_modify": false,
        "commits": 1,
        "additions": 5,
        "deletions": 0,
        "changed_files": 1
      }
    },
    "public": true,
    "created_at": "2017-11-21T08:30:20Z"
  },
  {
    "id": "6880740260",
    "type": "WatchEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 11549105,
      "name": "yyx990803/dotfiles",
      "url": "https://api.github.com/repos/yyx990803/dotfiles"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2017-11-20T19:42:43Z"
  },
  {
    "id": "6854970935",
    "type": "WatchEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 76374841,
      "name": "codeschool-projects/CodeBreakerProject",
      "url": "https://api.github.com/repos/codeschool-projects/CodeBreakerProject"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2017-11-14T20:46:11Z",
    "org": {
      "id": 24419810,
      "login": "codeschool-projects",
      "gravatar_id": "",
      "url": "https://api.github.com/orgs/codeschool-projects",
      "avatar_url": "https://avatars.githubusercontent.com/u/24419810?"
    }
  },
  {
    "id": "6853769327",
    "type": "WatchEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 67274736,
      "name": "ElemeFE/element",
      "url": "https://api.github.com/repos/ElemeFE/element"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2017-11-14T16:43:32Z",
    "org": {
      "id": 12810740,
      "login": "ElemeFE",
      "gravatar_id": "",
      "url": "https://api.github.com/orgs/ElemeFE",
      "avatar_url": "https://avatars.githubusercontent.com/u/12810740?"
    }
  },
  {
    "id": "6828079884",
    "type": "WatchEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 13125982,
      "name": "auth0/auth0.js",
      "url": "https://api.github.com/repos/auth0/auth0.js"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2017-11-08T19:10:25Z",
    "org": {
      "id": 2824157,
      "login": "auth0",
      "gravatar_id": "",
      "url": "https://api.github.com/orgs/auth0",
      "avatar_url": "https://avatars.githubusercontent.com/u/2824157?"
    }
  },
  {
    "id": "6815405821",
    "type": "WatchEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 70342215,
      "name": "bootstrap-vue/bootstrap-vue",
      "url": "https://api.github.com/repos/bootstrap-vue/bootstrap-vue"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2017-11-06T16:11:58Z",
    "org": {
      "id": 22965283,
      "login": "bootstrap-vue",
      "gravatar_id": "",
      "url": "https://api.github.com/orgs/bootstrap-vue",
      "avatar_url": "https://avatars.githubusercontent.com/u/22965283?"
    }
  },
  {
    "id": "6802409316",
    "type": "IssuesEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 86664696,
      "name": "saitolabs/vuejs-oidc-client",
      "url": "https://api.github.com/repos/saitolabs/vuejs-oidc-client"
    },
    "payload": {
      "action": "opened",
      "issue": {
        "url": "https://api.github.com/repos/saitolabs/vuejs-oidc-client/issues/1",
        "repository_url": "https://api.github.com/repos/saitolabs/vuejs-oidc-client",
        "labels_url": "https://api.github.com/repos/saitolabs/vuejs-oidc-client/issues/1/labels{/name}",
        "comments_url": "https://api.github.com/repos/saitolabs/vuejs-oidc-client/issues/1/comments",
        "events_url": "https://api.github.com/repos/saitolabs/vuejs-oidc-client/issues/1/events",
        "html_url": "https://github.com/saitolabs/vuejs-oidc-client/issues/1",
        "id": 270790150,
        "number": 1,
        "title": "Example of use",
        "user": {
          "login": "baumannzone",
          "id": 5422102,
          "avatar_url": "https://avatars0.githubusercontent.com/u/5422102?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/baumannzone",
          "html_url": "https://github.com/baumannzone",
          "followers_url": "https://api.github.com/users/baumannzone/followers",
          "following_url": "https://api.github.com/users/baumannzone/following{/other_user}",
          "gists_url": "https://api.github.com/users/baumannzone/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/baumannzone/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/baumannzone/subscriptions",
          "organizations_url": "https://api.github.com/users/baumannzone/orgs",
          "repos_url": "https://api.github.com/users/baumannzone/repos",
          "events_url": "https://api.github.com/users/baumannzone/events{/privacy}",
          "received_events_url": "https://api.github.com/users/baumannzone/received_events",
          "type": "User",
          "site_admin": false
        },
        "labels": [

        ],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [

        ],
        "milestone": null,
        "comments": 0,
        "created_at": "2017-11-02T20:06:19Z",
        "updated_at": "2017-11-02T20:06:19Z",
        "closed_at": null,
        "author_association": "NONE",
        "body": "Hello, can you explain how to install it and show how to use it?  \r\nThanks  "
      }
    },
    "public": true,
    "created_at": "2017-11-02T20:06:19Z"
  },
  {
    "id": "6800373830",
    "type": "PullRequestEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 19619491,
      "name": "jasonkuhrt/oauth2-implicit",
      "url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit"
    },
    "payload": {
      "action": "opened",
      "number": 25,
      "pull_request": {
        "url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/pulls/25",
        "id": 150295130,
        "html_url": "https://github.com/jasonkuhrt/oauth2-implicit/pull/25",
        "diff_url": "https://github.com/jasonkuhrt/oauth2-implicit/pull/25.diff",
        "patch_url": "https://github.com/jasonkuhrt/oauth2-implicit/pull/25.patch",
        "issue_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/issues/25",
        "number": 25,
        "state": "open",
        "locked": false,
        "title": "Update usage example",
        "user": {
          "login": "baumannzone",
          "id": 5422102,
          "avatar_url": "https://avatars0.githubusercontent.com/u/5422102?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/baumannzone",
          "html_url": "https://github.com/baumannzone",
          "followers_url": "https://api.github.com/users/baumannzone/followers",
          "following_url": "https://api.github.com/users/baumannzone/following{/other_user}",
          "gists_url": "https://api.github.com/users/baumannzone/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/baumannzone/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/baumannzone/subscriptions",
          "organizations_url": "https://api.github.com/users/baumannzone/orgs",
          "repos_url": "https://api.github.com/users/baumannzone/repos",
          "events_url": "https://api.github.com/users/baumannzone/events{/privacy}",
          "received_events_url": "https://api.github.com/users/baumannzone/received_events",
          "type": "User",
          "site_admin": false
        },
        "body": "",
        "created_at": "2017-11-02T13:47:56Z",
        "updated_at": "2017-11-02T13:47:56Z",
        "closed_at": null,
        "merged_at": null,
        "merge_commit_sha": null,
        "assignee": null,
        "assignees": [

        ],
        "requested_reviewers": [

        ],
        "milestone": null,
        "commits_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/pulls/25/commits",
        "review_comments_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/pulls/25/comments",
        "review_comment_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/pulls/comments{/number}",
        "comments_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/issues/25/comments",
        "statuses_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/statuses/9a84158f122ecdb2c01e02566e8bde23b3a5dad0",
        "head": {
          "label": "baumannzone:patch-1",
          "ref": "patch-1",
          "sha": "9a84158f122ecdb2c01e02566e8bde23b3a5dad0",
          "user": {
            "login": "baumannzone",
            "id": 5422102,
            "avatar_url": "https://avatars0.githubusercontent.com/u/5422102?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/baumannzone",
            "html_url": "https://github.com/baumannzone",
            "followers_url": "https://api.github.com/users/baumannzone/followers",
            "following_url": "https://api.github.com/users/baumannzone/following{/other_user}",
            "gists_url": "https://api.github.com/users/baumannzone/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/baumannzone/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/baumannzone/subscriptions",
            "organizations_url": "https://api.github.com/users/baumannzone/orgs",
            "repos_url": "https://api.github.com/users/baumannzone/repos",
            "events_url": "https://api.github.com/users/baumannzone/events{/privacy}",
            "received_events_url": "https://api.github.com/users/baumannzone/received_events",
            "type": "User",
            "site_admin": false
          },
          "repo": {
            "id": 109268300,
            "name": "oauth2-implicit",
            "full_name": "baumannzone/oauth2-implicit",
            "owner": {
              "login": "baumannzone",
              "id": 5422102,
              "avatar_url": "https://avatars0.githubusercontent.com/u/5422102?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/baumannzone",
              "html_url": "https://github.com/baumannzone",
              "followers_url": "https://api.github.com/users/baumannzone/followers",
              "following_url": "https://api.github.com/users/baumannzone/following{/other_user}",
              "gists_url": "https://api.github.com/users/baumannzone/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/baumannzone/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/baumannzone/subscriptions",
              "organizations_url": "https://api.github.com/users/baumannzone/orgs",
              "repos_url": "https://api.github.com/users/baumannzone/repos",
              "events_url": "https://api.github.com/users/baumannzone/events{/privacy}",
              "received_events_url": "https://api.github.com/users/baumannzone/received_events",
              "type": "User",
              "site_admin": false
            },
            "private": false,
            "html_url": "https://github.com/baumannzone/oauth2-implicit",
            "description": "A fun, correct, to-spec client library for using the OAuth2 Implicit Grant flow",
            "fork": true,
            "url": "https://api.github.com/repos/baumannzone/oauth2-implicit",
            "forks_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/forks",
            "keys_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/teams",
            "hooks_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/hooks",
            "issue_events_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/issues/events{/number}",
            "events_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/events",
            "assignees_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/assignees{/user}",
            "branches_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/branches{/branch}",
            "tags_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/tags",
            "blobs_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/languages",
            "stargazers_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/stargazers",
            "contributors_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/contributors",
            "subscribers_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/subscribers",
            "subscription_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/subscription",
            "commits_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/contents/{+path}",
            "compare_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/merges",
            "archive_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/downloads",
            "issues_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/issues{/number}",
            "pulls_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/labels{/name}",
            "releases_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/releases{/id}",
            "deployments_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/deployments",
            "created_at": "2017-11-02T13:27:26Z",
            "updated_at": "2017-11-02T13:27:28Z",
            "pushed_at": "2017-11-02T13:27:54Z",
            "git_url": "git://github.com/baumannzone/oauth2-implicit.git",
            "ssh_url": "git@github.com:baumannzone/oauth2-implicit.git",
            "clone_url": "https://github.com/baumannzone/oauth2-implicit.git",
            "svn_url": "https://github.com/baumannzone/oauth2-implicit",
            "homepage": null,
            "size": 68,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "JavaScript",
            "has_issues": false,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "open_issues_count": 0,
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "master"
          }
        },
        "base": {
          "label": "jasonkuhrt:master",
          "ref": "master",
          "sha": "b568c0a068b41dc55e1ff0d727dc199c6d30cdb6",
          "user": {
            "login": "jasonkuhrt",
            "id": 284476,
            "avatar_url": "https://avatars3.githubusercontent.com/u/284476?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/jasonkuhrt",
            "html_url": "https://github.com/jasonkuhrt",
            "followers_url": "https://api.github.com/users/jasonkuhrt/followers",
            "following_url": "https://api.github.com/users/jasonkuhrt/following{/other_user}",
            "gists_url": "https://api.github.com/users/jasonkuhrt/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/jasonkuhrt/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/jasonkuhrt/subscriptions",
            "organizations_url": "https://api.github.com/users/jasonkuhrt/orgs",
            "repos_url": "https://api.github.com/users/jasonkuhrt/repos",
            "events_url": "https://api.github.com/users/jasonkuhrt/events{/privacy}",
            "received_events_url": "https://api.github.com/users/jasonkuhrt/received_events",
            "type": "User",
            "site_admin": false
          },
          "repo": {
            "id": 19619491,
            "name": "oauth2-implicit",
            "full_name": "jasonkuhrt/oauth2-implicit",
            "owner": {
              "login": "jasonkuhrt",
              "id": 284476,
              "avatar_url": "https://avatars3.githubusercontent.com/u/284476?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/jasonkuhrt",
              "html_url": "https://github.com/jasonkuhrt",
              "followers_url": "https://api.github.com/users/jasonkuhrt/followers",
              "following_url": "https://api.github.com/users/jasonkuhrt/following{/other_user}",
              "gists_url": "https://api.github.com/users/jasonkuhrt/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/jasonkuhrt/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/jasonkuhrt/subscriptions",
              "organizations_url": "https://api.github.com/users/jasonkuhrt/orgs",
              "repos_url": "https://api.github.com/users/jasonkuhrt/repos",
              "events_url": "https://api.github.com/users/jasonkuhrt/events{/privacy}",
              "received_events_url": "https://api.github.com/users/jasonkuhrt/received_events",
              "type": "User",
              "site_admin": false
            },
            "private": false,
            "html_url": "https://github.com/jasonkuhrt/oauth2-implicit",
            "description": "A fun, correct, to-spec client library for using the OAuth2 Implicit Grant flow",
            "fork": false,
            "url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit",
            "forks_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/forks",
            "keys_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/teams",
            "hooks_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/hooks",
            "issue_events_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/issues/events{/number}",
            "events_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/events",
            "assignees_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/assignees{/user}",
            "branches_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/branches{/branch}",
            "tags_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/tags",
            "blobs_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/languages",
            "stargazers_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/stargazers",
            "contributors_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/contributors",
            "subscribers_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/subscribers",
            "subscription_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/subscription",
            "commits_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/contents/{+path}",
            "compare_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/merges",
            "archive_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/downloads",
            "issues_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/issues{/number}",
            "pulls_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/labels{/name}",
            "releases_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/releases{/id}",
            "deployments_url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/deployments",
            "created_at": "2014-05-09T17:29:55Z",
            "updated_at": "2017-01-02T16:28:06Z",
            "pushed_at": "2016-03-07T18:31:14Z",
            "git_url": "git://github.com/jasonkuhrt/oauth2-implicit.git",
            "ssh_url": "git@github.com:jasonkuhrt/oauth2-implicit.git",
            "clone_url": "https://github.com/jasonkuhrt/oauth2-implicit.git",
            "svn_url": "https://github.com/jasonkuhrt/oauth2-implicit",
            "homepage": null,
            "size": 68,
            "stargazers_count": 3,
            "watchers_count": 3,
            "language": "JavaScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 1,
            "mirror_url": null,
            "archived": false,
            "open_issues_count": 1,
            "forks": 1,
            "open_issues": 1,
            "watchers": 3,
            "default_branch": "master"
          }
        },
        "_links": {
          "self": {
            "href": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/pulls/25"
          },
          "html": {
            "href": "https://github.com/jasonkuhrt/oauth2-implicit/pull/25"
          },
          "issue": {
            "href": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/issues/25"
          },
          "comments": {
            "href": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/issues/25/comments"
          },
          "review_comments": {
            "href": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/pulls/25/comments"
          },
          "review_comment": {
            "href": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/pulls/comments{/number}"
          },
          "commits": {
            "href": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/pulls/25/commits"
          },
          "statuses": {
            "href": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit/statuses/9a84158f122ecdb2c01e02566e8bde23b3a5dad0"
          }
        },
        "author_association": "NONE",
        "merged": false,
        "mergeable": null,
        "rebaseable": null,
        "mergeable_state": "unknown",
        "merged_by": null,
        "comments": 0,
        "review_comments": 0,
        "maintainer_can_modify": true,
        "commits": 1,
        "additions": 2,
        "deletions": 2,
        "changed_files": 1
      }
    },
    "public": true,
    "created_at": "2017-11-02T13:47:56Z"
  },
  {
    "id": "6800268649",
    "type": "PushEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 109268300,
      "name": "baumannzone/oauth2-implicit",
      "url": "https://api.github.com/repos/baumannzone/oauth2-implicit"
    },
    "payload": {
      "push_id": 2095257770,
      "size": 1,
      "distinct_size": 1,
      "ref": "refs/heads/patch-1",
      "head": "9a84158f122ecdb2c01e02566e8bde23b3a5dad0",
      "before": "b568c0a068b41dc55e1ff0d727dc199c6d30cdb6",
      "commits": [
        {
          "sha": "9a84158f122ecdb2c01e02566e8bde23b3a5dad0",
          "author": {
            "email": "jorge.baumann.aguilar@gmail.com",
            "name": "Jorge Baumann"
          },
          "message": "Update usage example",
          "distinct": true,
          "url": "https://api.github.com/repos/baumannzone/oauth2-implicit/commits/9a84158f122ecdb2c01e02566e8bde23b3a5dad0"
        }
      ]
    },
    "public": true,
    "created_at": "2017-11-02T13:27:54Z"
  },
  {
    "id": "6800266186",
    "type": "ForkEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 19619491,
      "name": "jasonkuhrt/oauth2-implicit",
      "url": "https://api.github.com/repos/jasonkuhrt/oauth2-implicit"
    },
    "payload": {
      "forkee": {
        "id": 109268300,
        "name": "oauth2-implicit",
        "full_name": "baumannzone/oauth2-implicit",
        "owner": {
          "login": "baumannzone",
          "id": 5422102,
          "avatar_url": "https://avatars0.githubusercontent.com/u/5422102?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/baumannzone",
          "html_url": "https://github.com/baumannzone",
          "followers_url": "https://api.github.com/users/baumannzone/followers",
          "following_url": "https://api.github.com/users/baumannzone/following{/other_user}",
          "gists_url": "https://api.github.com/users/baumannzone/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/baumannzone/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/baumannzone/subscriptions",
          "organizations_url": "https://api.github.com/users/baumannzone/orgs",
          "repos_url": "https://api.github.com/users/baumannzone/repos",
          "events_url": "https://api.github.com/users/baumannzone/events{/privacy}",
          "received_events_url": "https://api.github.com/users/baumannzone/received_events",
          "type": "User",
          "site_admin": false
        },
        "private": false,
        "html_url": "https://github.com/baumannzone/oauth2-implicit",
        "description": "A fun, correct, to-spec client library for using the OAuth2 Implicit Grant flow",
        "fork": true,
        "url": "https://api.github.com/repos/baumannzone/oauth2-implicit",
        "forks_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/forks",
        "keys_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/teams",
        "hooks_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/hooks",
        "issue_events_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/issues/events{/number}",
        "events_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/events",
        "assignees_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/assignees{/user}",
        "branches_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/branches{/branch}",
        "tags_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/tags",
        "blobs_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/languages",
        "stargazers_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/stargazers",
        "contributors_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/contributors",
        "subscribers_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/subscribers",
        "subscription_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/subscription",
        "commits_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/contents/{+path}",
        "compare_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/merges",
        "archive_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/downloads",
        "issues_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/issues{/number}",
        "pulls_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/labels{/name}",
        "releases_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/releases{/id}",
        "deployments_url": "https://api.github.com/repos/baumannzone/oauth2-implicit/deployments",
        "created_at": "2017-11-02T13:27:26Z",
        "updated_at": "2017-01-02T16:28:06Z",
        "pushed_at": "2016-03-07T18:31:14Z",
        "git_url": "git://github.com/baumannzone/oauth2-implicit.git",
        "ssh_url": "git@github.com:baumannzone/oauth2-implicit.git",
        "clone_url": "https://github.com/baumannzone/oauth2-implicit.git",
        "svn_url": "https://github.com/baumannzone/oauth2-implicit",
        "homepage": null,
        "size": 68,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": null,
        "has_issues": false,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "open_issues_count": 0,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master",
        "public": true
      }
    },
    "public": true,
    "created_at": "2017-11-02T13:27:27Z"
  },
  {
    "id": "6798999276",
    "type": "IssuesEvent",
    "actor": {
      "id": 5422102,
      "login": "baumannzone",
      "display_login": "baumannzone",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baumannzone",
      "avatar_url": "https://avatars.githubusercontent.com/u/5422102?"
    },
    "repo": {
      "id": 82330725,
      "name": "baumannzone/dronAPPi",
      "url": "https://api.github.com/repos/baumannzone/dronAPPi"
    },
    "payload": {
      "action": "closed",
      "issue": {
        "url": "https://api.github.com/repos/baumannzone/dronAPPi/issues/2",
        "repository_url": "https://api.github.com/repos/baumannzone/dronAPPi",
        "labels_url": "https://api.github.com/repos/baumannzone/dronAPPi/issues/2/labels{/name}",
        "comments_url": "https://api.github.com/repos/baumannzone/dronAPPi/issues/2/comments",
        "events_url": "https://api.github.com/repos/baumannzone/dronAPPi/issues/2/events",
        "html_url": "https://github.com/baumannzone/dronAPPi/issues/2",
        "id": 270572665,
        "number": 2,
        "title": "issue demo",
        "user": {
          "login": "baumannzone",
          "id": 5422102,
          "avatar_url": "https://avatars0.githubusercontent.com/u/5422102?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/baumannzone",
          "html_url": "https://github.com/baumannzone",
          "followers_url": "https://api.github.com/users/baumannzone/followers",
          "following_url": "https://api.github.com/users/baumannzone/following{/other_user}",
          "gists_url": "https://api.github.com/users/baumannzone/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/baumannzone/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/baumannzone/subscriptions",
          "organizations_url": "https://api.github.com/users/baumannzone/orgs",
          "repos_url": "https://api.github.com/users/baumannzone/repos",
          "events_url": "https://api.github.com/users/baumannzone/events{/privacy}",
          "received_events_url": "https://api.github.com/users/baumannzone/received_events",
          "type": "User",
          "site_admin": false
        },
        "labels": [

        ],
        "state": "closed",
        "locked": false,
        "assignee": {
          "login": "baumannzone",
          "id": 5422102,
          "avatar_url": "https://avatars0.githubusercontent.com/u/5422102?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/baumannzone",
          "html_url": "https://github.com/baumannzone",
          "followers_url": "https://api.github.com/users/baumannzone/followers",
          "following_url": "https://api.github.com/users/baumannzone/following{/other_user}",
          "gists_url": "https://api.github.com/users/baumannzone/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/baumannzone/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/baumannzone/subscriptions",
          "organizations_url": "https://api.github.com/users/baumannzone/orgs",
          "repos_url": "https://api.github.com/users/baumannzone/repos",
          "events_url": "https://api.github.com/users/baumannzone/events{/privacy}",
          "received_events_url": "https://api.github.com/users/baumannzone/received_events",
          "type": "User",
          "site_admin": false
        },
        "assignees": [
          {
            "login": "baumannzone",
            "id": 5422102,
            "avatar_url": "https://avatars0.githubusercontent.com/u/5422102?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/baumannzone",
            "html_url": "https://github.com/baumannzone",
            "followers_url": "https://api.github.com/users/baumannzone/followers",
            "following_url": "https://api.github.com/users/baumannzone/following{/other_user}",
            "gists_url": "https://api.github.com/users/baumannzone/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/baumannzone/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/baumannzone/subscriptions",
            "organizations_url": "https://api.github.com/users/baumannzone/orgs",
            "repos_url": "https://api.github.com/users/baumannzone/repos",
            "events_url": "https://api.github.com/users/baumannzone/events{/privacy}",
            "received_events_url": "https://api.github.com/users/baumannzone/received_events",
            "type": "User",
            "site_admin": false
          }
        ],
        "milestone": {
          "url": "https://api.github.com/repos/baumannzone/dronAPPi/milestones/1",
          "html_url": "https://github.com/baumannzone/dronAPPi/milestone/1",
          "labels_url": "https://api.github.com/repos/baumannzone/dronAPPi/milestones/1/labels",
          "id": 2882905,
          "number": 1,
          "title": "viernes3",
          "description": "",
          "creator": {
            "login": "baumannzone",
            "id": 5422102,
            "avatar_url": "https://avatars0.githubusercontent.com/u/5422102?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/baumannzone",
            "html_url": "https://github.com/baumannzone",
            "followers_url": "https://api.github.com/users/baumannzone/followers",
            "following_url": "https://api.github.com/users/baumannzone/following{/other_user}",
            "gists_url": "https://api.github.com/users/baumannzone/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/baumannzone/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/baumannzone/subscriptions",
            "organizations_url": "https://api.github.com/users/baumannzone/orgs",
            "repos_url": "https://api.github.com/users/baumannzone/repos",
            "events_url": "https://api.github.com/users/baumannzone/events{/privacy}",
            "received_events_url": "https://api.github.com/users/baumannzone/received_events",
            "type": "User",
            "site_admin": false
          },
          "open_issues": 0,
          "closed_issues": 1,
          "state": "open",
          "created_at": "2017-11-02T08:40:16Z",
          "updated_at": "2017-11-02T08:43:52Z",
          "due_on": "2017-11-03T07:00:00Z",
          "closed_at": null
        },
        "comments": 0,
        "created_at": "2017-11-02T08:40:51Z",
        "updated_at": "2017-11-02T08:43:52Z",
        "closed_at": "2017-11-02T08:43:52Z",
        "author_association": "OWNER",
        "body": ""
      }
    },
    "public": true,
    "created_at": "2017-11-02T08:43:52Z"
  }
]
```