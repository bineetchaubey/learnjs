
/**
 * Slider in plane javascript
 * 
 */

// var currentIndex = 0;
// var slider = document.querySelectorAll('.slider')
//  slider.forEach((element,index)=>{
//     element.style.left= `${index * 100}%`
//  })

//  var PreButton = document.createElement("span")
//  PreButton.classList.add('prevbutton')
//  PreButton.innerText = 'Prev'
//  PreButton.style.position = 'absolute';
//  PreButton.style.left = '0%';
//  PreButton.style.top = '50%';

//  var nextButton = document.createElement("span")
//  nextButton.classList.add('prevbutton')
//  nextButton.innerText = 'Next'
//  nextButton.style.position = 'absolute';
//  nextButton.style.right = '0%';
//  nextButton.style.top = '50%';

//  PreButton.addEventListener('click',goPrev)
//  nextButton.addEventListener('click',goNext)

//  function goPrev(){
//     console.log('working in prew')
//     if(currentIndex < 1){
//         return 
//     }
//     currentIndex--;
//     goSlide();
    
//  }
//  function goNext(){
//     console.log('working in prew')
//     if(currentIndex > slider.length-2 ){
//         return 
//     }
//     currentIndex++;
//     goSlide();
//  }

//  var SliderContainer = document.querySelector('.SliderContainer')

//  SliderContainer.appendChild(PreButton)
//  SliderContainer.appendChild(nextButton)

//  function goSlide(){
//     slider.forEach((element,index)=>{
//         element.style.transform = `translateX(-${currentIndex * 100}%)`
//      })
//  }




class SliderPlugin {

     currentIndex = 0;
     _currentObject = this;
     

        constructor() {
            this.slider = document.querySelectorAll('.slider');
            console.log(this.slider,'slider length')
        }

        

         init() {
            this.createPrevnextButton();
            this.slider.forEach((element, index) => {
                element.style.left = `${index * 100}%`;
            });

        };

       createPrevnextButton = function () {
            var PreButton = document.createElement("span");
            PreButton.classList.add('prevbutton');
            PreButton.innerText = 'Prev';
            PreButton.style.position = 'absolute';
            PreButton.style.left = '0%';
            PreButton.style.top = '50%';

            var nextButton = document.createElement("span");
            nextButton.classList.add('prevbutton');
            nextButton.innerText = 'Next';
            nextButton.style.position = 'absolute';
            nextButton.style.right = '0%';
            nextButton.style.top = '50%';
            var _this = this

            PreButton.addEventListener('click', this.goPrev.bind(this));
            nextButton.addEventListener('click', this.goNext.bind(this));
            var SliderContainer = document.querySelector('.SliderContainer');

            SliderContainer.appendChild(PreButton);
            SliderContainer.appendChild(nextButton);
        };

        goPrev = function () {
            if (this.currentIndex < 1) {
                return;
            }
            this.currentIndex--;
            this.goSlide();

        };
        goNext = function () {
            if (this.currentIndex > this.slider.length - 2) {
                return;
            }
            this.currentIndex++;
            this.goSlide();
        };

        goSlide = function () {
            this.slider.forEach((element, index) => {
                element.style.transform = `translateX(-${this.currentIndex * 100}%)`;
            });
        };
}