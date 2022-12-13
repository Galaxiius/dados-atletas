// Cria a classe atleta
class Atleta{
    constructor(nome, idade, peso, altura, notas){
        //Armazena o nome
        this.nome = nome
        //Armazena a idade
        this.idade = idade
        //Armazena o peso
        this.peso = peso
        //Armazena a altura
        this.altura = altura
        //Armazena as notas
        this.notas = notas
    }

    //Cria a função para calcular a categoria do atleta
    calculaCategoria(){
        if(this.idade >= 9 && this.idade<= 11){
            return "Infantil"
        }   
        else if(this.idade >=12 && this.idade <=13){
            return "Juvenil"
        }

        else if(this.idade >= 14 && this.idade <= 15){
            return "Intermediário"
        }

        else if(this.idade >= 16 && this.idade <=30){
            return "Adulto"
        }
        else{
            return "Sem categoria"
        }
    }
    //Calcula e retorna o IMC do atleta com duas casas após a vírgula
    calculaIMC(imc){
        imc = (this.peso / (this.altura * this.altura)).toFixed(2)
        return imc
    }
    //Calcula a média do atleta, baseado em suas notas sem a maior nem a menor nota
    calculaMediaValida() {
        //Pega o array das notas e armazena em notas
        let notas = this.notas;
        //Pega o valor de notas e os retorna de forma crescente
        let notasOrganizadas = notas.sort(function comparaNumeros(a, b) {
            return a - b
        })
        //Pega o array organizado e retira a maior e a menor nota (solicitado no enunciado)
        let notasComputadas = notasOrganizadas.slice(1, 4)

        //Define a variavel soma, onde reduz o array a um unico valor
        let soma = notasComputadas.reduce(function (total, atual) {
            return total + atual
        }, 0)

        //Define o valor da media seguido de duas casas após a vírgula
        this.media = (soma / notasComputadas.length).toFixed(2);
        
        //Retorna a média
        return this.media;
    }

    //Retorna o nome do atleta
    obtemNomeAtleta(){
        return `Nome: ${this.nome}`
    }

    //Retorna a idade do atleta
    obtemIdadeAtleta(){
        return `Idade: ${this.idade}`
    }

    //Retorna o peso do atleta
    obtemPesoAtleta(){
        return `Peso: ${this.peso}`
    }

    //Retorna as notas do atleta 
    obtemNotasAtleta(){
        return `Notas: ${this.notas}`
    }

    //Retorna a categoria do atleta de acordo com a função de calculo da categoria
    obtemCategoria(){
        return `Categoria: ${this.calculaCategoria()}`
    }

    //Retorna o IMC do atleta
    obtemIMC(){
        return `IMC: ${this.calculaIMC()}`
    }

    //Retorna a média válida do atleta
    obtemMediaValida(){
        return `Média válida: ${this.calculaMediaValida()}`
    }
}

//Teste das funções com uma nova entrada de dados
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.obtemCategoria())