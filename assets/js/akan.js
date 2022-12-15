console.log("Inside Akan.JS");

//our event listeners
let form = document.querySelector("form");
form.addEventListener('submit', formSubmitted);


//method on submit form
function formSubmitted(e) {

    e.preventDefault();
    let formData = new FormData(form); 
    let gender = formData.get('gender');
    let date = formData.get('dd');
    let month = formData.get('mm');
    let year = formData.get('yyyy');
    //pass to func that produces akanName:
    akanName(gender, date, month, year)
}

function akanName(gender, date, month, year) {
    //for the values:
    // 0=> male, 1=> female
    switch (gender) {
        case "male":
            gender = 0;
            break;
        case "female":
            gender = 1;
            break;
        default:
            gender = 0;
    }

let dayName = {
    'sun': ['Kwasi', 'Akosua'],
    'mon': ['Kwadwo', 'Adowa'],
    'tue': ['Kwabena', 'Abenaa'],
    'wed': ['Kwaku', 'Akua'],
    'thu': ['Yaw', 'Yaa'],
    'fri': ['Kofi', 'Afua'],
    'sat': ['Kwame', 'Ama']
}
console.log(dayName);
//create date object to get day of week
console.log("y,m,d: ",year,month,date)
//month is zero based in JS, so convert to int and offset by 1:
month = +(month) - 1;
let d = new Date(year, month, date);

//to get the key (as in thu, fri), etc:
let dayOfWeek= d.toDateString().split(" ")[0].toLowerCase();
console.log("dayofWeek: ",dayOfWeek);

//remember, 0 is male, 1 is female name in value:
//dayOfWeek is our key

let newName = dayName[dayOfWeek][gender];
console.log(newName);

displayNewName(newName);

}

function displayNewName(newName) {
    console.log("Hello now displayNewName");
    document.getElementById("name-major").innerHTML = `<h1> Your Akan Name is: ${newName}</h1> `;
    // To DO:
    // 1. Limit what can be entered in text box
    // 2. Attract more attention to the newName shown
    // 3. Some more paragraphs below form about name, day of week of birth, etc
    // 4. Allow calendar picker to populate input
    // 5. Reset button to also reset the new name shown in the <h1> header
    // 6. Edit menu to be more relevant.
}
