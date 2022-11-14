/**
 * Returns the portOptions for timetimes.co.uk
 * built from some JSON extracted from their site.
 */

import tidetimescouklatlng from './tidetimes-co-uk-lat-lng.json';
//import portOptions from "./tidetimes-co-uk";
import { map, sortBy } from 'lodash';


console.log( tidetimescouklatlng );
var portOptionsCoUK = map( tidetimescouklatlng, ( { slug, name } ) => ( { value: slug, label: name } ) );
console.log( portOptionsCoUK );
portOptionsCoUK = sortBy( portOptionsCoUK, [ 'value' ]);

console.log( portOptionsCoUK );

export default portOptionsCoUK;
