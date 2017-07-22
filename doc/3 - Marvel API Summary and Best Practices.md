# Marvel API Summary and Best Practices #

## 1. General API Information ##

### Service Endpoint ###
* `http(s)://gateway.marvel.com/`

### Resources ###
1. __Comics__: individual print and digital comic issues, collections and graphic novels.
2. __Comic series__: sequentially numbered groups comics with the same title.
3. __Comic stories__: indivisible, reusable components of comics.
4. __Comic events and crossovers__: big, universe-altering storylines.
5. __Creators__: women, men and organizations who create comics.
6. __Characters__: entities which occupy the Marvel Universe.

### Etag ###
* Attribute and HTTP header with a digest of the returned content. Use to save bandwidth and make the application more performant, by optionally pass an “if-none-match” HTTP header with that digest for subsequent requests to the same URL.

### GZIP Compression ###
* Pass an `Accept-Encoding` header to any endpoint in order to save bandwidth and make the application more performant.

## 2. API Results Structure ##
* The best way to quickly understand results returned by the Marvel Comics API is to test actual calls using the [interactive documentation](https://developer.marvel.com/docs).

## 3. Entity Types and Representations ##

### What entities are and how they relate to each other ###
* __Comic issues (or just comics)__: are the physical or digital products that end-users read. (The Marvel Comics API returns comic issues, collections, graphic novels and digital comics as part of the overall comics endpoint and entity type.)
* __Comics belong to a series__: is a (usually) sequentially number *list of comics with the same title and volume*. Marvel uses the year of original publication for a series as the volume number.
* __Comics can also be a part of an event__: which is a big, universe-changing storyline. A comic's appearance in an event is often independent of its membership in a series.
* __Comics are made up of stories__: which are *indivisible components of comics*. Most comics have two stories - a cover and an interior story - but many, such as anthology comics and collections, will have more. Stories may be re-published in several comics, but the comic in which they originally appeared will always be present as a data point.
* __Creators__: are the people and entities that make comics. They are assigned to the specific comic stories on which they worked, but we *bubble up those assignments to the issues, series and events* in which the stories appear as a convenience.
* __Characters__: are people and organizations which appear in comics. They are also assigned to stories initially and *bubbled up to issues, series and events*.

### Entity Representations ###
* __Full view and a summary view__:  entities returned by the API will have two representations, the full view is returned by requests to a resource endpoint, and summaries are returned when a resource is referenced by a full resource.
* __ResourceURI__: summary views will always contain a resourceURI, which points to the full representation of the referenced entity, and a name, for convenience. Some summary representations will additionally have a field describing its type or the relationship between the returned entity and the referenced entity.
* __Core Entity Representations__: can be found [here](https://developer.marvel.com/documentation/entity_types).

## 4. Authorizing and Signing Requests ##
* All calls to the Marvel Comics API must pass your __public key__ via an __“apikey” parameter__.
* Requests from client-side (browser-based) applications must originate from a __pre-authorized web site__ or browser extension URL.

## 5. Attribution, Linking and Rate Limits ##

### Rate Limits: Best-practices to reduce requests ###
* __Cache results.__ Caching API call results for limited amounts of time is OK. Caching calls for 24 hours is usually a good amount.
* __Only make the calls you need.__ Only make calls that are necessary to display information pertinent to your application. Don't pre-load information your users haven't asked for.

### Attribution ###
* You must attribute Marvel as the source of data whenever you display any results from the Marvel Comics API. Please use the following text on __every__ application screen or web page which displays the API result: __"Data provided by Marvel. © 2014 Marvel"__

### Linking to Marvel ###
* You must __link to Marvel__ whenever you show any information from the API __beyond the title and small (100px width or smaller) thumbnail of an entity__. If any additional information were displayed, each comic would need to have a link back to __one or more of the URLs associated with that comic__. If a URL array is not present for an entity simply link to the Marvel.com home page (http://marvel.com) in your attribution notice.

## 6. Image Representations and Pathing ##
* Images are represented as a partial path to an image file and the canonical extension of that file. __Image variants__ can be found [here](https://developer.marvel.com/documentation/images). To build a full image path from an image representation:
> 1. Take the "path" element from the image representation
> 2. Append a variant name to the path element
> 3. Append the "extension" element to the variant name