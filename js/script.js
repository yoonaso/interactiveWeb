$(function () {
    //glitch effect
    $(".glitch").glitch({
        layers: ["red", "green"],
        offset: [10, 0],
    }, 5000);

    //scroll toggle animation   
    var timer = setInterval(function () {
        $(".scroll").toggleClass("active");
    }, 500);

    var $section = $('.parallax > section');
    var $sectionInfo = [];

    $section.each(function () {
        var $this = $(this);
        $sectionInfo.push($this.offset().top);
    });

    //console.log($sectionInfo);
    $section.css({
        position: 'fixed'
    });
   
    //scroll function
    $(window).scroll(function () {
        var sct = $(this).scrollTop();
        //  console.log(sct);

        $section.each(function (idx) {
            var $this = $(this);

            var $newtop = $sectionInfo[idx] - sct;

            if (sct > $sectionInfo[idx]) {
                $newtop *= 0.5;
            }
            $this.css({
                top: $newtop
            });
        });

        if (sct > 0) {
            $("header").css({
                "opacity": "0",

            });


        } else {
            $("header").css({
                "opacity": "1",

            });
        }

        if (sct > $sectionInfo[1] && sct < $sectionInfo[2]) {
            $(".parallax > .section2").css({
                "top": "0rem"
            });
        }else{
           
        }

   

        if(sct > $sectionInfo[2] - 350){
            $(".globalText > .twoYears").css({
                "top":"10rem",
                "opacity":1
            });
        }

        if(sct > $sectionInfo[2] + 200){
            $(".globalText > .notYet").css({
                "top":"41rem",
                "opacity":1
            });
        }

        if(sct > $sectionInfo[2] + 4000){
            $(".section4 > .confirmedCase").css({
                "top":"16rem",
                "opacity":"1"
               
            });

        }

        if(sct > $sectionInfo[2] + 3300){
            $(".section4 > .confirmedCaseTwo").css({
                "top":"16rem",
                "opacity":"1"
               
            });

        }

        if(sct > $sectionInfo[2] + 2800){
            $(".section4 > .confirmedCaseThree").css({
                "top":"16rem",
                "opacity":"1"
               
            });

        }

       
       
    });

    

  
   
});

