import { VeiculoMarca } from './../VeiculoMarca';
import { Veiculo} from './../../Veiculo';
import { Router } from '@angular/router';
import { VeiculoService } from './../veiculo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculo-create',
  templateUrl: './veiculo-create.component.html',
  styleUrls: ['./veiculo-create.component.css']
})
export class VeiculoCreateComponent implements OnInit {

  marcas: VeiculoMarca[] = [
    {value: 'AUDI',viewValue: 'Audi'},
    {value:'HONDA', viewValue: 'Honda'},
  ]

  veiculo: Veiculo = {
    placa: '', 
    chassi:' ', 
    renavam:' ', 
    modelo: '',
    marca:'',
    ano: ' ' 
  }
/*
  veiculo: Veiculo = {
    placa: 'ALA2G20',
    chassi:'9TK',
    renavam:'01xxxxxx-x',
    modelo: 'LX 2.0 CVT',
    marca:'HONDA',
    ano: '2022'
  }
  */
  constructor(private service:VeiculoService, private router: Router) { }

  ngOnInit(): void {
  }

  createVeiculo(): void{
    this.service.create(this.veiculo).subscribe(() => {
      this.service.showMessage('Veiculo Criado');
      this.router.navigate(['/veiculos'])
    })
  }
 
  cancel(): void{
    this.router.navigate(['/veiculos'])
  }
}
