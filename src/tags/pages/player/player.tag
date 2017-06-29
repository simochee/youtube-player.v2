player

    #player

    script(type="es6").
        const Player = require('../../../scripts/youtube/player').default
        const Cueue = require('../../../scripts/youtube/queue')

        let player

        observer.on('changeVideo', (videoId) => {
            if(player && videoId) {
                player.setVideo(videoId)
            }
            if(!player && videoId) {
                player = new Player('player', videoId)
            }
        })

        observer.on('video:finished', () => {

        })