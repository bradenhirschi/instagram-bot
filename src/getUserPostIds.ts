import { IgApiClient, UserFeedResponseItemsItem } from 'instagram-private-api';

const getUserPostIds = async (client: IgApiClient, targetUsername: string) => {
  const pk = await client.user.getIdByUsername(targetUsername);
  const feed = client.feed.user(pk);

  let items: UserFeedResponseItemsItem[] = [];
  let page = 1;
  do {
    try {
      console.log(`Fetching page ${page++}...`);
      const newItems = await feed.items();
      items.push(...newItems);
    } catch (err) {
      console.log(`Error getting user ${targetUsername}'s posts`);
    }
  } while (feed.isMoreAvailable());

  return items;
};

export default getUserPostIds;
