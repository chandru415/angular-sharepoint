import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-sharepoint';

  onFileChange(pFileList: File[]) {
    let fileReqCount = 0;
    let isConsistsGreaterSize = false;

    pFileList.forEach((file) => {
      if (file.size >= 4194304) {
        isConsistsGreaterSize = true;
      }
    });
  }
}
