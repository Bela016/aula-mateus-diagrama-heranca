import { Bebe } from "./bebe";

    export class BebeNormal extends Bebe {
    private vacinado : string;

    public constructor(_vacinado:string, _nome:string,_peso:number,_altura:number){
        super(_nome,_peso,_altura);
        this.vacinado = _vacinado;
    }
    public setVacinado (_vacinado : string):void{
        this.vacinado = _vacinado;
    }
    public getVacinado () : string {
        return this.vacinado;
    }
        

}