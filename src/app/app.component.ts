import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'advanced';



  formData = new FormGroup({
    fullname: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    Adress: new FormGroup({
      city: new FormControl('',Validators.required),
      code: new FormControl('',Validators.required),
      address : new FormControl('',Validators.required),
    }),
    phone: new FormControl('',[Validators.required, Validators.maxLength(8)]),  
  });



  addEmployee(){
    console.log("added !!!"); 
    const value = this.formData.value; 
    console.log(value);
    
    console.log(this.formData);    
  }

  //Getter for The FormNameGroup
  get address(): any { return this.formData.get('Adress.address');}
  get Adress(): any { return this.formData.get('Address');}

  get code():any { return this.formData.get('Adress.code');}
  get city():any { return this.formData.get('Adress.city');}
}
