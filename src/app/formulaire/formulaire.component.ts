import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './mustmatch';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class  FormulaireComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    users = [];
    @Output() public childEvent = new EventEmitter();
    constructor() { }

    ngOnInit() {
      this.registerForm = new FormGroup({
        firstName: new FormControl("", Validators.required),
        lastName: new FormControl("", Validators.required),
      
        email: new FormControl("", [Validators.required, Validators.email])
      });
    }
  

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        if (this.registerForm.invalid) {
          return;
        } else {
          console.log(this.registerForm.value);
          console.log(this.users);
          this.users.push(this.registerForm.value);
          this.registerForm.reset();
        }
        }

    
    

    
        addUser() {
          this.childEvent.emit(this.users);

          }
  
}
