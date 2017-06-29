const YouTube = require('youtube-node');
const youTube = new YouTube();

youTube.setKey('AIzaSyBfl2CLnKQ-vixTQCpto5r2OMVpm3ONUJw');
youTube.addParam('videoEmbeddable', 'true');

module.exports = (opts) => {
    return new Promise((resolve, reject) => {
        if(opts.term) {
            if(opts.pageToken) {
                youTube.addParam('pageToken', opts.pageToken);
            }
            // パラメータを指定
            youTube.addParam('type', 'video');
            youTube.search(opts.term, 20, (err, result) => {
                if(err) {
                    reject({
                        code: 'API_ERROR',
                        error: err,
                    });
                } else {
                    resolve(result);
                }
                youTube.clearParts();
            });
        } else {
            reject({
                code: 'NO_SEARCH_TERM',
            });
        }
    });
};
