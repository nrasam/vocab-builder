import { VocabWord } from './../../models/vocab-word';
import { VocabListService } from './../../services/vocab-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-vocab-list',
  templateUrl: './my-vocab-list.page.html',
  styleUrls: ['./my-vocab-list.page.scss'],
})
export class MyVocabListPage implements OnInit {

  vocabList: VocabWord[];
  vocabSize: number;

  constructor(private vocabListService: VocabListService) { }

  ngOnInit() {
    this.vocabList = this.vocabListService.getVocabList();
    this.vocabSize = this.vocabList.length;
  }
}
