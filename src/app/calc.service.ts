import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }


  public add(a: number,b:number): number {
    return a+b;
  }
 
  public soustract(a: number,b:number): number {
    return a-b;
  }

  public devide(a: number,b:number): number {
    return a/b;
  }

  public multiply(a: number,b:number): number {
    return a*b;
  }
}
