import { IgApiClient } from 'instagram-private-api';
import 'dotenv/config';
const createInstagramClient = async () => {
    const client = new IgApiClient();
    // You must generate device id's before login.
    // Id's generated based on seed
    // So if you pass the same value as first argument - the same id's are generated every time
    client.state.generateDevice(process.env.USERNAME);
    // Optionally you can setup proxy url
    // ig.state.proxyUrl = process.env.IG_PROXY;
    // BRADEN preloginflow in this block gives 401 error
    // Execute all requests prior to authorization in the real Android application
    // Not required but recommended
    // await ig.simulate.preLoginFlow();
    const loggedInUser = await client.account.login(process.env.USERNAME, process.env.PASSWORD);
    // TODO use this to get user details if we want. Keep this line here or somewhere to change client state to logged in
    // BRADEN postloginflow in this block gives 404 error
    // // The same as preLoginFlow()
    // // Optionally wrap it to process.nextTick so we dont need to wait ending of this bunch of requests
    // process.nextTick(async () => await ig.simulate.postLoginFlow());
    return client;
};
export default createInstagramClient;
