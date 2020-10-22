/*window.onload=function(){
    document.getElementById("Alert").onclick = Function()
    {
        
    }
}*/
//console.log("jklfdsjfljss");
//document.getElementById("Alert").addEventListener("click", () => { 
    /*the use of addEventListener in JavaScript is separated from the HTML, in the "click" events */
    let i = 1;
    // var txt;
    let knowprograma = confirm("Do you know program?");
   if (knowprograma == true) {
        //txt = "You pressed OK!";
        let colors = prompt("Enter the colors you will occupy ");
        if (i <= colors) {
            let arrcolor = []
            i++;
            for (j = 0; j < colors; j++) {
                arrcolor.push(prompt("Enter the color "))
            }
            arrcolor.sort()
            alert(`The colors are:  ${arrcolor}`);
        }
    } else {
        let Name = prompt("Enter you Name:");
        // var r = confirm("Press a button!");
        if (confirm("sure their name was " + Name + " ?")) {
            //   txt = "You pressed OK!";
            swal(`welcome ${Name}`+ "\n The programing wiht javaScript!");
        }
    }
    swal("Good job!", " ", "success","Ok");
//})