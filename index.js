// Write your solution in this file!
const employee = {
    name: "Suzanna Owiyo",
    streetAdress: '106 & Park'
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newArray = {...employee}
    newArray[key]= value

    return newArray
}

let newEmployee = updateEmployeeWithKeyAndValue(employee, "position", 'manager')

console.log(newEmployee)

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')

function deleteFromEmployeeByKey(employee, key){
    let newObject = {...employee}
    delete newObject[key]

    return newObject
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}

