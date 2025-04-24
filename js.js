$(document).ready(function () {
  const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: {
      forceToAxis: true,
    },
    on: {
      slideChangeTransitionStart: function () {
        const activeSection = $('.swiper-slide-active')

        if (activeSection.hasClass('slide1')) {
          activateFirstSlide();
        }

        if ($(activeSection).hasClass('slide2')) {
          activateSecondSlide();
        }

        if ($(activeSection).hasClass('slide3')) {
          activateThirdSlide();
        }

        if ($(activeSection).hasClass('slide4')) {
          activateFourthSlide();
        }

        if ($(activeSection).hasClass('slide5')) {
          activateFifthSlide();
        }

        if ($(activeSection).hasClass('slide6')) {
          activateSixthSlide();
        }
        
        if ($(activeSection).hasClass('slide7')) {
          activateSeventhSlide();
        }

        if ($(activeSection).hasClass('slide8')) {
          activateEighthSlide();
        }
        
        
      }
    }
  });

  const activateFirstSlide = () => {
    gsap.killTweensOf([
      ".section1Bg", 
      ".section1 .txtBox", 
      ".section1 .bigA", 
      ".section2 .txtBox",
      ".section2CloudBox"
    ]);


    gsap.timeline()
    .to(".section1Bg", {
      scale: 1,
      borderRadius: "0%",
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      transformOrigin: "center center",
    }, 0)
    .to(".section2CloudBox", { 
      opacity: 0,
      duration: 0.8
    }, 0)
    .to(".section2 .txtBox", {
      opacity: 0,
      duration: 0.8
    }, 0)
    .to(".section1 .bigA", {
      scale: 1,
      duration: 0.8
    }, 0)
    .to(".section1 .bigA", {
      color: "#fff",
      duration: 0.8
    }, 0)
    .to(".section1 .txtBox", {
      x: "0vw",
      duration: 0.8
    }, "<90%")


  };

  
  
  const activateSecondSlide = () => {
    gsap.killTweensOf([
      ".section1Bg", 
      ".section1 .txtBox",
      ".section1 .bigA",
      ".section3 video",
      ".section3 .txtBox"
    ]);
  
    gsap.set(".section1Bg", { scale: 1 });
  
    gsap.timeline()
    .to(".section1Bg", {
      scale: 0,
      borderRadius: "20%",
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      transformOrigin: "center center",
    }, 0)
    .to(".section3 video", {
      opacity: 0,
      duration: 0.8
    }, 0)
    .to(".section3 .txtBox", {
      opacity: 0,
      duration: 0.8
    }, 0)
    .to(".section1 .txtBox", { 
      x: "60vw",
      duration: 0.8
    }, 0)
    .to(".section1 .bigA", { 
      color: "#FF5722",
      duration: 0.8
    }, 0)
    .to(".section1 .bigA", { 
      scale: 13,
      duration: 0.8
    }, "<90%")
    .to(".section2 .txtBox", { 
      opacity: 1,
      duration: 0.8
    }, "<50%")
    .to(".section2CloudBox", { 
      opacity: 1,
      duration: 0.8
    }, "<20%")
  };



  const activateThirdSlide = () => {
    gsap.killTweensOf([
      ".section4 .spotlightBg", 
      ".strategyBox.index0 .imgBox",
      ".strategyBox.index0 .txtBox",
    ]);


    gsap.timeline()
    .to(".section3 video", {
      opacity: 1,
      duration: 0.8
    })
    .to(".section4 .spotlightBg", {
      opacity: 0,
      duration: 0.8
    }, 0)
    .to(".strategyBox.index0 .imgBox", {
      opacity: 0,
      duration: 0.8
    }, 0)
    .to(".strategyBox.index0 .txtBox", {
      opacity: 0,
      duration: 0.8
    }, 0)
    .to(".section3 .txtBox", {
      opacity: 1,
      duration: 0.8
    })
  };


  const activateFourthSlide = () => {

    gsap.timeline()
    .to(".section4 .spotlightBg", {
      opacity: 1,
      duration: 0.8
    }, 0)
    .to(".strategyBox.index0 .imgBox", {
      opacity: 1,
      duration: 0.8
    }, 0)
    .to(".strategyBox.index0 .txtBox", {
      opacity: 1,
      duration: 0.8
    }, 0)
    .to(".strategyBox.index1 .imgBox", {
      opacity: 0,
      duration: 0.8
    }, 0)
    .to(".strategyBox.index1 .txtBox", {
      opacity: 0,
      duration: 0.8
    }, 0)
  }


  const activateFifthSlide = () => {

    gsap.timeline()
    .to(".strategyBox.index0 .imgBox", {
      opacity: 0,
      duration: 0.8
    }, 0)
    .to(".strategyBox.index0 .txtBox", {
      opacity: 0,
      duration: 0.8
    }, 0)
    .to(".strategyBox.index2 .imgBox", {
      opacity: 0,
      duration: 0.8
    }, 0)
    .to(".strategyBox.index2 .txtBox", {
      opacity: 0,
      duration: 0.8
    }, 0)
    .to(".strategyBox.index1 .imgBox", {
      opacity: 1,
      duration: 0.8
    }, 0)
    .to(".strategyBox.index1 .txtBox", {
      opacity: 1,
      duration: 0.8
    }, 0)
  }


  const activateSixthSlide = () => {

    gsap.timeline()
    .to(".strategyBox.index1 .imgBox", {
      opacity: 0,
      duration: 0.8
    }, 0)
    .to(".strategyBox.index1 .txtBox", {
      opacity: 0,
      duration: 0.8
    }, 0)
    .to(".strategyBox.index3 .imgBox", {
      opacity: 0,
      duration: 0.8
    }, 0)
    .to(".strategyBox.index3 .txtBox", {
      opacity: 0,
      duration: 0.8
    }, 0)
    .to(".strategyBox.index2 .imgBox", {
      opacity: 1,
      duration: 0.8
    }, 0)
    .to(".strategyBox.index2 .txtBox", {
      opacity: 1,
      duration: 0.8
    }, 0)
  }


  const activateSeventhSlide = () => {

    gsap.timeline()
    .to(".strategyBox.index2 .imgBox", {
      opacity: 0,
      duration: 0.8
    }, 0)
    .to(".strategyBox.index2 .txtBox", {
      opacity: 0,
      duration: 0.8
    }, 0)
    .to(".section5", {
      opacity: 0,
      duration: 0.8
    }, 0)
    .to(".strategyBox.index3 .imgBox", {
      opacity: 1,
      duration: 0.8
    }, 0)
    .to(".strategyBox.index3 .txtBox", {
      opacity: 1,
      duration: 0.8
    }, 0)
  }


  const activateEighthSlide = () => {

    gsap.timeline()
    .to(".strategyBox.index3 .imgBox", {
      opacity: 0,
      duration: 0.8
    }, 0)
    .to(".strategyBox.index3 .txtBox", {
      opacity: 0,
      duration: 0.8
    }, 0)
    .to(".section8", {
      opacity: 1,
      duration: 0.8
    }, 0)
  }

  

  


})