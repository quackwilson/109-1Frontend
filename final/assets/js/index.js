var username = '';
var birthday = '';
var type = '';

$('#startCount').on('click',function(){
    username = $('#name').val();
    birthday = $('#birthday').val();
    type = $('input[name="type"]:checked').val();
    if(!username || !birthday || !type) {
        alert('請輸入完整的資訊')
    }
    else {
        localStorage.clear();
        localStorage.setItem('username',username);
        localStorage.setItem('birthday',birthday);
        localStorage.setItem('type',type);
        window.location.href = '/second.html';
    }
  
})

