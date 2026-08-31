var nome;
saldo = 0;

class CarteiraDigital {
    constructor(){
        this.titular = "";
        this.saldo = 0;
    }
    
    definirTitular(nome){ 
        this.titular = nome;
        return nome;
    }

    consultarTitular(nome){
      return this.titular;
    }

    depositar(valor){
        if(valor>0){
            this.saldo += valor;
            return console.log(this.saldo,"reais depositados.");
        }
    }
    
    sacar(valor){
        if(valor>0){
            this.saldo -= valor;
            return console.log("seu saldo após saque é:",this.saldo);
        }
    }

    consultarSaldo(){
        return console.log("o seu saldo é ",this.saldo);
    }

    exibirInformacoes(){ 
        console.log("o titular é:", this.titular);
        console.log("o novo saldo é:", this.saldo);
    }
}
module.exports = CarteiraDigital;