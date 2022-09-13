import { addNewContact } from "../controllers/crmcontroller"
import { getContacts, getContactById,updateContact,deleteContact } from "../controllers/crmcontroller"

const routes = (app)=> {
    app.route('/contact')
    .get((req,res,next)=> {
        // midllware
        console.log(`Request from ${req.originalUrl}`)
        console.log(`Methode: ${req.method}`)
         next()},
         getContacts
        )
    .post(addNewContact)

    app.route('/contact/:contactID')
    .get(getContactById)
    .put(updateContact)
    .delete(deleteContact)

}

export default routes