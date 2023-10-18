import { BebeNormal } from "./model/BebeNormal";
import { BebeNatimorto } from "./model/BebeNatimorto";
import { BebePrematuro } from "./model/BebePrematuro";


const b1 = new BebeNormal ('vacinado contra hepatite', 'joao',3.5 ,50 );

b1.setVacinado(`vacinado contra hepatite `)
b1.setNome(`joao`);
b1.setPeso(3.5);
b1.setAltura(50);

console.log(`Nome: ${b1.getNome()},`);
console.log(`Peso: ${b1.getPeso()}`);
console.log(`Altura: ${b1.getAltura()}`);
console.log(`vacinado: ${b1.getVacinado()}`);

const b2 = new BebePrematuro (40,`bebe2`, 2.5, 0.50);
b2.setNome(`bebe2`);
b2.setSemanasGestacao(40)
b2.setPeso(2.5);
b2.setAltura(0.50);

console.log(`Nome: ${b2.getNome()},`);
console.log(`Peso: ${b2.getPeso()}`);
console.log(`Altura: ${b2.getAltura()}`);
console.log(`semanaGestacao: ${b2.getSemanasGestacao()}`);

const b3 = new BebeNatimorto (`falta de oxigenio`,`bebe3`, 2.0, 0.30);
b3.setCausa(`falta de oxigenio`)
b3.setNome(`BebeFeliz`);
b3.setPeso(3.5);
b3.setAltura(50);

console.log(`Nome: ${b3.getNome()},`);
console.log(`Peso: ${b3.getPeso()}`);
console.log(`Altura: ${b3.getAltura()}`);
console.log(`semanaGestacao: ${b3.getCausa()}`);




