const YouTube = require('youtube-node');
const youTube = new YouTube();

youTube.setKey('AIzaSyBfl2CLnKQ-vixTQCpto5r2OMVpm3ONUJw');

exports.getVideoDurations = (videoIds) => {
    return new Promise((resolve, reject) => {
        youTube.getById(videoIds.join(','), (err, results) => {
            const data = [];
            console.log(results)
            results.items.forEach((result) => {
                data.push({
                    duration: result.contentDetails.duration,
                    viewCount: result.statistics.viewCount,
                });
            });
            resolve(data);
        });
    });
};
