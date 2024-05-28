
// Variables
const createMemeButton = document.getElementById('generate');
const topText = document.getElementById('topText');
const bottomText = document.getElementById('bottomText');
const imageURL = document.getElementById('imageURL');

// Retrieve from local storage
const savedMemes = JSON.parse(localStorage.getItem('createMeme')) || [];

// Function to create meme and display it on the page
function createMeme(memeData) {
    const meme = document.createElement('div');
    const img = document.createElement('img');
    const top = document.createElement('h2');
    const bottom = document.createElement('h2');
    //const deleteButton = document.createElement('button');
  
    meme.classList.add('meme');
    img.classList.add('meme-img');
    top.classList.add('meme-top');
    bottom.classList.add('meme-bottom');
    //deleteButton.classList.add('delete-button');

    img.src = memeData.image;
    top.textContent = memeData.top;
    bottom.textContent = memeData.bottom;
    //deleteButton.textContent = 'Delete';
  
  /*
    deleteButton.addEventListener('click', function() {
        meme.remove();
        localStorage.removeItem(img);
        alert("Item has been deleted");
        console.log("delete");

    });
*/
    meme.appendChild(img);
    meme.appendChild(top);
    meme.appendChild(bottom);
    //meme.appendChild(deleteButton);

    document.querySelector('.memeContainer').appendChild(meme); 
}

// Event listener for button
createMemeButton.addEventListener('click', function(e) {
    e.preventDefault();
    const memeData = {
        top: topText.value,
        bottom: bottomText.value,
        image: imageURL.value
    };
    savedMemes.push(memeData);
    localStorage.setItem('createMeme', JSON.stringify(savedMemes));
    createMeme(memeData);
});
// Add a delete all button
const deleteAllButton = document.createElement('button');
deleteAllButton.textContent = 'Delete All Memes';
deleteAllButton.classList.add('delete-all-button');
document.body.appendChild(deleteAllButton);
deleteAllButton.addEventListener('click', function() {
    localStorage.clear();
    document.querySelector('.memeContainer').innerHTML = '';
    alert("All items have been deleted from local storage");
    console.log("delete all");
});

// Load saved memes on page load
window.addEventListener('load', () => {
    savedMemes.forEach(createMeme);
});
