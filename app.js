const button = document.querySelector(".btn");
const articlesContainer = document.querySelector(".articles");

button.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});

//Forma antigua (Sin usar deconstrucción)
/* const newArticles = articles
  .map((article) => {
    return `<article class="post">
        <h2>${article.title}</h2>
        <div class="post-info">
          <span>${article.date}</span>
          <span>${article.length}</span>
        </div>
        <p>${article.snippet}</p>
      </article>`;
  })
  .join(""); */

//Deconstruyendo el arreglo dentro de la función
// const newArticles = articles
//   .map((article) => {
//     const { title, date, length, snippet: text } = article;
//     return `<article class="post">
//         <h2>${title}</h2>
//         <div class="post-info">
//           <span>${date}</span>
//           <span>${length}</span>
//         </div>
//         <p>${text}</p>
//       </article>`;
//   })
//   .join("");

//Deconstruyendo directamente en los parametros
const newArticles = articles
  .map(({ title, date, length, snippet: text }) => {
    const formatedDate = moment(date).format("MMMM Do, YYYY");
    return `<article class="post">
        <h2>${title}</h2>
        <div class="post-info">
          <span>${formatedDate}</span>
          <span>${length} min read</span>
        </div>
        <p>${text}</p>
      </article>`;
  })
  .join("");

articlesContainer.innerHTML = newArticles;
