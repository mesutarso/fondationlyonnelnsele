export const checfIfLinkBeginWithHttps = (link: string) => {
    return link.startsWith("https://");
}


export const formatDate = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
    