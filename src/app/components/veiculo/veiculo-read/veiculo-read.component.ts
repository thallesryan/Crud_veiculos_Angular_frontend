import { VeiculoService } from './../veiculo.service';
import { Veiculo } from './../../Veiculo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculo-read',
  templateUrl: './veiculo-read.component.html',
  styleUrls: ['./veiculo-read.component.css']
})
export class VeiculoReadComponent implements OnInit {

  veiculos: Veiculo[] = [];

  displayedColumns=['id','placa', 'chassi', 'renavam', 'modelo','marca','ano', 'acoes']


 
  constructor(private service: VeiculoService) { }
 
  ngOnInit(): void {
    this.service.read().subscribe(veiculos => {
      this.veiculos = veiculos
      console.log(veiculos)
    })
  }

  createPdf(id:number):void{
    this.service.downlaodPdf(id).subscribe( res =>{
      let url = window.URL.createObjectURL(res);
      let a = document.createElement('a');
      a.href = url;
      a.download = "Download pdf";
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    })
  }
}
