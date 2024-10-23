let count = 1; //Varialve count recebe 1
document.getElementById("radio1").checked = true; //Deixa o primeiro radio ativado

setInterval ( function(){ //Função para a cada 3.5 seg ativar a função nextImage
    nextImage();
}, 3500)


function nextImage(){ //Função soma 1 na variavel count e cria um loop para que quando count > 4, count = 1. 
    count++;
    if (count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true; //Aciona os radio na ordem da variavel count. (1,2,3,4,1,2...)
}

