function animateSlides(){
    const nav = document.querySelectorAll('.nav-header');
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide,index,slides)=>{
        const revealImg = slide.querySelector('.reveal-img');
        const img = slide.querySelector('img');
        const revealText = slide.querySelector('.reveal-text');
        const slideTl = gsap.timeline({
            //creating each slide animation
            scrollTrigger : {
                trigger : slide,
                start : '111px center'
            },
            defaults : {
                duration : 1 ,
                ease : 'power2.inOut'
            }
        });
        slideTl.fromTo(revealImg,{x : '0'},{ x : '100%'});
        slideTl.fromTo(img,{scale : 2},{scale : 1} , '-=1');
        slideTl.fromTo(revealText,{x : '0'},{ x : '100%'} , '-=.5');
        slideTl.fromTo(nav,{y : '-100%'},{ y : '0'} , '-=1.1');

        //CREATING Each viewport ANIMATION
        const pageTl = gsap.timeline({
            scrollTrigger : {
                trigger : slide ,
                duration : '100%',
                markers : false,
                start : 'top top',
                scrub : true,
                pin : true ,
                pinSpacing : false
            }
        });
        pageTl.fromTo(slide,{ opacity : 1 , scale : 1},{ opacity : 0 , scale : .5});

    })
}
//CREATING CUSTOM CURSOR
const cursor = document.querySelector('.cursor');
const cursorText = cursor.querySelector('span');
const burger = document.querySelector('.burger');
const logo = document.getElementById('logo');
function customCursor(e){
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
}
//HOVER ANIMATION
function mouseOnHover(e){
    const item = e.target;
    if(item.id === 'logo' || item.classList.contains('burger')){
        cursor.classList.add('nav-active');
    }
    else{
        cursor.classList.remove('nav-active');
    }
    if(item.classList.contains('explore')){
        cursor.classList.add('text-active');
        cursorText.innerText = 'Tap';
    }else{
        cursor.classList.remove('text-active');
        cursorText.innerText = '';
    }
}
//BURGER ANIMATION
function navToggle(e){
    if(!e.target.classList.contains('active')){
    e.target.classList.add('active');
    gsap.to('.line1', { rotate : '45deg', y:3 , background : 'black'});
    gsap.to('.line2', { rotate : '-45deg' , y: -3 , background : 'black'});
    gsap.to('.nav-bar', {clipPath : 'circle(2500px at 100% ' , duration : 1});
    logo.style.color = 'black';
    //GETTING RID OF THE SCROLL BAR
    document.body.classList.add('hide');
}else{
    e.target.classList.remove('active');
    gsap.to('.line1', { rotate : '0', y:0 , background : 'white'});
    gsap.to('.line2', { rotate : '0' , y: 0 , background : 'white'});
    gsap.to('.nav-bar', {clipPath : 'circle(50px at 100% -10%' , duration : 1});
    document.body.classList.remove('hide');
    logo.style.color = 'white';
}
}
//other page animation
function detailAnimation(){
    const detailSlide = document.querySelectorAll('.detail-slide');
    detailSlide.forEach(slide=>{
        const tl2 = gsap.timeline({
            defaults :{ ease: "circ.out"},
            scrollTrigger: {
                trigger : slide, 
            }
        });
        tl2.from(slide,{y : '50%' , opactiy : 1});
    
});
}
//EVENT LISTENERS
burger.addEventListener('click', navToggle);
window.addEventListener('mousemove', customCursor);
window.addEventListener('mouseover',mouseOnHover);

animateSlides();
detailAnimation();