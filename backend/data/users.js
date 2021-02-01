import bcrypt from "bcryptjs";

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Phuong Anh Nhu',
        email: 'phuonganh@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Trang Nhu',
        email: 'trang@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Hanh Dang',
        email: 'hanh@example.com',
        password: bcrypt.hashSync('123456', 10),
    },

]

export default users;