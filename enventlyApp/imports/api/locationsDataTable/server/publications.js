import { Meteor } from 'meteor/meteor';
import { LocationStatus } from '../locationStatus.js';
import { dynamicCollections } from '/imports/startup/both/dynamic_collections.js';
import { getSubdomain } from '/imports/startup/both/global_function.js';

Meteor.publish('locationStatus.all', (sd) => {

	if(getSubdomain(sd))
  {
  return  dynamicCollections[getSubdomain(sd)+'_location_status'].find()
  }
  else {
    return LocationStatus.find();
  }
});
