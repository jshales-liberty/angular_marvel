import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class MarvelService {

    private baseUrl:string = 'http://gateway.marvel.com/v1/public/'

    private publicKey:string = "e1588be08057fa9f788890bd7aa3015c";

    private privateKey:string = "0e08b973dc26fde7e1c4c2f4b36560cf5a506001";

    private timestamp = +new Date();

    private hash:string;

    private credentials: string;

    constructor (private http: Http, private Md5: Md5) {
        this.generateCredentials()
    }

    generateCredentials():void{
        
        this.hash = String(Md5.hashStr(`${this.timestamp}${this.privateKey}${this.publicKey}`));
        this.credentials = `?ts=${this.timestamp}&apikey=${this.publicKey}&hash=${this.hash}`
    }

    getRecords(endpoint: string): Observable<any> {
        let apiUrl = `${this.baseUrl}${endpoint}${this.credentials}`;
        return this.http.get(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getRecordsbyName(endpoint: string, name: string): Observable<any> {
        let apiUrl = `${this.baseUrl}${endpoint}${this.credentials}&nameStartsWith=${name}`;
        return this.http.get(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let results = res.json();
        return results || [];
    }

    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            if(error.status === 0){
                errMsg = "Error connecting to API"
            }else{
                const errorJSON = error.json();
                errMsg = `${errorJSON.code} - ${errorJSON.message}`;
            } 
        }
        
        return Observable.throw(errMsg);
    }


}
