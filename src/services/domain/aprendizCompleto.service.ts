import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { AprendizFullDTO } from 'app/models/aprendizfull.dto';
import { API_CONFIG } from 'config/api.config';
import { AprendizCompletoDTO } from 'app/models/aprendizCompleto.dto';
import { StorageService } from 'services/storage.service';




@Injectable()
export  class AprendizCompleto {

    constructor(public http: HttpClient, public storage: StorageService) {
        
    }

    findByEmail(email: string) : Observable<AprendizFullDTO> {
        return this.http.get<AprendizFullDTO>(`${API_CONFIG.baseUrl}instituicao/email?value=${email}`);
        
    }

    

  /*  getImageFromBucket(id: string) : Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}cp${id}.jpg`
        return this.http.get(url, {responseType : 'blob'});
    }*/

    insert(obj : AprendizCompletoDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}instituicao`, 
            obj,
            { 
                observe: 'response', 
                responseType: 'text'
            }
        ); 
     }
}