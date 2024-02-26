import { ACCOUNTS } from './accounts.js';
import createPost from './createPost.js';
import getImageUrlsFromPostId from './getImageUrlsFromPostId.js';
import getUserMostRecentPost from './getUserMostRecentPost.js';
import createInstagramClient from './utils/createInstagramClient.js';

const main = async () => {
  const client = await createInstagramClient();

  for (let account of ACCOUNTS.FASHION) {
    const post = await getUserMostRecentPost(client, account);

    if (post) {
      // console.log(post.media_type); // Media type 8 is a gallery which will have multiple posts

      const imageUrl = getImageUrlsFromPostId(post.code);

      createPost(client, imageUrl, `Post credit: ${account}`);
    }
  }
};

main();
