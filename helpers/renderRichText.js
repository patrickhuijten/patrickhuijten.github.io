export const renderRichText = (text, storyapi) => {
    let html = text ? storyapi.richTextResolver.render(text) : ''

    html = html.replaceAll('<a ', '<a rel="noreferrer" ')
    return html
}