playlist-drawer(class="{open: opts.mode === 'select'}")
    header
        .heading プレイリストに追加 （{playlistTmp.length}件）
        button(onclick="{closeDrawer}"): span.ion-android-close

    .playlist
        .list-item(each="{playlist in playlistList}")
            span.name {playlist.name}
            button(onclick="{addPlaylist(playlist.id)}"): span.ion-plus
        .add-playlist
            button(onclick="{showCreatePlaylistForm}" class="{show: mode == 'normal'}")
                span.icon.ion-plus
                | {locales.playlist.newPlaylist}
            form(onsubmit="{createPlaylist}" class="{show: mode == 'createPlaylist'}")
                input#newPlaylistName(type="text" onkeydown="{inputAction}" placeholder="{locales.playlist.inputPlaylistName}")
    
    script(type="es6").
        this.mode = 'normal'
        this.playlistList
        this.playlistTmp = []
        this.locales = locales

        let $input
        const models = require('../../../scripts/models')

        this.playlistList = models.playlist.list.get()
    
        this.on('mount', () => {
            $input = document.getElementById('newPlaylistName')
        })
    
        this.closeDrawer = (e) => {
            e.preventDefault()
            this.playlistTmp = []
            observer.trigger('quitSelectMode')
        }

        this.showCreatePlaylistForm = () => {
            this.mode = 'createPlaylist'
            setTimeout(() => {
                $input.focus()
            }, 300)
        }

        this.createPlaylist = (e) => {
            e.preventDefault()
            const name = e.target[0].value
            if(name != '') {
                e.target[0].value = ''
                this.mode = 'normal'
                models.playlist.list.add(name)
                this.playlistList = models.playlist.list.get()
            }
        }

        this.addPlaylist = (id) => {
            return (e) => {
                e.preventDefault()
                models.playlist.item.add(id, this.playlistTmp)
                this.playlistTmp = []
                observer.trigger('quitSelectMode')
            }
        }

        this.inputAction = (e) => {
            if(e.keyCode === 27) {
                this.mode = 'normal'
                setTimeout(() => {
                    e.target.value = ''
                }, 120)
            }
        }

        observer.on('addPlaylistTmp', (videoId) => {
            this.playlistTmp.push(videoId)
        })

        observer.on('removePlaylistTmp', (videoId) => {
            const i = this.playlistTmp.indexOf(videoId)
            this.playlistTmp.splice(i, 1)
        })