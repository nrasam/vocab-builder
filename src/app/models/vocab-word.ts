export class VocabWord {
    constructor(private _word: string, 
        private _ignore?: boolean, 
        private _timeUntil?: number,
        private _date?: number){
    }

    get word(){return this._word;}
    set word(word){
        this._word = word;
    }

    get ignore(){ return this._ignore; }
    set ignore(bool){
        this._ignore = bool;
    }

    get timeUntil(){ return this._timeUntil; }
    set timeUntil(time){ 
        this._timeUntil = time;
    }

    get date(){return this._date;}
    set date(date: number){
        this._date = date;
    }

    IsTimeUntilOver():Boolean{
        if((Date.now() - this.date) > this.timeUntil){
            this.timeUntil = 0;
            return true;
        }
        
        return false;
    }
}
