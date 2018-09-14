import { Component } from '@angular/core';
import { Graph } from '../shared/classes/graph';

@Component({
    selector: 'app-content-area',
    templateUrl: './content-area.component.html',
    styleUrls: ['./content-area.component.scss']
})
export class ContentAreaComponent {
    graphs: Graph[] = []

    addGraph(graph: Graph) {
        this.graphs.push(graph)
    }

    removeGraph(graph: Graph) {
        this.graphs.splice(this.graphs.indexOf(graph), 1)
    }
}