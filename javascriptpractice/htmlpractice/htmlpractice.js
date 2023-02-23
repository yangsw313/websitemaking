/* 
var a = true;
var b = false;
var c = 10>5;
var d = Boolean(null); // 참 거짓 판별 함수

document.write(a,"<br>"); // true
document.write(b,'<br>'); // false
document.write(c,'<br>'); // true
document.write(d,'<br>'); // false

// 자료형 따로 정하지는 않음, 들어오는 값에 따라
// typeof 자료형 확인

var num = 200;
var str1 = "hello world"
var str2 = "Seungwoo Yang"
var t = null; 

document.write(typeof(num), '<br>');
document.write(typeof(str1), '<br>');
document.write(typeof(t), "<br>");


var a = 10;
var b = 20;
var c = 10;
var f = 20;
var result;

result = a>b; // false
document.write(result, "<br>");
result = a<b; //true 
 // 연산자는 다른 언어와 비슷

var weight
var height
var bmi

weight = prompt("체중 : ","50");
height = prompt("키 : ","170");


bmi = weight/((height/100)*(height/100))
bmi = bmi.toFixed(3);

if(bmi<=18.5)
    document.write("저체중입니다.", "<br>");

else if(bmi>18.5 && bmi<=23)
    document.write("정상 체중입니다.", "<br>");

else if(bmi>23 && bmi <=25)
    document.wrwite("과체중입니다.", "<br>");

else if(bmi>25 && bmi<=30)
    document.write("비만입니다.", "<br>");

else if(bmi>30)
    document.write("고도 비만입니다.", "<br>");

// location.reload(); -> 새로 고침

var site = prompt("포털 사이트 이동");
var url;

switch(site)
{
    case "구글": url = "www.google.com";
    break;

    case "다음": url = "www.daum.com";
    break;

    case "네이버": url = "www.naver.com";
    break;
    default: alaert("올바르지 않은 입력 ! ");
}

if(url)
    location.href = "http://" + url; //location.href = "address" -> 주소 이동

//객체

var today = new Date(); // date 클래스
var nowMonth = today.getMonth();
nowDate = today.getDate();
nowDay = today.getDay();
nowTime = today.getHours();
nowMin = today.getMinutes();

document.write(nowMonth+1, "<br>");
document.write(nowDate, "<br>");
document.write(nowDay, "<br>");
document.write(nowTime + " ");
document.write(nowMin);

//timer

var today = new Date;
var setTime = prompt("타이머 설정 시간(초) : ");
//document.write(setTime);

var currentTime = new Object()
currentTime.rnhour = today.getHours();
currentTime.rnmin = today.getMinutes();
currentTime.rnsec = today.getSeconds();

currentTime.sleep= function(ms)
{
    var wakeupTime = Date.now() + ms;
    while(Date.now()<=wakeupTime)
    {
        document.write("remain time : ",(wakeupTime - Date.now()));
    }
    document.write("done !");

}

MsTime = setTime * 1000;

currentTime.sleep(MsTime);



var today = new Date();
var nowYear = today.getFullYear();
console.log("Year: ", nowYear);
console.log("Today Date Structure : ", today);
var theDate = new Date(nowYear,11,31);
console.log("The Date Structure : ", theDate);
var diffFate = theDate.getTime()-today.getTime()
var result = Math.ceil(diffFate/1000/60/60/24);
console.log("D-day ",result);


//숫자게임

var rand = Math.floor(Math.random()*10)+1;
var guess = prompt("Take a Guess !(1~10) : ")//console.log(rand);

while(guess != rand)
{
    if(guess > rand)
        document.write("lower ! " + "<br>");
    else
        document.write("higher ! "+ "<br>");

    var guess = prompt("Take a Guess !(1~100) : ")//console.log(rand);
}

document.write("Congrats ! "+ "<br>");


var userEmail = prompt("Email : ");
var arrUrl = ["gmail.com", "naver.com"]

var check1 = false;
var check2 = false;
if(userEmail.indexOf("@")>0)    
    check1 = true;

if(userEmail.indexOf(arrUrl) >0)
    check2 = true;


if(check1&&check2)
    document.write(userEmail);
else
    alert("Wrong Email !");


var count = 0;

myFunc();

function myFunc // 호이스팅 앞에다가 fucntion 이렇게 하면 순서 상관 없음
{
    count++;
    document.write("hello" + count, "<br>");

}

myFunc();
 

var color = ["white", "yellow", "aqua", "purple"];
var i = 0;
var bodyTag = document.getElementById("theBody");
var sound = new Audio('disco.mp3');

function changeColor()
{
    sound.play();
    tim = setInterval(function(){bodyTag.style.backgroundColor = color[i]; i++; if(i>=color.length){i=0;}},100);
}
*/
