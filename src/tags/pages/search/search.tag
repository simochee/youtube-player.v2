search(data-mode="{mode}")

    .search-results

        h2
            small 検索結果：
            | {opts.term}

        .result-item(each="{item, i in data}" class="{selected: selectedVideoIds.includes(item.id.videoId), active: activeItemIndex == i}" onmousedown="{beginPress(i)}" onmouseup="{cancelPressOnce}" onmousemove="{cancelPress}")
            .thumbnail
                img(src="{item.snippet.thumbnails.medium.url}")
                span.duration {item.contentDetauls.duration}
            .contents
                h3 {item.snippet.title}
                .details
                    .detail-item
                        span.icon.ion-person
                        | {item.snippet.channelTitle}
                    .detail-item
                        span.icon.ion-play
                        | {item.statistics.viewCount}回再生
                p.description {item.snippet.description}

        .search-loader#loadFlag(if="{nextPageToken}")
            span.icon.ion-ios-loop-strong
            | Loading ...

    playlist-drawer(mode="{mode}")
    

    script(type="es6").
        require('../../components/playlist-drawer/playlist-drawer')
        
        const async = require('async')
        const YouTube = require('../../../scripts/youtube')

        this.data = []
        this.mode = 'normal'
        this.nextPageToken = null
        this.selectedVideoIds = []

        let $loadFlag

        // Intersection observer
        // 続きのデータを読み取る
        const obs = new IntersectionObserver((changes) => {
            if($loadFlag) {
                obs.unobserve($loadFlag)
            }
            if(this.nextPageToken) {
                updateSearchResult(opts.term, this.nextPageToken)
            }
        }, {})

        const zero = n => `0${n}`.slice(-2)

        // PT#M#SをMM:TTに変換する
        const formatDuration = (duration) => {
            const mt = duration.match(/^PT((\d+)H)?((\d+)M)?((\d+)S)?$/)
            const hours = mt[2] || ''
            const minutes = mt[4] || '0'
            const seconds = mt[6] || '00'
            return `${hours && `${hours}:`}${hours ? zero(minutes) : minutes}:${zero(seconds)}`
        }

        // カンマと単位をつける
        const formatNumber = (num) => num.toString().replace(/(\d)(?=(\d{3})+(\.\d)?$)/, '$1,')

        // 再生回数を 3.5万 みたいな感じにする
        const formatViewCount = (count) => {
            if(count < 10000) {
                return formatNumber(count)
            }
            if(count < 1000000) {
                return `${Math.floor(count / 1000) / 10}万`;
            }
            if(count < 100000000) {
                return `${formatNumber(Math.floor(count / 10000))}万`
            }
            return `${Math.floor(count / 1000000) / 100}億`
        }

        // 検索結果を更新する
        const updateSearchResult = (term, pageToken) => {

            console.log(pageToken)

            if(!pageToken) {
                this.nextPageToken = null
                this.data = []
            }
            
            async.waterfall([
                (callback) => {
                    YouTube.search({ term, pageToken })
                        .then((results) => {
                            
                            // 次のページのpageTokenを取得
                            this.nextPageToken = results.nextPageToken

                            const data = []
                            const videoIds = []

                            results.items.forEach((item) => {
                                item.contentDetauls = {}
                                item.statistics = {}
                                videoIds.push(item.id.videoId)
                                data.push(item)
                            })
                            callback(null, data, videoIds)
                        })
                },
                (data, videoIds, callback) => {
                    YouTube.getVideoDurations(videoIds)
                        .then((results) => {
                            results.forEach((result, i) => {
                                const duration = formatDuration(result.duration)
                                data[i].contentDetauls.duration = duration
                                const viewCount = formatViewCount(result.viewCount)
                                data[i].statistics.viewCount = viewCount
                            })
                            callback(null, data)
                        })
                }
            ], (err, data) => {
                data.forEach((item) => {
                    this.data.push(item)
                })
                
                this.update()

                $loadFlag = document.getElementById('loadFlag')
                if($loadFlag) {
                    obs.observe($loadFlag)
                }
            })
        }
        updateSearchResult(opts.term)
        
        observer.on('updateSearchTerm', updateSearchResult)

        // 要素のロングプレスを検知する
        this.activeItemIndex = -1
        let isLongPressed = false
        let pressStartTime = 0
        this.beginPress = (index) => {
            return (e) => {
                if(this.mode === 'select') {
                    // 動画を選択
                    const videoId = this.data[index].id.videoId
                    if(this.selectedVideoIds.includes(videoId)) {
                        const i = this.selectedVideoIds.indexOf(videoId)
                        this.selectedVideoIds.splice(i, 1)
                        observer.trigger('removePlaylistTmp', videoId)
                    } else {
                        this.selectedVideoIds.push(videoId)
                        observer.trigger('addPlaylistTmp', videoId)
                    }
                } else {
                    this.activeItemIndex = index
                    isLongPressed = false
                    pressStartTime = new Date()
                }
            }
        }

        this.cancelPressOnce = () => {
            pressStartTime = 0
            if(this.mode !== 'select' && ~this.activeItemIndex) {
                location.hash = `/video/${this.data[this.activeItemIndex].id.videoId}`
            } else {
                this.activeItemIndex = -1
            }
        }

        this.cancelPress = () => {
            requestAnimationFrame(() => {
                this.activeItemIndex = -1
                pressStartTime = 0
            })
        }

        
        const longPress = () => {
            if(pressStartTime && new Date() - pressStartTime > 800) {
                if(!isLongPressed) {
                    if(this.mode !== 'select') {
                        const videoId = this.data[this.activeItemIndex].id.videoId
                        this.mode = 'select'
                        this.selectedVideoIds.push(videoId)
                        observer.trigger('addPlaylistTmp', videoId)
                    }
                    pressStartTime = 0
                    isLongPressed = true
                    this.update()
                }
            }
            requestAnimationFrame(longPress)
        }
        longPress()

        observer.on('quitSelectMode', () => {
            this.mode = 'normal'
            this.selectedVideoIds = []
            this.update()
        })