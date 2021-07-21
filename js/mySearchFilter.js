const searchBar = document.getElementById('search')

function searchInput() {
  let inputValue = searchBar.value.toLowerCase()
  const imgAnchor = document.querySelectorAll('.gallery a');
  for (let i=0; i<imgAnchor.length; i++) {
    const imgList = imgAnchor[i];
    const imgListData = imgList.dataset.caption;
    if(imgListData.toLowerCase().includes(inputValue)) {
      console.log('this is true: ' + imgList );
      imgList.style.display = 'block';
    } else {
      console.log("these are false: " + imgList );
      imgList.style.display = 'none';
    }
  }  
}

searchBar.addEventListener('onkeyup', () => {
  return searchInput();
})
