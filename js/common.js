const hamburger = () => {
    const element = document.getElementById('nav_menu');
    let check = element.classList.contains("active");
    if(check){
        element.classList.remove("active");
    }else{
        element.classList.add("active");
    }
}

const menuOpenClose = (e) => {
    let getclassList = e.classList;
    console.log(getclassList);
    let findClass = getclassList.contains("open");
    console.log(findClass);
    if(findClass){
        e.classList.remove("open");
    }else{
        e.classList.add("open");
    }
}

  $(document).ready(function(){
    $('.imgSlider').slick({
        fade: true, 
        speed: 700, 
        autoplay: true, 
        autoplaySpeed: 1000, 
        dots: true, 
        arrows: false 
    });
    $('.high_slider').slick({
        fade: true, 
        speed: 700, 
        autoplay: true, 
        autoplaySpeed: 1000, 
        dots: true, 
        arrows: false 
    });
    $('.review_slider').slick({
        speed: 700, 
        autoplay: true, 
        autoplaySpeed: 3000, 
        dots: true, 
        arrows: false,
        infinite: true,
    });
});

