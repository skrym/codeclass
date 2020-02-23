var locations = [
  ["Алексеевская, ул. Годовикова, д. 9, стр. 1, подъезд 1", 55.807112, 37.631148],
  ["Арбатская, б-р Никитский, д. 7А", 55.754463, 37.600195],
  ["Бульвар Дмитрия Донского, ул. Старобитцевская, д. 9, к. 1", 55.574092, 37.590455],
  ["Выхино, пр-т Рязанский, д. 86/1", 55.708758, 37.830308],
  ["Каширская, Каширское шоссе 16, Библиотека имени Толстого", 55.662259, 37.630461],
  ["Ломоносовский проспект, ул.Мосфильмовская, д. 35, ИМЭС", 55.712538, 37.510207],
  ["Молодежная, ул. Партизанская, д. 23, Культурный центр", 55.735406, 37.411246],
  ["Новослободская, ул. Селезневская, д. 11а", 55.78041, 37.605307],
  ["Первомайская, ул. Средняя первомайская, д. 15", 55.795299, 37.808907],
  ["Перово, ул. Новогиреевская, д. 39А", 55.75274, 37.800617],
  ["Площадь Ильича, ул. Рабочая, д. 35", 55.742, 37.686697],
  ["Полежаевская, ул. 3-я Хорошевская, д.2, к. 1", 55.777544, 37.50309],
  ["Славянский бульвар, ул. Кастанаевская, д. 52, стр. 2", 55.734651, 37.469679],
  ["Сокол, Малый песчаный переулок дом 2", 55.802455, 37.507143],
  ["Спортивная, ул.Кооперативная 3, к. 6, Цифровой дом (вход со двора)", 55.725168, 37.569862],
  ["Строгино, ул. Твардовского, 8, с. 1, ТЕХНОПАРК, первое здание слева, офис 118", 55.794345, 37.390935],
  ["Тверская, пер. Старопименовский, д. 13", 55.77024, 37.604061],
  ["Тушинская, ул. Циолковского, д. 4", 55.829333, 37.449028],
  ["Фонвизинская, ул. Добролюбова, д. 21А, кБ", 55.818092, 37.591691],
  ["Шаболовская, ул. Шаболовка 36, Библиотека №164", 55.717568, 37.607934],
  ["Шипиловская, ул. Шипиловская д.58, к.1", 55.623141, 37.751478]
];

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 10,
  center: new google.maps.LatLng(55.761816, 37.620463),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map,
    icon: "images/icons/marker.png"
  });

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));
}




//menu
var menuIcon = document.getElementById('menu');
var menu = document.querySelector('#menu .menu__wrapper');
menuIcon.onclick = function() {
    menu.style.right = '0';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('overlay').style.zIndex = '90';
    document.getElementById('overlay').className = 'formenu';
}
//popup
    function openModal() {
        console.log('test - openmodal start');
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('popup').style.display = 'block';
    }
    document.getElementById('overlay').onclick = function () {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('overlay').style.zIndex = '10000';
        document.getElementById('overlay').className = '';
        document.getElementById('popup').style.display = 'none';
        menu.style.right = '-380px';
    }