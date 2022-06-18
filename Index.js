var submit = document.querySelector(".reset")
var flag = 0
submit.addEventListener("click", function()
{
    var c=0;
    var firstPass = document.querySelector(".first").value;
    var secondPass = document.querySelector(".second").value;
    if(firstPass === secondPass)
    {
        if(firstPass.length >=8)
        {
            for(i=0;i<firstPass.length;i++)
            {
                if(isCharacterALetter(firstPass.charAt(i)))
                {
                    c = c+1
                }
                else
                {
                    flag = 1;
                }
            }
            if(c==firstPass.length)
            {
                flag = 0;
            }
            else
            {
                flag = 1;
            }
        }
        else
        {
            flag = 1;
        }
    }
    else
    {
        flag = 1;
    }
    if(flag == 0)
    {
      var flexPass = document.querySelector(".flex-pass")
      flexPass.innerHTML = `<div class="typo-pass"><h2><b>Password Changed</b></h2></div>
      <p class="new">Your password has been updated! Now get back in the driver seat, racers are waiting for you! </p>
      <button class="reset">JOIN A RACE</button>`
    }
    else
    {
      var flexPass = document.querySelector(".flex-pass")
      flexPass.innerHTML = `<div class="typo-pass"><h2><b> Password Mismatched </b></h2></div>`
    }
})
function isCharacterALetter(char) 
{
    return (/[a-zA-Z]/).test(char)
}
