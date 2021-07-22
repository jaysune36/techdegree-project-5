//Global Variables
const searchBar = document.getElementById('search');

// Function uses search bar input value to filter through img
function searchInput() {
  let inputValue = searchBar.value.toLowerCase();
  const imgAnchor = document.querySelectorAll('.gallery a');
  for (let i=0; i<imgAnchor.length; i++) {
    const imgList = imgAnchor[i];
    const imgListData = imgList.dataset.caption;
    if(imgListData.toLowerCase().includes(inputValue)) {
      imgList.style.display = 'block';
    } else {
      imgList.style.display = 'none';
    }
  }  
}

// SearchBar variable eventlistener will fire when a key is pressed to display img
searchBar.addEventListener('keyup', () => {
  return searchInput();
});
