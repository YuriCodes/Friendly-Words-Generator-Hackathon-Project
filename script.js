const display = document.getElementById('quoteDisplay')

let quotes = [
    "You got this, friend!",
    "Wow! Do you see how far you've come? I can't wait to see where you go next",
    "Do you know how proud we are of you? VERY MUCH!!!",
    "Live life with a curious heart, my friend",
    "You're working very hard, i see you",
    "We learn from every bug we make. You're doing great!",
    "Effort makes you. Be honest and proud of how far you've made it!",
    "You're doing great! I know you're trying very hard. Keep up the good work!",
    "Don't be afraid to celebrate the mini successes! They add up in the right direction!",
    "Don't be so hard on yourself, you're trying your best", 
    "No matter where you are now, you have the ability to grow. Keep growing! You can do it!",
    "I support you in pursuing what truly makes you happy!",
    "I believe in you even when you have trouble believing in yourself",
    "Don't feel guilty for not knowing exactly what you want yet, it's okay to have no idea. You have time to figure it out!",
    "You're such an important part of this world!",
    "It's tough but you're doing amazing!",
    "I'm rooting for you!! Keep up the good work",
    "Congratulations on making it this far! I'm sure it wasn't easy, but i never doubted you!",
];

//for image at the end of each quote
var img = document.createElement("img");
img.src= "sunflower.png"
//var src= document.getElementById('quote');
//src.appendChild(img);

//for the quotes
function newQuote(){
    let randNum = Math.floor(Math.random() * (quotes.length))
    display.innerHTML = quotes[randNum] 
    display.appendChild(img)
}


//for time, dates
function startTime(){
    let today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm ="";
    m= checkTime(m);

    if (h > 12){
        h = h - 12;
        ampm = "PM";
    } else if (h == 12){
        h= 12;
        ampm= "AM";
    } else if (h < 12){
        ampm = "AM";
    } else {
        ampm="PM";
    };

    if(h==0) {
        h=12;
    }
    
    document.getElementById('display').innerHTML=h+":"+m+ampm;
    let t = setTimeout(function()
    {startTime()},500); }

    function checkTime(i){
        if (i<10){ i ="0" + i}; //add zero in front of numbers <10
        return i;
    }
    
    //date
    function startDate() {
        let d= new Date();
        let days=
        ["Sunday", "Monday", "Tuesday", "Wednestay", "Thursday", "Friday", "Saturday"];
        document.getElementById("date").innerHTML = days[d.getDay()]+" | " + [d.getMonth()+1]+ "/"+d.getDate()+"/"+d.getFullYear();

    }

 //light-dark theme toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
  if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark'); //add this
  }
  else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light'); //add this
  }    
}

//save the current time for later login
const currentTheme = localStorage.getItem('theme') ?  localStorage.getItem('theme') : null;

if (currentTheme) {
document.documentElement.setAttribute('data-theme', currentTheme);

if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    }
}   
 