/**
 * Options for Grid class instantiation.
 * @param {string} containerSel - CSS selector for the container
 */
interface GridOptions {
    containerSel: string
}

/**
 * Manages a dynamic grid of images.
 */
class Grid {
    container: HTMLDivElement

    /**
     * Initializes Grid.
     * @param {GridOptions} options - Loader options
     */
    constructor ( options: GridOptions ) {
        // setup
        this.container = document.querySelector( options.containerSel ) as HTMLDivElement
        this.container.style.backgroundColor = 'black'
    }
}

export { Grid }