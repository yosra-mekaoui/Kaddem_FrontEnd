import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/Models/Departement';
import { FileHandle } from 'src/app/Models/file-handle.model';
import { universite } from 'src/app/Models/Universite';
import { ServiceUniversiteService } from 'src/app/serviceUniversite/service-universite.service';

@Component({
  selector: 'app-update-universite',
  templateUrl: './update-universite.component.html',
  styleUrls: ['./update-universite.component.css']
})
export class UpdateUniversiteComponent implements OnInit {
  list:any[]=[];
  selectedObject !:Departement;
  theValue!:any;
  myUniv!:any;
  reactiveForm=this.fb.group(
    {
       idUniv:[''],
      nomUniv:[''],
      departements:[],
      images:[]
    }
  );
  u!:universite;

  constructor(private fb:FormBuilder,private actR: ActivatedRoute,private R:Router,private serviceUniv:ServiceUniversiteService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.serviceUniv.getDepartById(this.actR.snapshot.params["idUniv"]).subscribe(data=>{
      this.myUniv=data;
      
    this.reactiveForm.patchValue({idUniv:this.myUniv.idUniv, nomUniv:this.myUniv.nomUniv});
    });
    

  //  this.image();
  
console.log(this.myUniv)
  }
  get idUniv(){
    return this.reactiveForm.get('idUniv')
  }
  get nomUniv(){
    return this.reactiveForm.get('nomUniv');
  
  }
  removeImage(idImage:number){
    this.serviceUniv.deleteImg(this.myUniv.idUniv,idImage).subscribe( date=>
      location.reload()
    );
    //this.R.navigate(['update/',this.myUniv.idUniv]);
   
  }
  numSequence(n: number): Array<number> {
    return Array(n);
  }
  update(){
   this.myUniv.nomUniv=this.reactiveForm.value.nomUniv;
    this.serviceUniv.UpdateDepart(this.myUniv.idUniv,this.myUniv).subscribe(data=>{

      this.R.navigate(['listUniv']);
    }
    )
    
  }
  onFileSelected(event:any){
    console.log(event);
 if(event.target.files){
   const file=event.target.files[0]; 
   const FileHandle:FileHandle={
     file: file,
     url:this.sanitizer.bypassSecurityTrustUrl(
       window.URL.createObjectURL(file)
     )
   }
 this.myUniv.images.push(FileHandle);
 alert(this.myUniv.images)
 }
   }

  public image(){
    
    const images : any[]=this.myUniv.images;
    const univImagesToFileHandle:FileHandle[]=[];
    for(let i=0;i<images.length;i++){
      const imageFileData=images[i];
      const imageBlob=this.dataURLtoBlob(imageFileData.picBytes,imageFileData.type);
      const imageFile=new File([imageBlob],imageFileData.name,{type:imageFileData.type});
      const finalFileHandle:FileHandle=  {
        file:imageFile,
        url:this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };
      univImagesToFileHandle.push(finalFileHandle);

    }
this.myUniv.images=univImagesToFileHandle;
    alert(this.myUniv.images)
  }
   public dataURLtoBlob(picBytes:any,imageType:any){
    const byteString=window.atob(picBytes);
    const arrayBuffer=new ArrayBuffer(byteString.length);
    const intBArray=new Uint8Array(arrayBuffer);
    for(let i=0;i<byteString.length;i++){
      intBArray[i]=byteString.charCodeAt(i);
    }
    const blob =new Blob([intBArray],{type:imageType});
    return blob;
   }
}
