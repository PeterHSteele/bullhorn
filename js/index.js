    function Bullhorn_Navigation(){
        this.nav = document.getElementById('topnav');
        this.toggle = document.getElementById('menu-toggle');
        this.submenuLinks = document.querySelectorAll('.submenu a');

        this.showNav = function(){
            this.nav.className+=' toggled';
            this.nav.setAttribute('aria-expanded','true');
            this.toggle.setAttribute('aria-pressed','true')
        }

        this.hideNav = function(){
            this.nav.className = this.nav.className.replace( ' toggled', '' );
            this.nav.setAttribute('aria-expanded','false');
            this.toggle.setAttribute('aria-pressed','false')
        }
       
        this.toggleNav = function(){
            if ( this.nav.className.indexOf('toggled') == -1 ){
                this.showNav();
            } else {
                this.hideNav();
            }
        }

        this.handleSubmenuLinkFocus = function(e){
           e.target.parentNode.parentNode.style.left=0;
        }

        this.handleSubmenuLinkBlur = function(e){
            e.target.parentNode.parentNode.style.left="";
        }

        this.addListeners = function(){
            this.toggle.addEventListener( 'click', this.toggleNav.bind(this) );
            Array.from(this.submenuLinks).forEach( link => {
                link.addEventListener( 'focus', this.handleSubmenuLinkFocus.bind(this));
                link.addEventListener( 'blur', this.handleSubmenuLinkBlur.bind(this));
            });
        }
    }

    const bullhornNav = new Bullhorn_Navigation();
    bullhornNav.addListeners();