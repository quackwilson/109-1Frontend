var username = '';
var birthday = '';
var type = '';

$('#startCount').on('click',function(){
    username = $('#name').val();
    birthday = $('#birthday').val();
    type = $('input[name="type"]:checked').val();
    var rand_number = Math.floor(Math.random()*(2-1+1))+1;
    if(!username || !birthday || !type) {
        alert('請輸入完整的資訊')
    }
    else {
        localStorage.clear();
        localStorage.setItem('username',username);
        localStorage.setItem('birthday',birthday);
        localStorage.setItem('type',type);
        localStorage.setItem('rand_number',rand_number)
        window.location.href = './second.html';
    }
  
})

