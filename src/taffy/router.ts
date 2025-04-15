/**
 * Information pertaining to URL state and corresponding functionality.
 * @param {string} state - URL state
 * @param {() => void} func - executes on route load
 * @param {() => void=} preSwitchFunc - executes before of new route load
 * @param {number=} preSwitchDelay - delay before new route load
 * @param {string=} title - page title to set on load
 */
interface Route {
    state: string
    func: () => void
    preSwitchFunc?: () => void
    preSwitchDelay?: number
    title?: string
}

/**
 * Options for Loader class instantiation.
 * @param {Route[]} routes - routes to instantiate the Router with
 * @param {() => void=} defaultFunc - default if route match is not found
 */
interface LoaderOptions {
    routes: Route[]
    defaultFunc?: () => void
}

/**
 * Asynchronously manages script execution based on URL state with dynamic 
 * reloading.
 */
class Loader {
    routes: Route[]
    defaultFunc?: () => void

    /**
     * Initializes Loader and executes matching script.
     * @param {LoaderOptions} options - Loader options
     */
    constructor ( options: LoaderOptions ) {
        // setup
        this.routes = options.routes
        this.defaultFunc = options.defaultFunc

        this.initLinks()
 
        // run
        this.run()

        window.onpopstate = () => this.run()
    }

    /**
     * Executes corresponding script to current URL state.
     */
    run = () => {
        try {
            // locate route
            let route: Route | null = null
            let routeLocated: boolean = false

            for ( let i = 0; i < this.routes.length; i++ ) {
                if ( this.routes[i].state === this.getLocation() ) {
                    routeLocated = true
                    route = this.routes[i]

                    break
                }
            }

            // default functionality
            if ( !routeLocated && this.defaultFunc ) {
                this.defaultFunc()
            }

            // TODO: preswitch (don't know how to execute this yet)

            // route functionality
            if ( routeLocated && route ) {
                route.func()
            }
        } catch ( error ) {
            console.error( 'Taffy Error:', error )
        }
    }

    /**
     * Retrieves current URL state.
     * @returns {string} first path component of URL
     */
    getLocation = (): string => {
        return new URL( window.location.href ).pathname.split( '/' )[1] || ''
    }

    /**
     * Updates the URL state and executes the corresponding script.
     * @param {string} state - new URL state
     */
    navigate = ( state: string ) => {
        history.pushState( {}, '', `/${state}` )
        this.run()
    }

    /**
     * Initializes loader links.
     */
    initLinks = () => {
        // find all anchors
        const links  = document.querySelectorAll( 'a' ) as NodeListOf<HTMLAnchorElement>

        // hijack redirect functionality of all links with 'taffy-href' property
        links.forEach( link => {
            if ( link.hasAttribute( 'tf-href' )) {
                link.addEventListener( 'click', ( event: MouseEvent ) => {
                    event.preventDefault()

                    const href = link.getAttribute( 'tf-href' ) as string

                    this.navigate( href )
                })
            }
        })
    }
}

export { Route, Loader, LoaderOptions }