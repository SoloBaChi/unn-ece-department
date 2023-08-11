let searchValue = "electronic engineering",
  documentLoader = document.querySelector(".loading-page"),
  searchInput = document.getElementById("search");

console.log(searchInput);
//addEventl listener  to the search input
searchInput.addEventListener("change", (e) => {
  searchValue = e.target.value;
});

async function getBooks(url) {
  const books = await fetch(
    `https://openlibrary.org/search.json?title=${searchValue}`
  );
  const res = await books.json();
  //  console.log(res.docs)
  // stop the loading event when data has been fetched
  documentLoader.classList.add("stop-loading");
  return res.docs;
}

const fetchedBooks = await getBooks();

let shuffledBooks = shuffleBooks(fetchedBooks);
//  console.log(shuffledBooks.splice(0,30))

//create ebooks
function createEBooks(booksArr) {
  let div = document.createElement("DIV");
  for (let i = 0; i < booksArr.length; i++) {
    let {
      title,
      isbn,
      lccn,
      oclc,
      ebook_access,
      number_of_pages_median: pages,
      author_name,
      publisher,
      publish_year: year,
      language,
      edition_key,
      ia_collection,
    } = booksArr[i];

    //check if the author exist
    author_name = !author_name ? "N/A" : author_name.join(" & ");

    // check if language exist
    language = !language ? "N/A" : language[0];

    // check if the year exist
    year = !year ? "N/A" : year.join(" ").split(" ")[year.length - 1];

    //check if the publisher does not exist
    publisher = !publisher ? "N/A" : publisher.join(" , ");

    // considering only the books that are borrowable
    if (ebook_access === "borrowable") {
      let imageSrc;
      //isbn,lccn and oclc
      if (isbn && lccn && oclc) {
        if (lccn.length > 2) {
          imageSrc = `https://covers.openlibrary.org/b/lccn/${
            lccn.join(" ").split(" ")[1]
          }-L.jpg`;
        } else {
          imageSrc = `https://covers.openlibrary.org/b/lccn/${
            lccn.join(" ").split(" ")[0]
          }-L.jpg`;
        }
      } else if (!isbn && lccn && oclc) {
        if (lccn.length > 1) {
          imageSrc = `https://covers.openlibrary.org/b/lccn/${
            lccn.join(" ").split(" ")[1]
          }-L.jpg`;
        } else {
          imageSrc = `https://covers.openlibrary.org/b/lccn/${
            lccn.join(" ").split(" ")[0]
          }-L.jpg`;
        }
      } else if (isbn && !lccn && oclc) {
        if (isbn.length > 1) {
          imageSrc = `https://covers.openlibrary.org/b/isbn/${
            isbn.join(" ").split(" ")[1]
          }-L.jpg`;
        } else {
          imageSrc = `https://covers.openlibrary.org/b/isbn/${
            isbn.join(" ").split(" ")[0]
          }-L.jpg`;
        }
      } else if (isbn && lccn && !oclc) {
        if (lccn.length > 1) {
          imageSrc = `https://covers.openlibrary.org/b/lccn/${
            lccn.join(" ").split(" ")[1]
          }-L.jpg`;
        } else {
          imageSrc = `https://covers.openlibrary.org/b/lccn/${
            lccn.join(" ").split(" ")[0]
          }-L.jpg`;
        }
      } else if (!isbn && !lccn && oclc) {
        if (oclc.length > 1) {
          imageSrc = `https://covers.openlibrary.org/b/oclc/${
            oclc.join(" ").split(" ")[1]
          }-L.jpg`;
        } else {
          imageSrc = `https://covers.openlibrary.org/b/oclc/${
            oclc.join(" ").split(" ")[0]
          }-L.jpg`;
        }
      } else if (!isbn && lccn && !oclc) {
        if (lccn.length > 1) {
          imageSrc = `https://covers.openlibrary.org/b/lccn/${
            lccn.join(" ").split(" ")[1]
          }-L.jpg`;
        } else {
          imageSrc = `https://covers.openlibrary.org/b/lccn/${
            lccn.join(" ").split(" ")[0]
          }-L.jpg`;
        }
      } else if (isbn && !lccn && !oclc) {
        if (isbn.length > 1) {
          imageSrc = `https://covers.openlibrary.org/b/isbn/${
            isbn.join(" ").split(" ")[1]
          }-L.jpg`;
        } else {
          imageSrc = `https://covers.openlibrary.org/b/isbn/${
            isbn.join(" ").split(" ")[0]
          }-L.jpg`;
        }
        // imageSrc = `https://covers.openlibrary.org/b/isbn/${isbn.join(" ").split(" ")[0]}-L.jpg`;
      } else {
        imageSrc = `https://covers.openlibrary.org/b/isbn/${
          isbn.join(" ").split(" ")[1]
        }-L.jpg`;
      }

      console.log(
        title,
        imageSrc,
        author_name,
        isbn,
        lccn,
        oclc,
        pages,
        publisher,
        year,
        language,
        edition_key,
        ia_collection
      );

      // creating a html template
      let figure = `
<figure class="card">
 <div class="card-container">
 <div class="aside-section">
     <span class="fa-ellipsis">...</span>
 </div>
 <div class="main-section flex-2">
     <div class="place-left">
      <div class="img-container">
         <img src=${imageSrc} alt=${imageSrc}/>
      </div>
     </div>
     <div class="place-right">
         <h4>
          title
         </h4>
       <p>
         <span>${title}</span>
       </p>
       <h4>Author</h4>
       <p>${author_name}</p>
     </div>
 </div>
 </div>
</figure>
`;
      //  div.innerHTML += figure;
      div.classList.add("flex-1");
      div.insertAdjacentHTML("beforeend", figure);
    }
  }
  document.getElementById("ebooks").appendChild(div);
}

// createEBooks(shuffledBooks);
module.exports = { createEBooks };
