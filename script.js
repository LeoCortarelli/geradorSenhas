let sliderElement = document.querySelector("#slider");   // Pegando do ID slider
let buttonElement = document.querySelector("#button");   // Pegando o button pelo ID

let tamanhoSenhaElement = document.querySelector("#valor");   // Pegando o tamanho da senha pelo id valor
let senha = document.querySelector("#password");   // Pegando a senha 

let containerSenha = document.querySelector("#container-password");  // Pegando a div para ela ser visivel


// Os caracteres que podemos gerar
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let novaSenha = '';

tamanhoSenhaElement.innerHTML = sliderElement.value;

slider.oninput = function(){
    tamanhoSenhaElement.innerHTML = this.value;
}

function generatePassword(){
    let pass = '';
    for(let cont = 0, n = charset.length; cont < sliderElement.value; ++cont){
        pass += charset.charAt(Math.floor(Math.random() * n)); // (Math.floor ele gera um numero inteiro) (Math.random() gera um numero aleatorio)
        
        containerSenha.classList.remove("hide")
        senha.innerHTML = pass;
        novaSenha = pass;
    }
}

function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}