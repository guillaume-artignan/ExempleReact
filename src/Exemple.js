
export default class Perso {
    nom:string;
    prenom:string;

    constructor(nom,prenom){
        this.nom = nom;
        this.prenom = prenom;
    }
}

export  var tab = ["1","2","3"];

export function hello(){
    console.log(Perso);
}