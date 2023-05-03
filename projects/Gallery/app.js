var myImg = document.querySelectorAll('.myImg');
var zoomImg = document.querySelectorAll('.zoomImg');
var spanClose = document.querySelector('.close');


myImg.forEach((item) =>{
    item.addEventListener('click', function(){
        spanClose.classList.add('span-active');


        var Id = item.id;
        zoomImg.forEach((img) => {
        if(img.id === Id){
            img.classList.toggle('active');
        }
        });
    });
});

spanClose.onclick = function(){
    zoomImg.forEach((img) => {
        img.classList.remove('active');
        spanClose.classList.remove('span-active');
    });
}