export class Alert {
    constructor(
        public readonly alertType: AlertType,
        public message: string
    ) {}
}

export enum AlertType {
    SUCCESS,
    WARNING,
    DANGER,
    INFO
}