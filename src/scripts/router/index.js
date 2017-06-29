const route = require('riot-route').default;

// ホーム
route('/', () => {
    observer.trigger('changePage', 'home');
});

// 検索結果
route('/search/*', (term) => {
    observer.trigger('changePage', 'search', {
        term,
    });
});

route('/video/*', (videoId) => {
    observer.trigger('changePage', 'video', {
        videoId,
    });
});

// 存在しないページの場合はトップへリダイレクト
route(() => {
    location.hash = '/';
});

exports.start = () => {
    route.start(true);
};
