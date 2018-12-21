function LinksSetColor(color)
{
  // var alist=document.querySelectorAll('a');
  // var i=0;
  // while(i<alist.length)
  // {
  //   console.log(alist[i]);
  //   alist[i].style.color=color;
  //   i++;
  // }
  $('a').css('color',color);                    //jQuery 사용!!!!
}

var Body={                    //객체 생성 1
  setColor: function(color)   //객체에 함수 사용 -> 객체 바로 아래의 함수들 참고
  {
    //document.querySelector('body').style.color=color;
    $('body').css('color',color);               //jQuery 사용!!!!
  },
  setBackgroundColor:function(color)
  {
    //document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor',color);     //jQuery 사용!!!!
  }
}

/*function BodySetColor(color)  //함수를 극한으로 사용하는 중
{
  document.querySelector('body').style.color='color';
}

function BodySetBackgroundColor(color)  //함수를 극한으로 사용하는 중
{
  document.querySelector('body').style.backgroundColor='color';
}*/

function nightDayHandler(self)
{
  var target = document.querySelector('body');
  if(self.value === 'night')
  {
    //target.style.backgroundColor='black';
    //BodySetBackgroundColor('black');  -> 객체 Body를 사용하면서 생략, 아래 참고
    Body.setBackgroundColor('black');
    //target.style.color='white';
    //BodySetColor('white');            -> 객체 Body를 사용하면서 생략, 아래 참고
    Body.setColor('white');
    self.value = 'day';

    LinksSetColor('powderblue');

  }
  else
  {
    //target.style.backgroundColor='white';
    //BodySetBackgroundColor('white');   -> 객체 Body를 사용하면서 생략, 아래 참고
    Body.setBackgroundColor('white');
    //target.style.color='black';
    //BodySetColor('black');              -> 객체 Body를 사용하면서 생략, 아래 참고
    Body.setColor('black');
    self.value = 'night';

    LinksSetColor('blue');

  }
}
