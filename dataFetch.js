async function fetchData(key) {
  const res = await fetch(`https:openlibrary.org/search.json?q=${key}`);
  const data = await res.json();
  const { docs } = data;
  docs.slice(0, 10).forEach((book) => {
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
}

fetchData("shakespeare");
