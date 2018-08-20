import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {
    @Output() onTyping:EventEmitter<string> = new EventEmitter<string>()
    @Input() value: string = ''

    public filter:string
    public debounce: Subject<string> = new Subject<string>()

    ngOnInit() {
        this.debounce
        .pipe(debounceTime(300)) // Aguarda 300ms sem entrada para fazer o subscribe
        .subscribe(filter => {
          this.onTyping.emit(filter)
        })
    }
    
    ngOnDestroy() {
        this.debounce.unsubscribe()
    }
}