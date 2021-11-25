const textInput = document.getElementById('text-input');

function textInsert() {
  textInput.addEventListener('keyup', () => {
    document.getElementById('meme-text').innerHTML = textInput.value;
  });
}

textInsert();
