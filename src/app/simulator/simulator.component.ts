import { Component, OnInit } from '@angular/core';
import { CalcService } from '../calc.service';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {
sum!:number;
soustract!:number;
devide!:number;
multiply!:number;

  constructor(private calc: CalcService) { //dependencies injection

  }

  ngOnInit() {
    this.sum = this.calc.add(1, 2);
    this.soustract = this.calc.soustract(10, 2);
    this.devide = this.calc.devide(20, 4);
    this.multiply = this.calc.multiply(10, 6);
  }

}
