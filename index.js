// Write your solution in this file!
const employee = {name: "legalName", address: "streetAddress"}
function updateEmployeeWithKeyAndValue(employee, name, Sam) {
    const newEmployee = {...employee}
    newEmployee[name] = Sam

    return {...employee, [name]: Sam} 
}
streetAddress = "11 Broadway"
function destructivelyUpdateEmployeeWithKeyAndValue(newEmployee, address, streetAddress) {
    newEmployee[address] = "12 Broadway"
    return newEmployee
}
function deleteFromEmployeeByKey(newEmployee, name, undefined){
    return {...newEmployee, [name]: undefined}
}
function destructivelyDeleteFromEmployeeByKey(employee, name, undefined){
    employee[name] = undefined
    return employee
}