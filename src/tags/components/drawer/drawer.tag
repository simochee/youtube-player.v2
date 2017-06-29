drawer(class="{open: isOpen}")
    .drawer
        .drawer-header
            button(onclick="{closeDrawer}"): span.ion-android-close
        .drawer-nav
            a.nav-anchor(href="#/playlist")
                span.icon.ion-ios-musical-notes
                p プレイリスト
            a.nav-anchor(href="#")
                span.icon.ion-android-home
                p WebSite
        .drawer-footer

    script(type="es6").
        this.isOpen = false

        this.closeDrawer = (e) => {
            e.preventDefault()
            this.isOpen = false
        }

        observer.on('openDrawer', () => {
            this.isOpen = true
            this.update()
        })
