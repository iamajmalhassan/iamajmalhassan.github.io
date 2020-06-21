//constructor
const TypeWriter = function(txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

TypeWriter.prototype.type = function() {
  //curr index of word
  const current = this.wordIndex % this.words.length;
  const fulltxt = this.words[current];

  if(this.isDeleting) {
    //delete
    this.txt = fulltxt.substring(0, this.txt.length-1);

  } else {
    //add
    this.txt = fulltxt.substring(0, this.txt.length+1);
  }
  // Output the txt
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  //change type speed for deleting
  let typeSpeed = 300;

  if(this.isDeleting) {
    typeSpeed/=2;
  }

  //If word is complete
  if(!this.isDeleting && this.txt === fulltxt) {
    //pause at end
    typeSpeed = this.wait;
    //set delete to true
    this.isDeleting = true;
  } else if(this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.wordIndex++;
    //Pause before start typing
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed);
}

document.addEventListener('DOMContentLoaded', init);

//Init
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-word'));
  const wait = txtElement.getAttribute('data-wait');
  // call TypeWriter
  new TypeWriter(txtElement,words,wait);
}
