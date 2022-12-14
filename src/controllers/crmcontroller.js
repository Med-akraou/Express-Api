import mongoose  from "mongoose";
import { contactShcema } from "../models/crmmodule";

const Contact = mongoose.model("Contact",contactShcema)

export const addNewContact=(req , res)=>{
    let newContact = new Contact(req.body);
    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    })
}

export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    })
}

export const getContactById = (req, res) => {
    Contact.findById(req.params.contactID, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    })
}

export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({_id:req.params.contactID},req.body,{new:true}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    })
}

export const deleteContact = (req, res) => {
    Contact.remove({_id:req.params.contactID},(err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json({message:"succesfly deleted contact"});
    })
}