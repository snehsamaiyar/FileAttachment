import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { FileEncryption } from '@ionic-native/file-encryption/ngx';
import { Camera } from '@ionic-native/camera/ngx';

// import { HttpClient } from '@angular/common/http';
// import { HttpHandler } from '@angular/common/http';
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  FileChooser,
  FilePath,
  File,
  FileTransfer,
  HTTP,
  FileEncryption,
  Camera
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
