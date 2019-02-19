function fn0(name, surname, age, sex){

    return{
        fullname: function(){
            return `${name} ${surname}`;
        },
        greetMessage: function(){
            return sex ===1 ? `Mr ${name}.` : `Mrs ${name}`;
        },
        age: age
    }

}
console.log(fn0("Ilya","Polyakov",29,"1"));



