$(document).ready(function(){
    if ( $(".preview-gallery-wrap").size() > 0 ){special_link_cursor();}
    $(".reser_btn").attr("href","https://www.ddnayo.com/RsvSys/?id_hotel=14966");
    $(".reser_btn").attr("target","_blank");

    $(window).resize(function(){
        var b_width = $("body").innerWidth() ;        
        var b_height = Math.round((b_width * 563) / 1000);        
        $(".full-page-vimeo iframe").css({"width":b_width, "height":b_height});    
        if($(window).width <= 1024){                     
            $(".video-section").css("height",$(".video-wrap .full-page-vimeo iframe").css("height"))
        }
    }).resize() 
    
    var isMobile = false; //initiate as false
    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
        isMobile = true;
    }

    //메인 동영상 모바일 위치
    const mobile_vdo_position = function(){
        const vdo = $(".vdo-wrap"),
        main_slide = $(".con1 .main-slide"),
        m_vdo_target = $(".vdo-container");

        if($(window).width() > 700){
            vdo.prependTo(main_slide)
        }else{
            vdo.prependTo(m_vdo_target)
        }
    }
    mobile_vdo_position()

    //탭메뉴
    if($(".room2-tap").size() > 0){
        $(".room2-menu").clone().appendTo(".room2-tap")
    }
    if($(".room3-tap").size() > 0){
        $(".room3-menu").clone().appendTo(".room3-tap")
    }
    if($(".room1-tap").size() > 0){
        $(".room1-menu").clone().appendTo(".room1-tap")
    }
    if($(".special-tap").size() > 0){
        $(".special-menu").clone().appendTo(".special-tap")
    }
    if($(".reser-tap").size() > 0){
        $(".reser-menu").clone().appendTo(".reser-tap")
    }
  
    $(window).resize(function(){
       
        if($(".tap-menu").size() > 0){
            
                $(".tap-menu").each(function(){
                    var liLengh = $(this).find("li").length
                    var liWidth = parseInt($(this).find("li").css("width")) 
                    $(this).find(".sub-menu").css("width",liLengh * (liWidth + 30)) 
                    if($(window).width() < 700){
                        $(".tap-menu .sub-menu").css("width",liLengh * liWidth + 2.5 * liLengh)
                        $(".tap-menu .sub-menu.long").css("width","100%")
                        
                    }
                })
            
        }
    }).resize()
    $(".scroll-down").click(function(){
        var ToYou = $(".toMe").offset().top;
        $("html,body").animate({scrollTop:ToYou},500)
    })
    
    //메인 비디오 크기
    const main_vdo = function(){
        if($(".main-wrap").size() > 0){            
            if($(window).width() > 1025){
                var b_width = $("body").innerWidth();
                var b_height = Math.round((b_width * 5625) / 10000);
                $(".full-page iframe").css({"width":b_width, "height":b_height});
                $(".main-wrap .slide img").css({"width":b_width, "height":b_height});
            }else if($(window).width() <= 1024 && $(window).width() > 700){
                $(".full-page iframe").css({"width":"178vh", "height":"100vh"});
                $(".main-wrap .slide img").css({"width":"178vh", "height":"100vh"});
            }
        }
    }
    main_vdo()
    $(window).resize(function(){
        main_vdo()
    })
        

    //  //동영상 비율 맞춤
    //  const vdo_ui = function(){
    //     if($(".movie-wrap").size() > 0){
    //         const vdo_width = $(".movie-wrap .vdo-wrap").width(),
    //             vdo_height = vdo_width * 0.563
    //         $(".movie-wrap .con2 iframe").css({"width":vdo_width,"height":vdo_height})
    //     }
    // }
    // vdo_ui()
    // $(window).resize(function(){
    //     vdo_ui()
    // })
    

    //슬라이드 콘텐츠
    var slide_ui = function(index) {	        
        var gallery_wrap = $('.basic-slide-wrap');    
        gallery_wrap.each(function() {
            var gallery = $(this).find('.slide-wrap'),
                slide_item = gallery.find('.slide'),
                _prev = $(this).find('.prev'),
                _next = $(this).find('.next');
            
            if ( slide_item.size() <= 1 ) {
                $(this).find('.slide-btn').hide();
            }	    
            gallery.slick({
                // accessibility: false,
                slide: '.slide',
                fade: true,
                autoplay: true,
                autoplaySpeed: 1500,
                infinite: true,  
                speed: 1000,
                dots: false,
                arrows: false,
                pauseOnHover:false
            });
    
            _prev.click(function() {
                gallery.slick('slickPrev');
            });
            _next.click(function() {
                gallery.slick('slickNext');
            });    

            gallery.on("afterChange", function(event, slick, direction){
                var num = $(this).slick('slickCurrentSlide') +1                
                var digit = "";
                var page_front = document.querySelector(".page-front")  
               

                if(num < 10){
                    num = "0" + num
                }else{
                    num = num
                }
                // page_front.innerHTML = `${num < 10 ? `0${num}`: num}`  
                $(page_front).html(num)

               

            });
            var last = $(this).find(".slide").length;
            
            if(last < 10){
                $(".page-last").text("0" + last)
            }else{
                $(".page-last").text(last) 
            }
            $(this).on('afterChange',function(){
                $(".pro-bar").addClass('pro-ani');
            });
            $(this).on('beforeChange',function(){
                $(".pro-bar").removeClass('pro-ani');
            });
            // $(this).mouseover(function(){
            //     $(".pro-bar").css("animation-play-state","paused")
            // })
            // $(this).mouseleave(function(){
            //     $(".pro-bar").css("animation-play-state","running")
            // })
            $(".slick-dots button").text("")
        });             
    }
    slide_ui();



   


    
    
    
    $(".slide.small").on("mousemove", function (e) {
        var innerInfo = $(this).find(".inner-info");
        var emElement = innerInfo.find("em");
    
        var x = e.pageX - innerInfo.offset().left;
        var y = e.pageY - innerInfo.offset().top;
    
        emElement.css({ left: x, top: y });
    });
   
    
    


    var room_slide = function(index) {	        
        var gallery_wrap = $('.room-preview-wrap');    
        gallery_wrap.each(function() {
            var gallery = $(this).find('.slide-wrap'),
                slide_item = gallery.find('.slide'),
                _prev = $(this).find('.prev'),
                _next = $(this).find('.next');
            
            if ( slide_item.size() <= 1 ) {
                $(this).find('.slide-btn').hide();
            }	    
            gallery.slick({
                // accessibility: false,
                slide: '.slide',
                fade: false,
                autoplay: true,
                autoplaySpeed: 2000,
                infinite: true,  
                speed: 1000,
                dots: false,
                arrows: false,
                variableWidth: true,
                slidesToShow: 1,     
                centerMode: true,
                initialSlide: 1, 
                slidesToShow:3,          
                pauseOnHover:false                
            });
    
            _prev.click(function() {
                gallery.slick('slickPrev');
            });
            _next.click(function() {
                gallery.slick('slickNext');
            });    

            gallery.on("beforeChange",function(){
                var curIdx = $(".room-preview-wrap").find(".slick-active").eq(2).attr("data-slick-index");
                curIdx = parseInt(curIdx);
                var slideLengh = parseFloat($(".room-preview-wrap").find(".slide").length)
                var gWidth = curIdx;
                $(".gauge").animate({"width":parseFloat(11.1111 * gWidth)+"%"},600)                
               
            })

            $(".slick-dots button").text("")
        });             
    }
    room_slide()

    
    
    var special_slide = function(index) {	        
        var gallery_wrap = $('.special-preview-wrap');    
        gallery_wrap.each(function() {
            var gallery = $(this).find('.slide-wrap'),
                slide_item = gallery.find('.slide'),
                _prev = $(this).find('.prev'),
                _next = $(this).find('.next');
            
            if ( slide_item.size() <= 1 ) {
                $(this).find('.slide-btn').hide();
            }	    
            gallery.slick({
                // accessibility: false,
                slide: '.slide',
                fade: false,
                autoplay: true,
                autoplaySpeed: 2000,
                infinite: true,  
                speed: 1000,
                dots: false,
                arrows: false,
                variableWidth: true,
                slidesToShow: 1,     
                centerMode: true,
                initialSlide: 1, 
                slidesToShow:3,          
                pauseOnHover:false                
            });
    
            _prev.click(function() {
                gallery.slick('slickPrev');
            });
            _next.click(function() {
                gallery.slick('slickNext');
            });    

            gallery.on("beforeChange",function(){
                var curIdx = $(".special-preview-wrap").find(".slick-active").eq(2).attr("data-slick-index");
                curIdx = parseInt(curIdx);
                var slideLengh = parseFloat($(".special-preview-wrap").find(".slide").length)
                var gWidth = curIdx;
                $(".gauge").animate({"width":parseFloat(11.1111 * gWidth)+"%"},600)                
               
            })

            $(".slick-dots button").text("")
        });             
    }
    special_slide()


    
    //메인
    var main_slide_ui = function(index) {	        
        var gallery_wrap = $('.main-slide-wrap');    
        gallery_wrap.each(function() {
            var gallery = $(this).find('.main-slide'),
                slide_item = gallery.find('.slide'),
                _prev = $(this).find('.prev'),
                _next = $(this).find('.next');
            
            if ( slide_item.size() <= 1 ) {
                $(this).find('.slide-btn').hide();
            }	    
            gallery.slick({
                // accessibility: false,
                slide: '.slide',
                fade: true,
                autoplay: false,
                autoplaySpeed: 1500,
                infinite: true,  
                speed: 1000,
                dots: false,
                arrows: false,
                pauseOnHover:false,
                
                responsive: [ 
                    { 
                        breakpoint: 701, 
                        settings: {	
                            autoplay: true,
                        } 
                    },
                ]
                
            });
    
            _prev.click(function() {
                gallery.slick('slickPrev');
            });
            _next.click(function() {
                gallery.slick('slickNext');
            });    

            gallery.on("afterChange", function(event, slick, direction){
                var num = $(this).slick('slickCurrentSlide') +1                
                var digit = "";
                var page_front = document.querySelector(".page-front")  
               

                if(num < 10){
                    num = "0" + num
                }else{
                    num = num
                }
                // page_front.innerHTML = `${num < 10 ? `0${num}`: num}`  
                $(page_front).html(num)

               

            });
            var last = $(this).find(".slide").length;
            
            if(last < 10){
                $(".page-last").text("0" + last)
            }else{
                $(".page-last").text(last) 
            }
            $(this).on('afterChange',function(){
                $(".pro-bar").addClass('pro-ani');
            });
            $(this).on('beforeChange',function(){
                $(".pro-bar").removeClass('pro-ani');
            });
            // $(this).mouseover(function(){
            //     $(".pro-bar").css("animation-play-state","paused")
            // })
            // $(this).mouseleave(function(){
            //     $(".pro-bar").css("animation-play-state","running")
            // })
            $(".slick-dots button").text("")
        });             
    }
    main_slide_ui();

    





/*모바일 메인 슬라이드 */
    var m_main_slide_ui = function(index) {	        
        var gallery_wrap = $('.m-slide-wrap');    
        gallery_wrap.each(function() {
            var gallery = $(this).find('.m-main-slide'),
                slide_item = gallery.find('.slide'),
                _prev = $(this).find('.prev'),
                _next = $(this).find('.next');
            
            if ( slide_item.size() <= 1 ) {
                $(this).find('.slide-btn').hide();
            }	    
            gallery.slick({
                // accessibility: false,
                slide: '.slide',
                fade: true,
                autoplay: false,
                autoplaySpeed: 1500,
                infinite: true,  
                speed: 1000,
                dots: false,
                arrows: false,
                pauseOnHover:false,
                
                responsive: [ 
                    { 
                        breakpoint: 701, 
                        settings: {	
                            autoplay: true,
                        } 
                    },
                ]
                
            });
    
            _prev.click(function() {
                gallery.slick('slickPrev');
            });
            _next.click(function() {
                gallery.slick('slickNext');
            });    

            gallery.on("afterChange", function(event, slick, direction){
                var num = $(this).slick('slickCurrentSlide') +1                
                var digit = "";
                var page_front = document.querySelector(".m-page-front")  
               

                if(num < 10){
                    num = "0" + num
                }else{
                    num = num
                }
                // page_front.innerHTML = `${num < 10 ? `0${num}`: num}`  
                $(page_front).html(num)

               

            });
            var last = $(this).find(".slide").length;
            
            if(last < 10){
                $(".m-page-last").text("0" + last)
            }else{
                $(".m-page-last").text(last) 
            }
            $(this).on('afterChange',function(){
                $(".pro-bar").addClass('pro-ani');
            });
            $(this).on('beforeChange',function(){
                $(".pro-bar").removeClass('pro-ani');
            });
            // $(this).mouseover(function(){
            //     $(".pro-bar").css("animation-play-state","paused")
            // })
            // $(this).mouseleave(function(){
            //     $(".pro-bar").css("animation-play-state","running")
            // })
            $(".slick-dots button").text("")
        });             
    }
    m_main_slide_ui();

   
    //scroll-obj
    $(".con1 .scroll-tit").addClass("on")
    $(window).scroll(function(){       
        
        var cur_pos = $(this).scrollTop() + 1000;
        $(".scroll-tit").each(function(){
            if(cur_pos >= $(this).offset().top){
                $(this).stop().addClass("on")
            }
        })      
    }).scroll()    

    $(window).scroll(function(){       
        var cur_pos = $(this).scrollTop() + 1000;
        $(".scroll-line").each(function(){
            if(cur_pos >= $(this).offset().top){
                $(this).stop().addClass("on")
            }
        })
    }).scroll()    
   
    $(window).scroll(function(){       
        var cur_pos = $(this).scrollTop() + 1000;
        $(".scroll-obj").each(function(){
            if(cur_pos >= $(this).offset().top){
                $(this).stop().addClass("on")
            }
        })
    }).scroll()    
   
    $(window).scroll(function(){       
        var cur_pos = $(this).scrollTop() + 1000;
        $(".scroll-bg").each(function(){
            if(cur_pos >= $(this).offset().top){
                $(this).stop().addClass("on")
            }
        })
    }).scroll()  
   
    // if($(window).width() < 700){
    //     $(".animateme").removeClass("animateme")
    //     $(".main-wrap .con1").css("height",$(window).height())
    //     $(".main-wrap .con1 .slide").css("height",$(window).height())
    // }    
    // $(".video-section .video-wrap").css("width",$(".con1").width())

    //메뉴 효과들
        //메인
    if($(".main-wrap").size() > 0){
        if($(window).width() > 1024){
            $(window).scroll(function(){
                if($(this).scrollTop() >= $(".main-tit").offset().top + 140){
                    $(".hd").addClass("fixed")
                     $(".main-menu").appendTo(".hd")
                    $(".logo a img").attr("src","img/common/logo.png")
                }else{
                    $(".hd").removeClass("fixed")
                     $(".main-menu").appendTo(".con1")
                    $(".logo a img").attr("src","img/common/logo_white.png")
                }
            }).scroll()
        }else{
            $(window).scroll(function(){
                if($(this).scrollTop() >= $(".con1").offset().top + $(".con1").height()){                
                    $(".logo a img").attr("src","img/common/logo.png")
                }else{                   
                    $(".logo a img").attr("src","img/common/logo_white.png")
                }
            }).scroll()
        }     
    }

    const hd_menu_swich = function(){
        const hd = $(".hd"),
        menu_btn = hd.find(".menu-btn")
        let i = 0
        menu_btn.on("click",function(){
            if(i === 0){
                hd.addClass("click")
                i++
            }else{
                hd.removeClass("click")
                i--
            }
        })
    }
    
    $(window).scroll(function(){
        if($(this).scrollTop() >= $(".con1").offset().top + $(".con1").height()){
            $(".logo a img").attr("src","img/common/logo.png")
            $(".hd").addClass("on")
            $(".main-wrap").addClass("on")
        }else{
            $(".logo a img").attr("src","img/common/logo_white.png")
            $(".hd").removeClass("on")
            $(".main-wrap").removeClass("on")
        }
    })
    

        //메뉴 버튼
    $(".menu-btn .btn").click(function(){
        if($(".menu-btn").hasClass("on")){
            
            $(".hd .logo a img").attr("src","img/common/logo_white.png")
            $(".menu-btn").removeClass("on")
        $(".main-menu").removeClass("on")
        }else{
            $(".menu-btn").addClass("on")
        $(".main-menu").addClass("on")
            $(".hd .logo a img").attr("src","img/common/logo.png")
        }

        
    })

    $(".main-menu").click(function() {

        $(".main-menu").removeClass("on")
        $(".hd .logo a img").attr("src","img/common/logo_white.png")
        $(".menu-btn").removeClass("on")
    })


    $(".hd .menu-btn .btn .line1").click(function(){


        $(".main-menu").removeClass("on")
        
        $(".menu-btn").removeClass("on")



    })

    const btn_ani = function(){
        let info_section = $(".info-section"),
            fixed_info = info_section.find(".fixed-tit-wrap"),            
            info = info_section.find(".info"),
            btn_wrap = fixed_info.find(".info-nav-btn"),
            btn = btn_wrap.find("li");
      
            ;
        function scroll_event (){
            info.each(function(){                
                index = $(this).index()
                if($(this).offset().top - parseFloat(info_section.css("padding-top")) <= $(window).scrollTop() && ($(this).offset().top - parseFloat(info_section.css("padding-top")) + $(this).innerHeight()) > $(window).scrollTop() ){
                    console.log(index)
                    btn.removeClass("on")
                    btn.eq(index).addClass("on")
                }
            });
        }
        $(window).on("scroll", function(){
            scroll_event()
        })
        $(window).on("resize",function(){
            scroll_event()
        })
        scroll_event()
        btn.find("a").click(function(){
            index = $(this).parent("li").index()
            $("html,body").animate({"scrollTop":info.eq(index).offset().top + 1 },400)
            return false;
        })
    }
    btn_ani()


    var special_link_cursor = function(){
        var m_area = $('.preview-gallery-wrap li'),
            m_circle = m_area.find("em")
    
        if (!isMobile) {
            m_area.bind('mouseenter', function() {
                var box_y = $(this).offset().top + 40,
                    box_x = $(this).offset().left + 40;
    
                $(document).bind('mousemove', function(e){
                    m_circle.css("top", e.pageY - box_y);
                    m_circle.css("left", e.pageX - box_x);
                });
            });
    
            $('.preview-gallery-wrap').bind('mouseleave', function() {
                $(document).unbind('mousemove')
            });
        }
    
    }

    //객실 스페셜 설명 fixed
    const room_info_fixed = function(){
        let info_section = $(".info-section"),
            fixed_info = info_section.find(".fixed-tit-wrap"),
            con1 = $(".con1"),
            info = info_section.find(".info"),
            btn_wrap = fixed_info.find(".info-nav-btn"),
            btn = btn_wrap.find("li");

        
        let contain_margin = parseFloat($(".contents-container").css("margin-top")),
            con1_height = parseFloat(con1.height()),
            top_space = contain_margin + con1_height,
            fixed_info_height = parseFloat(fixed_info.innerHeight()),
            info_height = parseFloat(info_section.innerHeight()),
            window_scrollTop = parseFloat($(window).scrollTop()),
            info_scrollTop = window_scrollTop - top_space
            ;

        fixed_info.attr("data-trail",info_height - fixed_info_height)
        
        function animating(){
            if($(window).width() > 700){
                console.log(fixed_info.attr('data-trail'))
                if(window_scrollTop < top_space ){
                    // fixed_info.css("transform","translateY(0)")            
                    fixed_info.css({"position":"absolute","top":0})
                }else if(window_scrollTop >= top_space && info_scrollTop < fixed_info.attr('data-trail')){
                    // fixed_info.css("transform","translateY("+info_scrollTop+"px)")            
                    fixed_info.css({"position":"fixed","top":0})
                }else{
                    fixed_info.css({"position":"absolute","top":fixed_info.attr('data-trail')+"px"})
                }
                return;
            }else{
                fixed_info.css("transform","translateY(0)")
            }
        }
        animating()   
        $(window).on("resize",function(){
            animating()   
        })
        $(window).on("scroll",function(){
            animating()   
        })
             

    }
    $(window).on("resize",function(){
        room_info_fixed()
    })
    $(window).on("scroll",function(){
        room_info_fixed()
    })
    $(".ame-list-wrap h5").click(function(){
        setTimeout(function(){
            room_info_fixed()
        },600)
    })
    room_info_fixed()




    const room_special_ui = function(){
        const room_special_wrap = $(".slide-info");
        
        room_special_wrap.each(function(){
            let index = $(this).index()                                
            const slide_btn = $(this).find(".slide-btn"),
            last_num = slide_btn.find(".last-num"),
            swiper_wrap = $(this).find(".room-slide-wrap"),
            prev_btn = slide_btn.find(".prev-btn"),
            next_btn = slide_btn.find(".next-btn"),
            slide = swiper_wrap.find(".swiper-slide");


            last_num.text(slide.length)               
                        
           
            const special_slide = new Swiper($(this).find(".room-slide-wrap"),{
                // effect: "fade",
                // speed: 500,
                loop: true,     
                navigation: {
                    nextEl: $(".slide-info").eq(index).find(".slide-btn .next-btn"),
                    prevEl: $(".slide-info").eq(index).find(".slide-btn .prev-btn"),
                },                               
                on : {
                        slideChangeTransitionEnd: function(){                                                            
                            $(".slide-info").eq(index).find(".index-num").text(this.realIndex + 1)
                        }
                    }      
                })                              
            
        })
      
     
        
    }
    if($(".room-slide-wrap").length > 0){
        room_special_ui()
    }
    

   
})