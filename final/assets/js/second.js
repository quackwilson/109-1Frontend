$(document).ready(function(){
    var dict = {'study': '學業', 'love': '愛情', 'work': '事業', 'money': '財運'};
    var dict_word = {'love01':'恭喜您！您的桃花運不錯哦！可以考慮看看玩玩交友軟體或者去去夜店，可能可以找到新歡。(如果已經有另一半的，就不要劈腿了啦>.<)','love02':'你的愛情非常的悲慘，建議您好好的面對現實，認真讀書或工作，至少有前途和錢途，不會人財兩空，就像習大大說的，要報答黨的恩情。','study01':'哎喲不錯哦！看你這個氣勢就是準備拿書卷獎了！沒有書卷也會有班排名前50%！加油！期待你的好消息！','study02':'挖叻！快去讀書啦！不要占卜了...不然教授要當人。','work01':'發大財！你的事業最近很不錯喔！如果是當下屬的，老闆要準備加薪了；如果是老闆就準備簽大單子吧~~','work02':'看起來老闆不爽你很久了，你還是去加班吧...記得把網頁關掉，不然老闆會說你上班不專心...','money01':'哇塞！你的財運非常不錯哦！可以去嘗試看看買買樂透或刮刮樂之類的，有可能會成為台灣新的千萬富翁。沒有買樂透也會中發票哦！','money02':'哭喔！你的財運讓人有點尷尬，我也不好多說，就給你看看韓國瑜的臉消消氣吧！！'}
    var html_entity_type = {
        'love' : '<div class="col smallTitle"><span class="centerBox"><div class="form-check"><input class="form-check-input" value="love" type="radio" name="recount_type" id="love"><label class="form-check-label" for="flexRadioDefault2">愛情</label></div></span></div>', 'study' : '<div class="col smallTitle"><span class="centerBox"><div class="form-check"><input class="form-check-input" value="study" type="radio" name="recount_type" id="study"><label class="form-check-label" for="flexRadioDefault2">學業</label></div></span></div>','money' : '<div class="col smallTitle"><span class="centerBox"><div class="form-check"><input class="form-check-input" value="money" type="radio" name="recount_type" id="money"><label class="form-check-label" for="flexRadioDefault2">財運</label></div></span></div>','work' : '<div class="col smallTitle"><span class="centerBox"><div class="form-check"><input class="form-check-input" value="work" type="radio" name="recount_type" id="work"><label class="form-check-label" for="flexRadioDefault2">事業</label></div></span></div>'
    }

    $('#recount_area').empty();
    var type = dict[localStorage.getItem('type')];
    var username = localStorage.getItem('username');
    var birthday = localStorage.getItem('birthday');
    var rand_number = localStorage.getItem('rand_number');
    var result_img = `assets/img/${localStorage.getItem('type')}0${rand_number}.png`
    var year = birthday.substr(0,4);
    var month = birthday.substr(5,2);
    var date = birthday.substr(8,2);
    var currentDate = new Date();
    var cYear = currentDate.getFullYear();
    var years_old = cYear - year;
    var detail_key = `${localStorage.getItem('type')}0${rand_number}`;
    var to_fill = 0;
    $('#display_username').text(username);
    $('#display_type').text(type);
    $('#display_birthday').text(year);
    $('#display_birthmonth').text(month);
    $('#display_birthdate').text(date);
    $('#display_years_old').text(years_old);
    $('#result_img').attr('src',result_img);
    $('#display_detail').text(dict_word[detail_key]);

    Object.keys(html_entity_type).forEach(function(key) {
        if(localStorage.getItem('type') != key) {
            $('#recount_area').append(html_entity_type[key]);
            $('#chaLuck').show();
        }
    });

    if(rand_number == 1) {
        to_fill = Math.floor(Math.random()*(5-3+1))+3;

        for (let i  = 0 ; i < to_fill ; i++) {
            $('#logo_amount').append(`<img class="luck_logo" src="./assets/img/${localStorage.getItem('type')}_on.png" alt="">`)
        }
        
        for (let i = 0 ; i < 5 - to_fill ; i++){
            $('#logo_amount').append(`<img class="luck_logo" src="./assets/img/${localStorage.getItem('type')}_non.png" alt="">`)
        }
    }else {
        to_fill = Math.floor(Math.random()*(2-1+1))+1;

        for (let i = 0 ; i < to_fill ; i++){
            $('#logo_amount').append(`<img class="luck_logo" src="./assets/img/${localStorage.getItem('type')}_on.png" alt="">`)
        }

        for (let i  = 0 ; i < 5 - to_fill ; i++) {
            $('#logo_amount').append(`<img class="luck_logo" src="./assets/img/${localStorage.getItem('type')}_non.png" alt="">`)
        }
    }

    $('#changeLuck').on('click', function(){
        if(to_fill == 5) {
            alert('您的運勢已經很好了！不用再改了！')
            $('#chaLuck').hide();
        }else if (to_fill < 5) {
            $('#logo_amount').empty();
            for (let i  = 0 ; i < 5 ; i++) {
                $('#logo_amount').append(`<img class="luck_logo" src="./assets/img/${localStorage.getItem('type')}_on.png" alt="">`)
            }
            alert('改命成功！運勢指數已加滿，加油！');
            $('#chaLuck').hide();
        }

        if(localStorage.getItem('rand_number') == 2) {
            detail_key = `${localStorage.getItem('type')}01`;
            result_img = `assets/img/${localStorage.getItem('type')}01.png`;
            localStorage.setItem('rand_number', 1);
            rand_number = 1;
            $('#display_detail').text(dict_word[detail_key]);
            $('#result_img').attr('src',result_img);
            alert('改命成功！運勢指數已加滿，加油');
            $('#chaLuck').hide();
        }
    })

    var recount_type = '';


    $('#recount').on('click',function(){
        $('#logo_amount').empty();
        recount_type = $('input[name="recount_type"]:checked').val();
        var recount_rand_number = Math.floor(Math.random()*(2-1+1))+1;
        if(!type) {
            alert('請先填寫算命項目')
        }
        else {
            localStorage.setItem('type',recount_type);
            localStorage.setItem('rand_number',recount_rand_number)
            result_img = `assets/img/${localStorage.getItem('type')}0${recount_rand_number}.png`
            detail_key = `${localStorage.getItem('type')}0${recount_rand_number}`;
            $('#result_img').attr('src',result_img);
            $('#display_detail').text(dict_word[detail_key]);
            var rtype = dict[localStorage.getItem('type')];
            $('#display_type').text(rtype);
        }

        if(localStorage.getItem('rand_number') == 1) {
            to_fill = Math.floor(Math.random()*(5-3+1))+3;
            for (let i = 0 ; i < to_fill ; i++) {
                $('#logo_amount').append(`<img class="luck_logo" src="./assets/img/${localStorage.getItem('type')}_on.png" alt="">`)
            }
            for (let i = 0 ; i < 5 - to_fill ; i++){
                $('#logo_amount').append(`<img class="luck_logo" src="./assets/img/${localStorage.getItem('type')}_non.png" alt="">`)
            }
        }else {
            to_fill = Math.floor(Math.random()*(2-1+1))+1;
            for (let i = 0 ; i < to_fill ; i++){
                $('#logo_amount').append(`<img class="luck_logo" src="./assets/img/${localStorage.getItem('type')}_on.png" alt="">`)
            }
            for (let i  = 0 ; i < 5 - to_fill ; i++) {
                $('#logo_amount').append(`<img class="luck_logo" src="./assets/img/${localStorage.getItem('type')}_non.png" alt="">`)
            }
        }
        
        $('#recount_area').empty();

        Object.keys(html_entity_type).forEach(function(key) {
            if(recount_type != key) {
                $('#recount_area').append(html_entity_type[key]);
                $('#chaLuck').show();
            }
        });
        
        
    });
})