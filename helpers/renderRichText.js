export const renderRichText = (text, storyapi) => {
    let html = text ? storyapi.richTextResolver.render(text) : ''

    html = html.replace('<a ', '<a rel="noreferrer" ')
    return html
}