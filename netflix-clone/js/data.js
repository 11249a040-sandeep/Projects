const movies = [
    "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
    "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    "https://image.tmdb.org/t/p/w500/6ELCZlTA5lGUops70hKdB83WJxH.jpg",
    "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"
];

let row = document.getElementById("movieRow");

movies.forEach(url => {
    let img = document.createElement("img");
    img.src = url;
    row.appendChild(img);
});
