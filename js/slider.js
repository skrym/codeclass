//so == sliderOfSomething
//Slider with courses
var soCourse = document.querySelectorAll('#slider_courses .courses_slider-item');
var soCourse_ind = document.querySelectorAll('#slider_courses-indicators .courses__list-link');

var currentCourseSlide = 0;

var slideInterval = setInterval(nextSlide, 5000);

var selectedCourse = 0;
const courseItem = document.querySelectorAll("#slider_courses-indicators .courses__list-link");
courseItem.forEach(element => element.addEventListener("click", event => {
    event.preventDefault();
    selectedCourse = selectSlide(Array.prototype.indexOf.call(courseItem, event.target));
    console.log(selectedCourse);
}, false));

function nextSlide() {
    cleanStyle(); 
    currentCourseSlide = (currentCourseSlide + 1) % soCourse.length;
    setStyle();
}

function prevSlide() {
    cleanStyle();
    currentCourseSlide = currentCourseSlide > 0 ? (currentCourseSlide - 1) % soCourse.length : currentCourseSlide = 5;
    setStyle();
}

function selectSlide(position) {
    cleanStyle();
    currentCourseSlide = position;
    setStyle();
}

function cleanStyle() {
    soCourse[currentCourseSlide].className = 'courses_slider-item';
    soCourse_ind[currentCourseSlide].className = 'courses__list-link';
}

function setStyle() {
    soCourse[currentCourseSlide].className = 'courses_slider-item active';
    soCourse_ind[currentCourseSlide].className = 'courses__list-link courses__list-link--active';
}


//Slider with success
var soSuccess = document.querySelectorAll('#slider_success .success_slider-item');
var soSuccess_ind = document.querySelectorAll('.success .pagination__item');

var currentSuccessSlide = 0;

var slide2Interval = setInterval(nextSlideSuccess, 5000);

var selectedSuccess;
const successItem = document.querySelectorAll(".success .pagination__item");
successItem.forEach(element => element.addEventListener("click", event => {
    event.preventDefault();
    selectedSuccess = selectSlideSuccess(Array.prototype.indexOf.call(successItem, event.target));
}, false));

function nextSlideSuccess() {
    cleanStyleSuccess();
    currentSuccessSlide = (currentSuccessSlide + 1) % soSuccess.length;
    setStyleSuccess();
}

function prevSlideSuccess() {
    cleanStyleSuccess();
    currentSuccessSlide = currentSuccessSlide > 0 ? (currentSuccessSlide - 1) % soCourse.length : currentSuccessSlide = 2;
    setStyleSuccess();
}

function selectSlideSuccess(position) {
    cleanStyleSuccess();
    currentSuccessSlide = position;
    setStyleSuccess();
}

function cleanStyleSuccess() {
    soSuccess[currentSuccessSlide].className = 'success_slider-item';
    soSuccess_ind[currentSuccessSlide].className = 'pagination__item';
}

function setStyleSuccess() {
    soSuccess[currentSuccessSlide].className = 'success_slider-item active';
    soSuccess_ind[currentSuccessSlide].className = 'pagination__item active';
}

//Slider with rooms
var soRooms = document.querySelectorAll('.slider__wrapper .slider__img_item');

var currentRoomsSlide = 0;

var slide3Interval = setInterval(nextSlideRooms, 5000);

function nextSlideRooms() {
    cleanStyleRooms();
    currentRoomsSlide = (currentRoomsSlide + 1) % soRooms.length;
    setStyleRooms();
}

function prevSlideRooms() {
    cleanStyleRooms();
    currentRoomsSlide = currentRoomsSlide > 0 ? (currentRoomsSlide - 1) % soRooms.length : currentRoomsSlide = 5;
    setStyleRooms();
}

function cleanStyleRooms() {
    soRooms[currentRoomsSlide].className = 'slider__img_item';
}

function setStyleRooms() {
    soRooms[currentRoomsSlide].className = 'slider__img_item active';
}