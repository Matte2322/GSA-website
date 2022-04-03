const pictureSlideshow = document.querySelector('.pictures-slideshow');
const pictureImage = document.querySelectorAll('.pictures-slideshow img');

const prevBtn = document.querySelector('#prevbtn');
const nextBtn = document.querySelector('#nextbtn');


let counter = 0;
const size = pictureImage[0].clientWidth;

pictureSlideshow.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click',()=>{
    if(counter >= pictureImage.length -1) return; // 0 >= 0 - 1 
    pictureSlideshow.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    pictureSlideshow.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    if(counter<=0) return; // we can prevent the images exiting the border
    pictureSlideshow.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    pictureSlideshow.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

pictureSlideshow.addEventListener('transitioned', ()=>{
    if(pictureImage[counter].id === 'last-clone') {
        pictureImage.style.transition = 'none';
        counter = pictureImage.length - 2;
        pictureSlideshow.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if(pictureImage[counter].id === 'first-clone') {
        pictureImage.style.transition = 'none';
        counter = pictureImage.length - counter;
        pictureSlideshow.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
