function attachEventsListeners() {

    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };
    function convert(value, unit) {
        const inDays = value / ratios[unit];

        return {
            days: inDays,
            hours: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds
        };
    }
    const inputs = Object
        .keys(ratios)
        .map(unit => document.getElementById(unit))
        .reduce((a, c) => Object.assign(a, { [c.id]: c }), {});

    console.log(inputs);

    document.querySelector('main').addEventListener('click', onConvert);

    function onConvert(e) {
        if (e.target.tagName == 'INPUT' && e.target.type == 'button') {

            const input = e.target.parentElement.querySelector('input[type="text"]');
            const time = convert(Number(input.value), input.id);
            Object.keys(time).forEach(k => inputs[k].value = time[k]);
        }
    }
}

// function attachEventsListeners() {

// const ratios = {
// days: 1,
// hours: 24,
// minutes: 1440,
// seconds: 86400
// };
// function convert(value, unit) {
// const inDays = value / ratios[unit];

// return {
// days: inDays,
// hours: inDays * ratios.hours,
// minutes: inDays * ratios.minutes,
// seconds: inDays * ratios.seconds
// };
// }
// const daysInput = document.getElementById('days');
// const hoursInput = document.getElementById('hours');
// const minutesInput = document.getElementById('minutes');
// const secondsInput = document.getElementById('seconds');

// document.getElementById('daysBtn').addEventListener('click', onConvert);
// document.getElementById('hoursBtn').addEventListener('click', onConvert);
// document.getElementById('minutesBtn').addEventListener('click', onConvert);
// document.getElementById('secondsBtn').addEventListener('click', onConvert);

// function onConvert(e) {
// const input = e.target.parentElement.querySelector('input[type="text"]');
// const time = convert(Number(input.value), input.id);
// daysInput.value = time.days;
// hoursInput.value = time.hours;
// minutesInput.value = time.minutes;
// secondsInput.value = time.seconds;
// }
// }

function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };
    document.getElementById('daysBtn').addEventListener('click', onConvert);
    document.getElementById('hoursBtn').addEventListener('click', onConvert);
    document.getElementById('minutesBtn').addEventListener('click', onConvert);
    document.getElementById('secondsBtn').addEventListener('click', onConvert);
    function convert(value, unit) {
        let days = value / ratios[unit];
        return {
            days: days,
            hours: days * ratios.hours,
            minutes: days * ratios.minutes,
            seconds: days * ratios.seconds
        };
    }
    function onConvert(event) {
        let input = event.target.parentElement.querySelector('input[type="text"]');
        let time = convert(Number(input.value), input.id);
        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;
    }
}