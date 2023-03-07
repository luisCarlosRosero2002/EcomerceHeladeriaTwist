import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/env/environment';

@Injectable()

export class AuthService {

  constructor(private http:HttpClient) { }

  public authentication(input:any){
    const url = `${environment.ApiEndPoint}/login`;
    return this.http.post(url,input);
  }
}



