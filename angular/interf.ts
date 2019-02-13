interface Greeter { 
    (a: number): number;
}

interface abc { 

    x: number;
    y: number;    
}

interface cv { 
    constructor(a:number, b: number)
}

var x: (abc) => number;

var ob: abc = { x: 23, y: 34 };

x = (a: abc) => (ob.x + ob.y);

x(ob);