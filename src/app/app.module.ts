import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule, ModalServiceComponent, ToastComponent, ActionSheetComponent } from 'ng-zorro-antd-mobile';

import { DemoPickerViewBasicComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, NgZorroAntdMobileModule.forRoot(), BrowserAnimationsModule ],
  declarations: [ DemoPickerViewBasicComponent ],
  bootstrap:    [ DemoPickerViewBasicComponent ],
  entryComponents: [ModalServiceComponent, ToastComponent, ActionSheetComponent]
})
export class AppModule { }
