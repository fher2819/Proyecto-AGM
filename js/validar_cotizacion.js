const nombre = document.getElementById("nombres")
const telefono = document.getElementById("telefono")
const email = document.getElementById("correo")
const form = document.getElementById("formCotizar")
const parrafo = document.getElementById("warnings")

formCotizar.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/
    parrafo.innerHTML = ""
    if(nombre.value.length <5){
        warnings += 'El nombre no es válido <br>'
        entrar = true
    }
    if(isNaN(telefono.value)){
        warnings += 'El teléfono no es válido'
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += 'El email no es válido <br>'
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        swal({
            title: "Excelente!",
            text: "¡Tu información ha sido enviada con éxito!",
            icon: "success",
            button: "Niceee!",
          });
    }
})