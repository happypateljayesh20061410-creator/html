<!DOCTYPE html>
<html>
    <head>
        <title> if else login check </title>

    </head>
    <body id="dark">
        <h2>login status</h2>
        <p id="status"></p>
        <script>
            let login=false;

            if(login){
                document.getElementById("status").innerHTML="welcome !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! u are logged in.";
                
            }
            else{
                document.getElementById("status").innerHTML="please login to access the website.";
            }
            </script>
            create a script that displays a message based on the value of hour  using if else  if else display good morning good evening afternoon night accordingly 
            else if (hour>=0 && hour<12){
                document.getElementById("status").innerHTML="Good Afternoon!";
            }
            
        </body>
</html>
