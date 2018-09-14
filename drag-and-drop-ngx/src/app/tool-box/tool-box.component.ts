import { Component, OnInit } from '@angular/core';
import { Graph, GraphType } from '../shared/classes/graph';

@Component({
    selector: 'app-tool-box',
    templateUrl: './tool-box.component.html',
    styleUrls: ['./tool-box.component.scss']
})
export class ToolBoxComponent implements OnInit {
    graphs: Graph[] = []

    ngOnInit(): void {
        this.graphs = [
            { id: 1, type: GraphType.LINE, name: 'Requisições por minuto', faIcon: 'fa-chart-line' },
            { id: 2, type: GraphType.BAR, name: 'Erros por hora', faIcon: 'fa-chart-bar'},
            { id: 3, type: GraphType.PIE, name: 'Acessos por aplicação', faIcon: 'fa-chart-pie' },
            { id: 4, type: GraphType.AREA, name: 'Erros por aplicação', faIcon: 'fa-chart-area' }
        ]
    }
}