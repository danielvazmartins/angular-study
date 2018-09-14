import { Component, Input } from '@angular/core';
import { Graph } from '../../shared/classes/graph';

@Component({
    selector: 'app-thumb-item',
    templateUrl: './thumb-item.component.html',
    styleUrls: ['./thumb-item.component.scss']
})
export class ThumbItemComponent {
    @Input() graph: Graph
}