import { Component, AfterViewInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DashboardService } from '../service/dashboard.service';
import { SnackbarService } from '../service/snackbar.service';
import { GlobalConstants } from '../shared/global-constants';
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

	responseMessage: any;
	data: any;


	ngAfterViewInit() { }

	constructor(private dashboardService: DashboardService,
		private ngxService: NgxUiLoaderService,
		private snackbarservice: SnackbarService) {
		this.ngxService.start();
		this.dashboardData();
	}

	dashboardData() {
		this.dashboardService.getDetails().subscribe((response: any) => {
			this.ngxService.stop();
			this.data = response;
		}, (error: any) => {
			this.ngxService.stop();
			console.log(error);
			if (error.error?.message) {
				this.responseMessage = error.error?.message;
			} else {
				this.responseMessage = GlobalConstants.genericError;
			}
			this.snackbarservice.openSnackBar(this.responseMessage, GlobalConstants.error);
		})
	}
}
