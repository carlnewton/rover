class Timer {
    constructor() {
        this.list = [];
    }

    count(reference, length = 0) {
        var timer = this.get(reference);
        if (timer === undefined) {

            timer = {
                reference: reference,
                length: length,
                start: Date.now(),
                elapsed: 0,
                elapsedPercent: 0,
                remaining: length,
                remainingPercent: 100,
                completed: false,
            }
            this.list.push(timer);

            return timer;
        }

        timer.elapsed = Date.now() - timer.start;
        timer.elapsedPercent = Math.round(timer.elapsed / timer.length * 100);
        timer.remaining = timer.length - timer.elapsed;
        timer.remainingPercent = Math.round(timer.remaining / timer.length * 100);

        if (timer.elapsed >= timer.length) {
            timer.elapsed = timer.length;
            timer.elapsedPercent = 100;
            timer.remaining = 0;
            timer.remainingPercent = 0;
            timer.completed = true;
            this.remove(timer.reference);
        }

        return timer;
    }

    get(reference) {
        for (let timer of this.list) {
            if (timer.reference === reference) {
                return timer;
            }
        }
    }

    remove(reference) {
        var timerID = 0;
        for (let timer of this.list) {
            if (timer.reference === reference) {
                this.list.splice(timerID, 1);
                return true;
            }
            timerID++;
        }
    }
}