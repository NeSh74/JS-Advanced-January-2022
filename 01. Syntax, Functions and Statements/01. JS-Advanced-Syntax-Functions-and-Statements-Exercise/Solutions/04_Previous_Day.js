function previousDay(year, month, day) {
    let dateString = year + '-' + month + '-' + day;
    let dateTime = new Date(dateString);
    dateTime.setDate(day - 1);

    console.log(dateTime.getFullYear() + '-' + (Number(dateTime.getMonth()) + 1) + '-' + dateTime.getDate());
}

// function previosDay(year, month, day) {
    // let date = new Date(year, month - 1, day);
    // date.setDate(date.getDate() - 1);
    // let newYear = date.getFullYear();
    // let newMonth = date.getMonth() + 1;
    // let newDate = date.getDate();
    // console.log(`${newYear}-${newMonth}-${newDate}`);
// }
previousDay(2016, 9, 30);
previousDay(2016, 10, 1);