class Animal {

    constructor(poids){
        this.poids = poids
    }

    reproduire(animal){
        
    }
}

class Felin extends Animal{

    constructor(poids,pelage){
        super(poids);
        this.pelage = pelage;
    }


}

export class Chat extends Felin{

    constructor(poids, pelage){
        super(poids,pelage);
    }

    reproduire(chat){
        var p = chat.pelage;
        
        if (Math.random()>0.5) p = this.pelage;

        return new Chat((this.poids+chat.poids)/2, p );
    }

}