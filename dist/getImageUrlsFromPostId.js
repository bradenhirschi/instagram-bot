const getImageUrlsFromPostIds = (postId) => {
    const url = `https://instagram.com/p/${postId}/media?size=l`;
    return url;
};
export default getImageUrlsFromPostIds;
