export class history {
    id: number;
    details: string;
    amount: number;
    created_at:Date;

    constructor( details: any, amount:number) {
        
      this.id = new Date().getTime();
      this.details = details;
      this.amount=amount;
      this.created_at = new Date();

    }
  
  }
  