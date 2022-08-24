import { Router, ActivatedRoute } from '@angular/router';
import { Veiculo } from './../../Veiculo';
import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-veiculo-delete',
  templateUrl: './veiculo-delete.component.html',
  styleUrls: ['./veiculo-delete.component.css']
})
export class VeiculoDeleteComponent implements OnInit {

  veiculo!: Veiculo;
 
  constructor(
    private service: VeiculoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
 
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.service.readById(id).subscribe((veiculo) => {
      this.veiculo = veiculo;
    });
  }
 
  deleteVeiculo(): void {
    this.service.delete(this.veiculo.id!).subscribe(() => {
      this.service.showMessage("Veiculo excluido com sucesso!");
      this.router.navigate(["/veiculos"]);
    });
  }
 
  cancel(): void {
    this.router.navigate(["/veiculos"]);
  }


}
