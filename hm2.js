function fn0(name, surname, age, sex){
    var flnm;
    var appeal;

    function fn1(name,surname){
        return flnm=name + " " + surname;
    } 

    function gm(flnm, sex){
        if (sex=="female"){
            return appeal="Mrs."+flnm+ " hello!";
        } 
        else if (sex=="male"){
            return appeal="Mr."+flnm+ " hello!";
        } 
        else{
            return appeal="input sex";
        }
    } 
    var person = {
        fullname: fn1(name,surname),
        greetMessage: gm(flnm, sex),
        age: age,
    }
    return person;
}
console.log(fn0("Ilya","Polyakov",29,"male"));


