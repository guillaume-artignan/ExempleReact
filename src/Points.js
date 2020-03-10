import {carre} from './Math.js';

export default class Point{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    distance(autre){
        return Math.sqrt(carre(this.x-autre.x)
                        +carre(this.y-autre.y) 
                        +carre(this.z-autre.z));
    }
}

export function centroid(pts){
    var p = new Point(0,0,0);
    for (var i = 0;i<pts.length;i++){
        var pt = pts[i];
        p.x += pt.x;
        p.y += pt.y;
        p.z += pt.z;
    }
    
    p.x = p.x / pts.length;
    p.y = p.y / pts.length;
    p.z = p.z / pts.length;
    return p;
}




/*var p1 = new Point(15,20,30);
var p2 = new Point(30,25,15);

var d = p1.distance(p2);*/

