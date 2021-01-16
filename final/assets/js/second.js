$(document).ready(function(){
    var dict = {'study': '學業', 'love': '愛情', 'work': '事業', 'money': '財運'};
    var type = dict[localStorage.getItem('type')];
    var username = localStorage.getItem('username');
    var birthday = localStorage.getItem('birthday');
    var year = birthday.substr(0,4);
    var years_old = 2021 - year;
    $('#display_username').text(username);
    $('#display_type').text(type);
    $('#display_birthday').text(birthday);
    $('#display_years_old').text(years_old);
})