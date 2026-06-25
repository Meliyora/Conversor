function converter(){
let opcao,valor,total;


opcao=parseInt(document.getElementById ("txtopcao").value);
valor=parseFloat(document.getElementById ("txtvalor").value);

switch(opcao){ 
case 1:
    total=valor/5.21;
    resultado.innerHTML="Resultado US$ "+ total.toFixed(2);
    break;
    case 2:
     total= valor/5.92;
     resultado.innerHTML= "Resultado €$ "+ totaltoFixed(2);
     break;
       default:
        resultado.innerHTML="opção inválida";





}

}