function wordsUppercase(input) {
    let regexPattern = /\w+/g;
    let results = input.match(regexPattern);

    console.log(
        results
            .map(x => x.toUpperCase())
            .join(', '));
}
wordsUppercase('Hi, how are you?');