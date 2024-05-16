


// Variables
const topText = document.getElementById('topText');
const bottomText = document.getElementById('bottomText');
const imageURL = document.getElementById('imageURL');
const button = document.getElementById('button');

// Retrieve from local storage
const savedMemes = JSON.parse(localStorage.getItem('createMeme')) || [];

// Function to create meme and display it on the page
function createMeme(memeData) {
    const meme = document.createElement('div');
    const img = document.createElement('img');
    const top = document.createElement('h2');
    const bottom = document.createElement('h2');
    const deleteButton = document.createElement('button');

    img.src = memeData.image;
    top.textContent = memeData.top;
    bottom.textContent = memeData.bottom;
    deleteButton.textContent = 'Delete';

    meme.appendChild(img);
    meme.appendChild(top);
    meme.appendChild(bottom);
    meme.appendChild(deleteButton);

    document.querySelector('.memeContainer').appendChild(meme); 
}

// Event listener for button
button.addEventListener('click', function(e) {
    e.preventDefault();
    const meme = {
        top: topText.value,
        bottom: bottomText.value,
        image: imageURL.value
    };
    savedMemes.push(meme);
    localStorage.setItem('createMeme', JSON.stringify(savedMemes));
    createMeme(meme);
});

// Load saved memes on page load
window.addEventListener('load', () => {
    savedMemes.forEach(createMeme);
});
