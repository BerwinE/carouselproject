var pictures;


pictures = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHv_jIswdZGXPRC_L76ITDc4nxvOO8tF22AYPXvpnO50JSvbKcPf59QRmP6GxNglhGyI&usqp=CAU', 'https://static.crozdesk.com/web_app_library/screenshots/images/000/003/606/screenshot/github-screenshot-6.png?1559230619', 'https://everhour.com/blog/wp-content/uploads/2017/05/github-zenhub.png'];


document.getElementById('previousPage').addEventListener('click', (event) => {
  let element_img = document.getElementById('img');
  pictures.push(pictures[0]);
  element_img.setAttribute("src", pictures.shift());
  element_img.style.backgroundColor = '#999999';

});

document.getElementById('nextpage').addEventListener('click', (event) => {
  let element_img2 = document.getElementById('img');
  pictures.push(pictures[0]);
  element_img2.setAttribute("src", pictures.shift());
  element_img2.style.backgroundColor = '#999999';

});