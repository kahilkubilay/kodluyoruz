var allPokemon = document.querySelectorAll('.image-capsule img');
var getImage = '';

allPokemon.forEach(function(index, key) {
    index.addEventListener('click', function() {
        getImage = this.src || '';

        document.querySelectorAll('.image-preview img')[0].src = getImage;
    })
})