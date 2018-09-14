import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-drop-box',
    templateUrl: './drop-box.component.html',
    styleUrls: ['./drop-box.component.scss']
})
export class DropBoxComponent implements OnInit {
    @Output() newGraph: EventEmitter<string> = new EventEmitter<string>()
    isOver: Subject<any> = new Subject<any>()
    dragIsOver: boolean = false

    ngOnInit() {
        this.isOver
        .pipe(debounceTime(100))
        .subscribe( $event => {
            this.dragIsOver = false
        })
    }

    onDragOver($event) {
        this.dragIsOver = true
        this.isOver.next($event)
    } 

    onDrop($event) {
        console.log('onDrop', $event)
        this.newGraph.emit($event.data)
    }
}