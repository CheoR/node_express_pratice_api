import { addNewContact, getContacts, getContactById } from "../controllers/crmController";

const routes = (app) => {
  app.route('/contact')
		.get((req, res, next) => {
				// middleware
				console.log(`Request from: ${req.originalUrl}`);
				console.log(`Request type: ${req.method}`);
				next();
		}, getContacts)

		.post(addNewContact);

  app.route('/contact/:contactId')
		.get(getContactById)
		.put((req, res) =>
				res.send('PUT request route'))

		.delete((req, res) =>
				res.send('DELETE request route'))
}

export default routes;

