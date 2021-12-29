function roadRadar(speed, area) {
    let motorwaySpeed = 130;
    let interstateSpeed = 90;
    let citySpeed = 50;
    let residentialSpeed = 20;
    let speedZone = 0;
    let diff = 0;
    let status = "";

    switch (area) {
        case "motorway": speedZone = motorwaySpeed; break;
        case "interstate": speedZone = interstateSpeed; break;
        case "city": speedZone = citySpeed; break;
        case "residential": speedZone = residentialSpeed; break;
    }

    if (speed > speedZone) {
        diff = speed - speedZone;
    }

    if (diff != 0) {
        if (diff <= 20) {
            status = "speeding";
        } else if (diff <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving";
        }
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedZone} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${speedZone} zone`);
    }
}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway')