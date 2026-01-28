function calculateArea(){
    //Collects the values from the input fields 
    let l = document.getElementById("length").value;
    let w = document.getElementById("width").value;

    //Converts the string values to numbers 
    let length = Number(l);
    let width = Number(w);

    //Calculates the area 
    let area = length * width;

    //Displays the result in the output field 
    document.getElementById("result").innerHTML = "The area is  : " + area;

}