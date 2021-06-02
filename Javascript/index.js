 /* Buttons */
  document.getElementById("myButton").onclick = function () {
    location.href = "Opleidingen.html";
  }

    document.getElementById("myButtonVak").onclick = function () {
        location.href = "Vakken.html";
    }

        document.getElementById("myButtonDocent").onclick = function () {
            location.href = "Docenten.html";
        }

            document.getElementById("myButtonStudent").onclick = function () {
                location.href = "Studenten.html";
            }

            document.getElementById("myButtonResultaat").onclick = function () {
                location.href = "Resultaten.html";
            }

            document.getElementById("myButtonback").onclick = function () {
                location.href = "index.html";
            }
            /* Upload image */
            var loadFile = function(event) {
                var image = document.getElementById('output');
                image.src = URL.createObjectURL(event.target.files[0]);
            };

            /* Click window events */
            function myFunction(){
                alert("Gegevens werden opgeslagen!");
            };

            /* Sign out event */
            function confirmation(){
            var answer = confirm("Wilt u uitloggen?")
            if (answer){
                alert("Tot ziens!")
                window.location = "Uitloggen.html";
            }
            else{
                alert("U blijft ingelogd")
            }
        }
        