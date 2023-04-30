import fs from 'fs';

const cb = (err, data) => {
    try {
        if(err) throw(err)

        console.log(data)
    } catch (err) {
        console.log(`some errors. Details: ${err}`)
    }
}

/**
 * 
 * @param {string} name 
 * @param {string} info 
 */

const CreateFile = (name, info) => {
    fs.writeFile(name, info, 'utf8', cb)
}

/**
 * 
 * @param {string} name 
 */

const ReadFile = (name) => {
    fs.readFile(name, 'utf8', cb)
}

/**
 * 
 * @param {string} name 
 * @param {string} data 
 */

const UpdateData = (name, data) => {
    fs.writeFile(name, data, 'utf8', cb)
}

const DeleteFile = (name) => {
    fs.unlink(name, cb)
}





export {
    CreateFile,
    ReadFile,
    UpdateData,
    DeleteFile
}

