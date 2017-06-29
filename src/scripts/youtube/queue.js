/**
 * YouTube「再生中のリスト」
 */
class Queue {
    /**
     * 再生中のリストの初期化（singleton）
     */
    constructor() {
        // 再生中の動画のインデックス
        this.index = 0;
        this.queue = [];
    }

    /**
     * 次に再生する
     * @param {string} videoId - 動画のID
     */
    add(videoId) {
        this.queue.splice(this.index, 0, videoId);
    }

    /**
     * 再生中のリストから動画を削除
     * @param {number} index - 削除する動画のインデックス
     */
    remove(index) {
        this.queue.splice(index, 1);
    }
}

module.exports = new Queue();
