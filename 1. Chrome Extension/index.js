let myBookmarks = [];
const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("del-btn");
const tabBtn = document.getElementById("tab-btn");
const ulEl = document.getElementById("ul-el");
const bookmarksFromLocalStorage = JSON.parse(
  localStorage.getItem("myBookmarks")
);

if (bookmarksFromLocalStorage) {
  myBookmarks = bookmarksFromLocalStorage;
  render(myBookmarks);
}
deleteBtn.addEventListener("dblclick", function () {
  localStorage.removeItem("myBookmarks");
  myBookmarks = [];
  render(myBookmarks);
});
tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myBookmarks.push(tabs[0].url);
    const storage = JSON.stringify(myBookmarks);
    localStorage.setItem("myBookmarks", storage);
    render(myBookmarks);
  });
});

function render(bookmarks) {
  const listItems = bookmarks
    .map(
      (b) =>
        `
    <li>
      <a target="_blank" href="${b}"> 
        ${b}
      </a>
    </li>
    `
    )
    .join("");

  ulEl.innerHTML = listItems;
}

saveBtn.addEventListener("click", function () {
  let input = inputEl.value;
  inputEl.value = "";
  myBookmarks.push(input);
  const storage = JSON.stringify(myBookmarks);
  localStorage.setItem("myBookmarks", storage);
  render(myBookmarks);
});
