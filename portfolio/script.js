$(document).ready(function(){

           


    $('.About-link').on("click",function(){

        $('.about-section').show();
        $('.services-section').hide();
        $('work-section').hide();

    




       


    })
    
    $('.service-link').on("click",function(){

        $('.about-section').hide();
        $('.services-section').show();
        $('work-section').hide();

      



       


    })
    $('.work-link').on("click",function(){

        $('.about-section').hide();
        $('.services-section').hide();
        $('.work-section').show();

       



       


    })
})


// #2e2e2e

let a = document.getElementById('link3')
let b = document.getElementById('link2')
let c = document.getElementById('link1')


a.addEventListener('click',function(){
    
    document.getElementById('link3').style.backgroundColor = '#f5de89'
    document.getElementById('link1').style.backgroundColor = '#2e2e2e'
    document.getElementById('link2').style.backgroundColor = '#2e2e2e'

    
})
b.addEventListener('click',function(){
    document.getElementById('link3').style.backgroundColor = '#2e2e2e'
    document.getElementById('link2').style.backgroundColor = '#f5de89'
    document.getElementById('link1').style.backgroundColor = '#2e2e2e'
    


})
c.addEventListener('click',function(){
    document.getElementById('link3').style.backgroundColor = '#2e2e2e'
    document.getElementById('link2').style.backgroundColor = '#2e2e2e'
    document.getElementById('link1').style.backgroundColor = '#f5de89'

})