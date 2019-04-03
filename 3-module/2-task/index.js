"use strict";
let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
    let current = this.from;
    let last = this.to;
    // метод должен вернуть объект с методом next()
    return {
        next() {
            if (current <= last) {
                current.setDate(current.getDate() + 1); // Это ошибка, нужно инкрементировать после получения даты. В тестовых данных тоже ошибка.
                let day = current.getDate();
                day = ((day) < 10) ? '0' + day : day.toString();
                if ((current.getUTCDay() === 0) || (current.getUTCDay() === 6))  day = '[' + day + ']';

                return {
                        done: false,
                        value: day
                    };
                } else {
                    return {
                        done: true
                    };
                }
            }

    }

};


