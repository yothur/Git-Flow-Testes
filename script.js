let alteracao = document.getElementById("Alteracao");

const botao = document.getElementById("Botao");

if(botao){
    botao.addEventListener("click", function(evento){
        evento.preventDefault();

        let nome = document.getElementById("Nome").value;
        let email = document.getElementById("Email").value;
        let telefone = document.getElementById("Telefone").value;
        let senha = document.getElementById("Senha").value;
        
        
        if (nome.length > 0 && email.length > 0 && telefone.length == 11 && senha.length >= 8){
            alteracao.style.color = "#00FF00";
            alteracao.style.backgroundColor = "Black";
            alteracao.innerHTML = "Cadastrado!"
            setTimeout(window.location.href = "https://github.com/yothur/Git-Flow-Testes", 3000)
        }else{
            alteracao.style.color = "#FF0000";
            alteracao.style.backgroundColor = "Black";
            alteracao.innerHTML = "Não Cadastrado!"

        }

    })
}

