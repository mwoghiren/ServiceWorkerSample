self.addEventListener('fetch', function(event) {
    if (/puppysad.jpg$/.test(event.request.url)) {
        console.log('Attempted to play fetch with sad puppy.');
        event.respondWith(
            console.log('Play fetch with happy puppy instead!');
            fetch('../img/puppyhappy.jpg', {})
        );
    }
});
