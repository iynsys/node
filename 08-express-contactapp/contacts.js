const fs = require("fs");
const dirPath = "./data";

if (!fs.existsSync(dirPath)) {
   fs.mkdirSync(dirPath);
}

const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
   fs.writeFileSync(dataPath, "[]", "utf-8");
}

const loadContact = () => {
   const file = fs.readFileSync(dataPath);
   const contacts = JSON.parse(file);
   return contacts;
};
const findContact = (nama) => {
   const contacts = loadContact();
   const contact = contacts.find(
      (kontak) => kontak.nama.toLowerCase() === nama.toLowerCase()
   );
   return contact;
};
module.exports = {
   loadContact,
   findContact,
};
