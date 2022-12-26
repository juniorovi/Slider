const images =[
    'images/pic (1).jpg',
    'images/pic (2).jpg',
    'images/pic (3).jpg',
    'images/pic (4).jpg'
]

let imgIndex = 0;
const domImg = document.getElementById('img-slider');
setInterval(()=>{
    if(imgIndex>= images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    //document.getElementById('img-slider').setAttribute('src', imgUrl);
    domImg.setAttribute('src', imgUrl);
    imgIndex++;
},3000)