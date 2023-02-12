class Shape{
    public color:string;
    public filled:boolean;


    constructor(color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
    }
}
let shape = new Shape("red", false);

console.log(shape);




class Circle{
    public color:string;
    public filled:boolean;
    public r:number;


    constructor(color: string, filled: boolean,r:number) {
        this.color = color;
        this.filled = filled;
        this.r = r;

    }

    get_area(){
        let s:number=0;
        s=Math.pow(this.r,2)*Math.PI
        console.log(s)
    }
    get_Perimeter(){
        let C:number=0;
        C= 2*Math.PI*this.r;
        console.log(C)
    }
}
let circle = new Circle("indigo", false,3.5);

console.log(circle);




class Rectangle{
    public color:string;
    public filled:boolean;
    public width:number;
    public length:number;

    constructor(color: string, filled: boolean, width: number, length: number) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.length = length;
    }
    getArea(){
        let s:number;
        s=this.width*this.length;
        console.log(s)
    }getPerimeter(){
        let c:number;
        c=(this.width+this.length)*2;
        console.log(c);
    }
}
let rectangle = new Rectangle("orange", true,5,3);

console.log(rectangle)


class Square{
    public color:string;
    public filled:boolean;
    public side:number;


    constructor(color: string, filled: boolean, side=10) {
        this.color = color;
        this.filled = filled;
        this.side = side;
    }
}
let square = new Square("yellow", true, 5.8);

console.log(square);