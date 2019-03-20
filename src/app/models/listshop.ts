export class listshop {
    id: number;
    name: string;
    quantity: number;
    price:number;
    total:number;
    img:string;
    created_at:Date;

    constructor( name: string, quantity:number, price:number,total:number,img:string) {
        
      this.id = new Date().getTime();
      this.name = name;
      this.quantity = quantity;
      this.price = price;
      this.total = total;
      this.img=img;
      this.created_at = new Date();

    }
  
  }
  