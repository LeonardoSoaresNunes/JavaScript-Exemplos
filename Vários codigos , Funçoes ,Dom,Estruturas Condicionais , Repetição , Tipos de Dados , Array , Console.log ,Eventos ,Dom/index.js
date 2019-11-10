/*
Leonardo Soares Nunes 
Tecnico em Informatica pelo IFMG
Técnologo em Analise e Desenvolvimento de 
Sistemas Pela unicesumar Maringá
de Belo Horizonte-MG
Desenvolvedor FullStack e Empreendedor 

*/
//Esse é um comentario de uma linha  no JS
/*
Esse é um comentario de varias linhas no JS
Leonardo Soares nunes 
Nada disso aparecerar na tela no navegador 
clinte side

*/ 
/*Para Executar alguns codigos será necessario 
comentar outros */
//variaveis JavaScript
//document.write("Leonardo Soares Nunes");
//var mensagem = "Olá Mundo!";
//alert(mesagem);

//Operações Matematicas
/*
var a = 2 ;
var b = 3 ;

var soma = a + b;
var sub = a - b;
var mult = a * b;
var div = a / b;
//Resultado com alert 
alert(soma);
alert(sub);
alert(mult);
alert(div);

//Estruturas Condicionais javaScript 
/*Verifica se algumas estruturas se adequadam a algumas 
funçoes 
   */ 
 // alert(9%2);
/*
var a = 2;
var b = 3;
var c = "Olá Mundo";

var soma = a + b;
var sub = a - b;
var mult = a * b;
var div = a / b;

if (b%a == 1){
    alert("Numero Impar")
}
//caso condição if falhe nao seja verdadeira 
//ira executar o comando else
else if (c % 2 ==1) {
    alert ("Numero par");
    }
else {
    alert("valor Inválido");
}
*/
//Estruturas de Repetição
//Repeti ate que uma condiçao seja verdadeira 

/*
var i = 0 ;
while ( i < 10 ){
    alert (i);
    i  = i + 1;

}
//Temos também o laço for 
// executa para uma tederminada condição
for (var l = 0; l < 10; l++) {
    alert(l);
}
*/

//Tipos de Dados em JavaScript
// inteiro 
// float ou decimal
/*
var numero = 5 ;
var decimal = 4.5;
var texto = "Olá Mundo";
var lista = ["Laranja ","Maçã", "Banana"];

alert(lista);

//Array 
alert (lista[2]);

for ( i in lista){
    //alert([i]);
    alert (lista [i]);
}
*/
//Console.log
// alert cria a janela e nao sai enquanto 
//não clica em ok
console.log("Olá Mundo")


/*Funções são blocos que serao executados se 
forem chamadas
*/
/*
function soma(a , b){
    console.log(a + b);
}

//soma(2 ,2 );
function subtracao (a , b ){
    return a - b ;
    }
    var s = subtracao (5 , 3 );
    //console.log(s);

    function multiplicacao( a , b){
        return a + b ;

    }
    console.log(multiplicacao( 5 , 5 ));
*/

//Eventos - são formas de interção de JS com Html
//Eventos permite interação com a pagina html
/*
function mensagem(nome){
    alert("Você clicou em mim " +nome);

}
function mensagen (nome){
    alert("Ei volte aqui " + nome);
}
*/
//Dom Modelo de Objeto de Documento
// Documenet Object Model
function mudaCor(cor){
    var elemento = document.getElementById("mensagem");
    elemento.style.color = cor;
}
//function mudaCor(cor){
    //var elemento = document.getElementById("mensagem");
  //  elemento.style.backgroundColor = cor;
//}













