const Settings = {
    infinite: true,
    autoplay: false,
    slidesToShow: 5,
    SlidesToScroll: 2 ,
    InitialSlide:0,
    responsive: [{
        breakpoints: 1024,
        settings: {
            slidesToShow: 3,
            SlidesToScroll: 2,
            infinite:true,
        },
    },
    {
        breakpoints: 600,
        settings: {
            slidesToShow: 2,
            SlidesToScroll:1,
           InitialSlide:1, 
        },

    },
    {
        breakpoints: 480,
        settings: {
            slidesToShow: 2,
            SlidesToScroll: 1,
            
        },

    },
 ],
  

};

export default Settings;