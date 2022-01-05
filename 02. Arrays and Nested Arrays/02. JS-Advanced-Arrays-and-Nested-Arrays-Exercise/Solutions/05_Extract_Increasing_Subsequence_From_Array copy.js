function extract(arr) {
    let biggest = Number.MIN_SAFE_INTEGER;
    const result = arr.filter((el) => {
        if (el >= biggest) {
            biggest = el;
            return true;
        }
        return false;
    })
    return result;
}
extract([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);
extract([1,
    2,
    3,
    4]);
extract([20,
    3,
    2,
    15,
    6,
    1]);