    /*
    1- Write a JavaScript conditional statement to find the largest of five numbers. 
    Display an alert box to show the result.

    Sample numbers : -5, -2, -6, 0, -1 
    Output : 0
    */

    Array.max = function(array) {
        return Math.max.apply(Math, array);
    };

    var myarray = [-5, -2, -6, 0, -1];
    alert('Maior valor Dentro do Array: '+  Array.max(myarray) ); 

    /*
    2- Write a JavaScript function that generates all combinations of a string.
    Example string: 'dog' 
    Expected Output: d,o,do,g,dg,og,dog
    */

    function dog(str1) {
        var array1 = [];
        for (var x = 0, y=1; x < str1.length; x++,y++) 
        {
        array1[x]=str1.substring(x, y);
        }
    var combi = [];
    var temp= "";
    var slent = Math.pow(2, array1.length);

    for (var i = 0; i < slent ; i++)
    {
        temp= "";
        for (var j=0;j<array1.length;j++) {
            if ((i & Math.pow(2,j))){ 
                temp += array1[j];
            }
        }
        if (temp !== "")
        {
            combi.push(temp);
        }
    }
        console.log(combi.join("\n"));
    }

    dog("dog");



        /*
    3- Write a JavaScript program to display the colors in the following way:

    Here is the sample array:
    color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
    o = ["th","st","nd","rd"]
    Output
    "1st choice is Blue ."
    "2nd choice is Green."
    "3rd choice is Red."
    */

    var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
    var o = ["th","st","nd","rd"];



        /*
    4- O que a função abaixo irá retornar?
    A função irá retornar 1 
    */

    var x = 1;
    var output = (function() {
    delete x;
    return x;
    })();

    console.log(output);


        /*
    4- O que a função abaixo irá retornar?

    a defined? false
    b defined? true

    */

    (function(){
        var a = b = 3;
    })();

    console.log("a defined? " + (typeof a !== 'undefined'));
    console.log("b defined? " + (typeof b !== 'undefined'));


        /*
    5- O que a console.log abaixo irá retornar?
    1
    truexyz
    2
    1

    */
    var bar = true;
    console.log(bar + 0);   
    console.log(bar + "xyz");  
    console.log(bar + true);  
    console.log(bar + false);


        /*
    6- Para que server a função isNaN ?
    A função isNAN() determina se o valor é NaN ou não. No javascript todos os operadores 
    de igualdade retornão como false por padrão. Por esse motivo é bom usarmos essa function. 
    Os valores NaN são gerados quando operações aritiméticas tem 
    como valores: undefined ou unrepresentable
    */
    const name = 'Thales';
    isNaN(name);


        /*
    7- O que é uma variável global, para que ela serve e como ela é declarada?

     Varável global  fica disponível para todo o PROGRAMA, pode ser acessada de 
     qualquer lugar do código, DENTRO DE UMA FUNCTION, FORA DE UMA FUNCTION ETC. Geralmente ela é 
     declarada fora do escopo do um function. 
     exemplo: 
     Const  y = true. 
    */

    
        /*
    8- Qual a função usada para transformar uma string em um número inteiro ?
    É a função parseInt 
    */

    parseInt('Hello', 8); 


        /*
    9- O que é RESTful API, cite dois exemplos de onde podemos usá-lo ?

    REST significa Representational State Transfer.
    Resumidamente, o REST consiste em princípios/regras/constraints que, quando seguidas, 
    permitem a criação de um projeto com interfaces bem definidas. Desta forma, permitindo, 
    por exemplo, que aplicações se comuniquem
    o	REST: conjunto de princípios de arquitetura
    o	RESTful: capacidade de determinado sistema aplicar os princípios de REST.

    */


        /*
    10- Escreva 3 IFs diferentes usando os 3 operadores lógicos possíveis (E, OU, Diferente) ?
    */

    (function(){
        const x = 10;
        const y = 5;
        console.log('Operador E '+ x && y); 

    })();

    (function(){
        const a = 1;
        const b = 2;
        console.log('operador OU '+ a || b ); 

    })();


    (function(){
        const c = 15;
        const d = 25;
        console.log('Operador Diferente ' + c !== d );

    })();


    /*
    BONUS- Escreva um console.log() juntando a seguinte variável com a seguinte string na 
    mesma linha de código usando o padrão ES6.
    */

    var nome = 'Joao';
    //string a ser usada ‘Meu nome é’



