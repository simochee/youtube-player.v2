// 動画を検索
exports.search = require('./search');

const videos = require('./videos');
// 動画の長さを取得
exports.getVideoDurations = videos.getVideoDurations;

// プレイヤー
exports.player = require('./player');