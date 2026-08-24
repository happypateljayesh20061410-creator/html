<!DOCTYPE html>
<html>
    <head>
        <title>If else age check</title>

    </head>
    <body>
        <h2>Welcome</h2>
        <p id="message"></p>
        <script>
            let age=35;

            if(age>=18){
                document.getElementById("message").innerHTML="You are eligible to visit the website.";
            }
            else{
                document.getElementById("message").innerHTML="You are not eligible to visit the website.";
            }
            </script>
    </body>
</html>
