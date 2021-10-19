/////////////////// משימת סטודנטים ///////////////////   !

/// 1 ///

class Student {
    Fname;
    Lname;
    age;
    GPA;
    constructor(Fname, Lname, age, GPA) {
        this.Fname = Fname;
        this.Lname = Lname;
        this.age = age;
        this.GPA = GPA;
    }
}

/// 1 ///


/// 2 ///


let Student1 = new Student("lior", "yosef", 24, 93);
let Student2 = new Student("haim", "ayanow", 23, 90);
let Student3 = new Student("matan", "ysays", 25, 87);


let student = new Map();

let studentArray = [Student1, Student2, Student3];

studentArray.forEach(item => {
    student.set(item.Fname, item)
});

console.log(student);

/// 2 ///


// 3.1 ///

// let StuName1 = document.getElementById("lior");
// let StuName2 = document.getElementById("haim");
// let StuName3 = document.getElementById("matan");

// StuName1.innerText += Student1.Fname;
// StuName2.innerText += Student2.Fname;
// StuName3.innerText += Student3.Fname;


// function showStuName1() {
//     console.log(`first name:${Student1.Fname} last name:${Student1.Lname} age:${Student1.age} GPA:${Student1.GPA}`);
//     StuName1.style.height = "300px"
//     StuName1.style.border = "solid"
//     StuName1.innerHTML += `<br> ${Student1.Lname} <br> ${Student1.age} <br>   ${Student1.GPA} `
// };
// function mouseOut() {
//     StuName1.innerText += Student1.Fname;
//     StuName1.style.display = "none";

// }

// function showStuName2() {
//     console.log(`first name:${Student2.Fname} last name:${Student2.Lname} age:${Student2.age} GPA:${Student2.GPA}`);
//     StuName2.style.height = "300px"
//     StuName2.style.border = "solid"
//     StuName2.innerHTML += `<br> ${Student2.Lname} <br> ${Student2.age} <br>   ${Student2.GPA} `

// };

// function showStuName3() {
//     console.log(`first name:${Student3.Fname} last name:${Student3.Lname} age:${Student3.age} GPA:${Student3.GPA}`);
//     StuName3.style.height = "300px"
//     StuName3.style.border = "solid"
//     StuName3.innerHTML += `<br> ${Student3.Lname} <br> ${Student3.age} <br>   ${Student3.GPA} `

// };

/// 3.1 ///




/// 3.2 ///



for (const key of student.keys()) {
    document.body.innerHTML += `<div class="divs" id="${key}">
    ${student.get(key).Fname}
    
    </div>`
}

let divs = document.getElementsByClassName("divs");

for (let i = 0; i < divs.length; i++) {

    divs[i].onmouseover = () => {
        divs[i].innerText += student.get(divs[i].id).Lname
        divs[i].innerText += student.get(divs[i].id).age
        divs[i].innerText += student.get(divs[i].id).GPA

        divs[i].style.height = "300px";
        divs[i].style.width = "300px";

    }

    divs[i].onmouseout = () => {

    divs[i].innerText = divs[i].id
    divs[i].style.height = "";
    divs[i].style.width = "";
    }
}


/// 3.2 ///




