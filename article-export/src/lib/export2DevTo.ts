import { Post } from './post';

export const export2DevTo = async (post: Post) => {
    return `
---
title: "${await post.getTitle()}"
published: false
description: ${await post.getDescription()}
tags: ${await post.getKeywords()}
cover_image: https://gannochenko.dev${await post.getCoverImage()}
canonical_url: https://gannochenko.dev${await post.getPath()}
---
${await post.getCleanContent()}
---

Cover image by ${await post.getCoverImageAuthor()} at [${await post.getCoverImageSourceText()}](${await post.getCoverImageSourceUrl()})
`;
};
