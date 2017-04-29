app.filter('srcfilter', function() {
    return function(src) {
        if (src === 'N/A') {
            return 'http://www.clker.com/cliparts/0/4/K/i/q/S/no-image-md.png'
        }
        return src;
    }
})