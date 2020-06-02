import { Meteor } from 'meteor/meteor';
// import { check, Match } from 'meteor/check';
import { Enquiry } from './enquiry.js';
import { dynamicCollections } from '/imports/startup/both/dynamic_collections.js';
import { getSubdomain } from '/imports/startup/both/global_function.js';

Meteor.methods({
    'Enquiry.insert'(fields) {
        fields['createdAt'] = new Date();
        let id;
        if (getSubdomain() && dynamicCollections[getSubdomain()+'_enquiry']) {
            id = dynamicCollections[getSubdomain()+'_enquiry'].insert(fields);
        } else {
           id = Enquiry.insert(fields);
        }
	      this.unblock();
	      Email.send({
	        to: 'placemaking@woollahra.nsw.gov.au',
            cc: 'peter.kauter@woollahra.nsw.gov.au ',
            bcc: 'amit.deligence@gmail.com',
	        from:Meteor.settings.private.smtp.username,
	        subject: "Enquiry mail",
	        html: fields.query + "<br/>Contact name :" + fields.contactName + "<br/>Contact Number : " + fields.tel 
	      });
 	      return id;
    }
});
