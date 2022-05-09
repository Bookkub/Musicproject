let favbtn;
let favbtnclick;
let showmorebtn;
function favbutton()
{
    favbtn = document.querySelector('.favbtn');
    favbtnclick = document.querySelector('.favbtn-click');
    favbtn.addEventListener('click',favunclick);
    favbtnclick.addEventListener('click', favlick);
}
function favunclick()
{
   favbtn.classList.add('hidden');
   favbtnclick.classList.remove('hidden');
}
function favlick()
{
    favbtnclick.classList.add('hidden');
    favbtn.classList.remove('hidden');
}

function showmore(){
    morerow = document.querySelectorAll('.morerow');
    showmorebtn = document.querySelector('.showmore');
    morerow.forEach(hide => {
        hide.classList.remove('hidden');
    });
    showmorebtn.classList.add('hidden');
}
