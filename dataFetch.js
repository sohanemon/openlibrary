async function fetchData(key) {
  $("spinner").classList.remove("hidden");
  $("spinner").classList.add("flex");
  $("show-all-btn").classList.add("hidden");
  const res = await fetch(`https:openlibrary.org/search.json?q=${key}`);
  const data = await res.json();
  const { docs } = data;
  const thisPage = docs.slice(0, 12);
  const nextPage = docs.slice(12);
  const mapData = (data) => {
    data.forEach((book) => {
      const {
        author_name: author,
        cover_i: cover,
        first_sentence: sentences,
        title,
        time,
        place,
        language,
        first_publish_year: publishYear,
        _version_: id,
      } = book;

      displayBook(
        id,
        title,
        author,
        cover,
        time,
        place,
        language,
        sentences,
        publishYear
      );
    });
  };

  $("spinner").classList.remove("flex");
  $("spinner").classList.add("hidden");
  mapData(thisPage);
  $("show-all-btn").classList.remove("hidden");
  $("show-all-btn").onclick = () => {
    mapData(nextPage);
    $("show-all-btn").classList.add("hidden");
  };
}

$("search").addEventListener("change", (e) => {
  $("card-container").innerText = "";
  fetchData(e.target.value);
});

fetchData("sea");
