// // HW_6 (25.05.2023)

function createNewUser() {
    let firstName = prompt('Enter first name: ');
    let lastName = prompt('Enter last name: ');
    const newUser = {
        firstName,
        lastName,
        setBirthday: function (){
            let bday = prompt('Enter last birthday (format dd.mm.yyyy): ');
            this.birthday = new Date(bday.substring(6,10), bday.substring(3,5)-1, bday.substring(0,2))
        },
        getAge: function (){
            const millisecondsPerYear = 365 * 24 * 60 * 60 * 1000;
            let age = (new Date().getTime() - this.birthday)/millisecondsPerYear
            this.age = Math.trunc(age)
        },
        setFirstName: function () {
            Object.seal(newUser.firstName)
            oldFirstName = newUser.firstName,
                newUser.firstName = prompt('Enter NEW first name: ', oldFirstName);
            return newUser.firstName
        },
        setLastName: function (){
            Object.seal(newUser.lastName)
            oldLastName = newUser.lastName,
                newUser.lastName = prompt('Enter NEW last name: ', oldLastName);
            return newUser.lastName
        },
        getLogin: function () {
            let loginUser = this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
            return loginUser
        },
        getPassword: function (){
            let passwordUser = this.firstName[0].toLowerCase()+this.lastName.toLowerCase()+this.birthday.getFullYear()
            this.password = passwordUser
        },
    }
    return newUser;
}


function showUser(newUser) {
    console.log('User name: ' + newUser.firstName)
    console.log('User last name: ' + newUser.lastName)
    console.log('Login User: ' + newUser.getLogin())
    if (newUser.birthday) {
        console.log('Birthday: ' + newUser.birthday.getDate() +`.`+ parseInt(newUser.birthday.getMonth()+1) +`.`+ newUser.birthday.getFullYear())
    }
    if (newUser.age){
        console.log('Age: ' +newUser.age)
    }
    if  (newUser.password){
        console.log('Password: ' +newUser.password)
    }
    console.log('')
}

let userOne = createNewUser()

showUser(userOne)
userOne.setBirthday()
userOne.getAge()
userOne.getPassword()
showUser(userOne)