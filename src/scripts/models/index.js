const localStorage = require('./localStorage');
const moment = require('moment');

const TIMESTAMP = (() => moment().format('YYYY-MM-DD hh:mm:ss'))();

module.exports = {
    playlist: {
        list: {
            add: (name) => {
                // Playlist一覧に追加
                const playlist = localStorage.getItem('playlist') || [];
                playlist.push({
                    id: moment().unix(),
                    name,
                    items: [],
                    created_at: TIMESTAMP,
                    updated_at: TIMESTAMP,
                });
                localStorage.setItem('playlist', playlist);
            },
            remove: (id) => {
                const playlist = localStorage.getItem('playlist') || [];
                playlist.forEach((playlist, i) => {
                    if(opts.id === playlist.id) {
                        playlist.splice(i, 1);
                    }
                });
                localStorage.setItem('playlist', playlist);
            },
            get: () => localStorage.getItem('playlist') || [],
        },
        item: {
            add: (id, items) => {
                const playlist = localStorage.getItem('playlist');
                let index;
                playlist.forEach((item, i) => {
                    if(item.id === id) {
                        index = i;
                    }
                });
                items.forEach((item) => {
                    if(!playlist[index].items.includes(item)) {
                        playlist[index].items.push(item);
                    }
                });
                localStorage.setItem('playlist', playlist);
            },
        },
    },
};
