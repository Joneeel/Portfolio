class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];
        console.log(this.words.length )
    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}


// const hover1 = document.getElementById("hover1");
// const hover2 = document.getElementById("hover2");
// const hover3 = document.getElementById("hover3");

// const blurFilter = "blur(2px) grayscale(70%)";
// const grayscaleFilter = "grayscale(70%)";


//   hover1.addEventListener("mouseover", function() {
//   hover2.style.filter = blurFilter;
//   hover3.style.filter = blurFilter;

// });

//   hover1.addEventListener("mouseout", function() {
//   hover2.style.filter = grayscaleFilter;
//   hover3.style.filter = grayscaleFilter;
// });

//   hover2.addEventListener("mouseover", function() {
//   hover1.style.filter = blurFilter;
//   hover3.style.filter = blurFilter;
// });

//   hover2.addEventListener("mouseout", function() {
//   hover1.style.filter = grayscaleFilter;
//   hover3.style.filter = grayscaleFilter;
// });

//   hover3.addEventListener("mouseover", function() {
//   hover2.style.filter = blurFilter;
//   hover1.style.filter = blurFilter;
// });

//   hover3.addEventListener("mouseout", function() {
//   hover2.style.filter = grayscaleFilter;
//   hover1.style.filter = grayscaleFilter;
// });