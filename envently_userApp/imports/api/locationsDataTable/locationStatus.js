// Definition of the EventDev collection

import { Mongo } from 'meteor/mongo';

export const LocationStatus = new Mongo.Collection('location_status');

LocationStatus.allow({
  insert(userId, doc, fields, modifier) {
    return true;
  },
  update(userId, doc, fields, modifier) {
    return true;
  },
  remove(userId, doc, fields, modifier) {
    return true;
  },
});
