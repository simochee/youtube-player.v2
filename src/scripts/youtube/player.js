const player = require('youtube-player');

/**
 * YouTubeプレイヤー
 */
export default class {
    /**
     * プレイヤーの作成
     * @param {string} element - プレイヤーを挿入する要素のID名
     * @param {string} videoId - プレイヤーに表示する動画のID
     * @param {object} opts - プレイヤーのオプション
     */
    constructor(element, videoId, opts = {}) {
        const options = {
            videoId,
            playerVars: {},
        };
        // 自動再生
        options.playerVars.autoplay = opts.autoplay || 1;
        // デフォルトのUIを非表示にする
        options.playerVars.controls = opts.controls || 0;
        // 動画アノテーションを表示しない
        options.playerVars.iv_load_polify = opts.iv_load_polify || 3;
        // Youtubeロゴを表示しない
        options.playerVars.modestbranding = opts.modestbranding || 1;
        // 動画情報を表示しない
        options.playerVars.showinfo = opts.showinfo || 0;
        // 関連動画を表示しない
        options.playerVars.rel = opts.rel || 0;

        // Video 0bserverに使う変数
        this.buffered = 0;
        this.currentTime = 0;
        this.isActive = true;

        // プレイヤーを生成
        this.player = player(element, options);

        this.player.addEventListener('onError', (e) => {
            console.log(e);
        });

        console.log(this.player, element, videoId);
    }

    /**
     * 動画の長さを取得
     * @return {number} - 動画の時間（sec）
     */
    getDuration() {
        return new Promise((resolve, reject) => {
            this.player.getDuration()
                .then((time) => {
                    resolve(time);
                });
        });
    }

    /**
     * 動画の監視
     */
    startVideoObserve() {
        // 動画の読み込み状況を取得
        this.player.getVideoLoadedFraction()
            .then((seek) => {
                if(this.buffered !== seek) {
                    this.buffered = seek;
                    observer.trigger('videoBuffer:update', this.buffered);
                }
            });
        // 動画の再生位置（sec）を取得
        this.player.getCurrentTime()
            .then((time) => {
                if(this.currentTime !== time) {
                    this.currentTime = time;
                    observer.trigger('videoCurrentTime:update', this.currentTime);
                }
            });
        // プレイヤーがアクティブであればもう一度実行
        if(this.isActive) {
            requestAnimationFrame(this.startVideoObserver);
        }
    }

    /**
     * 動画のサイズを変更
     * @param {number} width - 最大の横幅
     * @param {number} height - 最大の高さ
     */
    setSize(width, height) {
        this.player.setSize(width, height);
    }

    /**
     * 再生する動画をセットします
     * @param {string} videoId - 再生するビデオのID
     */
    setVideo(videoId) {
        this.player.loadVideoById(videoId);
    }
}
