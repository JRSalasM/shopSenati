export class products {
    id: number;
    name: string;
    details:string;
    price:number;
    created_at: Date;
    img:string;

    constructor(id:number, name: string, details: string, price: number, img:string, date:Date) {
        
      this.id =id;
      this.name = name;
      this.details = details;
      this.price = price;
      this.img = img;
      this.created_at = date;

    }
  
  }
  