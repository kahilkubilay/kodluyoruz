import { CreateFile, ReadFile, UpdateData, DeleteFile } from "./modules/CreateFile.js"

const fileDetails = {
    name: 'employees.json',
    data: `{"name": "Employee 1", "salary": 2000}`
}

const newSalary = `{"name": "Employee 1", "salary": 2500}`

CreateFile(fileDetails.name, fileDetails.data)
ReadFile(fileDetails.name)
UpdateData(fileDetails.name, newSalary)

console.log('After 2 seconds, your file will be deleted.')

const deleteFileInfo = () => {
    DeleteFile(fileDetails.name)

    console.log("file is deleted..")
}

 setTimeout(deleteFileInfo, 2000)
