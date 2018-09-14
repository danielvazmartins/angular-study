import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Graph } from '../../shared/classes/graph';

@Component({
    selector: 'app-graph-box',
    templateUrl: './graph-box.component.html',
    styleUrls: ['./graph-box.component.scss']
})
export class GraphBoxComponent implements OnInit {

    @Output() removeGraph: EventEmitter<Graph> = new EventEmitter<Graph>()
    @Input() graph: Graph

    constructor() { }

    ngOnInit() {
    }

    close() {
        this.removeGraph.emit(this.graph)
    }

}
