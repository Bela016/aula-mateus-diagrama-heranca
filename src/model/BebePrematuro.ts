import { Bebe } from "./bebe";

    export class BebePrematuro extends Bebe {
    private semanasGestacao : number;

    public constructor(_semanasGestacao:number, _nome:string,_peso:number,_altura:number){
        super(_nome,_peso,_altura);
        this.semanasGestacao = _semanasGestacao;
    }
    public setSemanasGestacao (_semanasGestacao : number):void{
        this.semanasGestacao = _semanasGestacao;
    }
    public getSemanasGestacao () : number {
        return this.semanasGestacao;
    }
}