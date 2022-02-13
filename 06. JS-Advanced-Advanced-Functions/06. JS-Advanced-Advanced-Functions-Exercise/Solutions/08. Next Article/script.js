function getArticleGenerator(articles) {
    // TODO

    const arr = articles;
    const resultDiv = document.getElementById("content");
    return () => {
        if (arr.length != 0) {
            const article = document.createElement("article");
            article.textContent = arr.shift();
            resultDiv.appendChild(article);
        }
    }
}

// function getArticleGenerator(input) {
    // let articles = input;

    // return () => {
        // if (articles.length > 0) {
            // let container = document.getElementById('content');
            // let article = document.createElement('article');
            // let currentText = articles.shift();
            // article.innerText = currentText;
            // container.appendChild(article);
        // }
    // };
// }