import { VeiculoMarca } from './../VeiculoMarca';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from './../../Veiculo';
import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-veiculo-update',
  templateUrl: './veiculo-update.component.html',
  styleUrls: ['./veiculo-update.component.css']
})
export class VeiculoUpdateComponent implements OnInit {

  veiculo!: Veiculo;
 
  constructor(private service: VeiculoService, private router:Router, private activatedRoute: ActivatedRoute) { }
 
  marcas: VeiculoMarca[] = [
    {value: 'AUDI',viewValue: 'Audi'},
    {value:'HONDA', viewValue: 'Honda'},
  ]
  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id')!
    this.service.readById(id).subscribe(veiculo => {
      this.veiculo = veiculo;
    } )
  }
 
  updateVeiculo(): void{
    this.service.update(this.veiculo).subscribe(() =>{
      this.service.showMessage("Veiculo atualizado com sucesso!")
      this.router.navigate(["/veiculos"])
    })
  }
 
  cancel(): void{
    this.router.navigate(['/veiculos'])
  }

}
