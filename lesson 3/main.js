function getFullName(user, age){
    if(age < 18){
        alert('clsoe')
    }else {
        alert(user.first_name + " " + user.last_name + " " + "open")
    }
}

const user = {
    first_name: "John",
    last_name: "Barbaro"
}

const age = prompt ("сколько вам лет?")

getFullName(user, age)