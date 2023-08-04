//Crea una función que tome un array de objetos, 
//donde cada objeto representa un estudiante con propiedades "nombre" y "calificación". 
//La función debe recibir un nombre y devolver el objeto del estudiante con ese nombre, o null si no se encuentra.

const Students = [
    {
    name: 'juan',
    grade: 5,
    },
    {
        name: 'Jhon',
        grade: 4
    },
]

const Student = find("Jose")

function find (name) {
    for (let i = 0; i < Students.length; i++) {
        if (name === Students[i].name) {
           return Students[i]
        }
        
    }
}

if (Student) {
    console.log(Student);
}else {
    console.log("Null");
}

