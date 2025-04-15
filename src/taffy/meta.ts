/**
 * Sets page title.
 */
const setTitle = ( newTitle: string ) => {
    const title = document.querySelector( 'title' ) as HTMLTitleElement
    if ( !title ) {
        console.error( 'title not found' )
    } else {
        title.innerText = newTitle
    }
}

export { setTitle }