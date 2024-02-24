
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function (){
    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...")
    })
    $("h4").dblclick(function(){
$(this).css("color","#dc3545")
    })

    $(".card-title").click(function(){
        $(".card-img-top").toggle()
    })


    $(".card-title").click(function(){
        $(".card-body").toggle()        
    })
    
})

