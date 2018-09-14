export class Graph {
    id: number
    type: GraphType
    name: string
    faIcon: string
}

export enum GraphType {
    LINE = 'line',
    BAR = 'bar',
    PIE = 'pie',
    AREA = 'area'
}