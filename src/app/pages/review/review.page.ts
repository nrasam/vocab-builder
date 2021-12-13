import { DictionaryService } from './../../services/dictionary.service';
import { VocabWord } from './../../models/vocab-word';
import { VocabListService } from 'src/app/services/vocab-list.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {

  reviewList: VocabWord[] = [];
  word: string;
  results: Observable<any>;
  meanings: [];
  idx: number = 0;
  listEmpty: boolean = true;

  constructor(private vocabListService: VocabListService, private dictionaryService: DictionaryService) { }

  ngOnInit() {
    this.reviewList = this.vocabListService.getReviewList();
    if(this.reviewList.length <= 0){
      this.word = "Learn a word first";
    }else{
      this.word = this.reviewList[this.idx].word;
      this.listEmpty = false;
    }
  }

  nextWord(){
    if((this.reviewList.length - 1) != this.idx){
      this.word = this.reviewList[++this.idx].word;
    }else{
      this.listEmpty = true;
      this.word = "Go learn another word";
    }
  }

  onForgotten(){
    this.vocabListService.addTimeToWord(2000, this.word);
    this.nextWord();
  }

  onPartial(){
    this.vocabListService.addTimeToWord(5000, this.word);
    this.nextWord();
  }

  onWithEffort(){
    this.vocabListService.addTimeToWord(10000, this.word);
    this.nextWord();
  }

  onImmediate(){
    this.vocabListService.addTimeToWord(15000, this.word);
    this.nextWord();
  }

  onDelete(){
    this.vocabListService.deleteWord(this.word);
    this.vocabListService.addTimeToWord(0, this.word);
    this.nextWord();
  }
}
