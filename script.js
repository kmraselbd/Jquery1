//Select by tag
/*$(document).ready(function(){
    $('p').hide();
})

//Select by class
$(document).ready(function(){
    $('.khan').hide();
})

//Select by id
$(document).ready(function(){
    $('#khan2').hide();
})

//Select by angar tag
$(document).ready(function(){
    $('a').hide();/
    $('[href]').hide();
})

//Select by button tag
$(document).ready(function(){
    $('button').hide();
})

//Select all body 
$(document).ready(function(){
    $('*').hide();
})*/

//hide by click
$(document).ready(function(){
    $('#hide').click(function(){
        $('p').hide();
    })
})

//show by click
$(document).ready(function(){
    $('.show').click(function(){
        $('p').show();
    })
})

//hide doc show by one click
$(document).ready(function(){
    $('.me').click(function(){
        $('.khan').show();
    })
})

//hide doc show by double click
$(document).ready(function(){
    $('#dbl').dblclick(function(){
        $('a').show();
    })
})

//hide button by mouse enter 
$(document).ready(function(){
    $('.enter').mouseenter(function(){
        $(this).hide();
    })
})

//hide button by mouse leave
$(document).ready(function(){
    $('.leave').mouseleave(function(){
        $(this).hide();
    })
})

//hide & show by toggle
$(document).ready(function(){
    $('.hideshow').click(function(){
        $('#khan2').toggle(1000);//here also value fast/slow;
    })
})

//hide & show by toggle(mouseenter/leave)
$(document).ready(function(){
    $('.hideshow').on('mouseenter', function(){
        $('#khan2').toggle(1000);//here also value fast/slow;
    })
})

//Change css style by focus;
$(document).ready(function(){
    $('input').on('focus', function(){
        $('h3').css('background-color', 'green');//here also use css others style;
    })
});

//Google hosted can use two ways 
//1. download jquery file in own pc. 
//2. direct use google CDN (Content Delivery Network) link.