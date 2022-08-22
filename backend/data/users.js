import bcrypt from "bcryptjs";

export const users = [
  {
    name: "Admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
   
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10),
    
  },
];

export default users;
