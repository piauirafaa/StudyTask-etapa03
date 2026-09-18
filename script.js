const formulario =
document.getElementById("loginForm");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const email =
document.getElementById("email").value;
    const senha =
document.getElementById("senha").value;

    const mensagem =
document.getElementById("mensagem");
    if(email === "" || senha === ""){
        mensagem.textContent = "Preencha todos os campos.";
    }else{
        mensagem.textContest = "Login realizado!";
    }
})