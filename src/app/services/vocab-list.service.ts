import { Injectable } from '@angular/core';
import { VocabWord } from '../models/vocab-word';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class VocabListService {

  private vocabList : VocabWord[] = [];
  private _storage: Storage | null = null;

  constructor(private storage: Storage) { 
    //this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;

    storage.forEach(async (key, value, index) => {
      this.vocabList.push(await storage.get('key'));
    });
  }

  getVocabList() : VocabWord[]{
    return [...this.vocabList.filter(word => !word.ignore)];
  }

  getVocabSize() : number{
    return this.vocabList.filter(word => !word.ignore).length;
  }

  saveWord(word: string, ignore?: boolean){
    this.vocabList.push(new VocabWord(word, ignore, 0, Date.now()));

    //this._storage?.set(word, this.vocabList[this.vocabList.length - 1]);
  }

  getRandomVocabWord(): string{
    if (this.getVocabSize() <= 0){
      return "Learn a word first";
    }

    var random = Math.floor(Math.random() * this.getVocabSize());
    return this.getVocabList()[random].word;
  }

  getReviewList(){
    return [...this.vocabList.filter(word => !word.ignore).filter(word => word.IsTimeUntilOver())];
  }

  deleteWord(word: string){
    //this.vocabList = this.vocabList.filter(vocab => vocab.word != word);
    let idx = this.vocabList.findIndex(val => val.word == word);
    this.vocabList[idx].ignore = true;
  }

  addTimeToWord(time: number, word: string){
    let idx = this.vocabList.findIndex(val => val.word == word);
    this.vocabList[idx].timeUntil = time;
  }
}
