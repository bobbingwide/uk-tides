/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _oik_uk_tides__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oik-uk-tides */ "./src/oik-uk-tides/index.js");
/**
 * @package uk-tides
 * Imports uk-tides block
 *
 * Each block is in a separate folder
 * The build directory is the target.
 *
 * @copyright (C) Copyright Bobbing Wide 2020,2021
 * @author Herb Miller @bobbingwide
 */


/***/ }),

/***/ "./src/oik-uk-tides/index.js":
/*!***********************************!*\
  !*** ./src/oik-uk-tides/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tidetimes_co_uk_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tidetimes-co-uk.js */ "./src/oik-uk-tides/tidetimes-co-uk.js");



/**
 * Implements UK tides as a server rendered block
 *
 * - Depends on uk-tides for server logic
 * - Supports easier to use parameter for source of tidal information ( Site )
 * - Supports easier to use parameter for specifying the location ( Port )
 * - Server side rendering when the block is not selected.
 *
 * @copyright (C) Copyright Bobbing Wide 2018-2020
 * @author Herb Miller @bobbingwide
 */
//import './style.scss';
//import './editor.scss';
 // Get registerBlockType from wp.blocks







/**
* These are the different options for the UK tides site attribute
*/

var siteOptions = {
  "org": "tidetimes.org.uk",
  // 709 as of Dec 2018
  "couk": "tidetimes.co.uk" //

};

/**
 * Register the WordPress block
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])( // Namespaced, hyphens, lowercase, unique name
'uk-tides/uk-tides', {
  // Localize title using wp.i18n.__()
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('UK tides'),
  description: 'Tide times and heights',
  // Category Options: common, formatting, layout, widgets, embed
  category: 'widgets',
  // Dashicons Options - https://goo.gl/aTM1DQ
  icon: 'chart-bar',
  // Limit to 3 Keywords / Phrases
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('UK'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('tides'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('times'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('heights'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('oik')],
  // Set for each piece of dynamic data used in your block
  attributes: {
    site: {
      type: 'string'
    },
    port: {
      type: 'string',
      default: 'chichester-harbour-entrance'
    }
  },
  example: {},
  supports: {
    customClassName: true,
    className: true,
    html: false
  },
  transforms: {
    from: [{
      type: 'block',
      blocks: ['oik-block/uk-tides'],
      transform: function transform(attributes) {
        return createBlock('uk-tides/uk-tides', {
          site: attributes.site,
          port: attributes.port
        });
      }
    }]
  },
  edit: function edit(props) {
    var onChangeSite = function onChangeSite(event) {
      props.setAttributes({
        site: event
      });
    };
    /**
    * Attempt a generic function to apply a change
        * using the partial technique
        *
        * key needs to be in [] otherwise it becomes a literal
        *
        */
    //onChange={ partial( handleChange, 'someKey' ) }


    function onChangeAttr(key, value) {
      //var nextAttributes = {};
      //nextAttributes[ key ] = value;
      //setAttributes( nextAttributes );
      props.setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, value));
    }

    ;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
      label: "Site",
      value: props.attributes.site,
      options: Object(lodash__WEBPACK_IMPORTED_MODULE_7__["map"])(siteOptions, function (key, label) {
        return {
          value: label,
          label: key
        };
      }),
      onChange: Object(lodash__WEBPACK_IMPORTED_MODULE_7__["partial"])(onChangeAttr, 'site')
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
      label: "Port",
      value: props.attributes.port,
      options: Object(lodash__WEBPACK_IMPORTED_MODULE_7__["map"])(_tidetimes_co_uk_js__WEBPACK_IMPORTED_MODULE_8__["default"], function (key, label) {
        return {
          value: label,
          label: key
        };
      }),
      onChange: Object(lodash__WEBPACK_IMPORTED_MODULE_7__["partial"])(onChangeAttr, 'port')
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelRow"], null))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default.a, {
      block: "uk-tides/uk-tides",
      attributes: props.attributes
    }));
  },
  save: function save() {
    return null;
  }
}));

/***/ }),

