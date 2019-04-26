
    $(".tabSwitchWarp .tabTitle").find('a').each(function(index){
        $(this).click(function(){
            $(this).siblings().removeClass('active')
            $(this).addClass('active');
            $(".tabSwitchWarp .switchBox").each(function(){
                $(this).removeClass("active")
            })
            $(".tabSwitchWarp .switchBox").eq(index).addClass("active");
        })
        
        
    })

