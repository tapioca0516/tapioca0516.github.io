$(document).ready(function(){
    var imgs;
    var img_count;
    var img_position = 1;
  
    imgs = $(".slide ul");
    img_count = imgs.children().length;
    console.log('img_count : ' + img_count);
    // 문서 최초 로드 시 타이틀 초기화 함수
    initTitle();

    //버튼을 클릭했을 때 함수 실행
    $('#back').click(function () {
      back();
    });
    $('#next').click(function () {
      next();
    });

    $('#sceneryTitle').click(function () {
      //scenery div를 클릭했을때 수행
      //console.log("travelTitle")
      $('#travelUl').show();
      $('#peopleUl').css('display','none');
    });

    $('#peopleTitle').click(function () {
      //people div를 클릭했을때 수행
      //console.log("peopleTitle")
      $('#peopleUl').show();
      $('#travelUl').css('display','none');
    });

    function initTitle() {
      $('#travelUl').show();
      $('#peopleUl').css('display','none');
    }

    function initImgCount() {
      
    }

    function back() {
      if(1<img_position){
        imgs.animate({
          left:'+=500px'
        });
        img_position--;
        console.log('img_count : ' + img_count);
      }
    }
    function next() {
      if(img_count>img_position){
        imgs.animate({
          left:'-=500px'
        });
        img_position++;
        console.log('img_count : ' + img_count);
      }
    }


    //이미지 끝까지 가면 버튼 사라지기


    //첫 이미지로 돌아오기


  });