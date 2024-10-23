function validarFormulario() {
    const nomeRegex = /^[a-zA-Z\s]+$/; //Regex Nome apenas letras
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  //Regex email formato: xxxxx@zzzzz.zzz
    const celuRegex = /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/; //Regex telefone formato: 11(11)111-1111
    const cpfRegex = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/;//Regex cpf formato: xxx.xxx.xxx-xx




    const nome = document.getElementById("nome").value; //armazena na variavel nome o input do usuário no campo nome
    const email = document.getElementById("email").value; //armazena na variavel email o input do usuário no campo email
    const celu = document.getElementById("celu").value; //armazena na variavel celu o input do usuário no campo celu
    const cpf = document.getElementById("cpf").value; //armazena na variavel cpf o input do usuário no campo cpf



    if(!nomeRegex.test(nome)) { //Se dentro do campo nome existir algum caracter que não coincida com os descritos no Regex um alert aparecerá com a mensagem de erro.
        alert("Nome invalido. Use apenas letras e espaços. ");
        return false;
    }

    if(!emailRegex.test(email)){ //Se dentro do campo email existir algum caracter que não coincida com os descritos no Regex um alert aparecerá com a mensagem de erro.
        alert("Email invalido. Insira um e-mail valido. ");
        return false;
    }

    if(!celuRegex.test(celu)){ //Se dentro do campo celu existir algum caracter que não coincida com os descritos no Regex um alert aparecerá com a mensagem de erro.
        alert("Numero de telefone invalido . Use o formato +xx(xx)xxx-xxxx ");
        return false;
    }

    if(!cpfRegex.test(cpf)) { //Se dentro do campo cpf existir algum caracter que não coincida com os descritos no Regex um alert aparecerá com a mensagem de erro.
        alert("O CPF deve conter o formato 000.000.000-00 ");
        return false;
    }

    var s1 = document.getElementById("senha").value; //variavel s1 recebe o valor do input no campo senha
    var s2 = document.getElementById("confirmarsenha").value; //variavel s2 recebe o valor do input confirmarsenha
    if(s1 != s2){  //Se senha1!senha2 mensagem de erro
        alert("A senha não conferem!")
        return false;
    }
    
    return true; // Se todos os campos forem preenchidos corretamente o acesso a próxima página é liberado
}