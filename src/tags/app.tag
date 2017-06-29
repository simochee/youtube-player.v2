app(data-page="{page}" data-is-playing="{isPlaying}")

    navbar

    drawer

    home(if="{page == 'home'}")

    search(if="{page.match(/^(search)$/)}" term="{data.term}")

    player

    script(type="es6").
        require('./components/navbar/navbar')
        require('./components/drawer/drawer')
        require('./pages/home/home')
        require('./pages/search/search')
        require('./pages/player/player')

        this.data = {}
        this.isPlaying = false
        this.page = ''

        observer.on('changePage', (page, opts) => {
            this.page = page
            this.data = {}
            if(page === 'search') {
                this.data.term = opts.term
            }
            if(page === 'video') {
                console.log('app', opts)
                observer.trigger('changeVideo', opts.videoId)
                this.isPlaying = true
            }
            this.update()
        })