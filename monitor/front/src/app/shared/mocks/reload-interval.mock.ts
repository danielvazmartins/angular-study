export const reloadIntervalMock: ReloadInterval[] = [
    { name: '5s', value: 5000 },
    { name: '30s', value: 30000 },
    { name: '1m', value: 60000 },
    { name: '5m', value: 300000 },
    { name: '10m', value: 600000 },
    { name: '15m', value: 900000 }
]

export interface ReloadInterval {
    name: string,
    value: number
}