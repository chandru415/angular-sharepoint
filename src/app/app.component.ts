import { Component } from '@angular/core';
import { GraphqlService } from './services/graphql/graphql.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-sharepoint';

  constructor(private gqlService: GraphqlService) {}

  onFileChange(pFileList: File[]) {
    let fileReqCount = 0;
    let isConsistsGreaterSize = false;

    pFileList.forEach((file) => {
      if (file.size >= 4194304) {
        isConsistsGreaterSize = true;
      }
    });

    if (!isConsistsGreaterSize) {
      pFileList.forEach((file) => {
        this.gqlService
          .uploadToDocumentLibrary(
            file,
            new Date().toLocaleDateString().replace('/', '-').replace('/', '-')
          )
          .pipe(take(1))
          .subscribe(
            (res) => {
              fileReqCount++;

              if (fileReqCount === pFileList.length) {
                /** display complete message */
              } else {
              }
            },
            (error) => {
              console.error(error, 'file upload');
            }
          );
      });
    }
  }
}
