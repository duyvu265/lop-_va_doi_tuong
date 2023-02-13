class QuadraticEquation {
    a: number
    b: number
    c: number

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    geta(): number {
        return this.a;
    }

    getb(): number {
        return this.b;
    }

    getc(): number {
        return this.c;
    }

    getDiscriminant():number{
        return Math.pow(this.b,2)-4*this.a*this.c
    }
    getRoot1():number{
        return (-this.b+Math.sqrt(Math.pow(this.b,2)-4*this.a*this.c))/2*this.a
    }getRoot2():number{
        return (-this.b-Math.sqrt(Math.pow(this.b,2)-4*this.a*this.c))/2*this.a
    }hienthi(){
        if (this.getDiscriminant()>0){
            console.log(this.getRoot1());
            console.log(this.getRoot2());
        }else if (this.getDiscriminant()==0){
            console.log(this.getRoot1());
        }else {
            console.log("The equation has no roots")
        }
    }
}

let pt=new QuadraticEquation(1,3,1);

pt.hienthi();