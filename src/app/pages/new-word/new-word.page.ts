import { VocabListService } from './../../services/vocab-list.service';
import { Component, OnInit } from '@angular/core';
import { DictionaryService } from './../../services/dictionary.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-word',
  templateUrl: './new-word.page.html',
  styleUrls: ['./new-word.page.scss'],
})
export class NewWordPage implements OnInit {

  results: Observable<any>;
  word: any;
  phonetics: [];
  meanings: [];

  constructor(private dictionaryService: DictionaryService, private vocabListService: VocabListService) { }

  ngOnInit() {
    this.getRandomWord();
  }

  private getRandomWord(){
    this.results = this.dictionaryService.getRandomWord();
    this.results.subscribe((res) => {
      this.word = res.word;
      this.phonetics = res.phonetics;
      this.meanings = res.meanings;
      this.vocabListService.saveWord(this.word, false);
    });
  }

  nextWord(){
    this.getRandomWord();
    //this.vocabListService.saveWord(this.word, false);
  }

  ignore(){
    this.getRandomWord();
    //this.vocabListService.saveWord(this.word, true);
  }
}
