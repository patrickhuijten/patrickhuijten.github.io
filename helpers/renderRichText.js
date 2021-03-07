export const renderRichText = (text, storyapi) => {
    return text ? storyapi.richTextResolver.render(text) : ''
}