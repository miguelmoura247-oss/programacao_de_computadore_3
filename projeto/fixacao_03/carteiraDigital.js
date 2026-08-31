var nome;
let saldo = 0;

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
            return this.saldo;
        }
    }
    sacar(valor){
        if(valor<0){
            this.saldo -= valor;
            return this.saldo;
        }
    }
    consultarSaldo(){
        return this.saldo;
    }

    exibirInformacoes(){
        console.log(this.saldo);
        console.log(this.titular);
    }
}
