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
  });


  addEmployee(){
    console.log("added !!!"); 
    const value = this.formData.value; 
    console.log(value);
    
    console.log(this.formData);    
  }
}
