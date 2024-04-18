//efeito do botão voltar ao Topo
function topo(){
   
    history.back()
      
    
}

//Validação de Login
function login(){
    var logado = 0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementById('senha').value;
    senha = senha.toLowerCase();
    if ( usuario == "admin" && senha == "123456"){
        window.location = "index.html";
        logado = 1;
    }
    if (logado == 0) {
        alert("acesso Negado. Dados incorretos")
        
    }
}


//Ativar alert no botão cadastrar
function cadastro() {
    alert("Cadastrado com sucesso!");
    window.location.href = "index.html";
    }
