import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  private readonly baseUrl = `${environment.resources.Graph.resourceUri}`;

  constructor(private http: HttpClient) {}

  uploadToDocumentLibrary = (
    file: File,
    folderName: string
  ): Observable<any> => {
    // const uploadEndPoint = `${this.baseUrl}/sites/${siteId}/drive/items/root:/support1/${file.name}:/createUploadSession`;
    return this.http.put(
      `${this.baseUrl}/sites/${environment.configuration.sharePointSiteId}/drive/items/root:/SupportSystem/${folderName}/${file.name}:/content`,
      file
    );
  };

  deleteFileFromDocumentLibrary = (itemId: string): Observable<any> => {
    // const uploadEndPoint = `${this.baseUrl}/sites/${siteId}/drive/items/root:/support1/${file.name}:/createUploadSession`;
    return this.http.delete(
      `${this.baseUrl}/sites/${environment.configuration.sharePointSiteId}/drive/items/${itemId}`
    );
  };
}
