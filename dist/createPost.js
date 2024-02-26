import requestPromise from 'request-promise';
const { get } = requestPromise;
const createPost = async (client, postUrl, caption) => {
    const imageBuffer = await get({
        url: postUrl,
        encoding: null, // this is required, only this way a Buffer is returned
    });
    const publishResult = await client.publish.photo({
        file: imageBuffer, // image buffer, you also can specify image from your disk using fs
        caption: caption
    });
    console.log('Post publish status: ', publishResult.status); // publishResult.status should be "ok
};
export default createPost;
