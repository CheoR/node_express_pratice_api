const routes = (app) => {
  app.route('/contact')
	.get((req, res, next) => {
	  // middleware
	  console.log(`Request from: ${req.originalUrl}`);
	  console.log(`Request type: ${req.method}`);
	  next();
	}, (req, res, next) => {
	  res.send('GET request route');
	})

	.post((req, res) =>
	  res.send('POST request route'))

  app.route('/contact/:contactID')
	.put((req, res) =>
	  res.send('PUT request route'))

	.delete((req, res) =>
	  res.send('DELETE request route'))
}

export default routes;

