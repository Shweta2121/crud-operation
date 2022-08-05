import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MustMatch } from 'src/app/helpers/must-match.validator';
import { AlertService } from 'src/app/service/alert.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-ng-form',
  templateUrl: './ng-form.component.html',
  styleUrls: ['./ng-form.component.scss']
})
export class NgFormComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;
  id!: string;
  isAddMode!: boolean;

  constructor( private fb: FormBuilder,
    private userService:UserService,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    const formOptions: AbstractControlOptions = { validators: MustMatch('password', 'confirmPassword') };
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      Phone: ['', Validators.required],
      Company :['', Validators.required],
      Gender :['', Validators.required],
      Birthday :['', Validators.required],
      password: ['', [Validators.minLength(6), Validators.required]],
      confirmPassword: ['', Validators.required]
    }, formOptions);

    if (!this.isAddMode) {
      this.userService.getById(this.id).subscribe(x => this.form.patchValue(x));
  }
  }

    get f() {
     return this.form.controls;
     }

     onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.loading = true;
      if (this.isAddMode) {
          this.createUser();
      } else {
          this.updateUser();
      }
  }

  private createUser() {
      this.userService.create(this.form.value).subscribe(() => {
              this.alertService.success('User added', { keepAfterRouteChange: true });
              this.router.navigate(['../'], { relativeTo: this.route });
          })
          .add(() => this.loading = false);
  }

  private updateUser() {
      this.userService.update(this.id, this.form.value).subscribe(() => {
              this.alertService.success('User updated', { keepAfterRouteChange: true });
              this.router.navigate(['../../'], { relativeTo: this.route });
          })
          .add(() => this.loading = false);
  }
}