export abstract class Bebe{
    private nome : string;
    private peso :number;
    private altura : number;

    public constructor(_nome:string,_peso:number,_altura:number){
        this.nome = _nome;
        this.peso = _peso;
        this.altura =_altura;
    }
    public setNome (_nome : string):void{
        this.nome = _nome;
    }

    public getNome () : string {
        return this.nome;
    }
    public setPeso (_peso: number):void{
        this.peso = _peso;
    }

    public getPeso () : number {
        return this.peso;
    }
    public setAltura (_altura: number ):void{
        this.altura = _altura;
    }

    public getAltura (): number {
        return this.altura;
    }


}

