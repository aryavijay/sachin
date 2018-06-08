import {Component, OnInit, ViewChild} from '@angular/core';
import {StateService} from '../../service/state.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    titleText = "How are You";
    friends: any[] = ['sachin', 'nitesh', 'vijay', 'alankar', 'achin'];
    searchName: string = ''
    searchEleRef = '';
    searchTextValue: string = '';
    @ViewChild('fieldName') ele;
    userForm: FormGroup;
    userModel: {};
    defaultUserName ="Vijay";

    constructor(private state: StateService, fb: FormBuilder, private router: Router) {
        this.userForm = fb.group({
            'username': ['', Validators.compose([Validators.required, this.invalidUserName.bind(this)])],
            'password': ['', Validators.required],
            'email': 'vijay.k@me.com'
        });

    }

    ngOnInit() {

        //this.userForm.controls.username.setValue('sachin');
        let stateData = this.state.getUserState();
        console.log(stateData.value);

        console.log(this.state.getData());
    }


    navigateToUser() {
        this.router.navigateByUrl("/user");
    }


    invalidUserName(control: FormControl): {[key:string]:boolean}{
        if(this.friends.indexOf(control.value) !== -1){
            //key to be user as error type or error code
            return {"InvalidName":true};
        }
        return null;
    }

    updateSearch(event) {
        this.searchEleRef = this.ele.nativeElement.value;
        this.searchName = event.target.value;
    }

    saveValues() {
        if (this.userForm.valid) {
            console.log("UserName : " + this.userForm.controls.username.value);
            console.log("Email : " + this.userForm.controls.email.value);
        } else {
            alert("Form is not Valid");
        }
    }

    saveModelValue(form: NgForm) {
        console.log(form.form.get('username').value);
        //console.log(form);
    }
}
