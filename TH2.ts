class Point {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    displayname = Point;

    hienthi(b:Point) {
        let ax = this.x - b.x;
        let ay = this.y - b.y;

        return Math.hypot(ax, ay);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(10, 10);
console.log(p1.displayname);
console.log(p1.hienthi(p2));

