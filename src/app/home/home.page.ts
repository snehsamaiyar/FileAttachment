import { Component } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { pathToFileURL } from 'url';
import { HTTP } from '@ionic-native/http/ngx';
import { FileEncryption } from '@ionic-native/file-encryption/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  uploadText: any;
  uploadImage:any;
  downloadText: any;
  fileTransfer:FileTransferObject;
  image:any;
  encryptImg: any;


  constructor(private http: HTTP,  private fileChooser: FileChooser, private filepath:FilePath, private transfer: FileTransfer,
   private  file:File, private fileEncryption:FileEncryption, private camera:Camera
    ) {}
    // {
    //   this.uploadText="";
    //   this.downloadText="";
      
    // }
    // selectedFile(event)
    // {
    //   this.image=event.target.fileChooser[0];   
    // }

// onClick()
// {
//   console.log(this.image);
//   var headers:Headers= new Headers({ "Accept": "application/json" });
//   const formData= new FormData(); 
//   formData.append('attach',this.image);
  
//   this.http.post('http://192.168.1.116:8082/FeedAppService/crm/submitPrefacts', formData, headers).subscribe((res: any) => {
//     if (res.response == 200) {
//       console.log("success");
//     } 
//     else {
//       console.log("something went wrong");
//     }
//   });
// }


    uploadFile(){

     console.log("hello");
      this.fileChooser.open().then((uri)=>{
         this.filepath.resolveNativePath(uri).then((nativepath)=>{
          this.fileTransfer=this.transfer.create();

      
          let options: FileUploadOptions = {
            fileKey: 'file',
            fileName: 'image.jpg',
            headers: { "Accept": "application/json"}
          }
          console.log(nativepath);
         this.encryptImg= this.fileEncryption.encrypt(this.image, 'secretKey');
         console.log(this.encryptImg);
          this.uploadText="uploading....."
          this.fileTransfer.upload(nativepath,"http://192.168.1.116:8082/FeedAppService/crm/submitPrefacts",options).then((data)=>{
            console.log("upload success");
            console.log(data.response);
            alert("Transfer done =" +JSON.stringify(data));
          // this.uploadImage="http://localhost/pallavinew/img/name.jpg";
          },(err)=>{
            this.uploadText="";
          })    
         },(err)=>{
          alert(JSON.stringify(err));
         })
      },(err)=>{
        alert(JSON.stringify(err));
      })
     
   }

    // AbortUploading(){
    //   this.fileTransfer.abort();
    //   alert("File uploading cancel");
    // }

    // DownloadFile(){
    //   this.downloadText="downloading...";
    //   this.fileTransfer.download(this.file.dataDirectory,this.file.externalRootDirectory + "name.jpg").then((data)=>{
    //     alert("Downloaded Completed...");
    //     this.downloadText="";
    //   })
    // }
    
  

}
