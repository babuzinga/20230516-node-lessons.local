// Чтение images.json и передача данных в функцию showImages
fetch('./01/images.json')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      showImages(json);
    });

const gallery = document.querySelector('.gallery');
function showImages(data) {
  for(let i = 0; i < data.length; i++) {
    const img = document.createElement('img');
    img.src = './01/images/' + data[i];
    gallery.append(img);
  }
}
