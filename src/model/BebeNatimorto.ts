import { Bebe } from "./bebe";

    export class BebeNatimorto extends Bebe {
    private causa : string;

    public constructor(_causa:string, _nome:string,_peso:number,_altura:number){
        super(_nome,_peso,_altura);
        this.causa = _causa;
    }
    public setCausa (_causa : string):void{
        this.causa = _causa;
    }
    public getCausa () : string {
        return this.causa;
    }
}