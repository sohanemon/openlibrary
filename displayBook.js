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
  // div.setAttribute("data-bs-toggle", "modal");
  // div.setAttribute("data-bs-target", `modal-${id}`);
  div.className =
    "flex justify-center hover:ring ring-gray-200 cursor-pointer rounded-md overflow-hidden";
  div.innerHTML = `
        <div  data-bs-toggle="modal" data-bs-target="#exampleModalCenter${id}" class="rounded-lg shadow-lg bg-white min-w-full">
          <a href="#!">
            <img
              class="rounded-t-lg w-full mx-auto h-52 object-cover"
              src=${
                cover
                  ? "https://covers.openlibrary.org/b/id/" + cover + "-M.jpg"
                  : "https://c.tenor.com/U4nwKcWlsfUAAAAC/no-no-no-meme.gif"
              }
              alt=""
            />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2 truncate">${title}</h5>
            <p class="text-gray-700 text-base mb-4 truncate">
              ${author}
            </p>
           
          </div>
        </div>


    




<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter${id}" tabindex="-1" aria-labelledby="exampleModalCenter${id}Title" aria-modal="true" role="dialog">
  <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
    <div class='grid grid-cols-2 gap-5 items-center text-sm text-gray-400'> <img
              class=" m-2 w-full mx-auto h-52 object-cover"
              src=${
                cover
                  ? "https://covers.openlibrary.org/b/id/" + cover + "-M.jpg"
                  : "https://c.tenor.com/U4nwKcWlsfUAAAAC/no-no-no-meme.gif"
              }
              alt=""
            />
            <div>
            <h1 class='text-lg text-gray-900'>${title}</h1>
            <h2 class='text-base text-gray-600'>${author}</h2>
            <p>Published on: ${publishYear}</p>
            <p>Time: ${time}</p>
            <p class='truncate' title=${language}>Language: <span class='uppercase'>${language.map(
    (e) => "" + e
  )}</span></p>
            <p>Quote: ${sentences}</p>
            </div>
    </div>
     
    </div>
  </div>
</div>


     
 
    `;
  $("card-container").appendChild(div);
}
