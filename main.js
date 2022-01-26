let regForm = document.querySelector('.register__form');
let regName = document.querySelector('.regName');
let regLastName = document.querySelector('.regLastName')
let regEmail = document.querySelector('.regEmail');
let regUser = document.querySelector('.regUser');
let regDate = document.querySelector('.regDate');
let regPw = document.querySelector('.regPw');
let regConfPw = document.querySelector('.regConfPw');
let regCheck = document.getElementById('cbox1');
let regSubmit = document.querySelector('.regBtn');
let formError = document.querySelector('.formError');

// CLASS FOR FORM OBJECT
class FormObj {
    constructor(name, lastName, email, user, date, pw, cpw, regCheck) {
      this.name = name;
      this.lastName = lastName;
      this.email = email;
      this.user = user;
      this.date = date;
      this.pw = pw;
      this.cpw = cpw;
      this.regCheck = regCheck;
    };
};

const pushObject = (value, msg) =>{
    if(value) {
        formError.innerHTML = `
            <p class="errorMsg"> ${msg} </p>
        `
    } else {
        formError.innerHTML = ""
    };
};


regSubmit.addEventListener('click', (e) =>{
    e.preventDefault();
        let user = new FormObj (
            regName.value.trim().toLowerCase(),
            regLastName.value.trim().toLowerCase(),
            regEmail.value.trim(),
            regUser.value.trim(),
            regDate.value,
            regPw.value,
            regConfPw.value,
            regCheck.checked
        );
        console.log(user);
        
        let userJSON = JSON.stringify(user);
        localStorage.setItem('user', userJSON);
        let userLoged = localStorage.getItem('user');
        let userParsed = JSON.parse(userLoged);
        pushObject(true, `
            El nombre del usuario es: ${userParsed.name} ${userParsed.lastName} <br>
            Su correo es: ${userParsed.email} <br>
            Su usuario es: ${userParsed.user}
        `)
    } 
);


