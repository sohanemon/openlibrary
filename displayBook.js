function displayBook(
  id,
  title,
  author,
  cover,
  time,
  place,
  language,
  sentences,
  publishYear
) {
  const div = document.createElement("div");
  div.className =
    "flex justify-center hover:ring ring-gray-200 rounded-md overflow-hidden";
  div.innerHTML = `
        <div class="rounded-lg shadow-lg bg-white min-w-full">
          <a href="#!">
            <img
              class="rounded-t-lg w-full mx-auto h-52 object-cover"
              src="https://covers.openlibrary.org/b/id/${cover}-M.jpg"
              alt=""
            />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">${title}</h5>
            <p class="text-gray-700 text-base mb-4">
              ${author}
            </p>
           
          </div>
        </div>
    `;
  $("card-container").appendChild(div);
}
