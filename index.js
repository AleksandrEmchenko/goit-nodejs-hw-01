const contactService = require("./contacts.js");
const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactService.listContacts();
      console.table(allContacts);
      break;

    case "get":
      const oneContact = await contactService.getContactById(id);
      return console.table(oneContact);
      break;

    case "add":
      const addNewContact = await contactService.addContact(name, email, phone);
      return console.table(addNewContact);
      break;

    case "remove":
      const removeContact = await contactService.removeContact(id);
      return console.table(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
