import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-drop-box',
    templateUrl: './drop-box.component.html',
    styleUrls: ['./drop-box.component.scss']
})
export class DropBoxComponent implements OnInit {
    @Input() inter: boolean = false
    @Output() newGraph: EventEmitter<string> = new EventEmitter<string>()
    @ViewChild('dropBox') dropBox: ElementRef
    isOver: Subject<any> = new Subject<any>()
    dragIsOver: boolean = false

    constructor(private renderer: Renderer2) {}

    ngOnInit() {
        this.isOver
        .pipe(debounceTime(100))
        .subscribe( $event => {
            this.dragIsOver = false
        })
        if ( this.inter )
            this.renderer.addClass(this.dropBox.nativeElement, 'inter')
    }

    onDragOver($event) {
        this.dragIsOver = true
        this.isOver.next($event)
    } 

    onDrop($event) {
        this.newGraph.emit($event.data)
    }
}