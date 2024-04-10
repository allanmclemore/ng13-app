import { Product } from "@data/interfaces/product";

export class CartItem {
    
    public ProductId: number;
    public Title: string;
    public Description: string;
    public Price: number;
    public Quantity: number;

    constructor(product : Product, quantity: number) {
        this.ProductId = product.id;
        this.Title = product.title;
        this.Description = product.description;
        this.Price = product.price;
        this.Quantity = quantity;   
    }
    
  
    get TotalPrice(): number {
      return this.Price * this.Quantity;
    }
  }
  