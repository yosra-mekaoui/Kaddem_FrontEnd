import {Component, OnInit} from '@angular/core';
import {Contrat} from "../../Models/Contrat";
import {Router} from "@angular/router";
import {ContratService} from "../../../services/contrat.service";
import {FormBuilder} from "@angular/forms";
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {
  contrat = this.fb.group({
    sdate: [''],
    edate: [''],
  });

  public listcontrat: Contrat[] = [];
  searchText: any;
  totalContrats = 0 ;

  constructor(private fb: FormBuilder, private ContratService: ContratService, private router: Router, private toastr: ToastrService) {
  }


  num = 4;
  page = 1;

  ngOnInit(): void {

// zid contrat maandich 8
    this.pagination();
    this.getContrat();
//this.notificate();
  }

  search() {
    if (this.searchText != "") {
      this.listcontrat = this.listcontrat.filter(res => {
        return res.etudiant.nom.toLocaleUpperCase().match(this.searchText.toLocaleUpperCase())
      })
    } else if (this.searchText == "") {
      this.ngOnInit();
    }
  }

  private notificate() {
    this.ContratService.notificationContrat().subscribe(data => {
      this.toastr.success(',' + data);
    });
  }

  private getContrat() {
    this.ContratService.getContrat().subscribe(data => {

      this.listcontrat = data;
      this.totalContrats = this.listcontrat.length ;

    });

  }

  deletecontrat(id: number) {
    this.ContratService.deleteContrat(id).subscribe(data => {

      this.getContrat();
      this.toastr.error('Contrat supprimé avec succés');
    })
  }

  nbcontratvalide() {
    let contrat = this.contrat.getRawValue();
    var sdate = new Date(contrat.sdate);
    var edate = new Date(contrat.edate);
    var day = sdate.getDate(); //Date of the month: 2 in our example
    var month = sdate.getMonth(); //Month of the Year: 0-based index, so 1 in our example
    var year = sdate.getFullYear() //Year: 2013
    var day1 = edate.getDate(); //Date of the month: 2 in our example
    var month1 = edate.getMonth(); //Month of the Year: 0-based index, so 1 in our example
    var year1 = edate.getFullYear() //Year: 2013
    var sdatefinal = year + "-" + month + "-" + day;
    var edatefinal = year1 + "-" + month1 + "-" + day1;
    this.ContratService.nbcontratvalide(sdatefinal, edatefinal).subscribe(data => {
      console.log(sdatefinal);
      console.log(edatefinal);
      alert(data);
      //this.toastr.success('Nombre de contrat valide est :'+data);

    });
  }

  pdf() {
    this.ContratService.pdf().subscribe(data => {
      const blob = new Blob([data], {type: 'application/pdf'});
      if (window.navigator && (window.navigator as any).msSaveOrOpenBlob) {
        (window.navigator as any).msSaveOrOpenBlob(data);

        return;
      }
      const data1 = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = data1;
      link.download = "contrat.pdf";
      link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));
      setTimeout(function () {
        window.URL.revokeObjectURL(data1);
        link.remove();
      }, 100);
    });

  }

  pagination() {
    this.ContratService.pagination(this.num, this.page).subscribe(data => {
      this.listcontrat = data;
    });

  }
}
