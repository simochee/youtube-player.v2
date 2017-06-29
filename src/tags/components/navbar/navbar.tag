navbar(data-mode="{mode}" data-hide="{isHide}")

    h1 {title}
    nav.navbar-nav
        .nav-search
            button(onclick="{changeModeSearch}"): span.ion-android-search
            form(onsubmit="{search}")
                input#searchInput(type="search" value="4ouRrHgOmFw" onkeydown="{closeSearchInput}" onkeyup="{updateSearchTerm}" placeholder="{locals.search.inputPlaceholder}")
                button(type="submit")
        button(onclick="{openDrawer}"): span.ion-navicon
    
    script(type="es6").
        this.locals = top.locales
        this.mode = 'normal'
        this.page = ''

        let $input;

        this.on('mount', () => {
            $input = document.getElementById('searchInput')
        });

        this.changeModeSearch = () => {
            this.mode = 'search'
            $input.focus()
        }

        this.search = (e) => {
            e.preventDefault()
            const term = e.target[0].value
            if(term.length > 0) {
                location.hash = `/search/${term}`
                if(this.page === 'search') {
                    observer.trigger('updateSearchTerm', term)
                }
            }
        }

        this.closeSearchInput = (e) => {
            // エスケープキーが押されたらモードを`normal`に戻す
            if(e.keyCode === 27) {
                e.preventDefault()
                if(this.page !== 'search') {
                    this.mode = 'normal'
                }
                $input.blur()
            }
        }

        this.updateSearchTerm = (e) => {
            console.log('happen')
        }

        this.openDrawer = (e) => {
            e.preventDefault()
            observer.trigger('openDrawer')
        }

        // ページ遷移を感知
        observer.on('changePage', (page) => {
            this.page = page
            if(page == 'search') {
                this.mode = 'search'
            }
            if(page == 'video') {
                this.mode = 'normal'
            }
            this.update()
        })