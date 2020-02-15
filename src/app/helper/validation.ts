import { Injectable } from '@angular/core';

@Injectable()
export class CustomValidation {
    constructor() { }

    /* check whether it's valid date or not */
    public checkFutureDate(fromDate: Date, toDate: Date) {
        const selected = new Date(fromDate).setHours(0, 0, 0, 0);
        const current = new Date(toDate).setHours(0, 0, 0, 0);
        if (selected > current) {
            return true;
        }
    }

    /* Split time */
    public timeSplitup(dateString: Date) {
        return  `${dateString.getHours()}:${dateString.getMinutes()}`;

    }

    /* Convert Date into json date response format(dd-mm-yy) */
    public convertDate(dateVal: Date) {
        const date = new Date(dateVal);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        return [date.getFullYear().toString(), month, day].join('-');
    }

}