/***/ "./src/oik-uk-tides/tidetimes-co-uk.js":
/*!*********************************************!*\
  !*** ./src/oik-uk-tides/tidetimes-co-uk.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var portOptions = {
  "aberdaron": "Aberdaron",
  "aberdeen": "Aberdeen",
  "aberdovey": "Aberdovey",
  "aberporth": "Aberporth",
  "aberystwyth": "Aberystwyth",
  "albert-bridge": "Albert Bridge",
  "aldeburgh": "Aldeburgh",
  "allington-lock": "Allington Lock",
  "alloa": "Alloa",
  "amble": "Amble",
  "amlwch": "Amlwch",
  "annan-waterfoot": "Annan Waterfoot",
  "anstruther-easter": "Anstruther Easter",
  "applecross": "Applecross",
  "appledore": "Appledore",
  "arbroath": "Arbroath",
  "ardglass": "Ardglass",
  "ardnave-point": "Ardnave Point",
  "ardrossan": "Ardrossan",
  "arklow": "Arklow",
  "arnside": "Arnside",
  "arrochar": "Arrochar",
  "arundel": "Arundel",
  // Not .org.uk
  "ayr": "Ayr",
  "badcall-bay": "Badcall Bay",
  "baginbun-head": "Baginbun Head",
  "balbriggan": "Balbriggan",
  "balivanich": "Balivanich",
  "ballinskelligs-bay-castle": "Ballinskelligs Bay Castle",
  "ballycastle-bay": "Ballycastle Bay",
  "ballycotton": "Ballycotton",
  "ballycrovane-harbour": "Ballycrovane Harbour",
  "ballyglass-broadhaven": "Ballyglass (Broadhaven)",
  // Not .org.uk
  "ballysadare-bay-culleenamore": "Ballysadare Bay (Culleenamore)",
  "baltasound-pier": "Baltasound Pier",
  "baltimore-ireland": "Baltimore, Ireland",
  "banff": "Banff",
  "bangor": "Bangor",
  "bantry": "Bantry",
  "barcaldine-pier": "Barcaldine Pier",
  "bardsey-island": "Bardsey Island",
  "barmouth": "Barmouth",
  "barnstaple": "Barnstaple",
  "barra-head": "Barra Head",
  "barra-north-bay": "Barra (North Bay)",
  "barrow-ramsden-dock": "Barrow (Ramsden Dock)",
  "barry": "Barry",
  "bartlett-creek": "Bartlett Creek",
  "battlesbridge": "Battlesbridge",
  "bawdsey": "Bawdsey",
  "bay-of-laig": "Bay Of Laig",
  "bay-of-quendale": "Bay Of Quendale",
  "bays-loch": "Bays Loch",
  "beachley-aust": "Beachley (Aust)",
  "beaumaris": "Beaumaris",
  "bee-ness": "Bee Ness",
  "belfast": "Belfast",
  "bembridge-approaches": "Bembridge Approaches",
  "bembridge-harbour": "Bembridge Harbour",
  "berkeley": "Berkeley",
  "berwick": "Berwick",
  "bideford": "Bideford",
  "black-ball-harbour": "Black Ball Harbour",
  "black-tar": "Black Tar",
  "blackpool": "Blackpool",
  "blacksod-quay": "Blacksod Quay",
  "blacktoft": "Blacktoft",
  "blakeney-bar": "Blakeney Bar",
  "blakeney": "Blakeney",
  "bluemull-sound": "Bluemull Sound",
  "blyth": "Blyth",
  "bofin-harbour": "Bofin Harbour",
  "bognor-regis": "Bognor Regis",
  "bonawe": "Bonawe",
  "boscastle": "Boscastle",
  "bosham": "Bosham",
  "boston-england": "Boston, England",
  "bouley-bay": "Bouley Bay",
  "bournemouth": "Bournemouth",
  "bovisand-pier": "Bovisand Pier",
  "bowling": "Bowling",
  "bradwell-waterside": "Bradwell Waterside",
  "bramble-creek": "Bramble Creek",
  "braye": "Braye",
  "bridgwater": "Bridgwater",
  "bridlington": "Bridlington",
  "bridport-west-bay": "Bridport (West Bay)",
  "brightlingsea": "Brightlingsea",
  "brighton-marina": "Brighton Marina",
  "broadford-bay": "Broadford Bay",
  // broadhaven, "Ballyglass (Broadhaven) in .org.uk
  "broadstairs": "Broadstairs",
  "brodick-bay": "Brodick Bay",
  "brough": "Brough",
  "bruichladdich": "Bruichladdich",
  "buckie": "Buckie",
  "bucklers-hard": "Bucklers Hard",
  "bude": "Bude",
  "bulbinbeg": "Bulbinbeg",
  "bull-sand-fort": "Bull Sand Fort",
  "bunessan": "Bunessan",
  "bur-wick": "Bur Wick",
  "burghead": "Burghead",
  "burnham-on-crouch": "Burnham-On-Crouch",
  "burnham-on-sea": "Burnham-On-Sea",
  "burnham-overy-staithe": "Burnham (Overy Staithe)",
  "burntisland": "Burntisland",
  "burra-firth": "Burra Firth",
  "burra-voe-yell-sound": "Burra Voe (Yell Sound)",
  "burray-ness": "Burray Ness",
  "burry-port": "Burry Port",
  "bursledon": "Bursledon",
  "burton-stather": "Burton Stather",
  "burtonport": "Burtonport",
  "caernarfon": "Caernarfon",
  "caister-on-sea": "Caister-On-Sea",
  "calf-sound": "Calf Sound",
  "calshot-castle": "Calshot Castle",
  "campbeltown": "Campbeltown",
  "camus-nan-gall": "Camus Nan Gall",
  "cape-cornwall": "Cape Cornwall",
  "cardiff": "Cardiff",
  "cardigan-town": "Cardigan (Town)",
  "cargreen": "Cargreen",
  "carloway": "Carloway",
  "carmarthen": "Carmarthen",
  "carnsore-point": "Carnsore Point",
  "carradale": "Carradale",
  "carrickfergus": "Carrickfergus",
  "carrigaholt": "Carrigaholt",
  "carsaig-bay-mull": "Carsaig Bay (Mull)",
  "carsaig-bay": "Carsaig Bay",
  "castle-bay": "Castle Bay",
  "castletown-bearhaven": "Castletown Bearhaven",
  "castletownshend": "Castletownshend",
  "cemaes-bay": "Cemaes Bay",
  "chatham-lock-approaches": "Chatham (Lock Approaches)",
  "cheekpoint": "Cheekpoint",
  "chelsea-bridge": "Chelsea Bridge",
  "chepstow": "Chepstow",
  // Not in .org.uk
  "chesil-beach": "Chesil Beach",
  "chesil-cove": "Chesil Cove",
  "chester": "Chester",
  "chichester-harbour-entrance": "Chichester Harbour (Entrance)",
  "christchurch-entrance": "Christchurch (Entrance)",
  "christchurch-quay": "Christchurch (Quay)",
  "christchurch-tuckton": "Christchurch (Tuckton)",
  "clacton-on-sea": "Clacton-On-Sea",
  "clare-island": "Clare Island",
  "cleavel-point": "Cleavel Point",
  "clevedon": "Clevedon",
  "clifden-bay": "Clifden Bay",
  "clonakilty-bay": "Clonakilty Bay",
  "clovelly": "Clovelly",
  "clydebank-rothesay-dock": "Clydebank (Rothesay Dock)",
  "cobh": "Cobh",
  "cockenzie": "Cockenzie",
  "colchester": "Colchester",
  "coleraine": "Coleraine",
  "colwyn-bay": "Colwyn Bay",
  "coney-island": "Coney Island",
  "connahs-quay": "Connah&#039;s Quay",
  "connel": "Connel",
  "conwy": "Conwy",
  "coquet-island": "Coquet Island",
  "cork-city": "Cork City",
  "corpach": "Corpach",
  "corran": "Corran",
  "coryton": "Coryton",
  "cotehele-quay": "Cotehele Quay",
  "coulport": "Coulport",
  "courtmacsherry": "Courtmacsherry",
  "courtown": "Courtown",
  "coverack": "Coverack",
  "cowes": "Cowes",
  "craighouse": "Craighouse",
  "craignure": "Craignure",
  "cranfield-point": "Cranfield Point",
  "cranford-bay": "Cranford Bay",
  "criccieth": "Criccieth",
  "cromane-point": "Cromane Point",
  "cromarty": "Cromarty",
  "cromer": "Cromer",
  "crookhaven": "Crookhaven",
  "culdaff-bay": "Culdaff Bay",
  "culmore-point": "Culmore Point",
  "cumberland-basin-entrance": "Cumberland Basin Entrance",
  "cushendun": "Cushendun",
  "dale-roads": "Dale Roads",
  "darnett-ness": "Darnett Ness",
  "dartmouth": "Dartmouth",
  "deal": "Deal",
  "deer-sound": "Deer Sound",
  "dell-quay": "Dell Quay",
  "dingle-harbour": "Dingle Harbour",
  "dingwall-cromarty-firth": "Dingwall (Cromarty Firth)",
  "donaghadee": "Donaghadee",
  "donegal-harbour-salt-hill-quay": "Donegal Harbour (Salt Hill Quay)",
  "dornie-bridge": "Dornie Bridge",
  "douglas": "Douglas",
  "dover": "Dover",
  "downies-bay": "Downies Bay",
  "drummore": "Drummore",
  "dublin-bar": "Dublin Bar",
  "dublin-north-wall": "Dublin (North Wall)",
  "duddon-bar": "Duddon Bar",
  "dun-laoghaire": "Dun Laoghaire",
  "dunany-point": "Dunany Point",
  "dunbar": "Dunbar",
  "dunbeacon-harbour": "Dunbeacon Harbour",
  "duncansby-head": "Duncansby Head",
  "dundee": "Dundee",
  "dungarvan-harbour": "Dungarvan Harbour",
  "dungeness": "Dungeness",
  "dunkerron-harbour": "Dunkerron Harbour",
  "dunmanus-harbour": "Dunmanus Harbour",
  "dunmore-east": "Dunmore East",
  "dunstaffnage-bay": "Dunstaffnage Bay",
  "dury-voe": "Dury Voe",
  "e-loch-tarbert": "E. Loch Tarbert",
  "east-loch-tarbert": "East Loch Tarbert",
  "eastbourne": "Eastbourne",
  "eastham": "Eastham",
  "egilsay": "Egilsay",
  "english-and-welsh-grounds": "English And Welsh Grounds",
  "epney": "Epney",
  // Not in .org.uk
  // "erith": "Erith" // in org.uk
  "esha-ness-hamna-voe": "Esha Ness (Hamna Voe)",
  "exmouth-approaches": "Exmouth (Approaches)",
  "exmouth-dock": "Exmouth Dock",
  "eyemouth": "Eyemouth",
  "fair-isle": "Fair Isle",
  "falmouth": "Falmouth",
  "fanad-head": "Fanad Head",
  "fannys-bay": "Fanny&#039;s Bay",
  "faslane": "Faslane",
  "faversham": "Faversham",
  // not in .org.uk
  "felixstowe-pier": "Felixstowe Pier",
  "fenit-pier": "Fenit Pier",
  "ferryside": "Ferryside",
  "fethard-on-sea": "Fethard-On-Sea",
  "fiddlers-ferry": "Fiddler&#039;s Ferry",
  "fidra": "Fidra",
  "filey-bay": "Filey Bay",
  "fishguard": "Fishguard",
  "flannan-isles": "Flannan Isles",
  "flat-holm": "Flat Holm",
  "fleetwood": "Fleetwood",
  "flixborough-wharf": "Flixborough Wharf",
  "folkestone": "Folkestone",
  "folly-inn": "Folly Inn",
  // to here
  "foreland-lifeboat-slip": "Foreland (Lifeboat Slip)",
  "formby": "Formby",
  "fort-belan": "Fort Belan",
  "fortrose": "Fortrose",
  "foula": "Foula",
  "fowey": "Fowey",
  "foynes-island": "Foynes Island",
  "fraserburgh": "Fraserburgh",
  "fremington": "Fremington",
  "freshwater-bay": "Freshwater Bay",
  "gairloch": "Gairloch",
  "galmisdale-pier": "Galmisdale Pier",
  "galway": "Galway",
  "garelochhead": "Garelochhead",
  "garlieston": "Garlieston",
  "gills-bay": "Gills Bay",
  "girvan": "Girvan",
  "glasgow": "Glasgow",
  "glasson-dock": "Glasson Dock",
  "glenelg-bay": "Glenelg Bay",
  "glengarrisdale-bay": "Glengarrisdale Bay",
  "golspie": "Golspie",
  "goole": "Goole",
  "gorleston-on-sea": "Gorleston-On-Sea",
  "gott-bay": "Gott Bay",
  "grangemouth": "Grangemouth",
  "granton": "Granton",
  "great-saltee": "Great Saltee",
  "great-yarmouth-britannia-pier": "Great Yarmouth (Britannia Pier)",
  "greenock": "Greenock",
  "greenore": "Greenore",
  "greenway-quay": "Greenway Quay",
  "greystones": "Greystones",
  "grimsby": "Grimsby",
  "grovehurst-jetty": "Grovehurst Jetty",
  "gweedore-harbour": "Gweedore Harbour",
  "hale-head": "Hale Head",
  "halfway-shoal": "Halfway Shoal",
  "hammersmith-bridge": "Hammersmith Bridge",
  "hartlepool": "Hartlepool",
  "harwich": "Harwich",
  "hastings": "Hastings",
  "haverfordwest": "Haverfordwest",
  "haws-point": "Haws Point",
  "helensburgh": "Helensburgh",
  "helford-river-entrance": "Helford River (Entrance)",
  "helmsdale": "Helmsdale",
  "herne-bay": "Herne Bay",
  "hestan-islet": "Hestan Islet",
  "heysham": "Heysham",
  "hilbre-island": "Hilbre Island",
  "hillswick": "Hillswick",
  "hinkley-point": "Hinkley Point",
  "holliwell-point": "Holliwell Point",
  "holy-island": "Holy Island",
  "holyhead": "Holyhead",
  "howth": "Howth",
  "hull-albert-dock": "Hull (Albert Dock)",
  "hull-alexandra-dock": "Hull (Alexandra Dock)",
  "hull-king-george-dock": "Hull (King George Dock)",
  "hullbridge": "Hullbridge",
  "humber-bridge": "Humber Bridge",
  "humber-sea-terminal": "Humber Sea Terminal",
  "hunstanton": "Hunstanton",
  "hurst-point": "Hurst Point",
  "iken-cliffs": "Iken Cliffs",
  "ilfracombe": "Ilfracombe",
  "immingham": "Immingham",
  "inishbiggle": "Inishbiggle",
  "inishbofin-bay": "Inishbofin Bay",
  "inishgort": "Inishgort",
  "inishmore-killeany-bay": "Inishmore (Killeany Bay)",
  "inishtrahull": "Inishtrahull",
  "inner-dowsing-light": "Inner Dowsing Light",
  "inveraray": "Inveraray",
  "invergordon": "Invergordon",
  "inverie-bay": "Inverie Bay",
  "inverness": "Inverness",
  "inward-rocks": "Inward Rocks",
  "iona": "Iona",
  "ipswich": "Ipswich",
  "irvine": "Irvine",
  "isle-of-whithorn": "Isle Of Whithorn",
  "itchenor": "Itchenor",
  "jupiter-point": "Jupiter Point",
  "keadby": "Keadby",
  "kettletoft-pier": "Kettletoft Pier",
  "kew-bridge": "Kew Bridge",
  "kilbaha-bay": "Kilbaha Bay",
  "kilkeel": "Kilkeel",
  "kilkieran-cove": "Kilkieran Cove",
  "killala-bay-inishcrone": "Killala Bay (Inishcrone)",
  "killard-point": "Killard Point",
  "killary-harbour": "Killary Harbour",
  "killough-harbour": "Killough Harbour",
  "killybegs": "Killybegs",
  "killyleagh": "Killyleagh",
  "kilmokea-point": "Kilmokea Point",
  "kilrush": "Kilrush",
  "kincardine": "Kincardine",
  "kings-lynn": "King&#039;s Lynn",
  "kinlochbervie": "Kinlochbervie",
  "kinsale": "Kinsale",
  "kirkcaldy": "Kirkcaldy",
  "kirkcudbright-bay": "Kirkcudbright Bay",
  "kirkwall": "Kirkwall",
  "knights-town": "Knights Town",
  "kyle-of-durness": "Kyle Of Durness",
  "kyle-of-lochalsh": "Kyle Of Lochalsh",
  "lamlash": "Lamlash",
  "lancaster": "Lancaster",
  "langstone-harbour": "Langstone Harbour",
  "larne": "Larne",
  "lawyers-creek": "Lawyer&#039;s Creek",
  "lee-on-the-solent": "Lee-On-The-Solent",
  "leith": "Leith",
  "lerwick": "Lerwick",
  "les-ecrehou": "Les Ecrehou",
  "les-minquiers": "Les Minquiers",
  "leverburgh": "Leverburgh",
  "limerick-dock": "Limerick Dock",
  "liscannor": "Liscannor",
  "little-bernera": "Little Bernera",
  "little-haven": "Little Haven",
  "littlehampton": "Littlehampton",
  "liverpool-alfred-dock": "Liverpool (Alfred Dock)",
  "liverpool-gladstone-dock": "Liverpool (Gladstone Dock)",
  "lizard-point": "Lizard Point",
  "llanddwyn-island": "Llanddwyn Island",
  "llandudno": "Llandudno",
  "llanelli": "Llanelli",
  "llanthony": "Llanthony",
  "loch-a-bhraige": "Loch A&#039; Bhraige",
  "loch-aline": "Loch Aline",
  "loch-beag": "Loch Beag",
  "loch-boisdale": "Loch Boisdale",
  "loch-carnan": "Loch Carnan",
  "loch-creran-head": "Loch Creran Head",
  "loch-dunvegan": "Loch Dunvegan",
  "loch-eatharna": "Loch Eatharna",
  "loch-eil-head": "Loch Eil Head",
  "loch-harport": "Loch Harport",
  "loch-hourn": "Loch Hourn",
  "loch-inver": "Loch Inver",
  "loch-laxford": "Loch Laxford",
  "loch-leven-head": "Loch Leven Head",
  "loch-maddy": "Loch Maddy",
  "loch-melfort": "Loch Melfort",
  "loch-moidart": "Loch Moidart",
  "loch-nedd": "Loch Nedd",
  "loch-ranza": "Loch Ranza",
  "loch-scresort": "Loch Scresort",
  "loch-shell": "Loch Shell",
  "loch-skiport": "Loch Skiport",
  "loch-snizort-uig-bay": "Loch Snizort (Uig Bay)",
  "lochgoilhead": "Lochgoilhead",
  "london-bridge-tower-pier": "London Bridge (Tower Pier)",
  "londonderry": "Londonderry",
  "looe": "Looe",
  "lopwell": "Lopwell",
  "lossiemouth": "Lossiemouth",
  "lostwithiel": "Lostwithiel",
  "loth": "Loth",
  "loughros-more-bay": "Loughros More Bay",
  "lowestoft": "Lowestoft",
  "luce-bay-offshore-platform": "Luce Bay (Offshore Platform)",
  "lulworth-cove": "Lulworth Cove",
  "lundy": "Lundy",
  "lyme-regis": "Lyme Regis",
  "lymington": "Lymington",
  "lynmouth": "Lynmouth",
  "machrihanish": "Machrihanish",
  "malahide": "Malahide",
  "maldon": "Maldon",
  "mallaig": "Mallaig",
  "margate": "Margate",
  "marino-point": "Marino Point",
  "martins-haven": "Martin&#039;s Haven",
  "maryport": "Maryport",
  "maseline-pier": "Maseline Pier",
  "mcdermott-base": "Mcdermott Base",
  "meikle-ferry": "Meikle Ferry",
  "mellon-charles": "Mellon Charles",
  "mellon-point": "Mellon Point",
  "menai-bridge": "Menai Bridge",
  "methil": "Methil",
  "mevagissey": "Mevagissey",
  "mid-yell": "Mid Yell",
  "middlesbrough-dock-entrance": "Middlesbrough (Dock Entrance)",
  "milford-haven": "Milford Haven",
  "millport": "Millport",
  "minehead": "Minehead",
  "minsmere-sluice": "Minsmere Sluice",
  "minsterworth": "Minsterworth",
  "mistley": "Mistley",
  "moelfre": "Moelfre",
  "montrose": "Montrose",
  "morecambe": "Morecambe",
  "mostyn-docks": "Mostyn Docks",
  "moville": "Moville",
  "muckle-skerry": "Muckle Skerry",
  "mullaghmore": "Mullaghmore",
  "mulroy-bay-bar": "Mulroy Bay Bar",
  "mumbles": "Mumbles",
  "mupe-bay": "Mupe Bay",
  "nab-tower": "Nab Tower",
  "nairn": "Nairn",
  "narlwood-rocks": "Narlwood Rocks",
  "nato-jetty": "Nato Jetty",
  "new-hythe": "New Hythe",
  "new-quay": "New Quay",
  "new-ross": "New Ross",
  "newburgh": "Newburgh",
  "newcastle-nireland": "Newcastle (N.Ireland)",
  "newcastle-upon-tyne": "Newcastle-Upon-Tyne",
  "newhaven": "Newhaven",
  "newport-isle-of-wight": "Newport (Isle Of Wight)",
  "newport": "Newport",
  "newquay": "Newquay",
  "newry-victoria-lock": "Newry (Victoria Lock)",
  "neyland": "Neyland",
  "north-fambridge": "North Fambridge",
  "north-sunderland-northumberland": "North Sunderland (Northumberland)",
  "north-woolwich": "North Woolwich",
  "northney": "Northney",
  "oban": "Oban",
  "orford-haven-bar": "Orford Haven Bar",
  "orford-ness": "Orford Ness",
  "orford-quay": "Orford Quay",
  "orsay": "Orsay",
  "osea-island": "Osea Island",
  "out-skerries": "Out Skerries",
  "outer-westmark-knock": "Outer Westmark Knock",
  "owston-ferry": "Owston Ferry",
  "padstow": "Padstow",
  "pagham": "Pagham",
  "par": "Par",
  "peel": "Peel",
  "penzance-newlyn": "Penzance (Newlyn)",
  "perranporth": "Perranporth",
  "perth": "Perth",
  "peterhead": "Peterhead",
  "pierowall": "Pierowall",
  "plockton": "Plockton",
  "plymouth-devonport": "Plymouth (Devonport)",
  "poole-entrance": "Poole (Entrance)",
  "poole-harbour": "Poole Harbour",
  "porlock-bay": "Porlock Bay",
  "port-appin": "Port Appin",
  "port-askaig": "Port Askaig",
  "port-cardigan": "Port Cardigan",
  "port-dinorwic": "Port Dinorwic",
  "port-ellen": "Port Ellen",
  "port-erin": "Port Erin",
  "port-glasgow": "Port Glasgow",
  "port-isaac": "Port Isaac",
  "port-of-bristol-avonmouth": "Port Of Bristol (Avonmouth)",
  "port-st-mary": "Port St. Mary",
  "port-sutton-bridge": "Port Sutton Bridge",
  "port-talbot": "Port Talbot",
  "port-william": "Port William",
  "portavogie": "Portavogie",
  "porth-dinllaen": "Porth Dinllaen",
  "porth-trecastell": "Porth Trecastell",
  "porth-ysgaden": "Porth Ysgaden",
  "porthcawl": "Porthcawl",
  "porthgain": "Porthgain",
  "porthleven": "Porthleven",
  "porthmadog": "Porthmadog",
  "portishead": "Portishead",
  "portland": "Portland",
  "portmahomack": "Portmahomack",
  "portnancon": "Portnancon",
  "portpatrick": "Portpatrick",
  "portree": "Portree",
  "portrush": "Portrush",
  "portsmouth": "Portsmouth",
  "pottery-pier": "Pottery Pier",
  "preston": "Preston",
  "pwllheli": "Pwllheli",
  "quigleys-point": "Quigley&#039;s Point",
  "quoile-barrier": "Quoile Barrier",
  "ramsey-sound": "Ramsey Sound",
  "ramsey": "Ramsey",
  "ramsgate": "Ramsgate",
  "rapness": "Rapness",
  "rathmullan": "Rathmullan",
  "red-bay": "Red Bay",
  "redbridge": "Redbridge",
  "redkirk": "Redkirk",
  "rhu-marina": "Rhu Marina",
  "richborough": "Richborough",
  "richmond-lock": "Richmond Lock",
  "ringaskiddy": "Ringaskiddy",
  "river-boyne-bar": "River Boyne Bar",
  "river-foyle-lisahally": "River Foyle (Lisahally)",
  "river-neath-entrance": "River Neath Entrance",
  "river-tay-bar": "River Tay Bar",
  "river-tees-entrance": "River Tees Entrance",
  "river-tyne-north-shields": "River Tyne (North Shields)",
  "river-yealm-entrance": "River Yealm Entrance",
  "roa-island": "Roa Island",
  "roberts-cove": "Roberts Cove",
  "rochester-strood-pier": "Rochester (Strood Pier)",
  "rochford": "Rochford",
  "rockall": "Rockall",
  "rona": "Rona",
  "roonah-quay": "Roonah Quay",
  "rosneath": "Rosneath",
  "rosslare-europort": "Rosslare Europort",
  "rosyth": "Rosyth",
  "rothesay-bay": "Rothesay Bay",
  "roundstone-bay": "Roundstone Bay",
  "rubh-a-mhail": "Rubh&#039; A&#039; Mhail",
  "rubha-a-bhodaich": "Rubha A&#039; Bhodaich",
  "ryde": "Ryde",
  "rye-approaches": "Rye (Approaches)",
  "rye-harbour": "Rye (Harbour)",
  "salcombe": "Salcombe",
  "salen-sound-of-mull": "Salen (Sound Of Mull)",
  "salen": "Salen",
  "saltash": "Saltash",
  "sandown": "Sandown",
  "scalasaig": "Scalasaig",
  "scalloway": "Scalloway",
  "scarborough": "Scarborough",
  "schull": "Schull",
  "scolpaig": "Scolpaig",
  "scrabster": "Scrabster",
  "se-long-sand": "S.E. Long Sand",
  "sea-mills": "Sea Mills",
  "seafield-point": "Seafield Point",
  "seaham": "Seaham",
  "seamount-bay": "Seamount Bay",
  "seil-sound": "Seil Sound",
  "selsey-bill": "Selsey Bill",
  "sennen-cove": "Sennen Cove",
  "sharpness-dock": "Sharpness Dock",
  "sheerness": "Sheerness",
  "shieldaig": "Shieldaig",
  "shillay": "Shillay",
  "shirehampton": "Shirehampton",
  "shivering-sand": "Shivering Sand",
  "shoreham": "Shoreham",
  "silloth": "Silloth",
  "skegness": "Skegness",
  "skomer-island": "Skomer Island",
  "slaughden-quay": "Slaughden Quay",
  "sligo-harbour-oyster-island": "Sligo Harbour (Oyster Island)",
  "slyne-head": "Slyne Head",
  "smerwick-harbour": "Smerwick Harbour",
  "soldiers-point": "Soldiers Point",
  "solva": "Solva",
  "sound-of-gigha": "Sound Of Gigha",
  "sound-of-ulva": "Sound Of Ulva",
  "south-rock": "South Rock",
  "southampton": "Southampton",
  "southend-kintyre": "Southend (Kintyre)",
  "southend-on-sea": "Southend-On-Sea",
  "southerness-point": "Southerness Point",
  "southport": "Southport",
  "southwold": "Southwold",
  "spurn-head": "Spurn Head",
  "st-catherine-bay": "St. Catherine Bay",
  "st-germans": "St. Germans",
  "st-helier": "St. Helier",
  "st-ives": "St. Ives",
  "st-kilda": "St. Kilda",
  "st-marys-scapa-flow": "St. Mary&#039;s (Scapa Flow)",
  "st-marys": "St. Mary&#039;s",
  "st-peter-port": "St. Peter Port",
  "st-thomass-head": "St. Thomas&#039;s Head",
  "st-tudwals-roads": "St. Tudwal&#039;s Roads",
  "stackpole-quay": "Stackpole Quay",
  "stansore-point": "Stansore Point",
  "starcross": "Starcross",
  "start-point": "Start Point",
  "steep-holm": "Steep Holm",
  "stirling": "Stirling",
  "stoke-gabriel-duncannon": "Stoke Gabriel (Duncannon)",
  "stonehaven": "Stonehaven",
  "stornoway": "Stornoway",
  "strangford": "Strangford",
  "stranraer": "Stranraer",
  "stroma": "Stroma",
  "stromness": "Stromness",
  "sudbrook": "Sudbrook",
  "sule-skerry": "Sule Skerry",
  "sullom-voe": "Sullom Voe",
  "sumburgh-grutness-voe": "Sumburgh (Grutness Voe)",
  "sunderland": "Sunderland",
  "sunk-dredged-channel": "Sunk Dredged Channel",
  "sunk-head": "Sunk Head",
  "swanage": "Swanage",
  "swansea": "Swansea",
  "tabs-head": "Tabs Head",
  "tanera-mor": "Tanera Mor",
  "tarbert-island": "Tarbert Island",
  "tarn-point": "Tarn Point",
  "tees-newport-bridge": "Tees (Newport) Bridge",
  "teignmouth-approaches": "Teignmouth (Approaches)",
  "teignmouth-new-quay": "Teignmouth (New Quay)",
  "tenby": "Tenby",
  "tighnabruaich": "Tighnabruaich",
  "tilbury": "Tilbury",
  "tingwall": "Tingwall",
  "tobermory": "Tobermory",
  "toft-pier": "Toft Pier",
  "topsham": "Topsham",
  "torduff-point": "Torduff Point",
  "torquay": "Torquay",
  "totland-bay": "Totland Bay",
  "totnes": "Totnes",
  "trawbreaga-bay": "Trawbreaga Bay",
  "trearddur-bay": "Trearddur Bay",
  "trefor": "Trefor",
  "troon": "Troon",
  "truro": "Truro",
  "trwyn-dinmor": "Trwyn Dinmor",
  "turf-lock": "Turf Lock",
  "turnchapel": "Turnchapel",
  "ullapool": "Ullapool",
  "ulverston": "Ulverston",
  "upnor": "Upnor",
  "ventnor": "Ventnor",
  "wadebridge": "Wadebridge",
  "walton-on-the-naze": "Walton-On-The-Naze",
  "wareham-river-frome": "Wareham (River Frome)",
  "warren-lighthouse": "Warren Lighthouse",
  "warrenpoint": "Warrenpoint",
  "warsash": "Warsash",
  "watchet": "Watchet",
  "waterford": "Waterford",
  "wellhouse-rock": "Wellhouse Rock",
  "wells-bar": "Wells Bar",
  "wells": "Wells",
  "wemyss-bay": "Wemyss Bay",
  "west-burra-firth": "West Burra Firth",
  "west-cove": "West Cove",
  "west-loch-tarbert": "West Loch Tarbert",
  "west-mersea": "West Mersea",
  "west-stones": "West Stones",
  "weston-super-mare": "Weston-Super-Mare",
  "wexford-harbour": "Wexford Harbour",
  "whitaker-beacon": "Whitaker Beacon",
  "whitby": "Whitby",
  "white-house": "White House",
  "whitehall": "Whitehall",
  "whitehaven": "Whitehaven",
  "whitehills": "Whitehills",
  "whitsand-bay": "Whitsand Bay",
  "whitstable-approaches": "Whitstable Approaches",
  "wick": "Wick",
  "wicklow": "Wicklow",
  "widewall-bay": "Widewall Bay",
  "widnes": "Widnes",
  "winterton-on-sea": "Winterton-On-Sea",
  "wisbech-cut": "Wisbech Cut",
  "wisbech": "Wisbech",
  "woodbridge-haven": "Woodbridge Haven",
  "woodbridge": "Woodbridge",
  "workington": "Workington",
  "worthing": "Worthing",
  "wouldham": "Wouldham",
  "wyre-lighthouse": "Wyre Lighthouse",
  "yarmouth": "Yarmouth",
  "yelland-marsh": "Yelland Marsh",
  "youghal": "Youghal"
};
/* harmony default export */ __webpack_exports__["default"] = (portOptions);

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["serverSideRender"]; }());

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map