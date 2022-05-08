import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { dict } from 'src/app/dictionaryObj';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Content-Type-Options': 'nosniff',
    'Access-Control-Allow-Origin': 'http://localhost:8100/new-word',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  url = 'https://api.dictionaryapi.dev/api/v2/entries/en';
  apiKey = '';
  maxNum: number = 223462;

  constructor(private http: HttpClient) {}

  getRandomWord(): Observable<any> {
    //this.maxNum = Object.keys(dict).length;
    //console.log(this.maxNum);
    let randomNum = Math.floor(Math.random() * this.maxNum);
    let key = Object.keys(dict)[randomNum];

    //const response = this.http.get(`${this.url}/hello`);
    /*this.http.get(`${this.url}/${key}`).subscribe(res => console.log('HTTP response', res), 
      err => console.log('HTTP Error', err), 
      () => console.log('HTTP request completed.'));*/

    const res = this.http
      .get(`${this.url}/${key}`)
      .pipe(map((data) => data[0]));
    res.subscribe((res) => console.log('HTTP response', res));
    return res;
  }

  getWord(word: string): Observable<any> {
    const res = this.http
      .get(`${this.url}/${word}`)
      .pipe(map((data) => data[0]));
    return res;
  }

  doesTheAPIWork(): boolean {
    //var fs = require('fs');
    //var text = fs.readFileSync("./../english.txt", 'utf-8');
    //var textByLine = text.split('\n')
    //console.log(textByLine);

    //this.http.get(`${this.url}/hello`).pipe(map(data => data['word']));
    //this.http.get(`${this.url}/hello`).subscribe(res => console.log(res));
    return false;
  }

  /* getCovideInfo(){
    const url = 'https://corona.lmao.ninja/v3/covid-19/all';
    return this.http.get(`${url}`).pipe(map(data => data));
  } */
}
