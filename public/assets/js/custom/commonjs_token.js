function GenerateTokenImageHTML(tokenImage, options) {
    if (tokenImage) {
        if (tokenImage.startsWith('https://storage.googleapis.com/')) {
            return tokenImage
        } else {
            return '/token/images/' + tokenImage
        }
    } else {
        return '/images/main/empty-token.png'
    }
}