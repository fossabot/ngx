import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxDefaultImageComponent } from './boards/ngx-default-image/ngx-default-image.component';
import { NgxResizeElementComponent } from './boards/ngx-resize-element/ngx-resize-element.component';
import { NgxAlertMessageComponent } from './boards/ngx-alert-message/ngx-alert-message.component';
import { NgxArrayComponent } from './boards/ngx-array/ngx-array.component';
import { NgxCheckPermissionComponent } from './boards/ngx-check-permission/ngx-check-permission.component';
import { NgxColorConverterComponent } from './boards/ngx-color-converter/ngx-color-converter.component';
import { NgxDeviceInfoComponent } from './boards/ngx-device-info/ngx-device-info.component';
import { NgxLogsComponent } from './boards/ngx-logs/ngx-logs.component';
import { NgxRandomComponent } from './boards/ngx-random/ngx-random.component';

const routes: Routes = [
  { path: '', component: NgxDefaultImageComponent },
  { path: 'ngx-resize-element', component: NgxResizeElementComponent },
  { path: 'ngx-default-image', component: NgxDefaultImageComponent },
  { path: 'ngx-alert-message', component: NgxAlertMessageComponent },
  { path: 'ngx-array', component: NgxArrayComponent },
  { path: 'ngx-check-permission', component: NgxCheckPermissionComponent },
  { path: 'ngx-color-converter', component: NgxColorConverterComponent },
  { path: 'ngx-device-info', component: NgxDeviceInfoComponent },
  { path: 'ngx-logs', component: NgxLogsComponent },
  { path: 'ngx-random', component: NgxRandomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
