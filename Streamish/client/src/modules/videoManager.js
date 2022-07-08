
// module contains functions for getting all videos and adding a new video
//benefit of adding the proxy attribute to package.json
const baseUrl = '/api/video';

export const getAllVideos = () => {
    return fetch(baseUrl + '/getwithcomments')
        .then((res) => res.json())
};

export const addVideo = (video) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(video),
    });
};

export const searchAllVideos = (criterion, sortDescending) => {
    return fetch(baseUrl + '/search?q-' + criterion + '&sortDesc-' + sortDescending)
        .then((res) => res.json())
}