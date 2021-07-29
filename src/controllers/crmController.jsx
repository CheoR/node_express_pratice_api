import mongoose from "mongoose";
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
 const newContact = new Contact(req.body);

 newContact.save((err, contact) => {
  if(err) {
   res.send(err);
  }
  res.json(contact);
 });
}

export const getContacts = (req, res) => {
 /*
  {} - return all, else return whatever fits the parameter
 */
 Contact.find({}, (err, contact) => {
  if(err) {
   res.send(err);
  }
  res.json(contact);
 });
}

export const getContactById = (req, res) => {
 /*
  {} - return all, else return whatever fits the parameter
 */
 const contactId = req.params.contactId;
 Contact.findById(contactId, (err, contact) => {
  if(err) {
   res.send(err);
  }
  res.json(contact);
 });
}

export const updateContact = (req, res) => {
 /*
  { new: true } - return updated object
 */
 const contactId = req.params.contactId;
 Contact.findOneAndUpdate({_id: contactId}, req.body, { new: true, useFindAndModify: false}, (err, contact) => {
  if(err) {
   res.send(err);
  }
  res.json(contact);
 });
}

export const deleteContact = (req, res) => {
 const contactId = req.params.contactId;
 Contact.remove({_id: contactId}, (err, contact) => {
  if(err) {
   res.send(err);
  }
  res.json({message: 'Contact Deleted'});
 });
}
