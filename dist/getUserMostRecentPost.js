const getUserMostRecentPost = async (client, targetUsername) => {
    const pk = await client.user.getIdByUsername(targetUsername);
    const feed = client.feed.user(pk);
    try {
        const items = await feed.items();
        return items[0];
    }
    catch (err) {
        console.log(`Error getting user ${targetUsername}'s posts: ${err}`);
    }
};
export default getUserMostRecentPost;
