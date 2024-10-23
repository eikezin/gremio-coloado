function validarFormulario() {
    const nomeRegex = /^[a-zA-Z\s]+$/; //Regex Nome apenas letras
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Regex email formato: xxxxx@zzzzz.zzz
    const horaRegex = /([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]/; //Regex Hora formato: xx:xx:xx
    const valorRegex = /^\d+$/; //Regex valor apenas números




    const nome = document.getElementById("nome").value; //armazena na variavel nome o input do usuário no campo nome
    const email = document.getElementById("email").value; //armazena na variavel email o input do usuário no campo email
    const hora = document.getElementById("hora").value; //armazena na variavel hora o input do usuário no campo hora
    const valor = document.getElementById("valor").value; //armazena na variavel valor o input do usuário no campo valor



    if(!nomeRegex.test(nome)) { //Se dentro do campo nome existir algum caracter que não coincida com os descritos no Regex um alert aparecerá com a mensagem de erro.
        alert("Nome invalido. Use apenas letras e espaços. ");
        return false;
    }

    if(!emailRegex.test(email)){ //Se dentro do campo email existir algum caracter que não coincida com os descritos no Regex um alert aparecerá com a mensagem de erro.
        alert("Email invalido. Insira um e-mail valido. ");
        return false;
    }

    if(!horaRegex.test(hora)){ //Se dentro do campo hora existir algum caracter que não coincida com os descritos no Regex um alert aparecerá com a mensagem de erro.
        alert("Campo Horário Inválido . Use o formato XX:XX:XX");
        return false;
    }

    if(!valorRegex.test(valor)) { //Se dentro do campo valor existir algum caracter que não coincida com os descritos no Regex um alert aparecerá com a mensagem de erro.
        alert("Campo Valor Inválido. Utilize apenas números.");
        return false;
    }

    var s1 = document.getElementById("senha").value; //variavel s1 recebe o valor do input no campo senha
    var s2 = document.getElementById("confirmarsenha").value; //variavel s2 recebe o valor do input confirmarsenha
    if(s1 != s2){ //Se senha1!senha2 mensagem de erro
        alert("A senha não conferem!")
        return false;
    }
   
    return true; // Se todos os campos forem preenchidos corretamente o acesso a próxima página é liberado
} 