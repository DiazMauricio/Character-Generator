

function changeTheme(){
    let body = document.body;
    body.className = body.className === "dark" ? "" : "dark" ;
}

function traerDatos (){
    let delay = 800;
    

    disableButton(tl(11));
    circleEffect(500)


    //  GET ELEMENTS
    let $race = document.getElementById('race');
    let $subrace = document.getElementById('subrace');
    let $age = document.getElementById('age');
    let $class = document.getElementById('class');
    let $subclass = document.getElementById('subclass');
    let $numbers = document.getElementById('numbers');
    let $gender = document.getElementById('gender');

    //  HIDE EVERYTHING
    $race.style.opacity = 0;
    $subrace.style.opacity = 0;
    $age.style.opacity = 0;
    $class.style.opacity = 0;
    $subclass.style.opacity = 0;
    hideNumbers($numbers.children);
    $gender.style.opacity = 0;

    //  CHANGE DATA
    setTimeout(()=>{
        randomRace($race, $subrace);
        randomAge($age);
        randomNumbers($numbers.children);
        randomClass($class,$subclass);
        randomGender(tl(8));
    }, delay)

    //  SHOW EVERYTHING
    show($race,tl(0));
    show($subrace,tl(1));
    show($age,tl(2));
    show($class,tl(3));
    show($subclass, tl(4));
    showNumbers($numbers.children, tl(5));
    show($gender, tl(11));
}

function show(element, timing){
    setTimeout(()=>{
        element.style.opacity = 1;
    }, timing)
}
function showNumbers(numbers, timing){
    let tempo = 200;
    for (let i = 0; i < numbers.length; i++) {
        setTimeout(()=>{
            numbers[i].style.opacity = 1;
        }, timing)
        timing += tempo
    }
}
function hideNumbers(numbers){
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].style.opacity = 0;
    }

}

/// VISUAL EFFECS
function tl (n){
    let delay = 800;
    let tempo = 200;
    return tempo * n + delay
}
function disableButton(timing){
    let $button = document.getElementById('rollButton');
    $button.setAttribute("disabled","");
    setTimeout(()=>{
        $button.removeAttribute("disabled");
    }, timing)
}

function circleEffect(timing){
    let $svgCircle = document.getElementById('svgCircle');
    $svgCircle.setAttribute("class","circleEffect");
    setTimeout(()=>{
        $svgCircle.removeAttribute("class");
    }, timing)
    
}
/// CHANGE DATA
//  •   NUMBERS
function randomNumbers(numbers){
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].textContent = rollStat();
    }
}
function rollStat(){
    let n1 = rollD6();
    let n2 = rollD6();
    let n3 = rollD6();
    let n4 = rollD6();

    let menor = Math.min(n1,n2,n3,n4);
    return n1 + n2 + n3 + n4 - menor;
}
function rollD6(){
    return Math.floor(Math.random() * 6) + 1;
}
//  •   RACE
function randomRace(raceElement, subraceElement){
    let r = Math.floor(Math.random() * DATA.races.length);
    let sr = Math.floor(Math.random() * DATA.races[r].subraces.length)

    let raceName = DATA.races[r].name;
    let subraceName = DATA.races[r].subraces[sr] !== undefined ? DATA.races[r].subraces[sr] : " ";
    raceElement.textContent = raceName;
    subraceElement.textContent = subraceName;
}
//  •   AGE
function randomAge(ageElement){
    let i = Math.floor(Math.random() * DATA.ages.length);
    ageElement.textContent = DATA.ages[i];
}
//  •   CLASS
function randomClass(classElement, subclassElement){
    let c = Math.floor(Math.random() * DATA.class.length);
    let sc = Math.floor(Math.random() * DATA.class[c].subclass.length)

    let className = DATA.class[c].name;
    let subclassName = DATA.class[c].subclass[sc] !== undefined ? DATA.class[c].subclass[sc] : " ";
    classElement.textContent = className;
    subclassElement.textContent = subclassName;
}
//  •   GENDER
function randomGender(timing){
    let $genderMarker = document.getElementById('gendermarker');
    let n = Math.random() * 12.1;
    let preN = n > 6 ? 0 : 12.1;
    
    $genderMarker.style.transform = "translate("+preN+"rem)";
    setTimeout(()=>{
         $genderMarker.style.transform = "translate("+n+"rem)";
    }, timing)

}
