//api.reddit.com directly serves json, no need to ask www.reddit.com/r/whatever.json

(async function () {
  let respdata = {}
  let posts = []
  let response = await fetch('https://api.reddit.com/r/linux')
  respdata = await response.json()
  posts = respdata.data.children
  renderCards(posts)
})()
function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

function renderCards(data) {
  let cards = document.getElementById('cards')
  data.forEach(element => {
    cards.innerHTML += `<div
    class="
      card
      bg-gray-300 bg-opacity-5
      max-w-full
      mx-auto
      rounded
      shadow-md
      overflow-hidden
      sm:max-w-3xl
      m-4
      px-4
      py-6
      sm:px-8
    "
  >
    <div class="md:flex w-full">
      <div class="w-full">
        <div class="tracking-wide text-xs text-gray-400 opacity-80 mb-6">
          Posted on
          <a href="#" class="underline text-red-400">${element.data.subreddit}</a> by
          <a href="#" class="underline text-red-400">${element.data.author}</a>
        </div>
        <a
          href="#"
          class="
            block
            text-xl
            leading-tight
            font-medium
            text-gray-100
            hover:underline
            tracking-wide
          "
          >${element.data.title}</a
        >
        <div class="text-gray-400 pt-2 text-sm sm:leading-tight sm:text-base max-h-20 overflow-hidden subtitle">${htmlDecode(element.data.selftext_html)}</div>
        <div
          class="
            flex
            items-center
            justify-between
            flex-wrap
            mt-6
            text-xs
            font-semibold
            leading-tight
            opacity-40
            text-gray-400
            w-full
          "
        >
          <div class="flex items-center w-32">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="inline text-yellow-500"
            >
            <path
            d="M17.6569 11.2929L16.2427 12.7071L12 8.46444L7.75735 12.7071L6.34314 11.2929L12 5.63605L17.6569 11.2929Z"
            fill="currentColor"
          />
          <path
            d="M17.6569 16.9497L16.2427 18.3639L12 14.1213L7.75735 18.364L6.34314 16.9498L12 11.2929L17.6569 16.9497Z"
            fill="currentColor"
          />
            </svg>
            <span class="pl-1">${element.data.score}</span>
          </div>
          <div class="flex items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="inline text-white"
            >
              <path d="M17 9H7V7H17V9Z" fill="currentColor" />
              <path d="M7 13H17V11H7V13Z" fill="currentColor" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 18V2H22V18H16V22H14C11.7909 22 10 20.2091 10 18H2ZM12 16V18C12 19.1046 12.8954 20 14 20V16H20V4H4V16H12Z"
                fill="currentColor"
              />
            </svg>
            <span class="pl-1">${element.data.num_comments} Comments</span>
          </div>
        </div>
      </div>
    </div>
  </div>`
  });
}