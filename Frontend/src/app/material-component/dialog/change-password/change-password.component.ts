import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})

export class ChangePasswordComponent implements OnInit {

  oldPassword = true;
  newPassword = true;
  confirmPassword = true;
  changePasswordForm: any = FormGroup;
  responseMessage: any;


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    private ngxService: NgxUiLoaderService,
    private snackBarService: SnackbarService
  ) {  }

  ngOnInit(): void {
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: [null, [Validators.required]],
      newPassword: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]]
    })
  }

  validateSubmit() {
    if (this.changePasswordForm.controls['newPassword'].value != this.changePasswordForm.controls['confirmPassword'].value) {
      return true;
    } else {
      return false;
    }
  }

  handlePasswordChangeSubmit() {
    this.ngxService.start();
    var formData = this.changePasswordForm.value;
    var data = {
      oldPassword: formData.oldPassword,
      newPassword: formData.newPassword,
      confirmPassword: formData.confirmPassword
    }
    this.userService.changePassword(data).subscribe((response: any) => {
       this.ngxService.stop();
       this.responseMessage = response?.message;
       this.dialogRef.close();
       this.snackBarService.openSnackBar(this.responseMessage, "Success");
    }, (error) => {
         console.log(error);
         this.ngxService.stop();
         if (error.error?.message) {
              this.responseMessage = error.error?.message;
         } else {
              this.responseMessage = GlobalConstants.genericError;
         }
         this.snackBarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    })
  }
}
