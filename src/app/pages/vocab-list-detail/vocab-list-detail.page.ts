import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { VocabListService } from 'src/app/services/vocab-list.service';

@Component({
  selector: 'app-vocab-list-detail',
  templateUrl: './vocab-list-detail.page.html',
  styleUrls: ['./vocab-list-detail.page.scss'],
})
export class VocabListDetailPage implements OnInit {

  results: Observable<any>;
  word: any;
  phonetics: [];
  meanings: [];

  constructor(private route: ActivatedRoute, private dictionaryService: DictionaryService, private vocabListService: VocabListService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.word = params['id'];

      this.results = this.dictionaryService.getWord(this.word);
      this.results.subscribe((res) => {
        this.phonetics = res.phonetics;
        this.meanings = res.meanings;
      });
    });
  }
}
