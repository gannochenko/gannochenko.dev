import { Post } from './post';

export const export2DevTo = async (post: Post) => {
    return `
---
title: "${await post.getTitle()}"
published: false
description: ${await post.getDescription()}
tags: ${await post.getKeywords()}
cover_image: https://gannochenko.dev/static/bf6d3abc8db62617881c7743fa0a6285/11042/cover.jpg
canonical_url: https://gannochenko.dev${await post.getPath()}
---
${await post.getCleanContent()}

---

Cover image by ot0rip 604 at https://www.flickr.com/photos/143466180@N07/
`;
};
