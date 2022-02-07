const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000;
const departments = require('./departments');
const token = '0123456789';
app.listen(port, () => console.log(`Server has been started on ${port}`));

app.use(cors());

const authenticateToken = (request, response, next) => {
    if (!!request.headers.authorization) {
        const clientToken = request.headers.authorization;
        if (clientToken !== token) {
            return response.status(401).json('The token is incorrect');
        } else {
            next();
        }
    } else {
        return response.status(400).json('Token not found`');
    }
};

const getAll = (request, response) => {
    const onlyDepartments = departments.map(({ users, ...department }) => {
        return department;
    });
    response.status(200).json(onlyDepartments);
}

const getById = (request, response) => {
    const departmentById = departments.find((department) => department.id === request.params.id);
    if (departmentById) {
        response.status(200).json(departmentById);
    } else {
        response.status(404).json(`There is no department with id: ${request.params.id}`);
    };
};

//localhost:3000/api/department
app.get('/api/department/', authenticateToken, getAll);

//localhost:3000/api/department/01
//localhost:3000/api/department/02
//localhost:3000/api/department/03
//localhost:3000/api/department/04
//localhost:3000/api/department/05
app.get('/api/department/:id', authenticateToken, getById);