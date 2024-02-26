import { IgApiClient, UserFeedResponseItemsItem } from 'instagram-private-api';

const getUserMostRecentPost = async (client: IgApiClient, targetUsername: string) => {
  const pk = await client.user.getIdByUsername(targetUsername);
  const feed = client.feed.user(pk);

  try {
    const items: UserFeedResponseItemsItem[] = await feed.items();
    return items[0];
  } catch (err) {
    console.log(`Error getting user ${targetUsername}'s posts: ${err}`);
  }
};

export default getUserMostRecentPost;
