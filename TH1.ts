class CT_nau_an {
    public tieu_de: string;
    public khau_phan: number;
    public thanh_phan: Array<string>

    constructor(tieu_de: string, khau_phan: number, thanh_phan :Array<string>){
        this.tieu_de = tieu_de;
        this.khau_phan = khau_phan;
        this.thanh_phan = thanh_phan;
    }
    hienthi(){
        console.log(`ten mon an :` +this.tieu_de);
        console.log("khau phan an cho :" +this.khau_phan);
        console.log("thanh phan gom :"+this.thanh_phan)
    }
}let monan=new CT_nau_an("thit kho tau",2,[ 'thit','trung','a','b']);
monan.hienthi()
