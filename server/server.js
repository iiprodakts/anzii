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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_sn_sana__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_sn_sana___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__js_sn_sana__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_server_index__ = __webpack_require__(35);




var server = function server() {
  console.log('THE SERVER IS RUNNNING');
  __WEBPACK_IMPORTED_MODULE_0__js_sn_sana___default.a.DomLoaded(__WEBPACK_IMPORTED_MODULE_0__js_sn_sana___default.a.Activate(__WEBPACK_IMPORTED_MODULE_1__shared_app__["a" /* default */].push(__WEBPACK_IMPORTED_MODULE_2__shared_modules_server_index__["a" /* default */])));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  console.log('The functions');
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        /******/
        configurable: false,

        /******/
        enumerable: true,

        /******/
        get: getter
        /******/

      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "/";
  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 0);
  /******/
})(
/************************************************************************/

/******/
[
/* 0 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", {
    value: true
  });
  /* harmony import */

  var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(1);
  /* harmony import */


  var __WEBPACK_IMPORTED_MODULE_1__esm_esm__ = __webpack_require__(6);
  /* harmony import */


  var __WEBPACK_IMPORTED_MODULE_2__base_activate__ = __webpack_require__(19);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var util = __webpack_require__(20);

  var Sana = function Sana() {
    _classCallCheck(this, Sana);

    console.log(__WEBPACK_IMPORTED_MODULE_2__base_activate__["a"
    /* Activate */
    ]);
    console.log(__WEBPACK_IMPORTED_MODULE_0__base__["a"
    /* default */
    ].SUKU);
    var self = self;
    this.SANA = __WEBPACK_IMPORTED_MODULE_0__base__["a"
    /* default */
    ];
    this.ESM = __WEBPACK_IMPORTED_MODULE_1__esm_esm__["a"
    /* default */
    ];
    this.Activate = __WEBPACK_IMPORTED_MODULE_2__base_activate__["a"
    /* Activate */
    ];
    this.DomLoaded = __WEBPACK_IMPORTED_MODULE_0__base__["a"
    /* default */
    ].SUKU.domLoaded.bind(this.SANA.SUKU);
  };
  /* harmony default export */


  __webpack_exports__["default"] = new Sana();
  /***/
},
/* 1 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";
  /* harmony import */

  var __WEBPACK_IMPORTED_MODULE_0__vendor_suku__ = __webpack_require__(2);
  /* harmony import */


  var __WEBPACK_IMPORTED_MODULE_0__vendor_suku___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendor_suku__);
  /* harmony import */


  var __WEBPACK_IMPORTED_MODULE_1__vendor_sukus__ = __webpack_require__(3);
  /* harmony import */


  var __WEBPACK_IMPORTED_MODULE_1__vendor_sukus___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vendor_sukus__);
  /* harmony import */


  var __WEBPACK_IMPORTED_MODULE_2__base_core__ = __webpack_require__(4);
  /* harmony import */


  var __WEBPACK_IMPORTED_MODULE_3__base_sandbox__ = __webpack_require__(5);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Base = function Base() {
    _classCallCheck(this, Base);

    this.CORE = __WEBPACK_IMPORTED_MODULE_2__base_core__["a"
    /* default */
    ], this.SANDBOX = __WEBPACK_IMPORTED_MODULE_3__base_sandbox__["a"
    /* default */
    ], this.SUKU = __WEBPACK_IMPORTED_MODULE_0__vendor_suku___default.a;
  };
  /* harmony default export */


  __webpack_exports__["a"] = new Base();
  /***/
},
/* 2 */

/***/
function (module, exports) {
  /*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  
  
  
  		Framework 	 : Suku
  		Version 	 : 1.0.0
  		Author		 : SUKU organisation
  		Website		 : www.suku.com
  		Date Created : 15/05/2018
  
  
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
  module.exports = {
    /*==============================================================================================================
    			The code immediately after this comment[starting with the return statement] is an object that will be executed
    	and returned immediately after the containing "immediately invoked" function has been executed and soon after
    	the script has been downloaded from its source. 
    	This object is a SUKU framework object, which contains all the properties, methods, and objects that the
    	SUKU framework defines.
    
     ================================================================================================================*/

    /*============================================================================================
    			The Method immediately after this comment(domLoaded()) is a SUKU framework method used to
    	execute code immediately after the document loads. It relies on the Window object's load
    	event to achieve this. Any argument passed to this method will be implemented only after
    	the document has loaded
    
     =============================================================================================*/
    domLoaded: function domLoaded(code) {
      // Define domLoaded method
      this.ev_addHandler(window, 'load', code); // Call the event handler method of this object to tie the laod
      // event to the Window object, and execute the code passed to
      // handle the event.
    },
    // End of afterLoad method
    throwErrors: function throwErrors(errorMessage) {
      // Define throwErrors method
      throw new Error(errorMessage);
    },
    // End of afterLoad method

    /*******************************************************************************************************************
    	
    	Use DOM LEVEL 1 Interface Techniques To Manipulate Dom
    		*********************************************************************************************************************/
    getby_id: function getby_id(id_selector) {
      // Define the getby_id() method to return an element in question by ID
      var elementById = document.getElementById(id_selector); // call the DOM LEVEL 1 getElementById() method to return an element by id

      return elementById; // return requested method
    },
    // End of getElementById method
    getby_tag: function getby_tag(parent, tag_selector) {
      var elementsByTag;

      if (parent) {
        elementsByTag = parent.getElementsByTagName(tag_selector);
      } else {
        elementsByTag = document.getElementsByTagName(tag_selector);
      }

      return elementsByTag;
    },
    // End of getelementBy Class method
    getby_name: function getby_name(tag_selector) {
      var elementsByName = document.getElementsByName(tag_selector);
      return elementsByName;
    },
    // End of getelementBy Class method
    get_tag_name: function get_tag_name(element) {
      var elementTagName = element.tagName;
      return elementTagName;
    },
    // End of getelementBy Class method

    /*******************************************************************************************************************
    	
    	Use DOM LEVEL 2 And 3 Interface Techniques To Manipulate The Dom
    		*********************************************************************************************************************/
    getChildby_id: function getChildby_id(parent_tag_selector, child_tag_selector) {
      if (typeof parent_tag_selector == null || typeof parent_tag_selector == 'string') {
        throw new Error('One of the required selectors is a string,object expected');
      } else {
        var childElementbyId = parent_tag_selector.querySelector(child_tag_selector);
        return childElementbyId;
      }
    },
    // End of getelementBy Class method
    getChildby_class: function getChildby_class(parent_tag_selector, child_tag_selector) {
      var childElemntByClass = parent_tag_selector.querySelector(child_tag_selector);
      return childElemntByClass;
    },
    // End of getelementBy Class method
    getAllChildby_class: function getAllChildby_class(parent_tag_selector, child_tag_selector) {
      var childElemntsByClass = parent_tag_selector.querySelectorAll(child_tag_selector);
      return childElemntsByClass;
    },
    // End of getelementBy Class method
    getChildBy_attribute: function getChildBy_attribute(parent_tag_selector, attribute) {
      var childElemntByAttribute = parent_tag_selector.querySelector('[' + attribute + ']');
      return childElemntByAttribute;
    },
    // End of getelementBy Attribute method
    getAllChildBy_attribute: function getAllChildBy_attribute(parent_tag_selector, attribute) {
      var childElemntsByAttribute = parent_tag_selector.querySelectorAll('[' + attribute + ']');
      return childElemntsByAttribute;
    },
    // End of getelementBy Attribute method
    getBy_attribute: function getBy_attribute(attribute) {
      var childElemntByAttribute = document.querySelector('[' + attribute + ']');
      return childElemntByAttribute;
    },
    // End of getelementBy Attribute method
    getAllBy_attribute: function getAllBy_attribute(attribute) {
      var childElemntByAttribute = document.querySelectorAll('[' + attribute + ']');
      return childElemntByAttribute;
    },
    // End of getelementBy Attribute method

    /*******************************************************************************************************************
    	
    	Use DOM LEVEL 1 Node Interface Techniques To Manipulate Dom
    		*********************************************************************************************************************/
    //************************Node Resources By properties[Read Only]***************************************************************
    get_type_of_node: function get_type_of_node(node) {
      var typeOfNode = 0;

      switch (node.nodeType) {
        case 1:
          {
            typeOfNode = 'ELEMENT';
            break;
          }

        case 2:
          {
            typeOfNode = 'ATTRIBUTE';
            break;
          }

        case 3:
          {
            typeOfNode = 'TEXT';
            break;
          }

        case 4:
          {
            typeOfNode = 'CDATA';
            break;
          }

        case 5:
          {
            typeOfNode = 'ENTITY REFERENCE';
            break;
          }

        case 6:
          {
            typeOfNode = 'ENTITY';
            break;
          }

        case 7:
          {
            typeOfNode = 'PROCESSING INSTRUNCTION';
            break;
          }

        case 8:
          {
            typeOfNode = 'COMMENT';
            break;
          }

        case 9:
          {
            typeOfNode = 'DOCUMENT';
            break;
          }

        case 10:
          {
            typeOfNode = 'DOCUMENT TYPE';
            break;
          }

        case 11:
          {
            typeOfNode = 'DOCUMENT FRAGMENT';
            break;
          }

        case 12:
          {
            typeOfNode = 'NOTATION';
            break;
          }

        default:
          {
            typeOfNode = 'UNKNOWN NODE TYPE';
            break;
          }
      } // End of switch statement


      return typeOfNode;
    },
    get_node_name: function get_node_name(node) {
      var node_name = node.nodeName;
      return node_name;
    },
    get_node_value: function get_node_value(node) {
      var node_value = node.nodeValue;

      if (node_value != null) {
        return node_value;
      } else {
        return node_value;
      }
    },
    //************************Node Resources By properties[By Relationships(Read Only)]****************************************
    get_owner_document: function get_owner_document(node) {
      var nodeOwnerDocument = node.ownerDocument;
      return nodeOwnerDocument;
    },
    get_parent: function get_parent(childNode) {
      var parentNode = childNode.parentNode;
      return parentNode;
    },
    get_all_children_count: function get_all_children_count(parentNode) {
      var childCount = parentNode.childElementCount;
      return childCount;
    },
    get_childs: function get_childs(parentNode) {
      var nodeList = parentNode.childNodes;
      return nodeList;
    },
    get_first_child: function get_first_child(parentNode) {
      if (parentNode.hasChildNodes()) {
        var firstChildNode = '';

        if (parentNode.firstChild && typeof parentNode.firstChild != null) {
          firstChildNode = parentNode.childNodes[0];
        }

        return firstChildNode;
      } // End of outter if statement

    },
    get_last_child: function get_last_child(parentNode) {
      if (parentNode.hasChildNodes()) {
        var lastChildNode = '';

        if (parentNode.lastChild && typeof parentNode.lastChild != null) {
          lastChildNode = parentNode.childNodes[parentNode.childNodes.length - 1];
        }

        return lastChildNode;
      } // End of outter if statement

    },
    get_child_next_sibling: function get_child_next_sibling(childNode) {
      if (childNode.parentNode) {
        var childNodeNextSibling = '';

        if (childNode.nextSibling || typeof childNode.nextSibling == null) {
          childNodeNextSibling = childNode.nextSibling;
        }

        return childNodeNextSibling;
      } // End of outter if statement

    },
    get_child_previous_sibling: function get_child_previous_sibling(childNode) {
      if (childNode.parentNode) {
        var childNodePreviousSibling = '';

        if (childNode.previousSibling || typeof childNode.previousSibling == null) {
          childNodePreviousSibling = childNode.nextSibling;
        }

        return childNodePreviousSibling;
      } // End of outter if statement

    },
    //************************Node Resources By Methods [Node manipulation]****************************************
    check_if_has_childs: function check_if_has_childs(node) {
      var ifNodes = false;

      if (node.hasChildNodes()) {
        ifNodes = true;
        return ifNodes;
      } else {
        return ifNodes;
      }
    },
    append_child: function append_child(parentNode, appendNode) {
      var appendedNode = parentNode.appendChild(appendNode);
      return appendedNode;
    },
    insert_before: function insert_before(parentNode, insertNode, refNode) {
      if (refNode == undefined) {
        var insertedNode = parentNode.insertBefore(insertNode, null);
        return insertedNode;
      } else {
        var insertedNode = parentNode.insertBefore(insertNode, refNode);
        return insertedNode;
      }
    },
    replace_child: function replace_child(parentNode, replaceNode, refNode) {
      if (parentNode.hasChildNodes()) {
        if (refNode != undefined || refNode != null) {
          var replacedNode = parentNode.replaceChild(replaceNode, refNode);
          return replacedNode;
        } else {
          this.throwErrors('A required REFERENCE NODE must be supplied, none is');
        }
      }
    },
    remove_child: function remove_child(parentNode, removeNode) {
      if (parentNode.hasChildNodes()) {
        var removedNode = parentNode.removeChild(removeNode);
        return removedNode;
      }
    },
    copy_deep: function copy_deep(node) {
      var _this = this;

      var clonedDeepNode = node.cloneNode(true);

      if (node.hasOwnProperty('hasEvents')) {
        for (var e in events) {
          this.ev_addHandler(clonedDeepNode, events[e].type, events[e].callback);
        }
      }

      if (node.children.length > 0) {
        var chs = clonedDeepNode.children;
        Array.prototype.forEach.call(node.children, function (c, i) {
          if (c.hasOwnProperty('hasEvents')) {
            _this.ev_addHandler(chs[i], c.events.type, c.events.callback);
          }
        });
      }

      return clonedDeepNode;
    },
    copy_shallow: function copy_shallow(node) {
      var clonedShallowNode = node.cloneNode(false);
      return clonedShallowNode;
    },

    /*******************************************************************************************************************
    	
    	ACCESS DOCUMENT INFORMATION
    		*********************************************************************************************************************/
    get_document_title: function get_document_title() {
      var docTitle = document.title;
      return docTitle;
    },
    get_document_url: function get_document_url() {
      var docUrl = document.URL;
      return docUrl;
    },
    get_document_domain: function get_document_domain() {
      var docDomain = document.domain;
      return docDomain;
    },
    get_document_referrer: function get_document_referrer() {
      var docReferrer = document.referrer;
      return docReferrer;
    },

    /*******************************************************************************************************************
    	
    	MODIFY DOCUMENT INFORMATION
    		*********************************************************************************************************************/
    set_document_domain: function set_document_domain(setDomain) {
      document.domain = setDomain;
      var updatedDomain = document.domain;
      return updatedDomain;
    },

    /*******************************************************************************************************************
    	
    	ACCESS ELEMENT PROPERTIES
    		*********************************************************************************************************************/
    get_element_id: function get_element_id(element) {
      var elementId = element.id;

      if (elementId != null || elementId != undefined) {
        return elementId;
      } else {
        this.throwErrors('The specified element has no "id" attribute');
      }
    },
    get_element_class: function get_element_class(element) {
      var elementClass = element.className;

      if (elementClass != null || elementClass != undefined) {
        return elementClass;
      } else {
        this.throwErrors('The specified element has no "class" attribute');
      }
    },
    get_element_title: function get_element_title(element) {
      var elementTitle = element.title;

      if (elementTitle != null || elementTitle != undefined) {
        return elementTitle;
      } else {
        this.throwErrors('The specified element has no "title" attribute');
      }
    },
    get_element_style: function get_element_style(element) {
      var elementStyle = element.style;

      if (elementStyle != null || elementStyle != undefined) {
        return elementStyle;
      } else {
        this.throwErrors('The specified element has no "style" attribute');
      }
    },
    get_custom_attribute_value: function get_custom_attribute_value(element, custAttribute) {
      if ((element != null || element != undefined) && typeof custAttribute === 'string' && custAttribute != '') {
        if (custAttribute == 'id' || custAttribute == 'class' || custAttribute == 'style' || custAttribute == 'lang' || custAttribute == 'title' || custAttribute == 'dir') {
          this.throwErrors('The "id","class","style","lang","title","dir",' + ' and any of the event properties are invalid for custom attribute value');
        } else {
          var listFromString = custAttribute.split('-');
          var listFirstChild = listFromString[0];

          if (listFirstChild == 'data') {
            var custAttributeValue = element.getAttribute(custAttribute);
            return custAttributeValue;
          } else {
            this.throwErrors('Custom attribute must begin with "data-" string');
          }
        } // End of switch statement

      } else {
        this.throwErrors("One of the specified arguments is not in the proper format");
      }
    },
    // End of get_element_attribut_value() 
    get_element_attributes: function get_element_attributes(element) {
      var attribs = element.attributes;
      return attribs;
    },

    /*******************************************************************************************************************
    	
    	SETTING ELEMENT PROPERTIES
    		*********************************************************************************************************************/
    set_element_attribute: function set_element_attribute(element, attribute, newAttributeValue) {
      element.setAttribute(attribute, newAttributeValue); //var updatedAttributeValue = element.getAttribute(attribute);
      //return updatedAttributeValue;
    },
    remove_element_attribute: function remove_element_attribute(element, attribute) {
      element.removeAttribute(attribute); //var updatedAttributeValue = element.getAttribute(attribute);
      //return updatedAttributeValue;
    },

    /*******************************************************************************************************************
    	
    	CREATING ELEMENTS
    		*********************************************************************************************************************/
    create_element: function create_element(elTag, attributes) {
      if (elTag && typeof elTag === 'string' && elTag != '') {
        try {
          var newElement = '';

          if (attributes) {
            if (attributes instanceof Object) {
              newElement = document.createElement(elTag);

              for (attrib in attributes) {
                if (isNaN(attrib)) {
                  var attribValue = attributes[attrib];

                  if (typeof attribValue === 'string') {
                    newElement.attrib = attribValue;
                  } else {
                    this.throwErrors('Attribute value: ' + attribValue + ' must be a string');
                  } // End of valid attribute value check

                } else {
                  this.throwErrors('All attributes must be of type "String" starting with a letter in the range "A-Z"');
                } // End of attribute format check

              } // End of for in statement


              return newElement;
            } else {
              this.throwErrors('Attributes argument must be of type "Object"');
            } // End of valid attributes check

          } else {
            newElement = document.createElement(elTag);
            return newElement;
          } // End of attributes existence check

        } catch (eRror) {
          var errorMessage = String.prototype.split.call(eRror, ':');
          errorMessage[0] = '';
          this.throwErrors(Array.prototype.join.call(errorMessage, ' '));
        } // End of try catch statement

      } else {
        this.throwErrors('Prospective element argument must be a string that is not empty');
      } // End of valid tag check

    },

    /*******************************************************************************************************************
    	
    	IN DEPTH TEXT MANIPULATION
    		*********************************************************************************************************************/
    create_text: function create_text(parentNode, createText) {
      if (parentNode && parentNode instanceof HTMLElement) {
        if (createText) {
          if (typeof createText === 'string') {
            var newTextNode = document.createTextNode('My name is Surprise');
            this.append_child(parentNode, newTextNode);
            return newTextNode;
          } else {
            this.throwErrors('Argument 2 of SUKU.create_text() must be of type String');
          }
        } else {
          this.throwErrors('Argument 2 of SUKU.create_text() is required.');
        }
      } else {
        this.throwErrors('Argument 1 of SUKU.create_text() is required and must be an object of type HTMLElement.');
      }
    },
    add_text: function add_text(refTextNode, addText) {
      var newText = refTextNode.appendData(addText); //return newText;
    },
    insert_text: function insert_text(refTextNode, insertStart, insertText) {
      var newText = refTextNode.insertData(insertStart, insertText); //return newText;
    },
    delete_text: function delete_text(refTextNode, delStart, delCharNum) {
      var deletedText = refTextNode.deleteData(delStart, delCharNum); //return deletedText;
    },
    replace_text: function replace_text(refTextNode, replStart, replCharNum, replText) {
      refTextNode.replaceData(replStart, replCharNum, replText); //return newText;
    },
    get_full_text: function get_full_text(refNode) {
      var text = refNode.nodeValue;
      return text;
    },
    get_partial_text: function get_partial_text(refTextNode, extractStart, extractCharNum) {
      var extractedText = refTextNode.substringData(extractStart, extractCharNum);
      return extractedText;
    },
    get_text_length: function get_text_length(refTextNode) {
      var textLength = refTextNode.data.length;
      return textLength;
    },
    split_text: function split_text(refTextNode, splitStart) {
      var splitNode = refTextNode.splitText(splitStart);
      var splitNodeText = this.get_full_text(splitNode);
      return splitNodeText;
    },
    normalize_text: function normalize_text(parentNode) {
      if (parentNode && parentNode instanceof HTMLElement) {
        parentNode.normalize();
        var normalizedText = this.get_full_text(this.get_first_child(parentNode));
        return normalizedText;
      } else {
        this.throwErrors('Argument 1 of SUKU.normalize_text() must be an object of type HTMLElement');
      }
    },

    /*******************************************************************************************************************
    	
    	TABLE MANIPULATION
    		*********************************************************************************************************************/
    make_table: function make_table() {
      var table = this.create_element("table");
      return table;
    },
    make_table_body: function make_table_body() {
      var tableBody = this.create_element("tbody");
      return tableBody;
    },
    add_table_body: function add_table_body(table, tableBody) {
      this.append_child(table, tableBody);
    },
    make_table_row: function make_table_row(tbody, rowPos) {
      tbody.insertRow(rowPos);
    },
    make_table_rows: function make_table_rows(tbody, numRows) {
      for (r = 0; r < numRows; ++r) {
        tbody.insertRow(r);
      }
    },
    make_table_cell: function make_table_cell(trow, cellPos) {
      trow.insertCell(cellPos);
    },
    make_table_cells: function make_table_cells(trow, numCells) {
      for (c = 0; c < numCells; ++c) {
        trow.insertCell(c);
      }
    },
    add_contentto_cell: function add_contentto_cell(cell, content) {
      cell.innerHTML = content;
    },
    add_contentto_cells: function add_contentto_cells(cells, content) {
      for (c = 0; c < cells.length; ++c) {
        cells[c].innerHTML = content[c];
      }
    },
    get_table_head: function get_table_head(table) {
      var tableHead = table.tHead;
      return tableHead;
    },
    get_table_foot: function get_table_foot(table) {
      var tableFoot = table.tFoot;
      return tableFoot;
    },
    get_table_body_elements: function get_table_body_elements(table) {
      var tableBodyElements = table.tBodies;
      return tableBodyElements;
    },
    get_table_caption: function get_table_caption(table) {
      var tableCaption = table.tCaption;
      return tableCaption;
    },
    get_table_rows: function get_table_rows(table) {
      var tableRows = table.rows;
      return tableRows;
    },
    get_row: function get_row(table, rowPos) {
      var row = table.rows[rowPos];
      return row;
    },
    get_first_row: function get_first_row(table) {
      var firstRow = table.rows[0];
      return firstRow;
    },
    get_last_row: function get_last_row(table) {
      var lastRow = table.rows[table.rows.length - 1];
      return lastRow;
    },
    delete_row: function delete_row(table, rowPos) {
      var delRow = table.deleteRow(rowPos);
    },
    delete_first_row: function delete_first_row(table) {
      var delFirstRow = table.deleteRow(0);
    },
    delete_last_row: function delete_last_row(table) {
      var delLastRow = table.deleteRow(table.rows.length - 1);
    },
    get_row_cells: function get_row_cells(row) {
      var tableCells = row.cells;
      return tableCells;
    },
    get_cell: function get_cell(row, cellPos) {
      var cell = row.cells[cellPos];
      return cell;
    },
    get_first_cell: function get_first_cell(row) {
      var cell = row.cells[0];
      return cell;
    },
    get_last_cell: function get_last_cell(row) {
      var cell = row.cells[row.cells.length - 1];
    },
    delete_cell: function delete_cell(row, cellPos) {
      var cell = row.delelteCell(cellPos);
    },
    delete_first_cell: function delete_first_cell(row) {
      var cell = row.deleteCell(0);
    },
    delete_last_cell: function delete_last_cell(row) {
      var cell = row.deleteCell([row.cells.length - 1]);
    },

    /*******************************************************************************************************************
    	
    	DOM MANIPULATION BY HTML5 API
    		*********************************************************************************************************************/
    getby_class: function getby_class(class_selector) {
      var elementByClass = document.getElementsByClassName(class_selector);
      return elementByClass;
    },
    // End of getelementBy Class method
    get_class_list: function get_class_list(element) {
      var classes = element.classList;
      return classes;
    },
    // End of getelementBy Class method
    add_class: function add_class(classList, className) {
      classList.add(className);
    },
    remove_class: function remove_class(classList, className) {
      classList.remove(className);
    },
    toggle_class: function toggle_class(classList, className) {
      classList.toggle(className); //return classes;
    },
    has_class: function has_class(classList, className) {
      var status = classList.contains(className);
      return status;
    },

    /*********************************** HTML5 FOCUS  MANAGEMENT  **********************************************************************/
    get_focused_element: function get_focused_element() {
      var focused = document.activeElement;
      return focused;
    },
    is_element_focused: function is_element_focused(element) {
      var focusStatus = element.hasFocus();
      return focusStatus;
    },

    /*********************************** HTML5  DOCUMENT INFORMATION  **********************************************************************/
    document_load_state: function document_load_state() {
      var loadState = document.readyState;

      if (loadState === "complete") {
        var loaded = "loaded";
        return loaded;
      } else {
        var loading = "loading";
        return loading;
      }
    },
    get_document_html: function get_document_html() {
      var documentHtml = document.documentElement;
      return documentHtml;
    },
    get_document_head: function get_document_head() {
      var documentHead = document.head || document["this"].getby_tag('head')[0];
      return documentHead;
    },
    get_document_encoding: function get_document_encoding() {
      var documentCharset = document.charset;
      return documentCharset;
    },

    /*********************************** HTML5  CUSTOM ATTRIBUTES **********************************************************************/
    get_custom_attribute_data: function get_custom_attribute_data(element, attributeName) {
      var customDataValue = element.dataset.attributeName;
      return customDataValue;
    },
    set_custom_attribute_data: function set_custom_attribute_data(element, attributeName, data) {
      element.dataset.attributeName = data;
      var updatedData = element.dataset.attributeName;
      return updatedData;
    },

    /*********************************** HTML5  CONTENT READ AND WRITE **********************************************************************/
    get_inner_content: function get_inner_content(element) {
      var innerContent = element.innerHTML;
      return innerContent;
    },
    get_inner_content_all: function get_inner_content_all(element) {
      var content = element.outterHTML;
      return content;
    },
    insert_content_inner: function insert_content_inner(element, data) {
      element.innerHTML = data;
    },
    insert_content_by_replace: function insert_content_by_replace(element, data) {
      element.outerHTML = data;
    },
    insert_content_before: function insert_content_before(element, text) {
      element.insertAdjacentHTML("beforebegin", text);
    },
    insert_content_after: function insert_content_after(element, text) {
      element.insertAdjacentHTML("afterend", text);
    },
    insert_content_inner_start: function insert_content_inner_start(element, text) {
      element.insertAdjacentHTML("afterbegin", text);
    },
    insert_content_inner_end: function insert_content_inner_end(element, text) {
      element.insertAdjacentHTML("beforeend", text);
    },

    /*********************************** HTML5  VIEW SCROLL ************************************************************/
    scroll_to_view: function scroll_to_view(element) {
      element.scrollIntoView(true);
    },

    /*******************************************************************************************************************
    		
    		DOM MANIPULATION BY DOM LEVEL 2 AND 3
    		*********************************************************************************************************************/

    /*********************************** COMPUTED STYLES ************************************************************/
    get_computed_styles: function get_computed_styles(element) {
      var computed = '';

      if (document.defaultView.getComputedStyle) {
        computed = document.defaultView.getComputedStyle(element, null);
        return computed;
      } else {
        computed = element.currentStyle;
        return computed;
      }
    },

    /*********************************** ELEMENT DIMENSIONS[OFFSET DIMENSIONS] ************************************************************/
    get_element_height: function get_element_height(element) {
      var fullHeight = element.offsetHeight;
      return fullHeight;
    },
    get_element_width: function get_element_width(element) {
      var fullWidth = element.offsetWidth;
      return fullWidth;
    },
    get_offset_top: function get_offset_top(element) {
      var distanceTop = element.offsetTop;
      return distanceTop;
    },
    get_offset_left: function get_offset_left(element) {
      var distanceLeft = element.offsetLeft;
      return distanceLeft;
    },
    get_offset_parent: function get_offset_parent(element) {
      var parent = element.offsetParent;
      return parent;
    },

    /*********************************** [CLIENT[Element content area] DIMENSIONS] ******************************************/
    get_content_height: function get_content_height(element) {
      var contentHeight = element.clientHeight;
      return contentHeight;
    },
    get_content_width: function get_content_width(element) {
      var contentWidth = element.clientWidth;
      return contentWidth;
    },

    /*********************************** [SCROLL DIMENSIONS] ******************************************/
    scrollin_element_height: function scrollin_element_height(element) {
      var scrollinHeight = element.scrollHeight;
      return scrollinHeight;
    },
    scrollin_element_width: function scrollin_element_width(element) {
      var scrollinWidth = element.scrollWidth;
      return scrollinWidth;
    },
    scrollin_hidden_content_top: function scrollin_hidden_content_top(element) {
      var scrollinTop = element.scrollTop;
      return scrollinTop;
    },
    scrollin_hidden_content_left: function scrollin_hidden_content_left(element) {
      var scrollinLeft = element.scrollLeft;
      return scrollinLeft;
    },

    /*********************************** [VIEWPORT RELATED DIMENSIONS] ******************************************/
    get_all_element_dimensions: function get_all_element_dimensions(element) {
      var elementDimensions = element.getBoundingClientRect();
      return elementDimensions;
    },
    get_element_viewport_top: function get_element_viewport_top(element) {
      var topRelViewport = element.getBoundingClientRect().top;
      return topRelViewport;
    },
    get_element_viewport_left: function get_element_viewport_left(element) {
      var leftRelViewport = element.getBoundingClientRect().left;
      return leftRelViewport;
    },
    get_element_viewport_right: function get_element_viewport_right(element) {
      var rightRelViewport = element.getBoundingClientRect().right;
      return rightRelViewport;
    },
    get_element_viewport_bottom: function get_element_viewport_bottom(element) {
      var botRelViewport = element.getBoundingClientRect().bottom;
      return botRelViewport;
    },

    /*******************************************************************************************************************
    		
    		JSON PARSERS AND SERIALIZERS
    		*********************************************************************************************************************/

    /*********************************** JSON SERIALIZATION ************************************************************/
    js_to_json: function js_to_json(jsObject, filter, indent) {
      var jsonString = JSON.stringify(jsObject);
      return jsonString;
    },
    json_to_js: function json_to_js(jsonString, options) {
      var jsObject = JSON.parse(jsonString);
      return jsObject;
    },
    clone: function clone(o) {
      var _this2 = this;

      if (o instanceof Array) {
        var newA = [];
        o.forEach(function (e) {
          if (e instanceof Array) {
            newA.push(_this2.clone(e));
          } else if (e instanceof Object) {
            newA.push(_this2.clone(e));
          } else {
            newA.push(e);
          }
        });
        return newA;
      } else if (o instanceof Object && typeof o !== 'function') {
        var n = {};

        for (var p in o) {
          if (o[p] instanceof Array) {
            n[p] = this.clone(o[p]);
          } else if (o[p] instanceof Object && typeof o[p] !== 'function') {
            n[p] = this.clone(o[p]);
          } else {
            if (p === 'callback') {
              console.log('The current property is callback');
            }

            n[p] = o[p];
          }
        }

        return n;
      }
    },

    /*********************************** OBJECT AND ARRAY CASTING ************************************************************/
    object_to_array: function object_to_array(castObj) {
      if (castObj instanceof Object) {
        if (!(castObj instanceof Array)) {
          var arr = [];
          var count = 0;

          for (var key in castObj) {
            arr[count] = castObj[key];
            ++count;
          }

          return arr;
        } else {
          return castObj;
        }
      } else {
        this.throwErrors('Argument 1 of object_to_array() must be an object');
      }
    },
    array_to_object: function array_to_object(castArr) {
      if (castArr instanceof Array) {
        var obj = {};

        for (var i = 0; i < castArr.length; i++) {
          var property = 'property_' + (i + 1);
          obj[property] = castArr[i];
        }

        return obj;
      } else {
        this.throwErrors('Argument 1 of array_to_object() must be an array');
      }
    },

    /*********************************** EVENT HANDLING ************************************************************/
    ev_addHandler: function ev_addHandler(element, evtype, handler) {
      if (element.addEventListener) {
        element.addEventListener(evtype, handler, false);
      } else if (element.attachEvent) {
        element.attachEvent("on" + evtype, handler);
      } else {
        element["on" + evtype] = handler;
      }
    },
    // end of event handler
    ev_removeHandler: function ev_removeHandler(element, evtype, handler) {
      if (element.removeEventListener) {
        element.removeEventListener(evtype, handler, false);
      } else if (element.detachEvent) {
        element.detachEvent("on" + evtype, handler);
      } else {
        element["on" + evtype] = null;
      }
    },
    getEvent: function getEvent(event) {
      return event ? event : window.event;
    },
    getTarget: function getTarget(event) {
      return event.target || event.srcElement;
    },
    preventDefault: function preventDefault(event) {
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
    },
    stopPropagation: function stopPropagation(event) {
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
    },

    /*******************************************************************************************************************
    	
    	AJAX REQUESTS MANIPULATIONS
    		*********************************************************************************************************************/
    ajax_http_request: function ajax_http_request() {
      var xhr = new XMLHttpRequest();
      return xhr;
    },
    xhr_configuration: function xhr_configuration(url, requestData, successCallback, failureCallback, method, type) {
      xhr = this.ajax_http_request(); //xhr.addEventListener('progress',progressHandler);

      xhr.addEventListener('abort', abortHandler);
      xhr.addEventListener('error', errorHandler);
      xhr.addEventListener('load', loadHandler);

      function abortHandler(event) {
        failureCallback(event);
      } // End of abort handler


      function errorHandler(event) {
        failureCallback(event);
      } // End of abort handler


      function loadHandler(event) {
        if (xhr.status === 200 || xhr.status === 304) {
          successCallback(xhr.responseText);
        } else if (xhr.status === 404) {
          var ajax_error = 'Client Error: The requested resource or url was not found, error message [' + xhr.statusText + '], error code [' + xhr.status + '].';
          failureCallback(ajax_error);
        } else if (xhr.status === 400) {
          var ajax_error = 'Client Error: Request is not in required format, error message [' + xhr.statusText + '], error code [' + xhr.status + '].';
          failureCallback(ajax_error);
        } else if (xhr.status === 504) {
          var ajax_error = 'Server Error: The server responded with the technical error code [' + xhr.status + ']';
          failureCallback(ajax_error);
        }
      } // End of abort handler


      xhr.open(method, url, true);

      if (type) {
        if (type.toLowerCase() === 'application/json' || type.toLowerCase() === 'json') {
          xhr.setRequestHeader('Content-Type', 'application/json');
        } else if (type.toLowerCase() === 'text/plain') {
          xhr.setRequestHeader('Content-Type', 'text/plain');
        } else if (type.toLowerCase() === 'text/html') {
          xhr.setRequestHeader('Content-Type', 'text/html');
        } else if (type.toLowerCase() === 'application/x-www-form-urlencoded') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
      } //End of content type check


      if (method === 'GET') {
        xhr.send(null);
      } else {
        console.log('SUKU DATA TO THE SERVER');
        console.log(requestData);
        xhr.send(requestData);
      }
    },
    ajax_methods_validate: function ajax_methods_validate(url, requestData, successCallback, failureCallback, method) {
      if (url && successCallback && failureCallback) {
        if (method != 'GET') {
          if (requestData) {
            var checkResult = internalCheck();

            if (checkResult) {
              return true;
            }
          } else {
            switch (method) {
              case 'POST':
                this.throwErrors('Argument 2 of ajax_post() must be none-empty');
                break;

              case 'PUT':
                this.throwErrors('Argument 2 of ajax_put() must be none-empty');
                break;

              case 'TRACE':
                this.throwErrors('Argument 2 of ajax_Trace() must be none-empty');
                break;

              default:
                this.throwErrors('Argument 2 of ajax_delete() must be none-empty');
                break;
            }
          } // End of request data check

        } else {
          var checkResult = internalCheck();

          if (checkResult) {
            return true;
          }
        } // End of method check

      } else {
        this.throwErrors('One or more of the required arguments of ajax_get() is either null,empty or not provided');
      } // End of required arguments validation check


      function internalCheck() {
        if (typeof url === 'string' && url.trim() != '') {
          if (typeof successCallback === 'function' && typeof failureCallback === 'function') {
            return true;
          } else {
            SUKU.throwErrors('arguments 3 and 4 of ajax_get() must both be functions');
          } // End of required callback functions check

        } else {
          SUKU.throwErrors('argument 1 of ajax_get() must be a none-empty string');
        } // End of required string arguments check

      }
    },
    ajax_get: function ajax_get(url, requestData, successCallback, failureCallback, type) {
      var validateResult = this.ajax_methods_validate(url, requestData, successCallback, failureCallback, 'GET');

      if (validateResult) {
        if (type) {
          this.xhr_configuration(url, requestData, successCallback, failureCallback, 'GET', type);
        } else {
          this.xhr_configuration(url, requestData, successCallback, failureCallback, 'GET');
        }
      }
    },
    ajax_post: function ajax_post(url, requestData, successCallback, failureCallback, type) {
      var validateResult = this.ajax_methods_validate(url, requestData, successCallback, failureCallback, 'POST');

      if (validateResult) {
        if (type) {
          this.xhr_configuration(url, requestData, successCallback, failureCallback, 'POST', type);
        } else {
          this.xhr_configuration(url, requestData, successCallback, failureCallback, 'POST');
        }
      }
    },
    ajax_replace: function ajax_replace() {
      var xhr = new XMLHttpRequest();
    },
    ajax_erase: function ajax_erase() {
      var xhr = new XMLHttpRequest();
    },
    ajax_modify: function ajax_modify() {
      var xhr = new XMLHttpRequest();
    },
    serialize: function serialize(form) {
      var parts = [],
          field = null,
          i,
          len,
          j,
          optLen,
          option,
          optValue;

      for (i = 0, len = form.elements.length; i < len; i++) {
        field = form.elements[i];

        switch (field.type) {
          case "select-one":
          case "select-multiple":
            if (field.name.length) {
              for (j = 0, optLen = field.options.length; j < optLen; j++) {
                option = field.options[j];

                if (option.selected) {
                  optValue = "";

                  if (option.hasAttribute) {
                    optValue = option.hasAttribute("value") ? option.value : option.text;
                  } else {
                    optValue = option.attributes["value"].specified ? option.value : option.text;
                  } // End of if else if


                  parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(optValue));
                } // End of innermost if

              } // End of for loop

            } // End of if


            break;

          case undefined: //fieldset

          case "file": //file input

          case "submit": //submit button

          case "reset": //reset button

          case "button":
            //custom button
            break;

          case "radio": //radio button

          case "checkbox":
            //checkbox
            if (!field.checked) {
              break;
            }

          /* falls through */

          default:
            //don’t include form fields without names
            if (field.name.length) {
              parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
            }

        } // End of switch statement

      } // End of outer for loop


      return parts.join("&");
    },
    // End of serialize
    validator: function validator(data) {
      return 'Invalid Data, rectify it';
    } // End of immediately invoked function

  };
  /***/
},
/* 3 */

/***/
function (module, exports) {
  /*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  
  
  
  		Framework 	 : Suku
  		Version 	 : 1.0.0
  		Author		 : SUKU organisation
  		Website		 : www.suku.com
  		Date Created : 15/05/2018
  
  
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
  module.exports = {
    /*==============================================================================================================
    			The code immediately after this comment[starting with the return statement] is an object that will be executed
    	and returned immediately after the containing "immediately invoked" function has been executed and soon after
    	the script has been downloaded from its source. 
    	This object is a SUKU framework object, which contains all the properties, methods, and objects that the
    	SUKU framework defines.
    
     ================================================================================================================*/

    /*============================================================================================
    			The Method immediately after this comment(domLoaded()) is a SUKU framework method used to
    	execute code immediately after the document loads. It relies on the Window object's load
    	event to achieve this. Any argument passed to this method will be implemented only after
    	the document has loaded
    
     =============================================================================================*/
    html: function html(code) {
      // Define domLoaded method
      this.ev_addHandler(window, 'load', code); // Call the event handler method of this object to tie the laod
      // event to the Window object, and execute the code passed to
      // handle the event.
    },
    // End of afterLoad method
    create_element: function create_element(e) {
      var element = '';
      element += "$<{e}></".concat(e, ">");
      return element;
    },
    append_child: function append_child(parentNode, appendNode) {
      var oTag = '';
      var cTag = '';
      var otregex = /^ <(.*?)>/;
      var ctregex = /$<\\(.*?)>/;
      oTag = otregex.match(parentNode);
      cTag = ctregex.match(parentNode);

      if (oTag && cTag) {
        var cLen = cTag[0].length;
        var cPos = parentNode.lastIndexOf(cTag[0]);
        var slicedN = parentNode.slice(cPos, parentNode.length - 1);
        parentNode.replace(slicedN, '');
        console.log('Temp N');
        console.log(parentNode);
        parentNode += appendNode + slicedN;
      }

      return appendedNode;
    },
    set_element_attribute: function set_element_attribute(parentNode, attribute, newAttributeValue) {
      var oTag = '';
      var cTag = '';
      var otregex = /^ <(.*?)>/;
      oTag = otregex.match(parentNode);

      if (oTag) {
        var oLen = oTag[0].length;
        var oPos = parentNode.indexOf(oTag[0]);
        var slicedN = parentNode.slice(oPos, oLen);
        parentNode.replace(slicedN, '');
        var cbrack = /$(>)/;
        cb = cbrack.match(slicedN);

        if (cb) {
          var slicedB = slicedN.slice(slicedN.length - 1);
          slicedN.replace(slicedB, '');
          slicedN += " ".concat(attribute, " = ").concat(newAttributeValue, " ").concat(slicedB);
          parentNode = "".concat(slicedN, " ").concat(parentNode);
        }
      }
    },
    ev_addHandler: function ev_addHandler(element, evtype, handler) {
      this.set_element_attribute(element, "data-event", evtype);
    },
    // end of event handler 
    insert_content_inner: function insert_content_inner(parentNode, data) {
      var oTag = '';
      var cTag = '';
      var otregex = /^ <(.*?)>/;
      var ctregex = /$<\\(.*?)>/;
      oTag = otregex.match(parentNode);
      cTag = ctregex.match(parentNode);

      if (oTag && cTag) {
        var cLen = cTag[0].length;
        var cPos = parentNode.lastIndexOf(cTag[0]);
        var slicedN = parentNode.slice(cPos, parentNode.length - 1);
        parentNode.replace(slicedN, '');
        console.log('Temp N');
        console.log(parentNode);
        parentNode = "".concat(slicedN, " ").concat(data, " ").concat(parentNode);
      }
    },
    throwErrors: function throwErrors(errorMessage) {
      // Define throwErrors method
      throw new Error(errorMessage);
    },
    // End of afterLoad method

    /*******************************************************************************************************************
    	
    	Use DOM LEVEL 1 Interface Techniques To Manipulate Dom
    		*********************************************************************************************************************/

    /*******************************************************************************************************************
    	
    	Use DOM LEVEL 2 And 3 Interface Techniques To Manipulate The Dom
    		*********************************************************************************************************************/

    /*******************************************************************************************************************
    	
    	Use DOM LEVEL 1 Node Interface Techniques To Manipulate Dom
    		*********************************************************************************************************************/
    //************************Node Resources By properties[Read Only]***************************************************************
    //************************Node Resources By properties[By Relationships(Read Only)]****************************************
    get_parent: function get_parent(childNode) {
      var parentNode = childNode.parentNode;
      return parentNode;
    },
    get_all_children_count: function get_all_children_count(parentNode) {
      var childCount = parentNode.childElementCount;
      return childCount;
    },
    get_childs: function get_childs(parentNode) {
      var nodeList = parentNode.childNodes;
      return nodeList;
    },
    get_first_child: function get_first_child(parentNode) {
      if (parentNode.hasChildNodes()) {
        var firstChildNode = '';

        if (parentNode.firstChild && typeof parentNode.firstChild != null) {
          firstChildNode = parentNode.childNodes[0];
        }

        return firstChildNode;
      } // End of outter if statement

    },
    get_last_child: function get_last_child(parentNode) {
      if (parentNode.hasChildNodes()) {
        var lastChildNode = '';

        if (parentNode.lastChild && typeof parentNode.lastChild != null) {
          lastChildNode = parentNode.childNodes[parentNode.childNodes.length - 1];
        }

        return lastChildNode;
      } // End of outter if statement

    },
    get_child_next_sibling: function get_child_next_sibling(childNode) {
      if (childNode.parentNode) {
        var childNodeNextSibling = '';

        if (childNode.nextSibling || typeof childNode.nextSibling == null) {
          childNodeNextSibling = childNode.nextSibling;
        }

        return childNodeNextSibling;
      } // End of outter if statement

    },
    get_child_previous_sibling: function get_child_previous_sibling(childNode) {
      if (childNode.parentNode) {
        var childNodePreviousSibling = '';

        if (childNode.previousSibling || typeof childNode.previousSibling == null) {
          childNodePreviousSibling = childNode.nextSibling;
        }

        return childNodePreviousSibling;
      } // End of outter if statement

    },
    //************************Node Resources By Methods [Node manipulation]****************************************
    check_if_has_childs: function check_if_has_childs(node) {
      var ifNodes = false;

      if (node.hasChildNodes()) {
        ifNodes = true;
        return ifNodes;
      } else {
        return ifNodes;
      }
    },
    insert_before: function insert_before(parentNode, insertNode, refNode) {
      if (refNode == undefined) {
        var insertedNode = parentNode.insertBefore(insertNode, null);
        return insertedNode;
      } else {
        var insertedNode = parentNode.insertBefore(insertNode, refNode);
        return insertedNode;
      }
    },
    replace_child: function replace_child(parentNode, replaceNode, refNode) {
      if (parentNode.hasChildNodes()) {
        if (refNode != undefined || refNode != null) {
          var replacedNode = parentNode.replaceChild(replaceNode, refNode);
          return replacedNode;
        } else {
          this.throwErrors('A required REFERENCE NODE must be supplied, none is');
        }
      }
    },
    remove_child: function remove_child(parentNode, removeNode) {
      if (parentNode.hasChildNodes()) {
        var removedNode = parentNode.removeChild(removeNode);
        return removedNode;
      }
    },
    copy_deep: function copy_deep(node) {
      var _this = this;

      var clonedDeepNode = node.cloneNode(true);

      if (node.hasOwnProperty('hasEvents')) {
        for (var e in events) {
          this.ev_addHandler(clonedDeepNode, events[e].type, events[e].callback);
        }
      }

      if (node.children.length > 0) {
        var chs = clonedDeepNode.children;
        Array.prototype.forEach.call(node.children, function (c, i) {
          if (c.hasOwnProperty('hasEvents')) {
            _this.ev_addHandler(chs[i], c.events.type, c.events.callback);
          }
        });
      }

      return clonedDeepNode;
    },
    copy_shallow: function copy_shallow(node) {
      var clonedShallowNode = node.cloneNode(false);
      return clonedShallowNode;
    },

    /*******************************************************************************************************************
    	
    	ACCESS DOCUMENT INFORMATION
    		*********************************************************************************************************************/
    get_document_title: function get_document_title() {
      var docTitle = document.title;
      return docTitle;
    },
    get_document_url: function get_document_url() {
      var docUrl = document.URL;
      return docUrl;
    },
    get_document_domain: function get_document_domain() {
      var docDomain = document.domain;
      return docDomain;
    },
    get_document_referrer: function get_document_referrer() {
      var docReferrer = document.referrer;
      return docReferrer;
    },

    /*******************************************************************************************************************
    	
    	MODIFY DOCUMENT INFORMATION
    		*********************************************************************************************************************/
    set_document_domain: function set_document_domain(setDomain) {
      document.domain = setDomain;
      var updatedDomain = document.domain;
      return updatedDomain;
    },

    /*******************************************************************************************************************
    	
    	ACCESS ELEMENT PROPERTIES
    		*********************************************************************************************************************/
    get_element_id: function get_element_id(element) {
      var elementId = element.id;

      if (elementId != null || elementId != undefined) {
        return elementId;
      } else {
        this.throwErrors('The specified element has no "id" attribute');
      }
    },
    get_element_class: function get_element_class(element) {
      var elementClass = element.className;

      if (elementClass != null || elementClass != undefined) {
        return elementClass;
      } else {
        this.throwErrors('The specified element has no "class" attribute');
      }
    },
    get_element_title: function get_element_title(element) {
      var elementTitle = element.title;

      if (elementTitle != null || elementTitle != undefined) {
        return elementTitle;
      } else {
        this.throwErrors('The specified element has no "title" attribute');
      }
    },
    get_element_style: function get_element_style(element) {
      var elementStyle = element.style;

      if (elementStyle != null || elementStyle != undefined) {
        return elementStyle;
      } else {
        this.throwErrors('The specified element has no "style" attribute');
      }
    },
    get_custom_attribute_value: function get_custom_attribute_value(element, custAttribute) {
      if ((element != null || element != undefined) && typeof custAttribute === 'string' && custAttribute != '') {
        if (custAttribute == 'id' || custAttribute == 'class' || custAttribute == 'style' || custAttribute == 'lang' || custAttribute == 'title' || custAttribute == 'dir') {
          this.throwErrors('The "id","class","style","lang","title","dir",' + ' and any of the event properties are invalid for custom attribute value');
        } else {
          var listFromString = custAttribute.split('-');
          var listFirstChild = listFromString[0];

          if (listFirstChild == 'data') {
            var custAttributeValue = element.getAttribute(custAttribute);
            return custAttributeValue;
          } else {
            this.throwErrors('Custom attribute must begin with "data-" string');
          }
        } // End of switch statement

      } else {
        this.throwErrors("One of the specified arguments is not in the proper format");
      }
    },
    // End of get_element_attribut_value() 
    get_element_attributes: function get_element_attributes(element) {
      var attribs = element.attributes;
      return attribs;
    },

    /*******************************************************************************************************************
    	
    	SETTING ELEMENT PROPERTIES
    		*********************************************************************************************************************/
    remove_element_attribute: function remove_element_attribute(element, attribute) {
      element.removeAttribute(attribute); //var updatedAttributeValue = element.getAttribute(attribute);
      //return updatedAttributeValue;
    },

    /*******************************************************************************************************************
    	
    	CREATING ELEMENTS
    		*********************************************************************************************************************/

    /*******************************************************************************************************************
    	
    	IN DEPTH TEXT MANIPULATION
    		*********************************************************************************************************************/
    create_text: function create_text(parentNode, createText) {
      if (parentNode && parentNode instanceof HTMLElement) {
        if (createText) {
          if (typeof createText === 'string') {
            var newTextNode = document.createTextNode('My name is Surprise');
            this.append_child(parentNode, newTextNode);
            return newTextNode;
          } else {
            this.throwErrors('Argument 2 of SUKU.create_text() must be of type String');
          }
        } else {
          this.throwErrors('Argument 2 of SUKU.create_text() is required.');
        }
      } else {
        this.throwErrors('Argument 1 of SUKU.create_text() is required and must be an object of type HTMLElement.');
      }
    },
    add_text: function add_text(refTextNode, addText) {
      var newText = refTextNode.appendData(addText); //return newText;
    },
    insert_text: function insert_text(refTextNode, insertStart, insertText) {
      var newText = refTextNode.insertData(insertStart, insertText); //return newText;
    },
    delete_text: function delete_text(refTextNode, delStart, delCharNum) {
      var deletedText = refTextNode.deleteData(delStart, delCharNum); //return deletedText;
    },
    replace_text: function replace_text(refTextNode, replStart, replCharNum, replText) {
      refTextNode.replaceData(replStart, replCharNum, replText); //return newText;
    },
    get_full_text: function get_full_text(refNode) {
      var text = refNode.nodeValue;
      return text;
    },
    get_partial_text: function get_partial_text(refTextNode, extractStart, extractCharNum) {
      var extractedText = refTextNode.substringData(extractStart, extractCharNum);
      return extractedText;
    },
    get_text_length: function get_text_length(refTextNode) {
      var textLength = refTextNode.data.length;
      return textLength;
    },
    split_text: function split_text(refTextNode, splitStart) {
      var splitNode = refTextNode.splitText(splitStart);
      var splitNodeText = this.get_full_text(splitNode);
      return splitNodeText;
    },
    normalize_text: function normalize_text(parentNode) {
      if (parentNode && parentNode instanceof HTMLElement) {
        parentNode.normalize();
        var normalizedText = this.get_full_text(this.get_first_child(parentNode));
        return normalizedText;
      } else {
        this.throwErrors('Argument 1 of SUKU.normalize_text() must be an object of type HTMLElement');
      }
    },

    /*******************************************************************************************************************
    	
    	TABLE MANIPULATION
    		*********************************************************************************************************************/
    make_table: function make_table() {
      var table = this.create_element("table");
      return table;
    },
    make_table_body: function make_table_body() {
      var tableBody = this.create_element("tbody");
      return tableBody;
    },
    add_table_body: function add_table_body(table, tableBody) {
      this.append_child(table, tableBody);
    },
    make_table_row: function make_table_row(tbody, rowPos) {
      tbody.insertRow(rowPos);
    },
    make_table_rows: function make_table_rows(tbody, numRows) {
      for (r = 0; r < numRows; ++r) {
        tbody.insertRow(r);
      }
    },
    make_table_cell: function make_table_cell(trow, cellPos) {
      trow.insertCell(cellPos);
    },
    make_table_cells: function make_table_cells(trow, numCells) {
      for (c = 0; c < numCells; ++c) {
        trow.insertCell(c);
      }
    },
    add_contentto_cell: function add_contentto_cell(cell, content) {
      cell.innerHTML = content;
    },
    add_contentto_cells: function add_contentto_cells(cells, content) {
      for (c = 0; c < cells.length; ++c) {
        cells[c].innerHTML = content[c];
      }
    },
    get_table_head: function get_table_head(table) {
      var tableHead = table.tHead;
      return tableHead;
    },
    get_table_foot: function get_table_foot(table) {
      var tableFoot = table.tFoot;
      return tableFoot;
    },
    get_table_body_elements: function get_table_body_elements(table) {
      var tableBodyElements = table.tBodies;
      return tableBodyElements;
    },
    get_table_caption: function get_table_caption(table) {
      var tableCaption = table.tCaption;
      return tableCaption;
    },
    get_table_rows: function get_table_rows(table) {
      var tableRows = table.rows;
      return tableRows;
    },
    get_row: function get_row(table, rowPos) {
      var row = table.rows[rowPos];
      return row;
    },
    get_first_row: function get_first_row(table) {
      var firstRow = table.rows[0];
      return firstRow;
    },
    get_last_row: function get_last_row(table) {
      var lastRow = table.rows[table.rows.length - 1];
      return lastRow;
    },
    delete_row: function delete_row(table, rowPos) {
      var delRow = table.deleteRow(rowPos);
    },
    delete_first_row: function delete_first_row(table) {
      var delFirstRow = table.deleteRow(0);
    },
    delete_last_row: function delete_last_row(table) {
      var delLastRow = table.deleteRow(table.rows.length - 1);
    },
    get_row_cells: function get_row_cells(row) {
      var tableCells = row.cells;
      return tableCells;
    },
    get_cell: function get_cell(row, cellPos) {
      var cell = row.cells[cellPos];
      return cell;
    },
    get_first_cell: function get_first_cell(row) {
      var cell = row.cells[0];
      return cell;
    },
    get_last_cell: function get_last_cell(row) {
      var cell = row.cells[row.cells.length - 1];
    },
    delete_cell: function delete_cell(row, cellPos) {
      var cell = row.delelteCell(cellPos);
    },
    delete_first_cell: function delete_first_cell(row) {
      var cell = row.deleteCell(0);
    },
    delete_last_cell: function delete_last_cell(row) {
      var cell = row.deleteCell([row.cells.length - 1]);
    },

    /*******************************************************************************************************************
    	
    	DOM MANIPULATION BY HTML5 API
    		*********************************************************************************************************************/
    getby_class: function getby_class(class_selector) {
      var elementByClass = document.getElementsByClassName(class_selector);
      return elementByClass;
    },
    // End of getelementBy Class method
    get_class_list: function get_class_list(element) {
      var classes = element.classList;
      return classes;
    },
    // End of getelementBy Class method
    add_class: function add_class(classList, className) {
      classList.add(className);
    },
    remove_class: function remove_class(classList, className) {
      classList.remove(className);
    },
    toggle_class: function toggle_class(classList, className) {
      classList.toggle(className); //return classes;
    },
    has_class: function has_class(classList, className) {
      var status = classList.contains(className);
      return status;
    },

    /*********************************** HTML5 FOCUS  MANAGEMENT  **********************************************************************/
    get_focused_element: function get_focused_element() {
      var focused = document.activeElement;
      return focused;
    },
    is_element_focused: function is_element_focused(element) {
      var focusStatus = element.hasFocus();
      return focusStatus;
    },

    /*********************************** HTML5  DOCUMENT INFORMATION  **********************************************************************/
    document_load_state: function document_load_state() {
      var loadState = document.readyState;

      if (loadState === "complete") {
        var loaded = "loaded";
        return loaded;
      } else {
        var loading = "loading";
        return loading;
      }
    },
    get_document_html: function get_document_html() {
      var documentHtml = document.documentElement;
      return documentHtml;
    },
    get_document_head: function get_document_head() {
      var documentHead = document.head || document["this"].getby_tag('head')[0];
      return documentHead;
    },
    get_document_encoding: function get_document_encoding() {
      var documentCharset = document.charset;
      return documentCharset;
    },

    /*********************************** HTML5  CUSTOM ATTRIBUTES **********************************************************************/
    get_custom_attribute_data: function get_custom_attribute_data(element, attributeName) {
      var customDataValue = element.dataset.attributeName;
      return customDataValue;
    },
    set_custom_attribute_data: function set_custom_attribute_data(element, attributeName, data) {
      element.dataset.attributeName = data;
      var updatedData = element.dataset.attributeName;
      return updatedData;
    },

    /*********************************** HTML5  CONTENT READ AND WRITE **********************************************************************/
    get_inner_content: function get_inner_content(element) {
      var innerContent = element.innerHTML;
      return innerContent;
    },
    get_inner_content_all: function get_inner_content_all(element) {
      var content = element.outterHTML;
      return content;
    },
    insert_content_by_replace: function insert_content_by_replace(element, data) {
      element.outerHTML = data;
    },
    insert_content_before: function insert_content_before(element, text) {
      element.insertAdjacentHTML("beforebegin", text);
    },
    insert_content_after: function insert_content_after(element, text) {
      element.insertAdjacentHTML("afterend", text);
    },
    insert_content_inner_start: function insert_content_inner_start(element, text) {
      element.insertAdjacentHTML("afterbegin", text);
    },
    insert_content_inner_end: function insert_content_inner_end(element, text) {
      element.insertAdjacentHTML("beforeend", text);
    },

    /*********************************** HTML5  VIEW SCROLL ************************************************************/
    scroll_to_view: function scroll_to_view(element) {
      element.scrollIntoView(true);
    },

    /*******************************************************************************************************************
    		
    		DOM MANIPULATION BY DOM LEVEL 2 AND 3
    		*********************************************************************************************************************/

    /*********************************** COMPUTED STYLES ************************************************************/
    get_computed_styles: function get_computed_styles(element) {
      var computed = '';

      if (document.defaultView.getComputedStyle) {
        computed = document.defaultView.getComputedStyle(element, null);
        return computed;
      } else {
        computed = element.currentStyle;
        return computed;
      }
    },

    /*********************************** ELEMENT DIMENSIONS[OFFSET DIMENSIONS] ************************************************************/
    get_element_height: function get_element_height(element) {
      var fullHeight = element.offsetHeight;
      return fullHeight;
    },
    get_element_width: function get_element_width(element) {
      var fullWidth = element.offsetWidth;
      return fullWidth;
    },
    get_offset_top: function get_offset_top(element) {
      var distanceTop = element.offsetTop;
      return distanceTop;
    },
    get_offset_left: function get_offset_left(element) {
      var distanceLeft = element.offsetLeft;
      return distanceLeft;
    },
    get_offset_parent: function get_offset_parent(element) {
      var parent = element.offsetParent;
      return parent;
    },

    /*********************************** [CLIENT[Element content area] DIMENSIONS] ******************************************/
    get_content_height: function get_content_height(element) {
      var contentHeight = element.clientHeight;
      return contentHeight;
    },
    get_content_width: function get_content_width(element) {
      var contentWidth = element.clientWidth;
      return contentWidth;
    },

    /*********************************** [SCROLL DIMENSIONS] ******************************************/
    scrollin_element_height: function scrollin_element_height(element) {
      var scrollinHeight = element.scrollHeight;
      return scrollinHeight;
    },
    scrollin_element_width: function scrollin_element_width(element) {
      var scrollinWidth = element.scrollWidth;
      return scrollinWidth;
    },
    scrollin_hidden_content_top: function scrollin_hidden_content_top(element) {
      var scrollinTop = element.scrollTop;
      return scrollinTop;
    },
    scrollin_hidden_content_left: function scrollin_hidden_content_left(element) {
      var scrollinLeft = element.scrollLeft;
      return scrollinLeft;
    },

    /*********************************** [VIEWPORT RELATED DIMENSIONS] ******************************************/
    get_all_element_dimensions: function get_all_element_dimensions(element) {
      var elementDimensions = element.getBoundingClientRect();
      return elementDimensions;
    },
    get_element_viewport_top: function get_element_viewport_top(element) {
      var topRelViewport = element.getBoundingClientRect().top;
      return topRelViewport;
    },
    get_element_viewport_left: function get_element_viewport_left(element) {
      var leftRelViewport = element.getBoundingClientRect().left;
      return leftRelViewport;
    },
    get_element_viewport_right: function get_element_viewport_right(element) {
      var rightRelViewport = element.getBoundingClientRect().right;
      return rightRelViewport;
    },
    get_element_viewport_bottom: function get_element_viewport_bottom(element) {
      var botRelViewport = element.getBoundingClientRect().bottom;
      return botRelViewport;
    },

    /*******************************************************************************************************************
    		
    		JSON PARSERS AND SERIALIZERS
    		*********************************************************************************************************************/

    /*********************************** JSON SERIALIZATION ************************************************************/
    js_to_json: function js_to_json(jsObject, filter, indent) {
      var jsonString = JSON.stringify(jsObject);
      return jsonString;
    },
    json_to_js: function json_to_js(jsonString, options) {
      var jsObject = JSON.parse(jsonString);
      return jsObject;
    },
    clone: function clone(o) {
      var _this2 = this;

      if (o instanceof Array) {
        var newA = [];
        o.forEach(function (e) {
          if (e instanceof Array) {
            newA.push(_this2.clone(e));
          } else if (e instanceof Object) {
            newA.push(_this2.clone(e));
          } else {
            newA.push(e);
          }
        });
        return newA;
      } else if (o instanceof Object && typeof o !== 'function') {
        var n = {};

        for (var p in o) {
          if (o[p] instanceof Array) {
            n[p] = this.clone(o[p]);
          } else if (o[p] instanceof Object && typeof o[p] !== 'function') {
            n[p] = this.clone(o[p]);
          } else {
            if (p === 'callback') {
              console.log('The current property is callback');
            }

            n[p] = o[p];
          }
        }

        return n;
      }
    },

    /*********************************** OBJECT AND ARRAY CASTING ************************************************************/
    object_to_array: function object_to_array(castObj) {
      if (castObj instanceof Object) {
        if (!(castObj instanceof Array)) {
          var arr = [];
          var count = 0;

          for (var key in castObj) {
            arr[count] = castObj[key];
            ++count;
          }

          return arr;
        } else {
          return castObj;
        }
      } else {
        this.throwErrors('Argument 1 of object_to_array() must be an object');
      }
    },
    array_to_object: function array_to_object(castArr) {
      if (castArr instanceof Array) {
        var obj = {};

        for (var i = 0; i < castArr.length; i++) {
          var property = 'property_' + (i + 1);
          obj[property] = castArr[i];
        }

        return obj;
      } else {
        this.throwErrors('Argument 1 of array_to_object() must be an array');
      }
    },

    /*********************************** EVENT HANDLING ************************************************************/
    ev_removeHandler: function ev_removeHandler(element, evtype, handler) {
      if (element.removeEventListener) {
        element.removeEventListener(evtype, handler, false);
      } else if (element.detachEvent) {
        element.detachEvent("on" + evtype, handler);
      } else {
        element["on" + evtype] = null;
      }
    },
    getEvent: function getEvent(event) {
      return event ? event : window.event;
    },
    getTarget: function getTarget(event) {
      return event.target || event.srcElement;
    },
    preventDefault: function preventDefault(event) {
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
    },
    stopPropagation: function stopPropagation(event) {
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
    },

    /*******************************************************************************************************************
    	
    	AJAX REQUESTS MANIPULATIONS
    		*********************************************************************************************************************/
    ajax_http_request: function ajax_http_request() {
      var xhr = new XMLHttpRequest();
      return xhr;
    },
    xhr_configuration: function xhr_configuration(url, requestData, successCallback, failureCallback, method, type) {
      xhr = this.ajax_http_request(); //xhr.addEventListener('progress',progressHandler);

      xhr.addEventListener('abort', abortHandler);
      xhr.addEventListener('error', errorHandler);
      xhr.addEventListener('load', loadHandler);

      function abortHandler(event) {
        failureCallback(event);
      } // End of abort handler


      function errorHandler(event) {
        failureCallback(event);
      } // End of abort handler


      function loadHandler(event) {
        if (xhr.status === 200 || xhr.status === 304) {
          successCallback(xhr.responseText);
        } else if (xhr.status === 404) {
          var ajax_error = 'Client Error: The requested resource or url was not found, error message [' + xhr.statusText + '], error code [' + xhr.status + '].';
          failureCallback(ajax_error);
        } else if (xhr.status === 400) {
          var ajax_error = 'Client Error: Request is not in required format, error message [' + xhr.statusText + '], error code [' + xhr.status + '].';
          failureCallback(ajax_error);
        } else if (xhr.status === 504) {
          var ajax_error = 'Server Error: The server responded with the technical error code [' + xhr.status + ']';
          failureCallback(ajax_error);
        }
      } // End of abort handler


      xhr.open(method, url, true);

      if (type) {
        if (type.toLowerCase() === 'application/json' || type.toLowerCase() === 'json') {
          xhr.setRequestHeader('Content-Type', 'application/json');
        } else if (type.toLowerCase() === 'text/plain') {
          xhr.setRequestHeader('Content-Type', 'text/plain');
        } else if (type.toLowerCase() === 'text/html') {
          xhr.setRequestHeader('Content-Type', 'text/html');
        } else if (type.toLowerCase() === 'application/x-www-form-urlencoded') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
      } //End of content type check


      if (method === 'GET') {
        xhr.send(null);
      } else {
        console.log('SUKU DATA TO THE SERVER');
        console.log(requestData);
        xhr.send(requestData);
      }
    },
    ajax_methods_validate: function ajax_methods_validate(url, requestData, successCallback, failureCallback, method) {
      if (url && successCallback && failureCallback) {
        if (method != 'GET') {
          if (requestData) {
            var checkResult = internalCheck();

            if (checkResult) {
              return true;
            }
          } else {
            switch (method) {
              case 'POST':
                this.throwErrors('Argument 2 of ajax_post() must be none-empty');
                break;

              case 'PUT':
                this.throwErrors('Argument 2 of ajax_put() must be none-empty');
                break;

              case 'TRACE':
                this.throwErrors('Argument 2 of ajax_Trace() must be none-empty');
                break;

              default:
                this.throwErrors('Argument 2 of ajax_delete() must be none-empty');
                break;
            }
          } // End of request data check

        } else {
          var checkResult = internalCheck();

          if (checkResult) {
            return true;
          }
        } // End of method check

      } else {
        this.throwErrors('One or more of the required arguments of ajax_get() is either null,empty or not provided');
      } // End of required arguments validation check


      function internalCheck() {
        if (typeof url === 'string' && url.trim() != '') {
          if (typeof successCallback === 'function' && typeof failureCallback === 'function') {
            return true;
          } else {
            SUKU.throwErrors('arguments 3 and 4 of ajax_get() must both be functions');
          } // End of required callback functions check

        } else {
          SUKU.throwErrors('argument 1 of ajax_get() must be a none-empty string');
        } // End of required string arguments check

      }
    },
    ajax_get: function ajax_get(url, requestData, successCallback, failureCallback, type) {
      var validateResult = this.ajax_methods_validate(url, requestData, successCallback, failureCallback, 'GET');

      if (validateResult) {
        if (type) {
          this.xhr_configuration(url, requestData, successCallback, failureCallback, 'GET', type);
        } else {
          this.xhr_configuration(url, requestData, successCallback, failureCallback, 'GET');
        }
      }
    },
    ajax_post: function ajax_post(url, requestData, successCallback, failureCallback, type) {
      var validateResult = this.ajax_methods_validate(url, requestData, successCallback, failureCallback, 'POST');

      if (validateResult) {
        if (type) {
          this.xhr_configuration(url, requestData, successCallback, failureCallback, 'POST', type);
        } else {
          this.xhr_configuration(url, requestData, successCallback, failureCallback, 'POST');
        }
      }
    },
    ajax_replace: function ajax_replace() {
      var xhr = new XMLHttpRequest();
    },
    ajax_erase: function ajax_erase() {
      var xhr = new XMLHttpRequest();
    },
    ajax_modify: function ajax_modify() {
      var xhr = new XMLHttpRequest();
    },
    serialize: function serialize(form) {
      var parts = [],
          field = null,
          i,
          len,
          j,
          optLen,
          option,
          optValue;

      for (i = 0, len = form.elements.length; i < len; i++) {
        field = form.elements[i];

        switch (field.type) {
          case "select-one":
          case "select-multiple":
            if (field.name.length) {
              for (j = 0, optLen = field.options.length; j < optLen; j++) {
                option = field.options[j];

                if (option.selected) {
                  optValue = "";

                  if (option.hasAttribute) {
                    optValue = option.hasAttribute("value") ? option.value : option.text;
                  } else {
                    optValue = option.attributes["value"].specified ? option.value : option.text;
                  } // End of if else if


                  parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(optValue));
                } // End of innermost if

              } // End of for loop

            } // End of if


            break;

          case undefined: //fieldset

          case "file": //file input

          case "submit": //submit button

          case "reset": //reset button

          case "button":
            //custom button
            break;

          case "radio": //radio button

          case "checkbox":
            //checkbox
            if (!field.checked) {
              break;
            }

          /* falls through */

          default:
            //don’t include form fields without names
            if (field.name.length) {
              parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
            }

        } // End of switch statement

      } // End of outer for loop


      return parts.join("&");
    },
    // End of serialize
    validator: function validator(data) {
      return 'Invalid Data, rectify it';
    } // End of immediately invoked function

  };
  /***/
},
/* 4 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  function CORE(lib) {
    this.SUKU = lib;
    this.modules = {};
  } // End of the CORE class


  CORE.prototype.createModule = function (module, moduleId, modInstId) {
    var modules = this.modules; // console.log('THe modules Object')
    // console.log(modules)

    if (Object.keys(modules).length > 0) {
      for (var _mod in modules) {
        //console.log(modules[mod]);
        if (_mod === moduleId) {
          this.modules[moduleId][modInstId] = module;
        } else {
          this.modules[moduleId] = {};
          this.modules[moduleId][modInstId] = module;
        }
      } // End of for loop

    } else {
      this.modules[moduleId] = {};
      this.modules[moduleId][modInstId] = module;
    } // End of ifesleif test

  }; // End of store modules method


  CORE.prototype.dom = function () {
    var SUKU = this.SUKU;
    return {
      queryCont: function queryCont(contModId, contModInstId) {
        var cont = {};
        var modViews = SUKU.getAllBy_attribute(contModId);

        for (var modV = 0; modV < modViews.length; modV++) {
          var attribs = SUKU.get_element_attributes(modViews[modV]);

          if (attribs.length > 0) {
            for (var a = 0; a < attribs.length; a++) {
              var attName = attribs[a].name;

              if (attName === contModId) {
                var attValue = attribs[a].value;

                if (attValue === contModInstId) {
                  cont = modViews[modV];
                  break;
                }
              }
            }
          } // End of check attributes length if statement

        }

        cont.queryChildById = function (selector) {
          return SUKU.getChildby_id(this, selector);
        };

        cont.queryChildByClass = function (selector) {
          return SUKU.getChildby_class(this, selector);
        };

        cont.queryAllChildByClass = function (selector) {
          return SUKU.getAllChildby_class(this, selector);
        };

        cont.queryChildByAttribute = function (attrib) {
          return SUKU.getChildby_attribute(this, attrib);
        };

        cont.queryAllChildByAttribute = function (attrib) {
          return SUKU.getAllChildby_attribute(this, attrib);
        };

        return cont;
      },
      // End of query container method
      createElement: function createElement(selector) {
        // console.log('The value of this inside create element')
        var el = SUKU.create_element(selector);
        return el;
      },
      copyDeep: function copyDeep(el) {
        var el = SUKU.copy_deep(el);
        return el;
      },
      copyShallow: function copyShallow(el) {
        var el = SUKU.copy_shallow(el);
        return el;
      },
      queryById: function queryById(selector) {
        return SUKU.getby_id(selector);
      },
      queryByTag: function queryByTag(parent, selector) {
        return SUKU.getby_tag(parent, selector);
      },
      queryByAttribute: function queryByAttribute(attrib) {
        return SUKU.getAllBy_attribute(attrib);
      },
      queryNodeType: function queryNodeType(node) {
        var type_of_node = SUKU.get_type_of_node(node);
        return type_of_node;
      },
      addProperty: function addProperty(el, attrib, attribValue) {
        SUKU.set_element_attribute(el, attrib, attribValue);
      },
      removeProperty: function removeProperty(el, attrib) {
        SUKU.remove_element_attribute(el, attrib);
      },
      insertInner: function insertInner(el, content) {
        SUKU.insert_content_inner(el, content);
      },
      addChild: function addChild(parent, child) {
        SUKU.append_child(parent, child);
      },
      getClasses: function getClasses(element) {
        return SUKU.get_class_list(element);
      },
      addClass: function addClass(classlist, classname) {
        SUKU.add_class(classlist, classname);
      },
      removeClass: function removeClass(classlist, classname) {
        SUKU.remove_class(classlist, classname);
      },
      toggleClass: function toggleClass(classlist, classname) {
        SUKU.toggle_class(classlist, classname);
      },
      hasClass: function hasClass(classlist, classname) {
        return SUKU.has_class(classlist, classname);
      },
      getStyles: function getStyles(element) {
        return SUKU.get_computed_styles(element);
      },
      getAttributes: function getAttributes(element) {
        return SUKU.get_element_attributes(element);
      },
      getParent: function getParent(child) {
        return SUKU.get_parent(child);
      }
    };
  }; // End of CORE DOM MANIPULATION object


  CORE.prototype.events = function () {
    var SUKU = this.SUKU;
    return {
      addEventHandler: function addEventHandler(el, ev, handler) {
        SUKU.ev_addHandler(el, ev, handler);
      },
      // End of addEventHandler() method
      removeEventHandler: function removeEventHandler(el, ev, handler) {
        SUKU.ev_removeHandler(el, ev, handler);
      },
      // End of addEventHandler() method
      getEvent: function getEvent(ev) {
        return SUKU.getEvent(ev);
      },
      // End of addEventHandler() method
      getTarget: function getTarget(ev) {
        return SUKU.getTarget(ev);
      },
      // End of addEventHandler() method
      preventNormal: function preventNormal(ev) {
        SUKU.preventDefault(ev);
      },
      // End of addEventHandler() method
      stopEventBubble: function stopEventBubble(ev) {
        SUKU.stopPropagation(ev);
      } // End of addEventHandler() method

    };
  }; // End of CORE EVENTS manipulation object


  CORE.prototype.ajax = function () {
    var SUKU = this.SUKU;
    return {
      get: function get(url, data, success, failure, type) {
        SUKU.ajax_get(url, data, success, failure, type);
      },
      // End of ajax get() method
      post: function post(url, data, success, failure, type) {
        SUKU.ajax_post(url, data, success, failure, type);
      } // End of ajax post() method

    };
  }; // End of CORE AJAX manipulation object


  CORE.prototype.validator = {
    validate: function validate(data) {
      var result = SUKU.validator(data);
      return result;
    }
    /*
    
    	The methods immediately after this method will be used for module inter communication, which is
    	a way that modules communicate with each other indirectly.
    	
    
    */

  };

  CORE.prototype.registerEvents = function (evts, module_id, mod_inst_id) {
    if (evts && module_id && mod_inst_id) {
      if (this.modules[module_id][mod_inst_id]) {
        this.modules[module_id][mod_inst_id].events = evts;
      }
    }
  }; // End of registerEvents method


  CORE.prototype.triggerEvent = function (evt) {
    var moduId = null;

    if (evt) {
      // console.log('Event contains data')
      for (var _moduId in this.modules) {
        // console.log('Modules contains modules')
        if (this.modules.hasOwnProperty(_moduId)) {
          // console.log('given module belongs to modules object')
          _moduId = this.modules[_moduId];

          for (var modInst in _moduId) {
            // console.log('Instances of a given moduleS')
            // console.log(moduId[modInst].events.type)
            // console.log(evt.type)
            if (_moduId[modInst].events && _moduId[modInst].events[evt.type]) {
              _moduId[modInst].events[evt.type](evt.data);
            } // End of inner if statement

          }
        }
      } // End of for in statement

    } // End of outer evt object check

  }; // End of triggerEvent method


  CORE.prototype.startModule = function (moduleId, modInstId) {
    var moduleID = moduleId;

    if (this.modules[moduleID][modInstId]) {
      this.modules[moduleID][modInstId].init();
    }
  }; // End of startModule() core method


  CORE.prototype.startAllModules = function () {
    for (var modu in this.modules) {
      var modSuper = this.modules[mod];

      for (var modInstId in modSuper) {
        try {
          this.modules[modSuper][modInstId].init();
        } catch (e) {
          console.log(e);
        } // End of try catch

      }
    }
  }; // End of startAllModules() core method


  CORE.prototype.stopModule = function (moduleId, modInstId) {
    var moduleID = moduleId;

    if (this.modules[moduleID][modInstId]) {
      this.modules[moduleID][modInstId].destroy();
    }
  }; // End of stopModule() core method


  CORE.prototype.stopAllModules = function () {
    for (var modu in this.modules) {
      var modSuper = this.modules[mod];

      for (var modInstId in modSuper) {
        try {
          this.modules[modSuper][modInstId].destroy();
        } catch (e) {
          console.log(e);
        } // End of try catch

      }
    }
  }; // End of stopAllModules() core method


  CORE.prototype.converts = function () {
    var SUKU = this.SUKU;
    return {
      jsToJson: function jsToJson(jsObject) {
        return SUKU.js_to_json(jsObject);
      },
      jsonToJs: function jsonToJs(json) {
        return SUKU.json_to_js(json);
      },
      clone: function clone(c) {
        return SUKU.clone(c);
      },
      objectToArray: function objectToArray(o) {
        return SUKU.object_to_array(o);
      }
    };
  };
  /* harmony default export */


  __webpack_exports__["a"] = CORE;
  /***/
},
/* 5 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  function SANDBOX(appCore) {
    this.core = appCore;
  } // End of SANDBOX


  SANDBOX.prototype.create = function (moduleID, modInstId) {
    var sb_core = this.core;
    var dom = sb_core.dom();
    var events = sb_core.events();
    var ajax = sb_core.ajax();
    var converts = sb_core.converts(); // console.log('The value of Instance Id')
    // console.log(modInstId)

    if (modInstId) {
      // console.log('The module has a view')
      var CONTAINER = dom.queryCont('data-' + moduleID, modInstId);
      var meta = {
        moduleId: moduleID,
        modInstId: modInstId
      };
    } else {
      // console.log('The module has no view')
      var meta = {
        moduleId: moduleID,
        modInstId: moduleID
      };
    }

    return {
      // DOM manipulations
      view: CONTAINER,
      moduleMeta: meta,
      sb_getChildById: function sb_getChildById(selector) {
        if (CONTAINER) {
          return CONTAINER.queryChildById(selector);
        }
      },
      sb_getChildByClass: function sb_getChildByClass(selector) {
        if (CONTAINER) {
          return CONTAINER.queryChildByClass(selector);
        }
      },
      sb_getAllChildByClass: function sb_getAllChildByClass(selector) {
        if (CONTAINER) {
          return CONTAINER.queryAllChildByClass(selector);
        }
      },
      sb_getById: function sb_getById(selector) {
        return dom.queryById(selector);
      },
      sb_getByTag: function sb_getByTag(parent, selector) {
        return dom.queryByTag(parent, selector);
      },
      sb_getByAttribute: function sb_getByAttribute(attrib) {
        return dom.queryByAttribute(attrib);
      },
      sb_getAllChildByAttribute: function sb_getAllChildByAttribute(attrib) {
        return CONTAINER.queryAllChildByAttribute(attrib);
      },
      sb_getChildByAttribute: function sb_getChildByAttribute(attrib) {
        return CONTAINER.queryChildByAttribute(attrib);
      },
      sb_getNodeType: function sb_getNodeType(node) {
        return dom.queryNodeType(node);
      },
      sb_createElement: function sb_createElement(selector) {
        var el = dom.createElement(selector);
        return el;
      },
      sb_copyDeep: function sb_copyDeep(el) {
        var el = dom.copyDeep(el);
        return el;
      },
      sb_copyShallow: function sb_copyShallow(el) {
        var el = dom.copyShallow(el);
        return el;
      },
      sb_addProperty: function sb_addProperty(el, attrib, attribValue) {
        dom.addProperty(el, attrib, attribValue);
      },
      sb_removeProperty: function sb_removeProperty(el, attrib) {
        dom.removeProperty(el, attrib);
      },
      sb_insertInner: function sb_insertInner(el, content) {
        dom.insertInner(el, content);
      },
      sb_addChild: function sb_addChild(parent, child) {
        dom.addChild(parent, child);
      },
      sb_getClasses: function sb_getClasses(element) {
        return dom.getClasses(element);
      },
      sb_addClass: function sb_addClass(classlist, classname) {
        dom.addClass(classlist, classname);
      },
      sb_removeClass: function sb_removeClass(classlist, classname) {
        dom.removeClass(classlist, classname);
      },
      sb_toggleClass: function sb_toggleClass(classlist, classname) {
        dom.toggleClass(classlist, classname);
      },
      sb_hasClass: function sb_hasClass(classlist, classname) {
        return dom.hasClass(classlist, classname);
      },
      sb_getStyles: function sb_getStyles(element) {
        return dom.getStyles(element);
      },
      sb_getAttributes: function sb_getAttributes(element) {
        return dom.getAttributes(element);
      },
      sb_getParent: function sb_getParent(child) {
        return dom.getParent(child);
      },
      // EVENTS manipulations
      sb_addEvent: function sb_addEvent(el, ev, handler) {
        events.addEventHandler(el, ev, handler);
      },
      sb_removeEvent: function sb_removeEvent(el, ev, handler) {
        events.addEventHandler(el, ev, handler);
      },
      sb_getEvent: function sb_getEvent(ev) {
        return events.getEvent(ev);
      },
      // End of addEventHandler() method
      sb_getTarget: function sb_getTarget(ev) {
        return events.getTarget(ev);
      },
      // End of addEventHandler() method
      sb_preventNormal: function sb_preventNormal(ev) {
        events.preventNormal(ev);
      },
      sb_stopEventBubble: function sb_stopEventBubble(ev) {
        events.stopEventBubble(ev);
      },
      // AJAX communications
      sb_ajaxGet: function sb_ajaxGet(url, data, success, failure, type) {
        ajax.get(url, data, success, failure, type);
      },
      sb_ajaxPost: function sb_ajaxPost(url, data, success, failure, type) {
        ajax.post(url, data, success, failure, type);
      },
      // MODULE communications
      sb_notifyListen: function sb_notifyListen(evts, moduleID, modInstId) {
        // console.log('The notifyListen event has been successfuly invoked')
        sb_core.registerEvents(evts, moduleID, modInstId);
      },
      // End of notifyListen() for events to listen to
      sb_notifyEvent: function sb_notifyEvent(evt) {
        // console.log('The notify event has been successfuly invoked')
        sb_core.triggerEvent(evt);
      },
      // end of notifyEvent() occurence
      sb_validate: function sb_validate(data) {
        var validateResult = sb_core.validator.validate(data);
        return validateResult;
      },
      sb_jsToJson: function sb_jsToJson(jsObject) {
        return converts.jsToJson(jsObject);
      },
      sb_jsonToJs: function sb_jsonToJs(json) {
        return converts.jsonToJs(json);
      },
      sb_clone: function sb_clone(c) {
        return converts.clone(c);
      },
      sb_objectToArray: function sb_objectToArray(o) {
        return converts.objectToArray(o);
      } // End OF return

    };
  }; // End of SANDBOX create() method

  /* harmony default export */


  __webpack_exports__["a"] = SANDBOX;
  /***/
},
/* 6 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";
  /* harmony import */

  var __WEBPACK_IMPORTED_MODULE_0__vd_index__ = __webpack_require__(7);
  /* harmony import */


  var __WEBPACK_IMPORTED_MODULE_1__dom_index__ = __webpack_require__(10);
  /* harmony import */


  var __WEBPACK_IMPORTED_MODULE_2__aka_index__ = __webpack_require__(13);
  /* harmony import */


  var __WEBPACK_IMPORTED_MODULE_3__lifecycle_index__ = __webpack_require__(16);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Esm = function Esm() {
    _classCallCheck(this, Esm);

    this.Esm = {
      Vd: __WEBPACK_IMPORTED_MODULE_0__vd_index__["a"
      /* default */
      ],
      Dom: __WEBPACK_IMPORTED_MODULE_1__dom_index__["a"
      /* default */
      ],
      Aka: __WEBPACK_IMPORTED_MODULE_2__aka_index__["a"
      /* default */
      ],
      Lifecycle: __WEBPACK_IMPORTED_MODULE_3__lifecycle_index__["a"
      /* default */
      ]
    };
  };
  /* harmony default export */


  __webpack_exports__["a"] = new Esm();
  /***/
},
/* 7 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";
  /* harmony import */

  var __WEBPACK_IMPORTED_MODULE_0__vd__ = __webpack_require__(8);
  /* harmony default export */


  __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__vd__["a"
  /* default */
  ];
  /***/
},
/* 8 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";
  /* harmony import */

  var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(9);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Vd = function Vd(sandbox) {
    _classCallCheck(this, Vd);

    this.sb = sandbox;
    this.virtualDom = [];
    this.realDom = [];
    this.routeComponents = []; // methods

    this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["w"
    /* init */
    ];
    this.listens = __WEBPACK_IMPORTED_MODULE_0__methods__["x"
    /* listens */
    ];
    this.emit = __WEBPACK_IMPORTED_MODULE_0__methods__["m"
    /* emit */
    ];
    this.handleCreateDomTree = __WEBPACK_IMPORTED_MODULE_0__methods__["t"
    /* handleCreateDomTree */
    ];
    this.handleDomTreeCreated = __WEBPACK_IMPORTED_MODULE_0__methods__["u"
    /* handleDomTreeCreated */
    ];
    this.domTreeCreated = __WEBPACK_IMPORTED_MODULE_0__methods__["j"
    /* domTreeCreated */
    ];
    this.handleAddVirtualDom = __WEBPACK_IMPORTED_MODULE_0__methods__["c"
    /* addVirtualDom */
    ];
    this.handleAddDom = __WEBPACK_IMPORTED_MODULE_0__methods__["r"
    /* handleAddDom */
    ];
    this.handleAddToRoutesList = __WEBPACK_IMPORTED_MODULE_0__methods__["s"
    /* handleAddToRoutesList */
    ];
    this.addToRoutesList = __WEBPACK_IMPORTED_MODULE_0__methods__["b"
    /* addToRoutesList */
    ];
    this.addVirtualDom = __WEBPACK_IMPORTED_MODULE_0__methods__["c"
    /* addVirtualDom */
    ];
    this.createDomTree = __WEBPACK_IMPORTED_MODULE_0__methods__["h"
    /* createDomTree */
    ];
    this.domiks = __WEBPACK_IMPORTED_MODULE_0__methods__["k"
    /* domiks */
    ];
    this.validate = __WEBPACK_IMPORTED_MODULE_0__methods__["G"
    /* validate */
    ];
    this.domiks = __WEBPACK_IMPORTED_MODULE_0__methods__["k"
    /* domiks */
    ];
    this.beginDomiks = __WEBPACK_IMPORTED_MODULE_0__methods__["e"
    /* beginDomiks */
    ];
    this.checkVD = __WEBPACK_IMPORTED_MODULE_0__methods__["f"
    /* checkVD */
    ];
    this.saveDOM = __WEBPACK_IMPORTED_MODULE_0__methods__["D"
    /* saveDOM */
    ];
    this.addDom = __WEBPACK_IMPORTED_MODULE_0__methods__["a"
    /* addDom */
    ];
    this.startDiff = __WEBPACK_IMPORTED_MODULE_0__methods__["F"
    /* startDiff */
    ]; // this.diff = methods.diff

    this.pdiff = __WEBPACK_IMPORTED_MODULE_0__methods__["B"
    /* pdiff */
    ];
    this.fdiff = __WEBPACK_IMPORTED_MODULE_0__methods__["n"
    /* fdiff */
    ];
    this.presDo = __WEBPACK_IMPORTED_MODULE_0__methods__["C"
    /* presDo */
    ];
    this.funksDo = __WEBPACK_IMPORTED_MODULE_0__methods__["p"
    /* funksDo */
    ];
    this.funksDatum = __WEBPACK_IMPORTED_MODULE_0__methods__["o"
    /* funksDatum */
    ];
    this.funksEmit = __WEBPACK_IMPORTED_MODULE_0__methods__["q"
    /* funksEmit */
    ];
    this.chidiff = __WEBPACK_IMPORTED_MODULE_0__methods__["g"
    /* chidiff */
    ];
    this.base = __WEBPACK_IMPORTED_MODULE_0__methods__["d"
    /* base */
    ];
    this.loBase = __WEBPACK_IMPORTED_MODULE_0__methods__["y"
    /* loBase */
    ];
    this.shallow = __WEBPACK_IMPORTED_MODULE_0__methods__["E"
    /* shallow */
    ];
    this.loShallow = __WEBPACK_IMPORTED_MODULE_0__methods__["A"
    /* loShallow */
    ];
    this.deep = __WEBPACK_IMPORTED_MODULE_0__methods__["i"
    /* deep */
    ];
    this.loDeep = __WEBPACK_IMPORTED_MODULE_0__methods__["z"
    /* loDeep */
    ];
    this.handleDomiksCleanUp = __WEBPACK_IMPORTED_MODULE_0__methods__["v"
    /* handleDomiksCleanUp */
    ];
    this.domiksCleanUp = __WEBPACK_IMPORTED_MODULE_0__methods__["l"
    /* domiksCleanUp */
    ]; // this.createVdChidren = methods.createVdChildren
    // this.handleComponentRender = methods.handleComponentRender
  };
  /* harmony default export */


  __webpack_exports__["a"] = Vd;
  /***/
},
/* 9 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";
  /* harmony export (binding) */

  __webpack_require__.d(__webpack_exports__, "w", function () {
    return init;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "x", function () {
    return listens;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "m", function () {
    return emit;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "t", function () {
    return handleCreateDomTree;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "u", function () {
    return handleDomTreeCreated;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "s", function () {
    return handleAddToRoutesList;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "b", function () {
    return addToRoutesList;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "j", function () {
    return domTreeCreated;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "v", function () {
    return handleDomiksCleanUp;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "l", function () {
    return domiksCleanUp;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "e", function () {
    return beginDomiks;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "f", function () {
    return checkVD;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "k", function () {
    return domiks;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "G", function () {
    return validate;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "d", function () {
    return base;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "E", function () {
    return shallow;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "i", function () {
    return deep;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "y", function () {
    return loBase;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "A", function () {
    return loShallow;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "z", function () {
    return loDeep;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "F", function () {
    return startDiff;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "B", function () {
    return pdiff;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "n", function () {
    return fdiff;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "g", function () {
    return chidiff;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "p", function () {
    return funksDo;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "C", function () {
    return presDo;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "o", function () {
    return funksDatum;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "q", function () {
    return funksEmit;
  });
  /* unused harmony export saveVD */

  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "D", function () {
    return saveDOM;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "h", function () {
    return createDomTree;
  });
  /* unused harmony export handleAddVirtualDom */

  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "c", function () {
    return addVirtualDom;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "r", function () {
    return handleAddDom;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "a", function () {
    return addDom;
  });
  /* unused harmony export createVdChildren */

  /* unused harmony export nodeRandomId */

  /* unused harmony export uniqueids */


  var _this = this;

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  var init = function init() {
    this.listens(); //  this.emit({type:'get-component-name',data: ''})
  };

  var listens = function listens() {
    var sb = this.sb; // var name = 'render-component-'+name

    sb.sb_notifyListen({
      'create-dom-tree': this.handleCreateDomTree.bind(this),
      'dom-tree-created': this.handleDomTreeCreated.bind(this),
      'addto-routes-list': this.handleAddToRoutesList.bind(this),
      'domiks-clean-up': this.handleDomiksCleanUp.bind(this)
    }, sb.moduleMeta.moduleId, sb.moduleMeta.modInstId);
  };

  var emit = function emit(eNotifs) {
    var sb = this.sb;
    sb.sb_notifyEvent({
      type: eNotifs.type,
      data: eNotifs.data
    });
  };

  var handleCreateDomTree = function handleCreateDomTree(data) {
    var sb = this.sb; //  console.log('The Virtual Dom')
    //  console.log(data)
    // console.log(sb)
    // console.log(sb.view)
    // console.log('The Dom Child View')
    // console.log(data)
    // sb.sb_addChild(sb.view,data)
    // this.emit({type:'stop-preloader',data:''})
    //  this.createDomTree(data)

    this.beginDomiks(data);
  };

  var handleDomTreeCreated = function handleDomTreeCreated(data) {
    var sb = this.sb;
    this.domTreeCreated(data); // if(!sb.view.contains(data)){
    // 	sb.sb_addChild(sb.view,data)
    // 	this.emit({type:'stop-preloader',data:''})
    //     this.emit({type:'create-links',data:''})
    // }
  };

  var handleAddToRoutesList = function handleAddToRoutesList(data) {
    var sb = this.sb;
    this.addToRoutesList(data);
  };

  var addToRoutesList = function addToRoutesList(data) {
    console.log('THE ADDTOROUTES DATA');
    console.log(data);
    this.routeComponents.push(data);
    console.log('The routeComponents variable');
    console.log(this.routeComponents);
  };

  var domTreeCreated = function domTreeCreated(data) {
    var self = this;
    this.saveDOM(data);
  };

  var handleDomiksCleanUp = function handleDomiksCleanUp(data) {
    var sb = this.sb;
    this.domiksCleanUp(data);
  };

  var domiksCleanUp = function domiksCleanUp(data) {
    var sb = this.sb;

    for (var vd = 0; vd < this.virtualDom.length; vd++) {
      if (data === this.virtualDom[vd].view) {
        this.virtualDom.splice(vd, 1);
      }
    }

    for (var d = 0; d < this.realDom.length; d++) {
      if (data === this.realDom[d].view) {
        this.realDom.splice(d, 1);
      }
    }
  };

  var beginDomiks = function beginDomiks(data) {
    var sb = this.sb;
    console.log('The Virtual Dom Begin Domiks');
    console.log(data);
    this.checkVD(data); // console.log(sb)
    // console.log(sb.view)
    // console.log('The Dom Child View')
    // console.log(data)
    // sb.sb_addChild(sb.view,data)
    // this.emit({type:'stop-preloader',data:''})
    //  this.createDomTree(data)
  };

  var checkVD = function checkVD(data) {
    var self = this;
    self.domiks(data);
  };

  var domiks = function domiks(data) {
    var self = this;
    self.validate(data);
  };

  var validate = function validate(data) {
    console.log('The data');
    console.log(data);
    console.log(_typeof(data.me));
    var self = this;
    data.hasOwnProperty("cometa") ? data.cometa.hasOwnProperty("hiraky") && data.cometa.hasOwnProperty("root") && data.cometa.hasOwnProperty("name") ? data.hasOwnProperty("me") && _typeof(data.me) === 'object' && Object.keys(data.me).length > 0 ? data.cometa.hiraky === "base" ? self.base(data) : data.cometa.hiraky === "shallow" ? self.shallow(data) : self.deep(data) : console.log("prop me must be defined") : console.log("cometa object is missing") : console.log("cometa is not defined");
  };

  var base = function base(data) {
    var self = this;
    var vod = self.virtualDom;
    var sb = self.sb;

    if (window !== undefined || window !== null) {
      if (vod.length > 0) {
        self.loBase(data);
      } else {
        vod.push({
          compID: data.cometa.name,
          rootV: data.cometa.root,
          vd: sb.sb_clone(data.me)
        });
        self.createDomTree({
          vd: {
            compID: vod[vod.length - 1].compID,
            vd: vod[vod.length - 1].vd,
            root: vod[vod.length - 1].rootV
          }
        });
      }
    } else {
      self.createDomTree({
        vd: {
          compID: data.cometa.name,
          vd: sb.sb_clone(data.me),
          root: data.cometa.root,
          enviro: true
        }
      });
    }
  };

  var shallow = function shallow(data) {
    var self = this;
    var vod = self.virtualDom;
    var sb = self.sb;

    if (window !== undefined || window !== null) {
      if (vod.length > 0) {
        self.loShallow(data);
      } else {
        vod.push({
          compID: data.cometa.parent,
          rootV: data.cometa.root,
          children: [{
            id: data.cometa.name,
            vd: sb.sb_clone(data.me)
          }]
        });
        self.createDomTree({
          vd: {
            compID: vod[vod.length - 1].compID,
            vd: {
              level: 'shallow',
              vd: vod[vod.length - 1].children[0]
            },
            root: vod[vod.length - 1].rootV
          }
        });
      }
    } else {
      self.createDomTree({
        vd: {
          compID: data.cometa.parent,
          vd: {
            level: 'shallow',
            vd: {
              id: data.cometa.name,
              vd: sb.sb_clone(data.me)
            }
          },
          root: data.cometa.root,
          enviro: true
        }
      });
    }
  };

  var deep = function deep(data) {
    var self = this;
    var vod = self.virtualDom;
    var sb = self.sb;

    if (window !== undefined || window !== null) {
      if (vod.length > 0) {
        self.loDeep(data);
      } else {
        vod.push({
          compID: data.cometa.pp,
          rootV: data.cometa.root,
          children: [{
            pid: data.cometa.parent,
            children: [{
              id: data.cometa.name,
              vd: sb.sb_clone(data.me)
            }]
          }]
        });
        self.createDomTree({
          vd: {
            compID: vod[vod.length - 1].compID,
            vd: {
              level: 'deep',
              compID: vod[vod.length - 1].children[0].pid,
              vd: vod[vod.length - 1].children[0].children[0]
            },
            root: vod[vod.length - 1].rootV
          }
        });
      }
    } else {
      self.createDomTree({
        vd: {
          compID: data.cometa.pp,
          vd: {
            level: 'deep',
            compID: data.cometa.parent,
            vd: {
              id: data.cometa.name,
              vd: sb.sb_clone(data.me)
            }
          },
          root: data.cometa.root,
          enviro: true
        }
      });
    }
  };

  var loBase = function loBase(data) {
    var self = this;
    var vod = self.virtualDom;
    var sb = self.sb;
    console.log('caller lobase');
    console.log(loBase.caller);
    console.log(sb.sb_jsToJson(vod.length));

    for (var v = 0; v < vod.length; v++) {
      if (vod[v].compID === data.cometa.name) {
        console.log('LOBASE HAS BEEN CALLED THE SECOND TIME');
        console.log(data);
        self.startDiff({
          oVdom: vod[v].vd,
          oDom: self.realDom[v].dom,
          nVdom: sb.sb_clone(data.me)
        });
        break;
      } else if (v === vod.length - 1) {
        vod.push({
          compID: data.cometa.name,
          rootV: data.cometa.root,
          vd: sb.sb_clone(data.me)
        });
        console.log('THE VIRTUAL DOM HAS DATA N BASE COMP HAS JUST BEEN PUSHED');
        self.createDomTree({
          vd: {
            compID: vod[vod.length - 1].compID,
            vd: vod[vod.length - 1].vd,
            root: vod[vod.length - 1].rootV
          }
        });
        break;
      }
    }
  };

  var loShallow = function loShallow(data) {
    var self = this;
    var vod = self.virtualDom;
    var sb = self.sb;

    for (var v = 0; v < vod.length; v++) {
      if (vod[v].compID === data.cometa.parent) {
        var children = vod[v].children;

        for (var cc = 0; cc < children.length; cc++) {
          if (children[cc].id === data.cometa.name) {
            self.startDiff({
              oVdom: vod[v].children[cc].vd,
              oDom: self.realDom[v].children[cc].dom,
              nVdom: sb.sb_clone(data.me)
            });
            break;
          } else if (cc === children.length - 1) {
            children.push({
              id: data.cometa.name,
              vd: sb.sb_clone(data.me)
            });
            self.createDomTree({
              vd: {
                compID: vod[vod.length - 1].compID,
                vd: {
                  level: 'shallow',
                  vd: vod[vod.length - 1].children[children.length - 1]
                },
                root: vod[vod.length - 1].rootV
              }
            });
            break;
          }
        }
      } else if (v === vod.length - 1) {
        vod.push({
          compID: data.cometa.parent,
          rootV: data.cometa.root,
          children: [{
            id: data.cometa.name,
            vd: sb.sb_clone(data.me)
          }]
        });
        self.createDomTree({
          vd: {
            compID: vod[vod.length - 1].compID,
            vd: {
              level: 'shallow',
              vd: vod[vod.length - 1].children[0]
            },
            root: vod[vod.length - 1].rootV
          }
        });
        break;
      }
    }
  };

  var loDeep = function loDeep(data) {
    var self = this;
    var vod = self.virtualDom;
    var sb = self.sb;

    for (var v = 0; v < vod.length; v++) {
      if (vod[v].compID === data.cometa.pp) {
        var children = vod[v].children;

        for (var cc = 0; cc < children.length; cc++) {
          if (children[cc].pid === data.cometa.parent) {
            var kids = children[cc].children;

            for (var dc = 0; dc < kids.length; dc++) {
              if (kids[dc].id === data.cometa.name) {
                // self.startDiff({
                // })
                break;
              } else if (dc === kids.length - 1) {
                kids.push({
                  id: data.cometa.name,
                  vd: sb.sb_clone(data.me)
                });
                self.createDomTree({
                  vd: {
                    compID: vod[v].compID,
                    vd: {
                      level: 'deep',
                      compID: vod[v].children[cc].pid,
                      vd: vod[v].children[cc].children[kids.length - 1]
                    },
                    root: vod[v].rootV
                  }
                });
                break;
              }
            }

            break;
          } else if (cc === children.length - 1) {
            children.push({
              pid: data.cometa.parent,
              children: [{
                id: data.cometa.name,
                vd: sb.sb_clone(data.me)
              }]
            });
            self.createDomTree({
              vd: {
                compID: vod[v].compID,
                vd: {
                  level: 'deep',
                  compID: vod[v].children[v].pid,
                  vd: vod[v].children[children.length - 1].children[0]
                },
                root: vod[v].rootV
              }
            });
            break;
          }
        }

        break;
      } else if (v === vod.length - 1) {
        vod.push({
          compID: data.cometa.parent,
          rootV: data.cometa.root,
          children: [{
            pid: data.cometa.parent,
            children: [{
              id: data.cometa.name,
              vd: sb.sb_clone(data.me)
            }]
          }]
        });
        self.createDomTree({
          vd: {
            compID: vod[vod.length - 1].compID,
            vd: {
              level: 'deep',
              compID: vod[vod.length - 1].children[0].pid,
              vd: vod[vod.length - 1].children[0].children[0]
            },
            root: vod[vod.length - 1].rootV
          }
        });
        break;
      }
    }
  };

  var startDiff = function startDiff(data) {
    var self = this;
    var sb = self.sb;

    if (data.oVdom.element === data.nVdom.element) {
      if (data.oVdom.hasOwnProperty("props")) {
        if (data.nVdom.hasOwnProperty("props")) {
          if (data.nVdom.props instanceof Object && data.nVdom.props) {
            if (Object.keys(data.oVdom.props).length === Object.keys(data.nVdom.props).length) {
              if (Object.keys(data.oVdom.props).length > 0) {
                if (Object.keys(data.oVdom.props).length === 1) {
                  if (data.oVdom.props.hasOwnProperty("presentational")) {
                    if (data.nVdom.props.hasOwnProperty("presentational")) {
                      if (Object.keys(data.nVdom.props.presentational).length > 0) {
                        var npres = Object.entries(data.nVdom.props.presentational);
                        var opres = Object.entries(data.oVdom.props.presentational);
                        this.pdiff(opres, npres, data.oDom);
                      } else {
                        console.log("Dom could not be updated");
                      }
                    } else {
                      if (data.nVdom.props.hasOwnProperty("functional")) {
                        if (Object.keys(data.nVdom.props.functional).length > 0) {
                          var funks = data.nVdom.props.functional;
                          var oprops = data.oVdom.props;
                          var el = data.oDom; // data.oVdom.props.functional = funks

                          this.funksDo(funks, oprops, el);
                        } else {
                          console.log("Dom could not be updated");
                        }
                      } else {
                        console.log('Dom could not be updated, new virtual dom does not contain expected props');
                      }
                    }
                  } else if (data.oVdom.props.hasOwnProperty("functional")) {
                    if (data.nVdom.props.hasOwnProperty("functional")) {
                      if (Object.keys(data.nVdom.props.functional).length > 0) {
                        var nfunks = data.nVdom.props.functional;
                        var ofunks = data.oVdom.props.functional; // let odomProps = data.oDom.attributes

                        self.fdiff(ofunks, nfunks, oDom);
                      } else {
                        console.log("Dom could not be updated");
                      }
                    } else {
                      if (data.nVdom.props.hasOwnProperty("functional")) {
                        if (Object.keys(data.nVdom.props.functional).length > 0) {
                          var _funks = data.nVdom.props.functional;
                          var _el = data.oDom; // data.oVdom.props.functional = funks

                          if (_funks.hasOwnProperty('meta')) {
                            if (_funks.meta instanceof Object && _funks.meta) {
                              for (var p in _funks.meta) {
                                console.log('THE CURRENT ELEMENT CONTAINS THE EMIT FUNCTIONALITY FUNCTIONALITY');

                                if (p === 'emit') {
                                  // console.log('The data of emit property')
                                  // console.log(ops.meta[p])
                                  console.log('THE CURRENT ELEMENT CONTAINS THE EMIT FUNCTIONALITY FUNCTIONALITY');

                                  if (_funks.meta[p].hasOwnProperty('presents') && _funks.meta[p].hasOwnProperty('children')) {
                                    console.log('The style string');
                                    var presents = _funks.meta[p].presents;
                                    var children = _funks.meta[p].children;
                                    console.log(presents);
                                    console.log(children);
                                    this.emit({
                                      type: _funks.meta[p].type,
                                      data: {
                                        parent: _el,
                                        data: _funks.meta[p].data.data,
                                        presents: presents,
                                        children: children
                                      }
                                    });
                                  } else if (_funks.meta[p].hasOwnProperty('presents')) {
                                    console.log('The style string');
                                    var _presents = _funks.meta[p].presents;
                                    console.log(_presents);
                                    this.emit({
                                      type: _funks.meta[p].type,
                                      data: {
                                        parent: _el,
                                        data: _funks.meta[p].data.data,
                                        presents: _presents
                                      }
                                    });
                                  } else if (_funks.meta[p].hasOwnProperty('children')) {
                                    console.log('The children string');
                                    var _children = _funks.meta[p].children;
                                    console.log(_children);
                                    this.emit({
                                      type: _funks.meta[p].type,
                                      data: {
                                        parent: _el,
                                        data: _funks.meta[p].data.data,
                                        children: _children
                                      }
                                    });
                                  } else {
                                    this.emit({
                                      type: _funks.meta[p].type,
                                      data: {
                                        parent: _el,
                                        data: _funks.meta[p].data.data
                                      }
                                    });
                                  }
                                } else if (p === 'event') {
                                  for (var _p in _funks.meta.event) {
                                    //    console.log('The data of event property')
                                    //    console.log(ops.event[p])
                                    sb.sb_addEvent(_el, _funks.meta.event[_p].type, _funks.meta.event[_p].callback); // this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data}})
                                  }
                                }
                              }
                            } else {
                              console.log('meta property is either not an object or it is empty');
                            }
                          } else {
                            console.log('Dom could not be updated,misssing property "meta"');
                          }
                        } else {
                          console.log("Dom could not be updated");
                        }
                      } else {
                        console.log('Dom could not be updated, new virtual dom does not contain expected props');
                      }
                    }
                  } else {
                    console.log('Old vd does not contain any one of the required props');
                  }
                } else if (Object.keys(data.oVdom.props).length === 2) {
                  if (data.oVdom.props.hasOwnProperty("presentational") && data.oVdom.props.hasOwnProperty("presentational")) {
                    if (data.oVdom.props.hasOwnProperty("functional") && data.oVdom.props.hasOwnProperty("functional")) {
                      if (data.oVdom.props.functional instanceof Object && data.oVdom.props.presentational instanceof Object) {
                        if (Object.keys(data.oVdom.props.functional).length > 0 && Object.keys(data.oVdom.props.presentational).length > 0) {
                          var _npres = Object.entries(data.nVdom.props.presentational);

                          var _opres = Object.entries(data.oVdom.props.presentational);

                          var _nfunks = data.nVdom.props.functional;
                          var _ofunks = data.oVdom.props.functional; // let odomProps = data.oDom.attributes

                          this.pdiff(_opres, _npres, data.oDom);
                          this.fdiff(_ofunks, _nfunks, data.oDom);
                        } else {
                          console.log('Props properties are empty');
                        }
                      } else {
                        console.log('one of Props property is not an object, object required');
                      }
                    } else {
                      console.log('props has a missing functional property');
                    }
                  } else {
                    console.log('props has a missing functional property');
                  }
                }
              } else {
                console.log('pROPS EMpty');
              }
            } else if (Object.keys(data.oVdom.props).length > Object.keys(data.nVdom.props).length) {
              if (data.oVdom.props.hasOwnProperty('presentational') && data.oVdom.props.hasOwnProperty('functional')) {
                if (data.oVdom.props.presentational instanceof Object && data.oVdom.props.functional instanceof Object) {
                  if (!(data.nVdom.props.hasOwnProperty('presentational') && data.nVdom.props.hasOwnProperty('functional'))) {
                    if (data.nVdom.props.hasOwnProperty('presentational')) {
                      data.oDom.attributes = null;
                      delete data.oVdom.presentational;
                    } else if (data.nVdom.props.hasOwnProperty('functional')) {
                      if (data.nVdom.props.functional.hasOwnProperty('meta')) {
                        var oDomChis = data.oDom.children;

                        if (oDomChis.length > 0) {
                          for (var c = 0; c < oDomChis.length; c++) {
                            oDomChis[c].remove();
                          }
                        }
                      }

                      if (data.nVdom.props.functional.hasOwnProperty('event')) {
                        var evname = Object.keys(data.oVdom.functional.event)[0];
                        var handler = data.oVdom.functional.event[evname].callback;
                        sb.sb_removeEvent(data.oDom, evname, handler);
                        delete data.oVdom.functional;
                      }
                    } else {
                      console.log('Props properties do not match');
                    }
                  }
                } else {}
              } else {}
            } else if (Object.keys(data.oVdom.props).length < Object.keys(data.nVdom.props).length) {
              if (data.nVdom.props.hasOwnProperty('presentational') && data.nVdom.props.hasOwnProperty('functional')) {
                if (data.nVdom.props.presentational instanceof Object && data.nVdom.props.functional instanceof Object) {
                  if (data.oVdom.props.hasOwnProperty('presentational')) {
                    data.oVdom.props.functional = data.nVdom.props.functional;

                    if (data.nVdom.props.functional.hasOwnProperty('meta')) {// let oDomChis = data.oDom.children
                      // if(oDomChis.length > 0){
                      // 	for(let c=0; c < oDomChis.length; c++){
                      // 		oDomChis[c].remove()
                      // 	}
                      // }
                    }

                    if (data.nVdom.props.functional.hasOwnProperty('event')) {// let evname = Object.keys(data.oVdom.functional.event)[0]
                      // let handler = data.oVdom.functional.event[evname].callback
                      // sb.sb_removeEvent(data.oDom,evname,handler)
                      // delete data.oVdom.functional
                    }
                  } else if (data.oVdom.props.hasOwnProperty('functional')) {// data.oVdom.props.presentational = data.nVdom.props.presentational
                  } else {
                    console.log('Props properties do not match');
                  }
                } else {}
              } else {}
            }
          }
        }
      } else if (data.nVdom.hasOwnProperty("props")) {
        data.oVdom.props = data.nVdom.props;
      }

      if (data.oVdom.hasOwnProperty('children')) {
        if (data.nVdom.hasOwnProperty('children')) {
          var _oChis = data.oVdom.children;
          var nChis = data.nVdom.children;
          var _oDomChis = data.oDom.children;

          if (_oChis.length > 0 && nChis.length > 0) {
            this.chidiff(_oChis, nChis, _oDomChis);
          }
        }
      } else if (data.nVdom.hasOwnProperty('children')) {
        if (data.nVdom.children.length > 0) {
          data.oVdom.children = data.nVdom.children;
        }
      }
    } else {// let elParent = sb.sb_getParent(data.oDom)
      // self.createPatch({
      //    vd: data.nVdom,
      //    root: elParent 
      // })
    }
  };

  var pdiff = function pdiff(opres, npres, oDom) {
    var self = this;
    var sb = self.sb;
    var odomProps = oDom.attributes;
    console.log('opres');
    console.log(opres);

    for (var np = 0; np < npres.length; np++) {
      for (var op = 0; op < opres.length; op++) {
        if (opres[op][0].toLowerCase().trim() === npres[np][0].toLowerCase().trim()) {
          if (opres[op][1].toLowerCase().trim() === npres[np][1].toLowerCase().trim()) {
            // br = true
            console.log('Operating inside values being the same');
            console.log(opres[op][1]);
            console.log(npres[np][1]);
            console.log(opres);
            break;
          } else {
            console.log('Operating inside values being different');
            console.log(opres[op][1]);
            console.log(sb.sb_jsToJson(opres));
            opres[op][1] = npres[np][1];

            if (opres[op][0].toLowerCase().trim() === 'content') {
              console.log('The current property is content');
              console.log(opres[op][1]);
              console.log(npres[np][1]);
              console.log(opres);
              oDom.innerHTML = opres[op][1];
            } else {
              for (var a = 0; a < odomProps.length; a++) {
                if (odomProps[a].nodeName.toLowerCase().trim() === opres[op][0]) {
                  odomProps[a].nodeValue = opres[op][1];
                  break;
                }
              }
            } // br = true


            break;
          }
        } else if (op === opres.length - 1) {
          opres[npres[np][0]] = npres[np][1];
          odomProps[npres[np][0]] = npres[np][1];
          break;
        }
      }
    }
  };

  var fdiff = function fdiff(ofunks, nfunks, oDom) {
    console.log('The o and n  funks ');
    console.log(ofunks);
    console.log(nfunks);

    if (Object.keys(ofunks).length === Object.keys(nfunks).length) {
      if (Object.keys(ofunks).length > 0) {
        if (ofunks.hasOwnProperty('meta')) {
          if (nfunks.hasOwnProperty('meta') && nfunks.meta instanceof Object && nfunks.meta) {
            if (nfunks.meta.hasOwnProperty('emit') && nfunks.meta.emit instanceof Object && nfunks.meta.emit) {
              if (nfunks.meta.emit.hasOwnProperty('type') && nfunks.meta.emit.hasOwnProperty('data')) {
                if (typeof nfunks.meta.emit.type === 'string' && nfunks.meta.emit.data instanceof Object) {
                  if (nfunks.meta.emit.data.hasOwnProperty('type') && typeof nfunks.meta.emit.data.type === 'string') {
                    if (nfunks.meta.emit.data.hasOwnProperty('data') && nfunks.meta.emit.data.data instanceof Object && nfunks.meta.emit.data.data) {
                      if (nfunks.meta.emit.data.type === 'datum') {
                        console.log('The type of data in here is DATUM');
                        console.log(ofunks.meta.emit.data);
                        console.log(nfunks.meta.emit.data);
                        this.funksDatum(ofunks, nfunks, oDom);
                      } else if (nfunks.meta.emit.data.type === 'emit') {
                        console.log('The type of data in here is EMIT ');
                        console.log(ofunks.meta.emit.data);
                        console.log(nfunks.meta.emit.data);
                        this.funksEmit(ofunks, nfunks, oDom);
                      } else {
                        console.log('invalid type value, either datum or emit required');
                      }
                    } else {
                      console.log('functional.meta.emit.data.data must defined and be a string');
                    }
                  } else {
                    console.log('functional.meta.emit.data.type must defined and be a string');
                  }
                } else {
                  console.log('Functional.meta.emit.type or functional.meta.emit.data is not in the required format');
                }
              } else {
                console.log('New virtual dom does not contain one of ther required meta object properties');
              }
            } else {
              console.log('functional property meta.emit is either undefined,null, or empty');
            }
          } else {
            if (nfunks.hasOwnProperty("event") && nfunks.event instanceof Object && nfunks.event) {} else {
              console.log('New virtual dom property either does not exist or it is not in required format ');
            }
          }
        } else {}
      } else if (Object.keys(ofunks).length === 2) {
        console.log('oFunks has two properties');
      }
    } else {
      console.log('The length is not the same');
    }
  };

  var chidiff = function chidiff(oChis, nChis, oDomChis) {
    if (oChis.length === nChis.length) {
      for (var c = 0; c < oChis.length; c++) {
        this.startDiff({
          oVdom: oChis[c],
          oDom: oDomChis[c],
          nVdom: nChis[c]
        });
      }
    } else if (oChis.length > nChis.length) {
      var pbreak = false;

      for (var oc = 0; oc < oChis.length; oc++) {
        if (oChis[oc].hasOwnProperty('element')) {
          for (var nc = 0; nc < nChis.length; nc++) {
            if (nChis[nc].hasOwnProperty('element')) {
              if (oChis[oc].element.toLowerCase().trim() === nChis[nc].element.toLowerCase().trim()) {
                this.startDiff({
                  oVdom: oChis[oc],
                  oDom: oDomChis[oc],
                  nVdom: nChis[oc]
                });
                break;
              } else if (nc === nChis.length - 1) {
                oChis.splice(oChis[oc], 1);
              }
            } else {
              console.log('Virutal dom could not be updated: element property missing');
              pbreak = true;
              break;
            }
          }
        } else {
          console.log('Virutal dom could not be updated: element property missing');
          break;
        }

        if (pbreak) {
          break;
        }
      }
    } else if (oChis.length < nChis.length) {
      var _pbreak = false;

      for (var _nc = 0; _nc < nChis.length; _nc++) {
        if (nChis[_nc].hasOwnProperty('element')) {
          for (var _oc = 0; _oc < oChis.length; _oc++) {
            if (oChis[_oc].hasOwnProperty('element')) {
              if (nChis[_nc].element.toLowerCase().trim() === oChis[_oc].element.toLowerCase().trim()) {
                self.startDiff({
                  oVdom: oChis[_oc],
                  oDom: oDomChis[_nc],
                  nVdom: nChis[_nc]
                });
                break;
              } else if (_oc === oChis.length - 1) {// odata.splice(odata[od],1)
              }
            } else {
              console.log('Virutal dom could not be updated: element property missing');
              _pbreak = true;
              break;
            }
          }
        } else {
          console.log('Virutal dom could not be updated: element property missing');
          break;
        }

        if (_pbreak) {
          break;
        }
      }
    }
  };

  var funksDo = function funksDo(funks, oprops, el) {
    if (funks.hasOwnProperty('meta')) {
      if (funks.meta instanceof Object && funks.meta) {
        for (var p in funks.meta) {
          console.log('THE CURRENT ELEMENT CONTAINS THE EMIT FUNCTIONALITY FUNCTIONALITY');

          if (p === 'emit') {
            // console.log('The data of emit property')
            // console.log(ops.meta[p])
            console.log('THE CURRENT ELEMENT CONTAINS THE EMIT FUNCTIONALITY FUNCTIONALITY');

            if (funks.meta[p].hasOwnProperty('presents') && funks.meta[p].hasOwnProperty('children')) {
              console.log('The style string');
              var presents = funks.meta[p].presents;
              var children = funks.meta[p].children;
              console.log(presents);
              console.log(children);
              this.emit({
                type: funks.meta[p].type,
                data: {
                  parent: el,
                  data: funks.meta[p].data.data,
                  presents: presents,
                  children: children
                }
              });
            } else if (funks.meta[p].hasOwnProperty('presents')) {
              console.log('The style string');
              var _presents2 = funks.meta[p].presents;
              console.log(_presents2);
              this.emit({
                type: funks.meta[p].type,
                data: {
                  parent: el,
                  data: funks.meta[p].data.data,
                  presents: _presents2
                }
              });
            } else if (funks.meta[p].hasOwnProperty('children')) {
              console.log('The children string');
              var _children2 = funks.meta[p].children;
              console.log(_children2);
              this.emit({
                type: funks.meta[p].type,
                data: {
                  parent: el,
                  data: funks.meta[p].data.data,
                  children: _children2
                }
              });
            } else {
              this.emit({
                type: funks.meta[p].type,
                data: {
                  parent: el,
                  data: funks.meta[p].data.data
                }
              });
            }
          } else if (p === 'event') {
            for (var _p2 in funks.meta.event) {
              //    console.log('The data of event property')
              //    console.log(ops.event[p])
              sb.sb_addEvent(el, funks.meta.event[_p2].type, funks.meta.event[_p2].callback); // this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data}})
            }
          }
        }
      } else {
        console.log('meta property is either not an object or it is empty');
      }
    } else {
      console.log('Dom could not be updated,misssing property "meta"');
    }
  };

  var presDo = function presDo(pres, nprops, el) {
    self.createPatch({
      vd: data.nVdom,
      root: elParent
    });
  };

  var funksDatum = function funksDatum(ofunks, nfunks, oDom) {
    var self = this;
    var sb = self.sb;

    if (ofunks.meta.emit.data.data.length === nfunks.meta.emit.data.data.length) {
      // console.log('The two arrays reference the same object in memory') 
      console.log('Ofunks is equal to nfunks outer');
      var odChis = oDom.children;

      for (var p = 0; p < ofunks.meta.emit.data.data.length; p++) {
        if (ofunks.meta.emit.data.data[p] === nfunks.meta.emit.data.data[p]) {
          console.log('Data values are the same for old and new funks');
          console.log(ofunks.meta.emit.data.data[p]);
          console.log(nfunks.meta.emit.data.data[p]);

          if (ofunks.meta.emit.hasOwnProperty('presents') && nfunks.meta.emit.hasOwnProperty('presents')) {
            var opres = Object.entries(ofunks.meta.emit.presents);
            var npres = Object.entries(nfunks.meta.emit.presents);
            var od = odChis[p];
            this.pdiff(opres, npres, od);
          } else if (nfunks.meta.emit.hasOwnProperty('presents')) {
            ofunks.meta.emit.presents = nfunks.meta.emit.presents;
            var props = ofunks.meta.emit.presents;

            for (var _p3 in props) {
              if (_p3 === 'content') {
                sb.sb_insertInner(oChis[_p3], props[_p3]);
              } else {
                sb.sb_addProperty(oChis[_p3], _p3, props[_p3]);
              }
            }
          }

          if (ofunks.meta.emit.hasOwnProperty('children') && nfunks.meta.emit.hasOwnProperty('children')) {
            var _oChis2 = ofunks.meta.emit.children;
            var nChis = ofunks.meta.emit.children;
            var oDomChis = odChis[p].children;

            if (_oChis2.length > 0 && nChis.length > 0) {
              this.chidiff(_oChis2, nChis, oDomChis);
            }
          } //   break;

        } else {
          if (ofunks.meta.emit.hasOwnProperty('presents') && nfunks.meta.emit.hasOwnProperty('presents')) {
            var _opres2 = Object.entries(ofunks.meta.emit.presents);

            var _npres2 = Object.entries(nfunks.meta.emit.presents);

            var _od = odChis[p];
            this.pdiff(_opres2, _npres2, _od);
          } else if (nfunks.meta.emit.hasOwnProperty('presents')) {
            ofunks.meta.emit.presents = nfunks.meta.emit.presents;
            var _props = ofunks.meta.emit.presents;

            for (var _p4 in _props) {
              if (_p4 === 'content') {
                sb.sb_insertInner(oChis[_p4], _props[_p4]);
              } else {
                sb.sb_addProperty(oChis[_p4], _p4, _props[_p4]);
              }
            }
          }

          if (ofunks.meta.emit.hasOwnProperty('children') && nfunks.meta.emit.hasOwnProperty('children')) {
            var _oChis3 = ofunks.meta.emit.children;
            var _nChis = ofunks.meta.emit.children;
            var _oDomChis2 = odChis[p].children;

            if (_oChis3.length > 0 && _nChis.length > 0) {
              this.chidiff(_oChis3, _nChis, _oDomChis2);
            }
          } else {
            ofunks.meta.emit.data.data[p] = nfunks.meta.emit.data.data[p];
            odChis[p].innerHTML = ofunks.meta.emit.data.data[p]; // oDom.children[p].remove()
            // nfunks.meta.emit.data.data.splice(p,1)
            // ofunks.meta.emit.data.data.splice(p,1)
          }
        }
      }
    } else if (ofunks.meta.emit.data.data.length > nfunks.meta.emit.data.data.length) {
      console.log('Ofunks is greater than nfunks');
      var odata = ofunks.meta.emit.data.data;
      var ndata = nfunks.meta.emit.data.data;
      var _odChis = oDom.children;

      for (var oi = 0; oi < odata.length; oi++) {
        for (var ni = 0; ni < ndata.length; ni++) {
          if (odata[oi].toLowerCase().trim() === ndata[ni].toLowerCase().trim()) {
            break;
          } else if (ni === ndata.length - 1) {
            odata.splice(oi, 1);
            console.log('Ofunks UPDATED data');
            console.log(ofunks.meta.emit.data.data);

            _odChis[oi].remove();

            break;
          }
        }
      } // console.log('The data is not the same')
      // let oLen = ofunks.meta.emit.data.length
      // let oList = ofunks.meta.emit.data
      // let nLen =  nfunks.meta.emit.data.length
      // let nList = nfunks.meta.emit.data
      // for(let i = 0; i < nLen; i++){
      //    let index = oList.indexOf(nList[i])
      //    if(index > -1){
      // 	  oList.splice(index,1)
      // 	  oDom.children[i].remove()
      // 	  break
      //    }
      // }
      // // domChs[c].children[ofunks.meta.emit.data.length - 1].remove()
      // ofunks.meta.emit.data.splice(oLen - 1)

    } else if (ofunks.meta.emit.data.data.length < nfunks.meta.emit.data.data.length) {
      console.log('Ofunks is less than nfunks');
      var _odata = ofunks.meta.emit.data.data;
      var _ndata = nfunks.meta.emit.data.data;
      var _odChis2 = oDom.children;

      if (ofunks.meta.emit.data.data.length === 0) {
        console.log('Ofunks is equal to zero');
        var nE = nfunks.meta.emit;

        if (nE.hasOwnProperty('presents') && nE.hasOwnProperty('children')) {
          console.log('The style string');
          var presents = nE.presents;
          var children = nE.children;
          console.log(presents);
          console.log(children);
          this.emit({
            type: nE.type,
            data: {
              parent: oDom,
              data: nE.data.data,
              presents: presents,
              children: children
            }
          });
        } else if (nE.hasOwnProperty('presents')) {
          console.log('The style string');
          var _presents3 = nE.presents;
          console.log(_presents3);
          this.emit({
            type: nE.type,
            data: {
              parent: oDom,
              data: nE.data.data,
              presents: _presents3
            }
          });
        } else if (nE.hasOwnProperty('children')) {
          console.log('The children string');
          var _children3 = nE.children;
          console.log(_children3);
          this.emit({
            type: nE.type,
            data: {
              parent: oDom,
              data: nE.data.data,
              children: _children3
            }
          });
        } else {
          this.emit({
            type: nE.type,
            data: {
              parent: oDom,
              data: nE.data.data
            }
          });
        } // this.emit({type: nfunks.meta.emit.type,data: {parent: domChs[c],data: nfunks.meta.emit.data.data ,style: nfunks.meta.emit.style}})


        ofunks.meta.emit.data.data.push(nfunks.meta.emit.data.data);
      } else {
        console.log('Ofunks is greater than zero');

        for (var _ni = 0; _ni < _ndata.length; _ni++) {
          for (var _oi = 0; _oi < _odata.length; _oi++) {
            if (_ndata[_ni].toLowerCase().trim() === _odata[_oi].toLowerCase().trim()) {
              // if(odata[oi].toLowerCase().trim() === ndata[ni].toLowerCase().trim()){
              //    // br = true
              //    break;
              // }else{
              //    odata[oi] = ndata[ni]
              //    if(odata[oi].toLowerCase().trim() === 'content'){
              //       oDom.innerHTML = odata[oi]
              //    }else{
              //       for(let a= 0; a < odomProps.length; a++){
              //          if(odomProps[a].nodeName.toLowerCase().trim() === odata[oi]){
              //             odomProps[a].nodeValue = odata[oi]
              //             break
              //          }
              //       }
              //    }
              //    // br = true
              //    break;
              // }
              break;
            } else if (_oi === _odata.length - 1) {
              if (nfunks.meta.emit.hasOwnProperty('presents') && nfunks.meta.emit.hasOwnProperty('children')) {
                console.log('The style string');
                var _presents4 = nfunks.meta.emit.presents;
                var _children4 = nfunks.meta.emit.children;
                console.log(_presents4);
                console.log(_children4);
                this.emit({
                  type: nfunks.meta.emit.type,
                  data: {
                    parent: oDom,
                    data: [nfunks.meta.emit.data.data[_ni]],
                    presents: _presents4,
                    children: _children4
                  }
                });

                _odata.push(_ndata[_ni]);

                console.log('Ofunks new data');
                console.log(ofunks.meta.emit.data.data);
                break;
              } else if (nfunks.meta.emit.hasOwnProperty('presents')) {
                console.log('The style string');
                var _presents5 = nfunks.meta.emit.presents;
                console.log(_presents5);
                this.emit({
                  type: nfunks.meta.emit.type,
                  data: {
                    parent: oDom,
                    data: [nfunks.meta.emit.data.data[_ni]],
                    presents: _presents5
                  }
                });
              } else if (nfunks.meta.emit.hasOwnProperty('children')) {
                console.log('The children string');
                var _children5 = nfunks.meta.emit.children;
                console.log(_children5);
                this.emit({
                  type: nfunks.meta.emit,
                  data: {
                    parent: oDom,
                    data: [nfunks.meta.emit.data.data[_ni]],
                    children: _children5
                  }
                });
              } else {
                this.emit({
                  type: nfunks.meta.emit.type,
                  data: {
                    parent: oDom,
                    data: [nfunks.meta.emit.data.data[_ni]]
                  }
                });
              }
            }
          }
        }
      }
    }
  };

  var funksEmit = function funksEmit(ofunks, nfunks, oDom) {
    if (ofunks.meta.emit.data.data.length === nfunks.meta.emit.data.data.length) {
      this.startDiff({
        oVdom: ofunks.meta.emit.data.data,
        oDom: oDom,
        nVdom: nfunks.meta.emit.data.data
      });
    } else if (ofunks.meta.emit.data.data.length > nfunks.meta.emit.data.data.length) {
      var odata = ofunks.meta.emit.data.data;
      var ndata = nfunks.meta.emit.data.data;
      var pbreak = false;

      for (var od = 0; od < odata.length; od++) {
        if (odata[od].hasOwnProperty('uqn')) {
          for (var nd = 0; nd < ndata.length; nd++) {
            if (ndata[nd].hasOwnProperty('uqn')) {
              if (odata[od].uqn.toLowerCase().trim() === ndata[nd].uqn.toLowerCase().trim()) {
                self.startDiff({
                  oVdom: odata[od],
                  oDom: oDom.children[od],
                  nVdom: ndata[nd]
                });
                break;
              } else if (nd === odata.length - 1) {
                odata.splice(odata[od], 1);
              }
            } else {
              console.log('Virutal dom could not be updated: uqn property missing');
              pbreak = true;
              break;
            }
          }
        } else {
          console.log('Virutal dom could not be updated: uqn property missing');
          break;
        }

        if (pbreak) {
          break;
        }
      }
    } else if (ofunks.meta.emit.data.data.length < nfunks.meta.emit.data.data.length) {
      var _odata2 = ofunks.meta.emit.data.data;
      var _ndata2 = nfunks.meta.emit.data.data;
      var _pbreak2 = false;

      for (var _nd = 0; _nd < _ndata2.length; _nd++) {
        if (_ndata2[_nd].hasOwnProperty('uqn')) {
          for (var _od2 = 0; _od2 < _odata2.length; _od2++) {
            if (_odata2[_od2].hasOwnProperty('uqn')) {
              if (_ndata2[_nd].uqn.toLowerCase().trim() === _odata2[_od2].uqn.toLowerCase().trim()) {
                self.startDiff({
                  oVdom: _odata2[_od2],
                  oDom: oDom.children[_nd],
                  nVdom: _ndata2[_nd]
                });
              } else if (_od2 === _odata2.length - 1) {// odata.splice(odata[od],1)
              }
            } else {
              console.log('Virutal dom could not be updated: uqn property missing');
              _pbreak2 = true;
              break;
            }
          }
        } else {
          console.log('Virutal dom could not be updated: uqn property missing');
          break;
        }

        if (_pbreak2) {
          break;
        }
      }
    }
  };

  var saveVD = function saveVD(data) {
    var sb = this.sb;
    console.log('The Virtual Dom To Save');
    console.log(data); // console.log(sb)
    // console.log(sb.view)
    // console.log('The Dom Child View')
    // console.log(data)
    // sb.sb_addChild(sb.view,data)
    // this.emit({type:'stop-preloader',data:''})
    //  this.createDomTree(data)
  };

  var saveDOM = function saveDOM(data) {
    var sb = this.sb;
    console.log('The Dom To Save');
    console.log(data);
    console.log('The real dom');
    console.log(this.realDom);
    console.log('The virtual dom');
    console.log(this.virtualDom);

    if (this.realDom.length > 0) {
      for (var d = 0; d < this.realDom.length; d++) {
        if (this.realDom[d].view === data.domId.view) {
          if (this.realDom[d].hasOwnProperty('children')) {
            var odchildren = this.realDom[d].children;
            var ndchild = data.domId.children[0];

            for (var odc = 0; odc < odchildren.length; odc++) {
              if (odchildren[odc].hasOwnProperty('id') && ndchild.hasOwnProperty('id')) {
                console.log('VD: Dom saving inner: same id ');
                this.realDom[d].children.push(data.domId.children[0]);
                break;
              } else if (odchildren[odc].hasOwnProperty('pid') && ndchild.hasOwnProperty('pid')) {
                if (odchildren[odc].pid === ndchild.pid) {
                  console.log('VD: Dom saving innermost: same pid ');
                  this.realDom[d].children[odc].children.push(data.domId.children[0].children[0]);
                  break;
                }
              }
            }

            break;
          } else {
            this.realDom.push(data.domId);
          }

          break;
        } else if (d === this.realDom.length - 1) {
          this.realDom.push(data.domId);
          break;
        }
      }
    } else {
      this.realDom.push(data.domId);
    }

    if (this.hasOwnProperty("routeComponents") && this.routeComponents.length > 0) {
      console.log('THE VALUE OF ROUTESCOMPONENTS');
      console.log(this.routeComponents);

      for (var rc = 0; rc < this.routeComponents.length; rc++) {
        if (this.routeComponents[rc] === data.domId.view) {
          this.emit({
            type: 'add-dom-component',
            data: {
              data: data.root,
              route: true,
              view: data.domId.view
            }
          });
          break;
        } else if (rc === this.routeComponents.length - 1) {
          this.emit({
            type: 'add-dom-component',
            data: {
              data: data.root,
              view: data.domId.view
            }
          });
        }
      }
    } else {
      this.emit({
        type: 'add-dom-component',
        data: {
          data: data.root,
          view: data.domId.view
        }
      });
    } // console.log(sb)
    // console.log(sb.view)
    // console.log('The Dom Child View')
    // console.log(data)
    // sb.sb_addChild(sb.view,data)
    // this.emit({type:'stop-preloader',data:''})
    //  this.createDomTree(data)

  };

  var createDomTree = function createDomTree(data) {
    var sb = this.sb;
    console.log('The Current VirtualDom');
    console.log(data);
    this.emit({
      type: 'create-dom',
      data: data
    });
  };

  var handleAddVirtualDom = function handleAddVirtualDom(data) {
    var sb = this.sb;
    console.log('The Virtual Dom');
    console.log(data); // console.log(sb)
    // console.log(sb.view)
    // console.log('The Dom Child View')
    // console.log(data)
    // sb.sb_addChild(sb.view,data)
    // this.emit({type:'stop-preloader',data:''})

    this.addVirtualDom(data);
  };

  var addVirtualDom = function addVirtualDom(data) {
    var self = this; //this.nodeRandomId()
    // 
    //   this.emit({type:'add-dom-component',data:data.data})

    console.log('The data passed to the addVirtualDom');
    console.log(data); //   console.log(data.data.children[0].attributes[0].value)

    if (this.virtualDom.length > 0) {
      console.log('Nothing');
    } else {
      console.log('Trunk children');
      console.log(data.data.trunk.childNodes);
      var trunk = data.data.trunk;
      this.virtualDom.push({
        trunk: {
          id: data.id,
          child: {
            id: data.id,
            children: [{
              id: data.data.branch,
              name: trunk.childNodes[0].id,
              children: self.createVdChildren(trunk.childNodes[0])
            }]
          }
        }
      });
    }

    console.log('The virtual dom');
    console.log(this.virtualDom);
  };

  var handleAddDom = function handleAddDom(data) {
    var sb = this.sb;
    console.log('The Dom Data');
    console.log(data); // console.log(sb)
    // console.log(sb.view)
    // console.log('The Dom Child View')
    // console.log(data)
    // sb.sb_addChild(sb.view,data)
    // this.emit({type:'stop-preloader',data:''})

    this.addDomToVd(data);
  };

  var addDom = function addDom(data) {
    var self = this; //this.nodeRandomId()
    // 
    //   this.emit({type:'add-dom-component',data:data.data})

    console.log('The data passed to the addDomTovd');
    console.log(data); //   console.log(data.data.children[0].attributes[0].value)

    if (this.virtualDom.length > 0) {
      console.log('Nothing');
    } else {
      console.log('Trunk children');
      console.log(data.data.trunk.childNodes);
      var trunk = data.data.trunk;
      this.virtualDom.push({
        trunk: {
          id: data.id,
          child: {
            id: data.id,
            children: [{
              id: data.data.branch,
              name: trunk.childNodes[0].id,
              children: self.createVdChildren(trunk.childNodes[0])
            }]
          }
        }
      });
    }

    console.log('The virtual dom');
    console.log(this.virtualDom);
  };

  var createVdChildren = function createVdChildren(root, children) {
    var sb = this.sb;
    var descends = []; // Array.prototype.map.call(trunk.childNodes[0].childNodes,(c)=>{
    //    console.log('THE VALUE OF IN TRUNK CHILDREN')
    //    console.log(c)
    //    if(Object.keys(c.childNodes).length > 0){
    //    }
    //    // return {
    //    // }
    // })

    for (var c = 0; c < children.length; c++) {
      var e = children[c]; // console.log('The current child props property')
      // console.log(e.props)

      var el = this.create(e.element, e.props.presentational, e.props.functional);

      if (e.children) {
        console.log('The current element has children');
        console.log(e.children);
        sb.sb_addChild(root, el);
        this.createChildren(el, e.children);
      } else {
        console.log('The last innermost element has no children');
        sb.sb_addChild(root, el);
      }

      descends.push(el);
    }

    return descends;
  };

  var nodeRandomId = function nodeRandomId(node) {
    console.log('Random unique Ids');
    console.log("The random list number");
    var sb = _this.sb;
    var randomid = "node-".concat(Math.floor(0 + (100000 - 0) * Math.random()).toString(), "-k");
    sb.sb_addProperty(node, 'data-id', randomid);
    return node;
  };

  var uniqueids = function uniqueids(node) {};
  /***/

},
/* 10 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";
  /* harmony import */

  var __WEBPACK_IMPORTED_MODULE_0__dom__ = __webpack_require__(11);
  /* harmony default export */


  __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__dom__["a"
  /* default */
  ];
  /***/
},
/* 11 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";
  /* harmony import */

  var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(12);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Dom = function Dom(sandbox) {
    _classCallCheck(this, Dom);

    this.sb = sandbox;
    this.routesComponent = {};
    this.currentComponent = null;
    this.currentView = '';
    this.hydrate = false; // methods

    this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["f"
    /* init */
    ];
    this.listens = __WEBPACK_IMPORTED_MODULE_0__methods__["g"
    /* listens */
    ];
    this.emit = __WEBPACK_IMPORTED_MODULE_0__methods__["b"
    /* emit */
    ];
    this.handleAddDomComponent = __WEBPACK_IMPORTED_MODULE_0__methods__["c"
    /* handleAddDomComponent */
    ];
    this.handleComponentRender = __WEBPACK_IMPORTED_MODULE_0__methods__["d"
    /* handleComponentRender */
    ];
    this.handleCreateRoutesParent = __WEBPACK_IMPORTED_MODULE_0__methods__["e"
    /* handleCreateRoutesParent */
    ];
    this.createRoutesParent = __WEBPACK_IMPORTED_MODULE_0__methods__["a"
    /* createRoutesParent */
    ];
  };
  /* harmony default export */


  __webpack_exports__["a"] = Dom;
  /***/
},
/* 12 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";
  /* harmony export (binding) */

  __webpack_require__.d(__webpack_exports__, "f", function () {
    return init;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "g", function () {
    return listens;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "b", function () {
    return emit;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "c", function () {
    return handleAddDomComponent;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "e", function () {
    return handleCreateRoutesParent;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "a", function () {
    return createRoutesParent;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "d", function () {
    return handleComponentRender;
  });

  var init = function init() {
    this.listens(); //  this.emit({type:'get-component-name',data: ''})
  };

  var listens = function listens() {
    var sb = this.sb; // var name = 'render-component-'+name

    sb.sb_notifyListen({
      'add-dom-component': this.handleAddDomComponent.bind(this),
      'create-routes-parent': this.handleCreateRoutesParent.bind(this)
    }, sb.moduleMeta.moduleId, sb.moduleMeta.modInstId);
  };

  var emit = function emit(eNotifs) {
    var sb = this.sb;
    sb.sb_notifyEvent({
      type: eNotifs.type,
      data: eNotifs.data
    });
  };

  var handleAddDomComponent = function handleAddDomComponent(data) {
    var sb = this.sb;
    var self = this;
    console.log('The Dom Component data');
    console.log(data); // console.log(sb.view)

    if (self.hydrate) {
      if (data.hasOwnProperty("route")) {
        if (this.currentComponent) {
          console.log('The CURRRENT COMPONENT EXISTS');
          this.emit({
            type: "run-lifecycle-method",
            data: {
              component: self.currentView,
              method: "AboutToUnMount"
            }
          });
          this.emit({
            type: "run-lifecycle-method",
            data: {
              component: data.view,
              method: "AboutToMount"
            }
          });
          this.currentComponent.replaceWith(data.data);
          this.currentComponent = data.data;
          this.emit({
            type: "domiks-clean-up",
            data: self.currentView
          });
          this.currentView = data.view;
          this.emit({
            type: "run-lifecycle-method",
            data: {
              component: data.view,
              method: "UnMounted"
            }
          });
          this.emit({
            type: "run-lifecycle-method",
            data: {
              component: data.view,
              method: "Mounted"
            }
          });
        } else {
          this.emit({
            type: "run-lifecycle-method",
            data: {
              component: data.view,
              method: "AboutToMount"
            }
          });
          this.currentComponent = data.data;
          this.currentView = data.view;
          sb.sb_addChild(this.routesComponent, data.data);
          this.emit({
            type: "run-lifecycle-method",
            data: {
              component: data.view,
              method: "Mounted"
            }
          });
        }
      } else {
        //  if(data.view === "routes"){
        //  	  this.routesComponent = data.data
        //  	  this.emit({type: "run-lifecycle-method",data: {component: data.view,method: "AboutToMount"}})
        //  	  sb.sb_addChild(sb.view,data.data)
        //  	  this.emit({type: "run-lifecycle-method",data:{component: data.view,method: "Mounted"}})
        //  }else{
        console.log('The Dom Child View');
        console.log(data);
        this.emit({
          type: "run-lifecycle-method",
          data: {
            component: data.view,
            method: "AboutToMount"
          }
        });
        sb.sb_addChild(sb.view, data.data);
        this.emit({
          type: "run-lifecycle-method",
          data: {
            component: data.view,
            method: "Mounted"
          }
        }); //  }
      }
    } // this.emit({type:'stop-preloader',data:''})

  };

  var handleCreateRoutesParent = function handleCreateRoutesParent(data) {
    this.createRoutesParent(data);
  };

  var createRoutesParent = function createRoutesParent(data) {
    var sb = this.sb;
    this.routesComponent = sb.sb_createElement('main');
    sb.sb_addChild(sb.view, this.routesComponent);
    this.emit({
      type: 'default-route-component',
      data: ''
    });
  };

  var handleComponentRender = function handleComponentRender(evt) {
    this.evt.data.name();
  };
  /***/

},
/* 13 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";
  /* harmony import */

  var __WEBPACK_IMPORTED_MODULE_0__aka__ = __webpack_require__(14);
  /* harmony default export */


  __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__aka__["a"
  /* default */
  ];
  /***/
},
/* 14 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";
  /* harmony import */

  var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(15);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Aka = function Aka(sandbox) {
    _classCallCheck(this, Aka);

    this.sb = sandbox; // methods

    this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["p"
    /* init */
    ];
    this.listens = __WEBPACK_IMPORTED_MODULE_0__methods__["q"
    /* listens */
    ];
    this.emit = __WEBPACK_IMPORTED_MODULE_0__methods__["l"
    /* emit */
    ];
    this.handleCreateDomTree = __WEBPACK_IMPORTED_MODULE_0__methods__["o"
    /* handleCreateDomTree */
    ];
    this.createDomTree = __WEBPACK_IMPORTED_MODULE_0__methods__["j"
    /* createDomTree */
    ];
    this.create = __WEBPACK_IMPORTED_MODULE_0__methods__["i"
    /* create */
    ];
    this.children = __WEBPACK_IMPORTED_MODULE_0__methods__["h"
    /* children */
    ];
    this.addChildren = __WEBPACK_IMPORTED_MODULE_0__methods__["a"
    /* addChildren */
    ];
    this.addProps = __WEBPACK_IMPORTED_MODULE_0__methods__["c"
    /* addProps */
    ];
    this.addOps = __WEBPACK_IMPORTED_MODULE_0__methods__["b"
    /* addOps */
    ];
    this.domTreeCreated = __WEBPACK_IMPORTED_MODULE_0__methods__["k"
    /* domTreeCreated */
    ];
    this.beginBuild = __WEBPACK_IMPORTED_MODULE_0__methods__["d"
    /* beginBuild */
    ];
    this.checkProps = __WEBPACK_IMPORTED_MODULE_0__methods__["g"
    /* checkProps */
    ];
    this.checkPres = __WEBPACK_IMPORTED_MODULE_0__methods__["f"
    /* checkPres */
    ];
    this.checkFunks = __WEBPACK_IMPORTED_MODULE_0__methods__["e"
    /* checkFunks */
    ];
    this.emitiks = __WEBPACK_IMPORTED_MODULE_0__methods__["m"
    /* emitiks */
    ];
    this.eventiks = __WEBPACK_IMPORTED_MODULE_0__methods__["n"
    /* eventiks */
    ];
  };
  /* harmony default export */


  __webpack_exports__["a"] = Aka;
  /***/
},
/* 15 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";
  /* harmony export (binding) */

  __webpack_require__.d(__webpack_exports__, "p", function () {
    return init;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "q", function () {
    return listens;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "l", function () {
    return emit;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "o", function () {
    return handleCreateDomTree;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "j", function () {
    return createDomTree;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "d", function () {
    return beginBuild;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "i", function () {
    return create;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "h", function () {
    return children;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "a", function () {
    return addChildren;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "g", function () {
    return checkProps;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "f", function () {
    return checkPres;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "e", function () {
    return checkFunks;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "c", function () {
    return addProps;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "b", function () {
    return addOps;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "m", function () {
    return emitiks;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "n", function () {
    return eventiks;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "k", function () {
    return domTreeCreated;
  });

  var init = function init() {
    console.log('Module: Aka, has been initialised');
    this.listens();
  };

  var listens = function listens() {
    var sb = this.sb; // console.log('AKA LISTENS TO THE CREATE DOM TREE EVENT')

    sb.sb_notifyListen({
      'create-dom': this.handleCreateDomTree.bind(this)
    }, sb.moduleMeta.moduleId, sb.moduleMeta.modInstId);
  };

  var emit = function emit(eNotifs) {
    var sb = this.sb;
    console.log('Module: Aka emits event: ' + eNotifs.type);
    console.log('Event data: ' + eNotifs.data);
    console.log(eNotifs);
    sb.sb_notifyEvent({
      type: eNotifs.type,
      data: eNotifs.data
    });
  };

  var handleCreateDomTree = function handleCreateDomTree(data) {
    var sb = this.sb; // console.log('The Create Dom TREE EVENT IS CAUGHT')

    this.createDomTree(data);
  };

  var createDomTree = function createDomTree(data) {
    //   var dom = null
    var self = this;
    var sb = this.sb;
    console.log('Data custom parent');
    console.log(data);

    if (!data.hasOwnProperty('vd')) {
      console.log('EITHER TRUNK OR VD IS NOT DEFINED');
      throw new Error('');
    } else {
      var root = data.vd.root;
      var vd = data.vd.vd;
      var dom = null;

      switch (vd.hasOwnProperty('level')) {
        case true:
          {
            console.log('level');
            dom = self.beginBuild(vd.vd.vd);
          }
          break;

        default:
          {
            dom = self.beginBuild(vd);
          }
      }

      sb.sb_addChild(root, dom);

      if (data.hasOwnProperty('enviro')) {
        this.emit({
          type: 'start-server',
          data: {
            html: root
          }
        });
      } else {
        if (data.vd.hasOwnProperty('compID')) {
          if (data.vd.vd.hasOwnProperty('level')) {
            if (data.vd.vd.level === "deep") {
              this.domTreeCreated({
                root: root,
                domId: {
                  view: data.vd.compID,
                  children: [{
                    pid: data.vd.vd.compID,
                    children: [{
                      id: data.vd.vd.vd.id,
                      dom: dom
                    }]
                  }]
                }
              });
            } else {
              this.domTreeCreated({
                root: root,
                domId: {
                  view: data.vd.compID,
                  children: [{
                    id: data.vd.vd.vd.id,
                    dom: dom
                  }]
                }
              });
            }
          } else {
            this.domTreeCreated({
              root: root,
              domId: {
                view: data.vd.compID,
                dom: dom
              }
            });
          }
        }
      } // const rootName = vd.element
      // let root = this.create(rootName,vd.vd.props.presentational,vd.vd.props.functional)
      // const children = this.createChildren(root,vd.vd.children)
      // root = this.addChildren(root,children)

    } // console.log('The vd ')
    // console.log(vd)
    // var branch = data[rootName].name
    // var custom = `data-${trunk.id.toLowerCase()}`
    // var dataChildCustom = `${dataParentCustom}-${branch.toLowerCase()}`
    // console.log('Data custom parent')
    // console.log(`${dataParentCustom}`)
    // console.log('Data branch thing')
    // console.log(`${dataChildCustom}`)
    // console.log(branch)
    //   console.log(rootName)
    //   var root = this.addChildren(root,childr)

  };

  var beginBuild = function beginBuild(vd) {
    // console.log('Create')
    // console.log(props)
    var self = this;
    var sb = this.sb;
    var dom = null;

    if (self.checkProps(vd)) {
      if (self.checkPres(vd.props) && self.checkFunks(vd.props)) {
        dom = self.create(vd, vd.props.presentational, vd.props.functional);
        self.children(vd, dom);
      } else if (self.checkPres(vd.props)) {
        dom = self.create(vd, vd.props.presentational);
        self.children(vd, dom);
      } else if (self.checkFunks(vd.props)) {
        dom = self.create(vd, null, vd.props.functional);
        self.children(vd, dom);
      } else {
        dom = self.create(vd);
        self.children(vd, dom);
      }
    } else {
      dom = self.create(vd);
    }

    return dom;
  };

  var create = function create(vd) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var ops = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null; //  console.log('Create')
    //  console.log(vd)

    var self = this;
    var sb = this.sb;
    var el = sb.sb_createElement(vd.element);

    if (props && ops) {
      el = this.addProps(el, props);
      el = this.addOps(el, ops);
      self.children(vd, el);
    } else if (props) {
      el = this.addProps(el, props);
    } else if (ops) {
      el = this.addOps(el, ops);
    } else {
      el = el;
    } //  var el = this.addProps(el,props.presentational)


    return el;
  };

  var children = function children(vd, dom) {
    var self = this;
    var sb = this.sb;

    if (vd.hasOwnProperty('children')) {
      var _children = vd.children;

      for (var c = 0; c < _children.length; c++) {
        var e = _children[c]; // console.log('The current child props property')
        // console.log(e.props)

        var el = self.beginBuild(e);
        sb.sb_addChild(dom, el);
      }
    }
  };

  var addChildren = function addChildren(parent, children) {
    var sb = this.sb;

    for (var c = 0; c < children.length; ++c) {
      sb.sb_addChild(parent, children[c]);
    }

    return parent;
  };

  var checkProps = function checkProps(vd) {
    if (vd.hasOwnProperty("props")) {
      if (vd.props instanceof Object && vd.props) {
        if (Object.keys(vd.props).length > 0) {
          return true;
        } else {
          console.log('Note: Element properties cannot be implement because props is empty');
          return false;
        }
      } else {
        console.log('Note: Element properties cannot be implement because props is empty');
        return false;
      }
    } else {
      return false;
    }
  };

  var checkPres = function checkPres(props) {
    if (props.hasOwnProperty("presentational")) {
      if (props.presentational instanceof Object && props.presentational) {
        if (Object.keys(props.presentational).length > 0) {
          return true;
        } else {
          console.log('Note: Presentational property defined, but empty');
          return false;
        }
      } else {
        console.log('Note: Presentational property defined, but empty');
        return false;
      }
    } else {
      return false;
    }
  };

  var checkFunks = function checkFunks(props) {
    if (props.hasOwnProperty("functional")) {
      if (props.functional instanceof Object && props.functional) {
        if (Object.keys(props.functional).length > 0) {
          if (props.functional.hasOwnProperty('meta') && props.functional.meta instanceof Object && props.functional.meta) {
            if (props.functional.meta.hasOwnProperty('emit') && props.functional.meta.emit instanceof Object && props.functional.meta.emit) {
              if (props.functional.meta.emit.hasOwnProperty('type') && props.functional.meta.emit.hasOwnProperty('data')) {
                if (typeof props.functional.meta.emit.type === 'string' && props.functional.meta.emit.data instanceof Object) {
                  if (props.functional.meta.emit.data.hasOwnProperty('type') && typeof props.functional.meta.emit.data.type === 'string') {
                    if (props.functional.meta.emit.data.hasOwnProperty('data') && props.functional.meta.emit.data.data instanceof Object && props.functional.meta.emit.data.data) {
                      return true;
                    } else {
                      console.log('functional.meta.emit.data.data must defined and be a string');
                      return false;
                    }
                  } else {
                    console.log('Aka: functional.meta.emit.data.type must defined and be a string');
                    return false;
                  }
                } else {
                  console.log('Aka: Functional.meta.emit.type or functional.meta.emit.data is not in the required format');
                  return false;
                }
              } else {
                console.log('Aka: New virtual dom does not contain one of ther required meta object properties');
                return false;
              }
            } else {
              console.log('Aka: functional property meta.emit is either undefined,null, or empty');
              return false;
            }
          } else if (props.functional.hasOwnProperty("event") && props.functional.event instanceof Object && props.functional.event) {
            if (Object.keys(props.functional.event).length > 0) {
              return true;
            } else {
              console.log('Aka: Event property is empty');
              return false;
            }
          } else {
            console.log('Aka: functional property should contain either one of the required properties');
            return false;
          }
        } else {
          console.log('Note: functional property defined, but empty');
          return false;
        }
      } else {
        console.log('Note: functional property defined, but empty');
        return false;
      }
    } else {
      return false;
    }
  };

  var addProps = function addProps(el, props) {
    var sb = this.sb; // console.log('ADD PROPS')
    // console.log(props)
    // console.log(el)

    for (var p in props) {
      if (p === 'content') {
        sb.sb_insertInner(el, props[p]);
      } else {
        sb.sb_addProperty(el, p, props[p]);
      }
    }

    return el;
  };

  var addOps = function addOps(el, ops) {
    var self = this; // console.log('ADD OPS')
    // console.log(ops)
    // console.log(el)

    if (ops.hasOwnProperty('meta') && ops.hasOwnProperty('event')) {
      // console.log('THE CURRENT ELEMENT CONTAINS THE EMIT FUNCTIONALITY FUNCTIONALITY')
      self.emitiks(ops.meta, el);
      self.eventiks(ops.event, el);
    } else if (ops.hasOwnProperty('meta')) {
      self.emitiks(ops.meta, el);
    } else if (ops.hasOwnProperty('event')) {
      self.eventiks(ops.event, el);
    } // for(let p in ops.meta){
    // 	console.log('THE CURRENT ELEMENT CONTAINS THE EMIT FUNCTIONALITY FUNCTIONALITY')
    // 	if(p === 'emit'){
    // 		// console.log('The data of emit property')
    // 		// console.log(ops.meta[p])
    // 		console.log('THE CURRENT ELEMENT CONTAINS THE EMIT FUNCTIONALITY FUNCTIONALITY')
    // 		if(ops.meta[p].hasOwnProperty('presents') && ops.meta[p].hasOwnProperty('children')){
    // 			console.log('The style string')
    // 			let presents = ops.meta[p].presents
    // 			let children = ops.meta[p].children
    // 			console.log(presents)
    // 			console.log(children)
    // 			this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data.data,presents: presents,children: children}})
    // 		}else if(ops.meta[p].hasOwnProperty('presents') ){
    // 			console.log('The style string')
    // 			let presents = ops.meta[p].presents
    // 			console.log(presents)
    // 			this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data.data,presents: presents}})
    // 		}else if(ops.meta[p].hasOwnProperty('children')){
    // 			console.log('The children string')
    // 			let children = ops.meta[p].children
    // 			console.log(children)
    // 			this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data.data,children: children}})
    // 		}else{
    // 			this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data.data}})
    // 		}
    // 	}else if(p === 'event'){
    // 		for(let p in ops.event){
    // 			//    console.log('The data of event property')
    // 			//    console.log(ops.event[p])
    // 				 sb.sb_addEvent(el,ops.event[p].type,ops.event[p].callback)
    // 				 // this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data}})
    // 		}
    // 	}
    // }


    return el;
  };

  var emitiks = function emitiks(meta, el) {
    if (meta.hasOwnProperty('emit')) {
      // console.log('The data of emit property')
      // console.log(ops.meta[p])
      console.log('THE CURRENT ELEMENT CONTAINS THE EMIT FUNCTIONALITY FUNCTIONALITY');

      if (meta.emit.hasOwnProperty('presents') && meta.emit.hasOwnProperty('children')) {
        console.log('The style string');
        var presents = meta.emit.presents;
        var _children2 = meta.emit.children;
        console.log(presents);
        console.log(_children2);
        this.emit({
          type: meta.emit.type,
          data: {
            parent: el,
            data: meta.emit.data.data,
            presents: presents,
            children: _children2
          }
        });
      } else if (meta.emit.hasOwnProperty('presents')) {
        console.log('The style string');
        var _presents = meta.emit.presents;
        console.log(_presents);
        this.emit({
          type: meta.emit.type,
          data: {
            parent: el,
            data: meta.emit.data.data,
            presents: _presents
          }
        });
      } else if (meta.emit.hasOwnProperty('children')) {
        console.log('The children string');
        var _children3 = meta.emit.children;
        console.log(_children3);
        this.emit({
          type: meta.emit.type,
          data: {
            parent: el,
            data: meta.emit.data.data,
            children: _children3
          }
        });
      } else {
        this.emit({
          type: meta.emit.type,
          data: {
            parent: el,
            data: meta.emit.data.data
          }
        });
      }
    }
  };

  var eventiks = function eventiks(event, el) {
    for (var p in event) {
      //    console.log('The data of event property')
      //    console.log(ops.event[p])
      sb.sb_addEvent(el, event[p].type, event[p].callback); // this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data}})
    }
  };

  var domTreeCreated = function domTreeCreated(dom) {
    this.emit({
      type: 'dom-tree-created',
      data: dom
    });
  };
  /***/

},
/* 16 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";
  /* harmony import */

  var __WEBPACK_IMPORTED_MODULE_0__lifecycle__ = __webpack_require__(17);
  /* harmony default export */


  __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__lifecycle__["a"
  /* default */
  ];
  /***/
},
/* 17 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";
  /* harmony import */

  var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(18);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Lifecycle = function Lifecycle(sandbox) {
    _classCallCheck(this, Lifecycle);

    this.sb = sandbox;
    this.componentsLifeCycles = []; // methods

    this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["d"
    /* init */
    ];
    this.listens = __WEBPACK_IMPORTED_MODULE_0__methods__["f"
    /* listens */
    ];
    this.emit = __WEBPACK_IMPORTED_MODULE_0__methods__["a"
    /* emit */
    ];
    this.handleLifeCycle = __WEBPACK_IMPORTED_MODULE_0__methods__["b"
    /* handleLifeCycle */
    ];
    this.lifecycle = __WEBPACK_IMPORTED_MODULE_0__methods__["e"
    /* lifecycle */
    ];
    this.handleRunLifeCycleMethod = __WEBPACK_IMPORTED_MODULE_0__methods__["c"
    /* handleRunLifeCycleMethod */
    ];
    this.runLifeCycleMethod = __WEBPACK_IMPORTED_MODULE_0__methods__["g"
    /* runLifeCycleMethod */
    ]; // this.startProwl = methods.startProwl
    // this.handlePopState = methods.handlePopState
    // this.addressChanged = methods.addressChanged
  };
  /* harmony default export */


  __webpack_exports__["a"] = Lifecycle;
  /***/
},
/* 18 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";
  /* harmony export (binding) */

  __webpack_require__.d(__webpack_exports__, "d", function () {
    return init;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "f", function () {
    return listens;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "a", function () {
    return emit;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "b", function () {
    return handleLifeCycle;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "e", function () {
    return lifecycle;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "c", function () {
    return handleRunLifeCycleMethod;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "g", function () {
    return runLifeCycleMethod;
  });

  var init = function init() {
    console.log('Module: Lifecycle , has been initialised');
    this.listens(); //  this.emit({type:'get-component-name',data: ''})
  };

  var listens = function listens() {
    var sb = this.sb;
    sb.sb_notifyListen({
      'lifecycle': this.handleLifeCycle.bind(this),
      'run-lifecycle-method': this.handleRunLifeCycleMethod.bind(this)
    }, sb.moduleMeta.moduleId, sb.moduleMeta.modInstId);
  };

  var emit = function emit(eNotifs) {
    var sb = this.sb;
    sb.sb_notifyEvent({
      type: eNotifs.type,
      data: eNotifs.data
    });
  };

  var handleLifeCycle = function handleLifeCycle(data) {
    // var sb = this.sb 
    console.log('The lifecycle handle is invoked');
    this.lifecycle(data);
  };

  var lifecycle = function lifecycle(data) {
    console.log('THE COMPONENT LIFECYCLE DATA');
    console.log(data);
    console.log(this); // this.componentsLifecycles

    this.componentsLifeCycles.push(data);
    console.log('THIS LIFECYCLE');
    console.log(this.componentsLifeCycles);
  };

  var handleRunLifeCycleMethod = function handleRunLifeCycleMethod(data) {
    // var sb = this.sb 
    console.log('The run lifecycle handle is invoked');
    this.runLifeCycleMethod(data);
  };

  var runLifeCycleMethod = function runLifeCycleMethod(data) {
    console.log('THE RunLifecys');
    console.log(data);
    console.log(this.componentsLifeCycles);
    console.log('THIS IN LIFECYCLE');
    console.log(this.componentsLifeCycles);

    for (var cc = 0; cc < this.componentsLifeCycles.length; cc++) {
      if (this.componentsLifeCycles[cc].name === data.component) {
        var cycles = this.componentsLifeCycles[cc].cycles;

        for (var c = 0; c < cycles.length; c++) {
          if (cycles[c].name === data.method) {
            cycles[c][data.method]();
            break;
          }
        }

        break;
      }
    }
  }; // export const startProwl = function(data){
  // 	 const sb = this.sb
  // 	 const self = this
  // 	 console.log('THE HISTORY OBJECT')
  // 	 console.log(window.history)
  // 	 console.log(window.history.state)
  // 	 sb.sb_addEvent(window,'popstate',self.handlePopState.bind(self))
  // }
  // export const handlePopState = function(e){
  // 		console.log('The postate event has occured')
  // 		console.log('The COntent of the url location')
  // 		console.log(window.location)
  // 		console.log(window.location.href)
  // 		console.log(history.state)
  // 		this.addressChanged({url: window.location.href})
  // 	//  window.history.pushState({},'','/about')
  // }
  // export const addressChanged = function(data){
  //    this.emit({type: 'address-changed',data: data })
  // }

  /***/

},
/* 19 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";
  /* harmony export (binding) */

  __webpack_require__.d(__webpack_exports__, "a", function () {
    return Activate;
  });

  var Activate = function Activate(libs) {
    var _this = this; // console.log('The value of the window.object')
    // console.log(window.location)
    // console.log(window.history)
    // console.log(window.document)
    // console.log(window.document.referrer)
    // console.log(window.this.SANA)
    // console.log(this)
    // console.log(window.SUKU)
    // console.log(Object.getOwnPropertyNames(window))


    console.log('ACTIVATE THIS ');
    console.log(this);
    var core = new this.SANA.CORE(this.SANA.SUKU);
    var sandbox = new this.SANA.SANDBOX(core); // console.log('The core before modules')
    // console.log(sandbox.sb_jsToJson(core))

    console.log('The libs');
    console.log(libs); // console.log('The Esm')
    // console.log(this.ESM)

    libs.unshift(this.ESM.Esm);
    libs.forEach(function (lib) {
      for (var moco in lib) {
        // console.log('Inside activate')
        // console.log(moco)
        var moduId = moco.toLowerCase();

        var v = _this.SANA.SUKU.getAllBy_attribute('data-' + moduId); // console.log(`Currently executing module: ${moco}`)


        if (v.length > 0) {
          // console.log('Executing the module with view')
          var attribs = _this.SANA.SUKU.get_element_attributes(v[0]);

          var modInstId = '';

          if (attribs.length > 0) {
            for (var a = 0; a < attribs.length; a++) {
              var attName = attribs[a].name;

              if (attName === 'data-' + moduId) {
                var attValue = attribs[a].value;
                modInstId = attValue;
                break;
              }
            }
          } // End of check attributes length if statement


          moco === 'activator' ? core.createModule(new lib[moco](sandbox.create(moduId, modInstId), core), moduId, modInstId) : core.createModule(new lib[moco](sandbox.create(moduId, modInstId)), moduId, modInstId); // console.log(`Currently starting module: ${moco}`)

          core.startModule(moduId, modInstId); // console.log('Dependicies')
          // console.log(typeof this.SANA.core)
          // // let moduId = mod.name.toLowerCase();
        } else {
          var _modInstId = moduId; // console.log('Executing module without view')

          core.createModule(new lib[moco](sandbox.create(moduId, null)), moduId, _modInstId); // console.log(`Currently starting module: ${moco}`)

          core.startModule(moduId, _modInstId); // console.log('Dependicies')
          // console.log(typeof this.SANA.core)
          // // let moduId = mod.name.toLowerCase();
        }
      }
    });
  };
  /***/

},
/* 20 */

/***/
function (module, exports) {
  module.exports = __webpack_require__(2);
  /***/
}]);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(21);


/* harmony default export */ __webpack_exports__["a"] = ([__WEBPACK_IMPORTED_MODULE_0__modules__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__components__["a" /* default */]]);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_accordion_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_list_index__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_form_index__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_prowler_index__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_router_index__ = __webpack_require__(18);
// import Yimo from './modules/yimo/index'
 // import Aka from './modules/aka/index'

 // import Dom from './modules/dom/index'
// import Vd from './modules/vd/index'



 // import Server from './modules/server/index'
// import Lifecycle from './modules/Lifecycle/index'

/* harmony default export */ __webpack_exports__["a"] = ({
  Accordion: __WEBPACK_IMPORTED_MODULE_0__modules_accordion_index__["a" /* default */],
  List: __WEBPACK_IMPORTED_MODULE_1__modules_list_index__["a" /* default */],
  Form: __WEBPACK_IMPORTED_MODULE_2__modules_form_index__["a" /* default */],
  Prowler: __WEBPACK_IMPORTED_MODULE_3__modules_prowler_index__["a" /* default */],
  Router: __WEBPACK_IMPORTED_MODULE_4__modules_router_index__["a" /* default */]
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordion__ = __webpack_require__(6);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__accordion__["a" /* default */]);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(7);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Accordion = function Accordion(sandbox) {
  _classCallCheck(this, Accordion);

  this.sb = sandbox; // methods

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* init */];
  this.listens = __WEBPACK_IMPORTED_MODULE_0__methods__["j" /* listens */];
  this.emit = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* emit */];
  this.getParent = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* getParent */];
  this.createBar = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* createBar */];
  this.createTitle = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* createTitle */];
  this.createController = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* createController */];
  this.handleCreateAccordion = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* handleCreateAccordion */];
  this.createAccordion = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* createAccordion */];
  this.expand = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* expand */];
};

/* harmony default export */ __webpack_exports__["a"] = (Accordion);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return listens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return emit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return handleCreateAccordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createAccordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return expand; });
var init = function init() {
  console.log('Accordion has been initialised');
  this.listens();
};
var listens = function listens() {
  var sb = this.sb;
  sb.sb_notifyListen({
    'create-accordion': this.handleCreateAccordion.bind(this)
  }, sb.moduleMeta.moduleId, sb.moduleMeta.modInstId);
};
var emit = function emit(eNotifs) {
  var sb = this.sb;
  sb.sb_notifyEvent({
    type: eNotifs.type,
    data: eNotifs.data
  });
};
var getParent = function getParent() {
  var sb = this.sb;
  var parent = sb.sb_createElement('div');
  sb.sb_addProperty(parent, 'class', 'accordion accordion--vt-size-fd-bt accordion--bg-secondary accordion--pos-rel accordion--hr-size-fl-x-bg mg-auto mg-bottom-fd-xx-tn');
  return parent;
};
var createBar = function createBar() {
  var sb = this.sb;
  var bar = sb.sb_createElement('div');
  sb.sb_addProperty(bar, 'class', 'accordion__text');
  return bar;
};
var createTitle = function createTitle(data) {
  var sb = this.sb;
  var title = sb.sb_createElement('p');
  sb.sb_addProperty(title, 'class', 'accordion__text-node pos-abs fg-general-alt font-fd-xx-tn');
  sb.sb_insertInner(title, data);
  return title;
};
var createController = function createController() {
  var sb = this.sb;
  var btn = sb.sb_createElement('button');
  sb.sb_addProperty(btn, 'class', 'accordion__btn--exp-con top-offset-fl-tn right-offset-fl-bt');
  sb.sb_insertInner(btn, '+');
  return btn;
};
var handleCreateAccordion = function handleCreateAccordion(data) {
  // console.log('Create Modal event has occured')
  // console.log(data)
  this.createAccordion(data);
};
var createAccordion = function createAccordion(data) {
  var sb = this.sb;

  if (Object.keys(data).length > 1) {
    for (el in data) {
      var parent = this.getParent();
      var bar = this.createBar();
      var title = this.createTitle(data[el].title);
      var controller = this.createController();
      sb.sb_addChild(parent, bar);
      sb.sb_addChild(parent, title);
      sb.sb_addChild(parent, controller);
      sb.sb_addChild(data[el].parent, parent);
      sb.sb_addChild(data[el].parent, data[el].content);
      console.log('The accordion content');
      console.log(data[el].content);
      sb.sb_addEvent(controller, 'click', this.expand.bind(this, data[el].content, controller));
      this.emit({
        type: 'component-resource-creation-done',
        data: data[el].parent
      });
    }
  } else {
    var parent = this.getParent();
    var bar = this.createBar();
    var title = this.createTitle(data.title);
    var controller = this.createController();
    sb.sb_addChild(parent, bar);
    sb.sb_addChild(parent, title);
    sb.sb_addChild(parent, controller);
    sb.sb_addChild(data.parent, parent);
    sb.sb_addChild(data.parent, data.content);
    sb.sb_addEvent(controller, 'click', this.expand.bind(this, data.content, controller));
    this.emit({
      type: 'component-resource-creation-done',
      data: data.parent
    });
  }
};
var expand = function expand(content, controller) {
  var sb = this.sb;
  console.log('The content element');
  console.log(content);

  if (controller.innerHTML.trim() === '+') {
    controller.innerHTML = '-';
  } else {
    controller.innerHTML = '+';
  }

  var classList = sb.sb_getClasses(content);
  sb.sb_toggleClass(classList, 'd-none');
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list__ = __webpack_require__(9);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__list__["a" /* default */]);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(10);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var List = function List(sandbox) {
  _classCallCheck(this, List);

  this.sb = sandbox; // methods

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["o" /* init */];
  this.listens = __WEBPACK_IMPORTED_MODULE_0__methods__["q" /* listens */];
  this.emit = __WEBPACK_IMPORTED_MODULE_0__methods__["k" /* emit */];
  this.handleCreateList = __WEBPACK_IMPORTED_MODULE_0__methods__["n" /* handleCreateList */];
  this.createList = __WEBPACK_IMPORTED_MODULE_0__methods__["j" /* createList */];
  this.create = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* create */]; // this.createChildren = methods.createChildren
  // this.addChildren = methods.addChildren

  this.children = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* children */];
  this.addChildren = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* addChildren */];
  this.addProps = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* addProps */];
  this.addOps = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* addOps */];
  this.beginCreate = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* beginCreate */];
  this.checkProps = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* checkProps */];
  this.checkPres = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* checkPres */];
  this.checkFunks = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* checkFunks */];
  this.emitiks = __WEBPACK_IMPORTED_MODULE_0__methods__["l" /* emitiks */];
  this.eventiks = __WEBPACK_IMPORTED_MODULE_0__methods__["m" /* eventiks */];
  this.listCreationDome = __WEBPACK_IMPORTED_MODULE_0__methods__["p" /* listCreationDone */];
};

/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return listens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return emit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return handleCreateList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return createList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return beginCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return checkProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return checkPres; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return checkFunks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addOps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return emitiks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return eventiks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return listCreationDone; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_os__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_os___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_os__);

var init = function init() {
  console.log('Module: List, has been initialised');
  this.listens(); //  this.emit({type:'get-component-name',data: ''})
};
var listens = function listens() {
  var sb = this.sb;
  sb.sb_notifyListen({
    'create-list': this.handleCreateList.bind(this)
  }, sb.moduleMeta.moduleId, sb.moduleMeta.modInstId);
};
var emit = function emit(eNotifs) {
  var sb = this.sb;
  sb.sb_notifyEvent({
    type: eNotifs.type,
    data: eNotifs.data
  });
};
var handleCreateList = function handleCreateList(data) {
  // var sb = this.sb 
  this.createList(data);
};
var createList = function createList(data) {
  console.log('THE LIST DATA');
  console.log(data);
  var self = this;
  var sb = this.sb;
  var vd = data.data;
  data.hasOwnProperty('presents') && data.hasOwnProperty('children') ? self.beginCreate(vd, data.parent, data.presents, data.children) : data.hasOwnProperty('presents') ? self.beginCreate(vd, data.parent, data.presents) : data.hasOwnProperty('children') ? self.beginCreate(vd, data.parent, data.children) : self.beginCreate(vd, data.parent);
};
var beginCreate = function beginCreate(vd) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var presents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var children = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var data = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  // console.log('Create')
  // console.log(props)
  var self = this;
  var sb = this.sb;
  var dom = null;

  if (presents && children) {
    vd.forEach(function (i) {
      dom = self.create(i, null, null, presents);
      self.children(i, dom, children);
      sb.sb_addChild(parent, dom);
    });
  } else if (presents) {
    vd.forEach(function (i) {
      dom = self.create(i, presents); // self.children(i,dom,children)

      sb.sb_addChild(parent, dom);
    });
  } else if (children) {
    vd.forEach(function (i) {
      dom = self.create(i);
      self.children(i, dom, children);
      sb.sb_addChild(parent, dom);
    });
  } else {
    if (parent && parent instanceof Object) {
      vd.forEach(function (i) {
        dom = self.create(i); // self.children(i,dom,children)

        sb.sb_addChild(parent, dom);
      });
    } else {
      if (self.checkProps(vd)) {
        if (self.checkPres(vd.props) && self.checkFunks(vd.props)) {
          console.log('both props');
          console.log(data);
          data ? dom = self.create(vd, vd.props.presentational, vd.props.functional, null, data) : dom = self.create(vd, vd.props.presentational, vd.props.functional);
          self.children(vd, dom);
        } else if (self.checkPres(vd.props)) {
          console.log('pres');
          console.log(data);
          data ? dom = self.create(vd, vd.props.presentational, null, null, data) : dom = self.create(vd, vd.props.presentational);
          self.children(vd, dom);
        } else if (self.checkFunks(vd.props)) {
          console.log('funck');
          console.log(data);
          data ? dom = self.create(vd, null, vd.props.functional, null, null, data) : dom = self.create(vd, null, vd.props.functional);
          self.children(vd, dom);
        } else {
          dom = self.create(vd);
          self.children(vd, dom);
        }
      } else {
        dom = self.create(vd);
      }
    }
  }

  return dom;
};
var create = function create(vd) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var ops = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var presents = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var data = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  //  console.log('Create')
  //  console.log(vd)
  var self = this;
  var sb = this.sb;
  var el = null;

  if (typeof vd === 'string') {
    el = sb.sb_createElement('li');
    presents ? el = this.addProps(el, presents) : '';
  } else {
    el = sb.sb_createElement(vd.element);

    if (props && ops) {
      data ? (el = this.addProps(el, props, data), el = this.addOps(el, ops)) : (el = this.addProps(el, props), el = this.addOps(el, ops));
    } else if (props) {
      data ? el = this.addProps(el, props, data) : el = this.addProps(el, props);
    } else if (ops) {
      // data 
      // ? 	(el = this.addProps(el,props,data), el = this.addOps(el,ops)) 
      // :   (el = this.addProps(el,props), el = this.addOps(el,ops)) 
      el = this.addOps(el, ops);
    } else {
      el = el;
    }
  } //  var el = this.addProps(el,props.presentational)


  return el;
};
var children = function children(vd, dom) {
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var self = this;
  var sb = this.sb;

  if (typeof vd === 'string') {
    var data = vd;

    for (var c = 0; c < children.length; c++) {
      var e = children[c]; // console.log('The current child props property')
      // console.log(e.props)

      var el = self.beginCreate(e, null, null, null, data);
      sb.sb_addChild(dom, el);
    }
  } else {
    if (vd.hasOwnProperty('children')) {
      var _children = vd.children;

      for (var _c = 0; _c < _children.length; _c++) {
        var e = _children[_c]; // console.log('The current child props property')
        // console.log(e.props)

        var el = self.beginCreate(e);
        sb.sb_addChild(dom, el);
      }
    }
  }
};
var addChildren = function addChildren(parent, children) {
  var sb = this.sb;

  for (var c = 0; c < children.length; ++c) {
    sb.sb_addChild(parent, children[c]);
  }

  return parent;
};
var checkProps = function checkProps(vd) {
  if (vd.hasOwnProperty("props")) {
    if (vd.props instanceof Object && vd.props) {
      if (Object.keys(vd.props).length > 0) {
        return true;
      } else {
        console.log('Note: Element properties cannot be implement because props is empty');
        return false;
      }
    } else {
      console.log('Note: Element properties cannot be implement because props is empty');
      return false;
    }
  } else {
    return false;
  }
};
var checkPres = function checkPres(props) {
  if (props.hasOwnProperty("presentational")) {
    if (props.presentational instanceof Object && props.presentational) {
      if (Object.keys(props.presentational).length > 0) {
        return true;
      } else {
        console.log('Note: Presentational property defined, but empty');
        return false;
      }
    } else {
      console.log('Note: Presentational property defined, but empty');
      return false;
    }
  } else {
    return false;
  }
};
var checkFunks = function checkFunks(props) {
  if (props.hasOwnProperty("functional")) {
    if (props.functional instanceof Object && props.functional) {
      if (Object.keys(props.functional).length > 0) {
        if (props.functional.hasOwnProperty('meta') && props.functional.meta instanceof Object && props.functional.meta) {
          if (props.functional.meta.hasOwnProperty('emit') && props.functional.meta.emit instanceof Object && props.functional.meta.emit) {
            if (props.functional.meta.emit.hasOwnProperty('type') && props.functional.meta.emit.hasOwnProperty('data')) {
              if (typeof props.functional.meta.emit.type === 'string' && props.functional.meta.emit.data instanceof Object) {
                if (props.functional.meta.emit.data.hasOwnProperty('type') && typeof props.functional.meta.emit.data.type === 'string') {
                  if (props.functional.meta.emit.data.hasOwnProperty('data') && props.functional.meta.emit.data.data instanceof Object && props.functional.meta.emit.data.data) {
                    return true;
                  } else {
                    console.log('functional.meta.emit.data.data must defined and be a string');
                    return false;
                  }
                } else {
                  console.log('Aka: functional.meta.emit.data.type must defined and be a string');
                  return false;
                }
              } else {
                console.log('Aka: Functional.meta.emit.type or functional.meta.emit.data is not in the required format');
                return false;
              }
            } else {
              console.log('Aka: New virtual dom does not contain one of ther required meta object properties');
              return false;
            }
          } else {
            console.log('Aka: functional property meta.emit is either undefined,null, or empty');
            return false;
          }
        } else if (props.functional.hasOwnProperty("event") && props.functional.event instanceof Object && props.functional.event) {
          if (Object.keys(props.functional.event).length > 0) {
            return true;
          } else {
            console.log('Aka: Event property is empty');
            return false;
          }
        } else {
          console.log('Aka: functional property should contain either one of the required properties');
          return false;
        }
      } else {
        console.log('Note: functional property defined, but empty');
        return false;
      }
    } else {
      console.log('Note: functional property defined, but empty');
      return false;
    }
  } else {
    return false;
  }
};
var addProps = function addProps(el, props) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var sb = this.sb; // console.log('ADD PROPS')
  // console.log(props)
  // console.log(el)

  if (props.hasOwnProperty('content')) {
    console.log('WIthout data');

    for (var p in props) {
      if (p === 'content') {
        sb.sb_insertInner(el, props[p]);
      } else {
        sb.sb_addProperty(el, p, props[p]);
      }
    }
  } else {
    console.log('WIt data');
    console.log(data);
    if (data) sb.sb_insertInner(el, data);

    for (var _p in props) {
      sb.sb_addProperty(el, _p, props[_p]);
    }
  }

  return el;
};
var addOps = function addOps(el, ops) {
  var self = this; // console.log('ADD OPS')
  // console.log(ops)
  // console.log(el)

  if (ops.hasOwnProperty('meta') && ops.hasOwnProperty('event')) {
    // console.log('THE CURRENT ELEMENT CONTAINS THE EMIT FUNCTIONALITY FUNCTIONALITY')
    self.emitiks(ops.meta, el);
    self.eventiks(ops.event, el);
  } else if (ops.hasOwnProperty('meta')) {
    self.emitiks(ops.meta, el);
  } else if (ops.hasOwnProperty('event')) {
    self.eventiks(ops.event, el);
  } // for(let p in ops.meta){
  // 	console.log('THE CURRENT ELEMENT CONTAINS THE EMIT FUNCTIONALITY FUNCTIONALITY')
  // 	if(p === 'emit'){
  // 		// console.log('The data of emit property')
  // 		// console.log(ops.meta[p])
  // 		console.log('THE CURRENT ELEMENT CONTAINS THE EMIT FUNCTIONALITY FUNCTIONALITY')
  // 		if(ops.meta[p].hasOwnProperty('presents') && ops.meta[p].hasOwnProperty('children')){
  // 			console.log('The style string')
  // 			let presents = ops.meta[p].presents
  // 			let children = ops.meta[p].children
  // 			console.log(presents)
  // 			console.log(children)
  // 			this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data.data,presents: presents,children: children}})
  // 		}else if(ops.meta[p].hasOwnProperty('presents') ){
  // 			console.log('The style string')
  // 			let presents = ops.meta[p].presents
  // 			console.log(presents)
  // 			this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data.data,presents: presents}})
  // 		}else if(ops.meta[p].hasOwnProperty('children')){
  // 			console.log('The children string')
  // 			let children = ops.meta[p].children
  // 			console.log(children)
  // 			this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data.data,children: children}})
  // 		}else{
  // 			this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data.data}})
  // 		}
  // 	}else if(p === 'event'){
  // 		for(let p in ops.event){
  // 			//    console.log('The data of event property')
  // 			//    console.log(ops.event[p])
  // 				 sb.sb_addEvent(el,ops.event[p].type,ops.event[p].callback)
  // 				 // this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data}})
  // 		}
  // 	}
  // }


  return el;
};
var emitiks = function emitiks(meta, el) {
  if (meta.hasOwnProperty('emit')) {
    // console.log('The data of emit property')
    // console.log(ops.meta[p])
    console.log('THE CURRENT ELEMENT CONTAINS THE EMIT FUNCTIONALITY FUNCTIONALITY');

    if (meta.emit.hasOwnProperty('presents') && meta.emit.hasOwnProperty('children')) {
      console.log('The style string');
      var presents = meta.emit.presents;
      var _children2 = meta.emit.children;
      console.log(presents);
      console.log(_children2);
      this.emit({
        type: meta.emit.type,
        data: {
          parent: el,
          data: meta.emit.data.data,
          presents: presents,
          children: _children2
        }
      });
    } else if (meta.emit.hasOwnProperty('presents')) {
      console.log('The style string');
      var _presents = meta.emit.presents;
      console.log(_presents);
      this.emit({
        type: meta.emit.type,
        data: {
          parent: el,
          data: meta.emit.data.data,
          presents: _presents
        }
      });
    } else if (meta.emit.hasOwnProperty('children')) {
      console.log('The children string');
      var _children3 = meta.emit.children;
      console.log(_children3);
      this.emit({
        type: meta.emit.type,
        data: {
          parent: el,
          data: meta.emit.data.data,
          children: _children3
        }
      });
    } else {
      this.emit({
        type: meta.emit.type,
        data: {
          parent: el,
          data: meta.emit.data.data
        }
      });
    }
  }
};
var eventiks = function eventiks(event, el) {
  var self = this;
  var sb = this.sb;

  for (var p in event) {
    //    console.log('The data of event property')
    //    console.log(ops.event[p])
    sb.sb_addEvent(el, event[p].type, event[p].callback); // this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data}})
  }
};
var listCreationDone = function listCreationDone(data) {
  this.emit({
    type: 'list-creation-done',
    data: data
  });
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form__ = __webpack_require__(13);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__form__["a" /* default */]);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(14);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Form = function Form(sandbox) {
  _classCallCheck(this, Form);

  this.sb = sandbox; // methods

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["o" /* init */];
  this.listens = __WEBPACK_IMPORTED_MODULE_0__methods__["p" /* listens */];
  this.emit = __WEBPACK_IMPORTED_MODULE_0__methods__["j" /* emit */];
  this.handleCreateForm = __WEBPACK_IMPORTED_MODULE_0__methods__["n" /* handleCreateForm */];
  this.createForm = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* createForm */];
  this.create = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* create */];
  this.children = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* children */];
  this.parent = __WEBPACK_IMPORTED_MODULE_0__methods__["q" /* parent */]; // this.addChildren = methods.addChildren

  this.addProps = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* addProps */];
  this.addOps = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* addOps */];
  this.beginCreate = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* beginCreate */];
  this.checkProps = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* checkProps */];
  this.checkPres = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* checkPres */];
  this.checkFunks = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* checkFunks */];
  this.emitiks = __WEBPACK_IMPORTED_MODULE_0__methods__["k" /* emitiks */];
  this.eventiks = __WEBPACK_IMPORTED_MODULE_0__methods__["l" /* eventiks */];
  this.formCreationDome = __WEBPACK_IMPORTED_MODULE_0__methods__["m" /* formCreationDone */];
};

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return listens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return emit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return handleCreateForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return createForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return beginCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return parent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return checkProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return checkPres; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return checkFunks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addOps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return emitiks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return eventiks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return formCreationDone; });
/* unused harmony export createChildren */
var init = function init() {
  console.log('Module: Form has been succesfully initialised');
  this.listens(); //  this.emit({type:'get-component-name',data: ''})
};
var listens = function listens() {
  var sb = this.sb; // var name = 'render-component-'+name

  sb.sb_notifyListen({
    'create-form': this.handleCreateForm.bind(this)
  }, sb.moduleMeta.moduleId, sb.moduleMeta.modInstId);
};
var emit = function emit(eNotifs) {
  var sb = this.sb;
  sb.sb_notifyEvent({
    type: eNotifs.type,
    data: eNotifs.data
  });
};
var handleCreateForm = function handleCreateForm(data) {
  // var sb = this.sb 
  console.log('The form data');
  console.log(data);
  this.createForm(data);
};
var createForm = function createForm(data) {
  //   var dom = null
  var self = this;
  var sb = this.sb; //  console.log('The data structure object')
  //   console.log(data)
  //   console.log(Object.keys(data))
  //   var rootName = Object.keys(data)[0]
  //   console.log(data)

  var root = data.parent;
  var vd = data.data; //  this.addChildren(root,children)

  vd.forEach(function (e) {
    dom = self.beginCreate(e);
    sb.sb_addChild(root, dom);
  }); // //   var root = this.addChildren(root,children)
  //   this.domTreeCreated(root)
};
var beginCreate = function beginCreate(vd) {
  var ip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  // console.log('Create')
  // console.log(props)
  var self = this;
  var sb = this.sb;
  var dom = null;

  if (self.checkProps(vd)) {
    if (self.checkPres(vd.props) && self.checkFunks(vd.props)) {
      dom = self.create(vd, vd.props.presentational, vd.props.functional);
      self.children(vd, dom);
      vd.parent ? dom = self.parent(vd, dom) : '';
    } else if (self.checkPres(vd.props)) {
      dom = self.create(vd, vd.props.presentational);
      self.children(vd, dom, ip);
      vd.parent ? dom = self.parent(vd, dom) : '';
    } else if (self.checkFunks(vd.props)) {
      dom = self.create(vd, null, vd.props.functional);
      self.children(vd, dom, ip);
      vd.parent ? dom = self.parent(vd, dom) : '';
    } else {
      dom = self.create(vd);
      self.children(vd, dom, ip);
      vd.parent ? dom = self.parent(vd, dom) : '';
    }
  } else {
    dom = self.create(vd);
    self.children(vd, dom, ip);
    vd.parent ? dom = self.parent(vd, dom) : '';
  }

  return dom;
};
var create = function create(vd) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var ops = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  //  console.log('Create')
  //  console.log(vd)
  var self = this;
  var sb = this.sb;
  var el = sb.sb_createElement(vd.element);

  if (props && ops) {
    el = this.addProps(el, props);
    el = this.addOps(el, ops);
    self.children(vd, el);
  } else if (props) {
    el = this.addProps(el, props);
  } else if (ops) {
    el = this.addOps(el, ops);
  } else {
    el = el;
  } //  var el = this.addProps(el,props.presentational)


  return el;
};
var children = function children(vd, dom) {
  var ip = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var self = this;
  var sb = this.sb;
  var el = null;

  if (vd.hasOwnProperty('children')) {
    var _children = vd.children;

    for (var c = 0; c < _children.length; c++) {
      var e = _children[c]; // console.log('The current child props property')
      // console.log(e.props)

      if (ip) {
        if (e.hasOwnProperty('role')) {
          el = self.beginCreate(e);

          if (e.role === 'input') {
            ip.hasOwnProperty('name') && Object.keys(ip).length === 2 ? sb.sb_addChild(el, ip.dom) : sb.sb_addChild(el, ip);
            sb.sb_addChild(dom, el);
          } else if (e.role === 'name') {
            ip.hasOwnProperty('name') && Object.keys(ip).length === 2 ? sb.sb_insertInner(el, ip.name) : "";
            sb.sb_addChild(dom, el);
          } else {
            sb.sb_addChild(dom, el);
          }
        } else {
          // el = self.beginCreate(e)
          ip.hasOwnProperty('name') && Object.keys(ip).length === 2 ? sb.sb_addChild(dom, ip.dom) : sb.sb_addChild(dom, ip);
        }
      } else {
        el = self.beginCreate(e);
        sb.sb_addChild(dom, el);
      }
    }
  } else {
    console.log('IP');
    console.log(ip);

    if (ip) {
      sb.sb_addChild(dom, ip.dom);
    }
  }
};
var parent = function parent(vd, dom) {
  var self = this;
  var sb = this.sb;
  var el = null;
  var p = vd.parent;
  console.log('The vd');
  console.log(vd);
  console.log('The dom');
  console.log(dom);
  console.log("THE P");
  console.log(p);

  if (vd.hasOwnProperty('name')) {
    console.log("THE INPUT");
    console.log(dom);
    var el = self.beginCreate(p, {
      dom: dom,
      name: vd.name
    });
  } else {
    var el = self.beginCreate(p, dom);
  } // sb.sb_addChild(el,dom)


  return el;
};
var checkProps = function checkProps(vd) {
  if (vd.hasOwnProperty("props")) {
    if (vd.props instanceof Object && vd.props) {
      if (Object.keys(vd.props).length > 0) {
        return true;
      } else {
        console.log('Note: Element properties cannot be implement because props is empty');
        return false;
      }
    } else {
      console.log('Note: Element properties cannot be implement because props is empty');
      return false;
    }
  } else {
    return false;
  }
};
var checkPres = function checkPres(props) {
  if (props.hasOwnProperty("presentational")) {
    if (props.presentational instanceof Object && props.presentational) {
      if (Object.keys(props.presentational).length > 0) {
        return true;
      } else {
        console.log('Note: Presentational property defined, but empty');
        return false;
      }
    } else {
      console.log('Note: Presentational property defined, but empty');
      return false;
    }
  } else {
    return false;
  }
};
var checkFunks = function checkFunks(props) {
  if (props.hasOwnProperty("functional")) {
    if (props.functional instanceof Object && props.functional) {
      if (Object.keys(props.functional).length > 0) {
        if (props.functional.hasOwnProperty('meta') && props.functional.meta instanceof Object && props.functional.meta) {
          if (props.functional.meta.hasOwnProperty('emit') && props.functional.meta.emit instanceof Object && props.functional.meta.emit) {
            if (props.functional.meta.emit.hasOwnProperty('type') && props.functional.meta.emit.hasOwnProperty('data')) {
              if (typeof props.functional.meta.emit.type === 'string' && props.functional.meta.emit.data instanceof Object) {
                if (props.functional.meta.emit.data.hasOwnProperty('type') && typeof props.functional.meta.emit.data.type === 'string') {
                  if (props.functional.meta.emit.data.hasOwnProperty('data') && props.functional.meta.emit.data.data instanceof Object && props.functional.meta.emit.data.data) {
                    return true;
                  } else {
                    console.log('functional.meta.emit.data.data must defined and be a string');
                    return false;
                  }
                } else {
                  console.log('Aka: functional.meta.emit.data.type must defined and be a string');
                  return false;
                }
              } else {
                console.log('Aka: Functional.meta.emit.type or functional.meta.emit.data is not in the required format');
                return false;
              }
            } else {
              console.log('Aka: New virtual dom does not contain one of ther required meta object properties');
              return false;
            }
          } else {
            console.log('Aka: functional property meta.emit is either undefined,null, or empty');
            return false;
          }
        } else if (props.functional.hasOwnProperty("event") && props.functional.event instanceof Object && props.functional.event) {
          if (Object.keys(props.functional.event).length > 0) {
            return true;
          } else {
            console.log('Aka: Event property is empty');
            return false;
          }
        } else {
          console.log('Aka: functional property should contain either one of the required properties');
          return false;
        }
      } else {
        console.log('Note: functional property defined, but empty');
        return false;
      }
    } else {
      console.log('Note: functional property defined, but empty');
      return false;
    }
  } else {
    return false;
  }
};
var addProps = function addProps(el, props) {
  var sb = this.sb; // console.log('ADD PROPS')
  // console.log(props)
  // console.log(el)

  for (var p in props) {
    if (p === 'content') {
      sb.sb_insertInner(el, props[p]);
    } else {
      sb.sb_addProperty(el, p, props[p]);
    }
  }

  return el;
};
var addOps = function addOps(el, ops) {
  var self = this; // console.log('ADD OPS')
  // console.log(ops)
  // console.log(el)

  if (ops.hasOwnProperty('meta') && ops.hasOwnProperty('event')) {
    // console.log('THE CURRENT ELEMENT CONTAINS THE EMIT FUNCTIONALITY FUNCTIONALITY')
    self.emitiks(ops.meta, el);
    self.eventiks(ops.event, el);
  } else if (ops.hasOwnProperty('meta')) {
    self.emitiks(ops.meta, el);
  } else if (ops.hasOwnProperty('event')) {
    self.eventiks(ops.event, el);
  } // for(let p in ops.meta){
  // 	console.log('THE CURRENT ELEMENT CONTAINS THE EMIT FUNCTIONALITY FUNCTIONALITY')
  // 	if(p === 'emit'){
  // 		// console.log('The data of emit property')
  // 		// console.log(ops.meta[p])
  // 		console.log('THE CURRENT ELEMENT CONTAINS THE EMIT FUNCTIONALITY FUNCTIONALITY')
  // 		if(ops.meta[p].hasOwnProperty('presents') && ops.meta[p].hasOwnProperty('children')){
  // 			console.log('The style string')
  // 			let presents = ops.meta[p].presents
  // 			let children = ops.meta[p].children
  // 			console.log(presents)
  // 			console.log(children)
  // 			this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data.data,presents: presents,children: children}})
  // 		}else if(ops.meta[p].hasOwnProperty('presents') ){
  // 			console.log('The style string')
  // 			let presents = ops.meta[p].presents
  // 			console.log(presents)
  // 			this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data.data,presents: presents}})
  // 		}else if(ops.meta[p].hasOwnProperty('children')){
  // 			console.log('The children string')
  // 			let children = ops.meta[p].children
  // 			console.log(children)
  // 			this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data.data,children: children}})
  // 		}else{
  // 			this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data.data}})
  // 		}
  // 	}else if(p === 'event'){
  // 		for(let p in ops.event){
  // 			//    console.log('The data of event property')
  // 			//    console.log(ops.event[p])
  // 				 sb.sb_addEvent(el,ops.event[p].type,ops.event[p].callback)
  // 				 // this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data}})
  // 		}
  // 	}
  // }


  return el;
};
var emitiks = function emitiks(meta, el) {
  if (meta.hasOwnProperty('emit')) {
    // console.log('The data of emit property')
    // console.log(ops.meta[p])
    console.log('THE CURRENT ELEMENT CONTAINS THE EMIT FUNCTIONALITY FUNCTIONALITY');

    if (meta.emit.hasOwnProperty('presents') && meta.emit.hasOwnProperty('children')) {
      console.log('The style string');
      var presents = meta.emit.presents;
      var _children2 = meta.emit.children;
      console.log(presents);
      console.log(_children2);
      this.emit({
        type: meta.emit.type,
        data: {
          parent: el,
          data: meta.emit.data.data,
          presents: presents,
          children: _children2
        }
      });
    } else if (meta.emit.hasOwnProperty('presents')) {
      console.log('The style string');
      var _presents = meta.emit.presents;
      console.log(_presents);
      this.emit({
        type: meta.emit.type,
        data: {
          parent: el,
          data: meta.emit.data.data,
          presents: _presents
        }
      });
    } else if (meta.emit.hasOwnProperty('children')) {
      console.log('The children string');
      var _children3 = meta.emit.children;
      console.log(_children3);
      this.emit({
        type: meta.emit.type,
        data: {
          parent: el,
          data: meta.emit.data.data,
          children: _children3
        }
      });
    } else {
      this.emit({
        type: meta.emit.type,
        data: {
          parent: el,
          data: meta.emit.data.data
        }
      });
    }
  }
};
var eventiks = function eventiks(event, el) {
  var self = this;
  var sb = this.sb;

  for (var p in event) {
    //    console.log('The data of event property')
    //    console.log(ops.event[p])
    sb.sb_addEvent(el, event[p].type, event[p].callback); // this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data}})
  }
};
var formCreationDone = function formCreationDone(data) {
  this.emit({
    type: 'form-creation-done',
    data: data
  });
};
var createChildren = function createChildren(root, children, child) {
  var sb = this.sb;
  var descends = [];

  for (var c = 0; c < children.length; c++) {
    var e = children[c]; // console.log('The current child props property')
    // console.log(e.props)

    if (e.parent !== undefined && e.parent.set) {
      var el = this.create(e.parent.element, e.parent.props.presentational, e.parent.props.functional);
      var control = this.create(e.element, e.props.presentational, e.props.functional);

      if (e.parent.children) {
        //    console.log('The current element has[The parent] children')
        //    console.log(e.parent.children)
        sb.sb_addChild(root, el);
        this.createChildren(el, e.parent.children, {
          control: control,
          role: e.role,
          name: e.name
        });
      } else {
        //    console.log('The last innermost element has[The children] no children')
        //    console.log('The last innermost element has[The children] no children')
        //    console.log(el)
        //    console.log(control)
        sb.sb_addChild(el, control);
        sb.sb_addChild(root, el);
      }
    } else {
      var el = this.create(e.element, e.props.presentational, e.props.functional);

      if (e.children) {
        //    console.log('The current element has children')
        //    console.log(e.children)
        sb.sb_addChild(root, el);
        this.createChildren(el, e.children);
      } else {
        // console.log('The last innermost element has no children')
        // console.log('The child')
        // console.log(child)
        if (child) {
          if (e.role === 'input') {
            sb.sb_addChild(el, child.control);
          } else if (e.role === 'name') {
            sb.sb_insertInner(el, child.name);
          }
        }

        sb.sb_addChild(root, el);
      }
    }

    descends.push(el);
  }

  return descends;
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__prowler__ = __webpack_require__(16);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__prowler__["a" /* default */]);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(17);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Prowler = function Prowler(sandbox) {
  _classCallCheck(this, Prowler);

  this.sb = sandbox; // methods

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* init */];
  this.listens = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* listens */];
  this.emit = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* emit */];
  this.handleProwlBrowser = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handleProwlBrowser */];
  this.prowlBrowser = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* prowlBrowser */];
  this.startProwl = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* startProwl */];
  this.handlePopState = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handlePopState */];
  this.addressChanged = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* addressChanged */];
};

/* harmony default export */ __webpack_exports__["a"] = (Prowler);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return listens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return emit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleProwlBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return prowlBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return startProwl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handlePopState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addressChanged; });
var init = function init() {
  console.log('Module: Prowler , has been initialised');
  this.listens(); //  this.emit({type:'get-component-name',data: ''})
};
var listens = function listens() {
  var sb = this.sb;
  sb.sb_notifyListen({
    'prowl-browser': this.handleProwlBrowser.bind(this)
  }, sb.moduleMeta.moduleId, sb.moduleMeta.modInstId);
};
var emit = function emit(eNotifs) {
  var sb = this.sb;
  sb.sb_notifyEvent({
    type: eNotifs.type,
    data: eNotifs.data
  });
};
var handleProwlBrowser = function handleProwlBrowser(data) {
  // var sb = this.sb 
  console.log('The Prowler handle is invoked');
  this.prowlBrowser(data);
};
var prowlBrowser = function prowlBrowser(data) {
  this.startProwl();
};
var startProwl = function startProwl(data) {
  var sb = this.sb;
  var self = this;
  console.log('THE HISTORY OBJECT');
  console.log(window.history);
  console.log(window.history.state);
  sb.sb_addEvent(window, 'popstate', self.handlePopState.bind(self));
};
var handlePopState = function handlePopState(e) {
  console.log('The postate event has occured');
  console.log('The COntent of the url location');
  console.log(window.location);
  console.log(window.location.href);
  console.log(history.state);
  this.addressChanged({
    url: window.location.href
  }); //  window.history.pushState({},'','/about')
};
var addressChanged = function addressChanged(data) {
  this.emit({
    type: 'address-changed',
    data: data
  });
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(19);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */]);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(20);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Router = function Router(sandbox) {
  _classCallCheck(this, Router);

  this.sb = sandbox;
  this.routes = [];
  this.links = []; // methods

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["k" /* init */];
  this.listens = __WEBPACK_IMPORTED_MODULE_0__methods__["l" /* listens */];
  this.emit = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* emit */];
  this.handleCreateRoutes = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* handleCreateRoutes */];
  this.createRoutes = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* createRoutes */];
  this.handleRouterLink = __WEBPACK_IMPORTED_MODULE_0__methods__["j" /* handleRouterLink */];
  this.routerLink = __WEBPACK_IMPORTED_MODULE_0__methods__["p" /* routerLink */];
  this.handleAddressChanged = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* handleAddressChanged */];
  this.addressChanged = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* addressChanged */];
  this.handleLink = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* handleLink */];
  this.matchAddress = __WEBPACK_IMPORTED_MODULE_0__methods__["m" /* matchAddress */];
  this.handleRouteComponentSet = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* handleRouteComponentSet */];
  this.routeComponentSet = __WEBPACK_IMPORTED_MODULE_0__methods__["o" /* routeComponentSet */];
  this.handleDefaultRouteComponent = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* handleDefaultRouteComponent */];
  this.defaultRouteComponent = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* defaultRouteComponent */];
  this.refresh = __WEBPACK_IMPORTED_MODULE_0__methods__["n" /* refresh */];
};

/* harmony default export */ __webpack_exports__["a"] = (Router);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return listens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return emit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return handleCreateRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return handleRouteComponentSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return routeComponentSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return handleRouterLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return routerLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return handleAddressChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addressChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return handleDefaultRouteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return defaultRouteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return matchAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return handleLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return refresh; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var init = function init() {
  console.log('Module: Router, has been initialised');
  this.listens();
  this.emit({
    type: 'prowl-browser',
    data: ''
  }); //  this.refresh()
};
var listens = function listens() {
  var sb = this.sb;
  sb.sb_notifyListen({
    'create-routes': this.handleCreateRoutes.bind(this),
    'route-component-set': this.handleRouteComponentSet.bind(this),
    'router-link': this.handleRouterLink.bind(this),
    'address-changed': this.handleAddressChanged.bind(this),
    'default-route-component': this.handleDefaultRouteComponent.bind(this)
  }, sb.moduleMeta.moduleId, sb.moduleMeta.modInstId);
};
var emit = function emit(eNotifs) {
  console.log('The value of data in emit');
  console.log(eNotifs);
  var sb = this.sb;
  sb.sb_notifyEvent({
    type: eNotifs.type,
    data: eNotifs.data
  });
};
var handleCreateRoutes = function handleCreateRoutes(data) {
  // var sb = this.sb 
  this.createRoutes(data);
};
var createRoutes = function createRoutes(data) {
  console.log('THE ROUTES DATA');
  console.log(data);
  var self = this; //  this.routes = data.routes

  data.hasOwnProperty('routes') ? data.routes.forEach(function (ri, i) {
    self.emit({
      type: 'route-component',
      data: ri
    });
  }) : console.log('THE ROUTES ARE NOT DEFINED');
};
var handleRouteComponentSet = function handleRouteComponentSet(data) {
  // var sb = this.sb 
  this.routeComponentSet(data);
};
var routeComponentSet = function routeComponentSet(data) {
  //  console.log('THE ROUTES DATA')
  //  console.log(data)
  var self = this; //  this.routes = data.routes

  data.hasOwnProperty('component') && _typeof(data.component) === 'object' ? (self.routes.push(data), self.emit({
    type: "addto-routes-list",
    data: data.comp
  })) : console.log('THE ROUTES ARE NOT DEFINED'); // console.log('THE VALUE OF THE THIS.ROUTES')
  // console.log(self.routes)
};
var handleRouterLink = function handleRouterLink(data) {
  // var sb = this.sb 
  console.log('THE ROUTER LINK HAS BEEN EMITTED');
  console.log(data);
  this.routerLink(data);
};
var routerLink = function routerLink(data) {
  console.log('THE ROUTER LINK DATA');
  console.log(data);
  var self = this;
  var sb = this.sb;
  data.hasOwnProperty('parent') ? sb.sb_addEvent(data.parent, 'click', self.handleLink.bind(self, data.data.to)) : console.log('The parent does not exist here');
};
var handleAddressChanged = function handleAddressChanged(data) {
  // var sb = this.sb 
  console.log('The address-changed has occured');
  this.addressChanged(data);
};
var addressChanged = function addressChanged(data) {
  this.matchAddress(data);
};
var handleDefaultRouteComponent = function handleDefaultRouteComponent(data) {
  // var sb = this.sb 
  console.log('The default route component occured');
  this.defaultRouteComponent(data);
};
var defaultRouteComponent = function defaultRouteComponent(data) {
  // var sb = this.sb 
  console.log('The default route component event occured');
  window.history.pushState({}, '', '/home');
  this.emit({
    type: 'address-changed',
    data: {
      url: window.location.href
    }
  });
};
var matchAddress = function matchAddress(data) {
  console.log('THE VALUE OF ROUTES');
  console.log(this.routes);
  var url = data.url;
  var regex = /^\/?(\w+)\/(\w+)/;
  var routes = this.routes;

  for (var r = 0; r < routes.length; r++) {
    console.log('LOOPING THROUGH ROUTES');
    console.log(routes);
    console.log(routes[r]);
    var match = url.match(new RegExp(routes[r].path));

    if (match) {
      console.log('THE MATCHED ENDPOINT');
      console.log(match);
      routes[r].component.start();
      break;
    }
  } // console.log('THE ADDRESS HAS CHANGED, HANDLE ROUTING AND COMPONENTS')
  // console.log(data)

};
var handleLink = function handleLink(entry, e) {
  console.log('The linking event has occured');
  var sb = this.sb;
  sb.sb_preventNormal(e);
  window.history.pushState({}, '', entry);
  this.emit({
    type: 'address-changed',
    data: {
      url: window.location.href
    }
  });
};
var refresh = function refresh() {
  // console.log('The linking event has occured')
  // const sb = this.sb
  // sb.sb_preventNormal(e)
  // sb.sb_addEvent(window,'unload',self.handlePopState.bind(self))
  // window.history.pushState({},'',entry)
  // this.emit({type: 'address-changed',data: {url: window.location.href}})
  console.log(window);
  console.log(window.history);
  console.log(window.location);
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_home_index__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_master_index__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_routes_index__ = __webpack_require__(31);
// import Home from './components/home/index'
// import Todo from './components/todo/index'
// import App from './components/app/index'
// import Header from './components/header/index'
 // import About from './components/about/index'


 // import Contact from './components/contact/index'
// import Portfolio from './components/portfolio/index'
// import Ibr from './components/ibr/index'

/* harmony default export */ __webpack_exports__["a"] = ({
  // 
  Home: __WEBPACK_IMPORTED_MODULE_0__components_home_index__["a" /* default */],
  Routes: __WEBPACK_IMPORTED_MODULE_2__components_routes_index__["a" /* default */],
  Master: __WEBPACK_IMPORTED_MODULE_1__components_master_index__["a" /* default */] // Ibr,Routes,Master

});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home__ = __webpack_require__(23);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__home__["a" /* default */]);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducer__ = __webpack_require__(27);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var Home = function Home(sandbox) {
  _classCallCheck(this, Home);

  this.sb = sandbox;
  this.actions = __WEBPACK_IMPORTED_MODULE_1__actions__["a" /* default */];
  this.reducer = __WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* default */];
  console.log('Home ACTIONS');
  console.log(__WEBPACK_IMPORTED_MODULE_1__actions__["a" /* default */]);
  console.log(this.actions); // methods

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["j" /* init */];
  this.listens = __WEBPACK_IMPORTED_MODULE_0__methods__["l" /* listens */];
  this.emit = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* emit */];
  this.handleDomTreeCreated = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* handleDomTreeCreated */];
  this.domTreeCreated = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* domTreeCreated */];
  this.messenger = __WEBPACK_IMPORTED_MODULE_0__methods__["m" /* messenger */];
  this.evs = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* evs */];
  this.functions = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* functions */];
  this.build = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* build */];
  this.createTrunk = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* createTrunk */];
  this.render = __WEBPACK_IMPORTED_MODULE_0__methods__["n" /* render */];
  this.start = __WEBPACK_IMPORTED_MODULE_0__methods__["p" /* start */];
  this.handleRouteComponent = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* handleRouteComponent */];
  this.routeComponent = __WEBPACK_IMPORTED_MODULE_0__methods__["o" /* routeComponent */];
  this.Mounted = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* Mounted */];
  this.lifecycle = __WEBPACK_IMPORTED_MODULE_0__methods__["k" /* lifecycle */];
};

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return listens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return emit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return handleDomTreeCreated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return domTreeCreated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return handleRouteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return routeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return messenger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return evs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return functions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return build; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createTrunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mounted; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var init = function init() {
  var self = this;
  this.lifecycle();
  this.listens(); //  this.emit({type:'component-mount',data: this.build})
  //  this.emit({type:'get-component-name',data: ''})
};
var listens = function listens() {
  var sb = this.sb; // var name = 'render-component-'+this.componentname

  sb.sb_notifyListen({
    // 'dom-tree-created' : this.handleDomTreeCreated.bind(this),
    'route-component': this.handleRouteComponent.bind(this)
  }, sb.moduleMeta.moduleId, sb.moduleMeta.modInstId);
};
var emit = function emit(eNotifs) {
  console.log('The value of this in emit');
  var sb = this.sb;
  console.log(eNotifs);
  sb.sb_notifyEvent({
    type: eNotifs.type,
    data: eNotifs.data
  });
};
var start = function start() {
  var self = this;
  var sb = self.sb; // self.emit({type:'subscribe-to-store',data: {
  //     event: 'STATE-CHANGE',
  //     component: self.constructor.name.toLowerCase(),
  //     initState: {list: {
  //         // items: this.children[0].initState.items
  //         items: ['1','2']
  //     }},
  //     callback: self.build.bind(self)
  // } }) 
  // self.emit({type: 'connect-to-store',data:{
  //     component: self.constructor.name.toLowerCase(),
  //     actions: this.actions,
  //     reducer: this.reducer
  // }})

  self.build();
};
var handleDomTreeCreated = function handleDomTreeCreated(data) {
  var sb = this.sb;
  this.domTreeCreated(data); // if(!sb.view.contains(data)){
  // 	sb.sb_addChild(sb.view,data)
  // 	this.emit({type:'stop-preloader',data:''})
  //     this.emit({type:'create-links',data:''})
  // }
};
var domTreeCreated = function domTreeCreated(data) {
  var self = this;
  this.emit({
    type: 'add-domto-vd',
    data: {
      data: data,
      id: self.constructor.name
    }
  });
};
var handleRouteComponent = function handleRouteComponent(data) {
  var sb = this.sb;
  this.routeComponent(data);
};
var routeComponent = function routeComponent(data) {
  var sb = this.sb;
  var self = this;
  data.hasOwnProperty('component') ? data.component.toLowerCase() === self.constructor.name.toLowerCase() ? self.emit({
    type: 'route-component-set',
    data: _objectSpread({}, data, {
      comp: data.component.toLowerCase(),
      component: self
    })
  }) : console.log('The component name and the value are not defined') : console.log('The component name is not defined');
};
var messenger = function messenger(data) {
  this.emit({
    type: 'retrieve-data',
    data: data
  });
};
var evs = function evs() {
  var that = this;
  return {
    submit: function submit(e) {
      var sb = that.sb;
      sb.sb_preventNormal(e);
      console.log('The name of the event');
      console.log(e.type);
      console.log('The event target');
      console.log(e.target);
      alert('Event occured');
    }
  };
};
var functions = function functions() {
  var that = this; // console.log('The value of That in Home component')
  // console.log(this)
  // console.log(this.prototype.events)

  return {
    form: function form(evs) {
      // console.log('The value of t')
      // console.log(t)
      return [{
        element: 'input',
        name: 'Address',
        props: {
          presentational: {
            "class": "bg-transparent hr-size-fl-xx-bg pd-fd-bt bd-none",
            type: 'text',
            placeholder: 'Street address',
            id: 'address'
          }
        },
        parent: {
          element: 'p',
          props: {
            presentational: {
              "class": "list__item list__item--ve list__item--marg-offset-bottom-small pd-left-fd-tn pd-top-fd-bt",
              id: "test-id"
            }
          },
          children: [{
            element: 'small',
            role: 'name',
            props: {
              presentational: {
                "class": "d-block  mg-bottom-fd-xxx-tn font-fd-xx-tn fg-secondary"
              }
            }
          }, {
            element: 'span',
            role: 'input',
            props: {
              presentational: {
                "class": "hr-size-fl-xx-bg text-align-center bg-dark-lta fg-dark bd-rad-x-bt pd-fd-xxx-tn d-block mg-top-fd-bt font-fd-x-tn",
                id: "test-id"
              }
            }
          }]
        }
      }, {
        element: 'input',
        name: 'address',
        props: {
          presentational: {
            "class": "bg-transparent hr-size-fl-xx-bg pd-fd-bt bd-none",
            type: 'text',
            placeholder: 'Street address',
            id: 'address'
          }
        },
        parent: {
          element: 'p',
          props: {
            presentational: {
              "class": "list__item list__item--ve list__item--marg-offset-bottom-small pd-left-fd-tn pd-top-fd-bt",
              id: "test-id"
            }
          },
          children: [{
            element: 'small',
            role: 'name',
            props: {
              presentational: {
                "class": "d-block  mg-bottom-fd-xxx-tn font-fd-xx-tn fg-secondary"
              }
            }
          }, {
            element: 'span',
            role: 'input',
            props: {
              presentational: {
                "class": "hr-size-fl-xx-bg text-align-center bg-dark-lta fg-dark bd-rad-x-bt pd-fd-xxx-tn d-block mg-top-fd-bt font-fd-x-tn",
                id: "test-id"
              }
            }
          }]
        }
      }, {
        element: 'input',
        name: 'address',
        props: {
          presentational: {
            "class": "bg-transparent hr-size-fl-xx-bg pd-fd-bt bd-none",
            type: 'text',
            placeholder: 'Street address',
            id: 'address'
          }
        },
        parent: {
          element: 'p',
          props: {
            presentational: {
              "class": "list__item list__item--ve list__item--marg-offset-bottom-small pd-left-fd-tn pd-top-fd-bt",
              id: "test-id"
            }
          },
          children: [{
            element: 'small',
            role: 'name',
            props: {
              presentational: {
                "class": "d-block  mg-bottom-fd-xxx-tn font-fd-xx-tn fg-secondary"
              }
            }
          }, {
            element: 'span',
            role: 'input',
            props: {
              presentational: {
                "class": "hr-size-fl-xx-bg text-align-center bg-dark-lta fg-dark bd-rad-x-bt pd-fd-xxx-tn d-block mg-top-fd-bt font-fd-x-tn",
                id: "test-id"
              }
            }
          }]
        }
      }, {
        element: 'input',
        name: 'address',
        props: {
          presentational: {
            "class": "bg-transparent hr-size-fl-xx-bg pd-fd-bt bd-none",
            type: 'text',
            placeholder: 'Street address',
            id: 'address'
          }
        },
        parent: {
          element: 'p',
          props: {
            presentational: {
              "class": "list__item list__item--ve list__item--marg-offset-bottom-small pd-left-fd-tn pd-top-fd-bt",
              id: "test-id"
            }
          },
          children: [{
            element: 'small',
            role: 'name',
            props: {
              presentational: {
                "class": "d-block  mg-bottom-fd-xxx-tn font-fd-xx-tn fg-secondary"
              }
            }
          }, {
            element: 'span',
            role: 'input',
            props: {
              presentational: {
                "class": "hr-size-fl-xx-bg text-align-center bg-dark-lta fg-dark bd-rad-x-bt pd-fd-xxx-tn d-block mg-top-fd-bt font-fd-x-tn",
                id: "test-id"
              }
            }
          }]
        }
      }, {
        element: 'input',
        name: 'address',
        props: {
          presentational: {
            "class": "hr-size-fl-xx-bg bg-dark fg-light d-inline-block pd-fd-bt bd-none",
            type: 'submit',
            id: 'address',
            value: 'Save'
          },
          functional: {
            event: {
              click: {
                type: 'click',
                callback: evs.submit.bind(this)
              }
            }
          }
        },
        parent: {
          element: 'p',
          props: {
            presentational: {
              "class": "list__item list__item--ve list__item--marg-offset-bottom-small pd-left-fd-tn pd-top-fd-bt",
              id: "test-id"
            }
          }
        }
      }];
    }
  };
};
var build = function build() {
  //   var that = o;
  //   console.log('The value of that')
  //   console.log(o)
  var evs = this.evs();
  var self = this; //   var funks = this.functions()
  //   console.log('The emit')
  //   console.log(funks)

  this.trunk = this.createTrunk();
  var name = this.constructor.name;
  console.log('The componetn name');
  console.log(name);
  console.log(self.trunk); // this.emit({type: 'action-dispatch',data: {
  //     type: 'TEST_TYPE',
  //     component: 'home'
  // }})

  this.emit({
    type: 'create-dom-tree',
    data: {
      cometa: {
        hiraky: "base",
        root: self.trunk,
        name: name
      },
      me: {
        element: 'section',
        props: {
          presentational: {
            "class": "login-content",
            id: "test-id"
          }
        },
        children: [{
          element: 'section',
          props: {
            presentational: {
              "class": "app__brand"
            }
          },
          children: [{
            element: 'figure',
            props: {
              presentational: {
                "class": "app__brand--logo"
              }
            },
            children: [{
              element: 'img',
              props: {
                presentational: {
                  src: "img/ssmarfoc.png"
                }
              }
            }]
          }, {
            element: 'p',
            props: {
              presentational: {
                "class": "app__brand--name",
                content: 'Smarfo'
              }
            }
          }]
        }, {
          element: 'section',
          props: {
            presentational: {
              "class": "login"
            }
          },
          children: [{
            element: 'form',
            props: {
              presentational: {
                "class": "form",
                id: 'login-data'
              },
              functional: {
                meta: {
                  emit: {
                    type: 'create-form',
                    data: {
                      type: 'emit',
                      data: self.functions().form(evs)
                    }
                  }
                }
              }
            }
          }]
        }]
      }
    }
  });
};
var render = function render() {
  console.log('From the home component, I render on state change');
};
var createTrunk = function createTrunk() {
  var sb = this.sb;
  var trunk = sb.sb_createElement('main');
  sb.sb_addProperty(trunk, 'id', this.constructor.name.toLowerCase());
  sb.sb_addProperty(trunk, 'class', 'component-view');
  return trunk;
};
var lifecycle = function lifecycle() {
  var sb = this.sb;
  var self = this;
  console.log('HOME,SELF');
  console.log(self);
  var compCycles = {
    name: self.constructor.name.toLowerCase(),
    cycles: []
  };
  var cycles = ["AboutToMount", "Mounted", "AboutToUnMount", "AboutToUpdate", "Updated"];
  cycles.forEach(function (v, i) {
    console.log('THE LIFECYCLE METHOD RUNS');
    console.log(v);
    console.log(_typeof(self[v]));
    console.log(self[v]);

    if (self.hasOwnProperty(v) && typeof self[v] === "function") {
      var _compCycles$cycles$pu;

      console.log('Self has method');
      console.log(self[v]);
      compCycles.cycles.push((_compCycles$cycles$pu = {}, _defineProperty(_compCycles$cycles$pu, v, self[v].bind(self)), _defineProperty(_compCycles$cycles$pu, "name", v), _compCycles$cycles$pu));
    }
  });

  if (compCycles.cycles.length > 0) {
    console.log('compCycles has data');
    self.emit({
      type: "lifecycle",
      name: self.constructor.name.toLowerCase(),
      data: compCycles
    });
  }
};
var Mounted = function Mounted() {
  console.log('THE HOME COMPONENT IS MOUNTED TO THE DOM');
};

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(26);


var getData = function getData(data) {
  // console.log('I get a call')
  var name = 'action';
  var self = data;
  self.reducer({
    type: __WEBPACK_IMPORTED_MODULE_0__types__["a" /* TEST_TYPE */],
    component: 'home',
    payload: {
      name: name,
      surname: 'Mashele',
      nickname: 'Khonyonyo'
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = ([{
  type: __WEBPACK_IMPORTED_MODULE_0__types__["a" /* TEST_TYPE */],
  action: getData
}]);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TEST_TYPE; });
var TEST_TYPE = 'TEST_TYPE';

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// import * as types from './types'
/* harmony default export */ __webpack_exports__["a"] = (function (context, data) {
  var self = context;
  console.log('The reducer runs, we are about to set the state');

  switch (data.type) {
    case 'TEST_TYPE':
      {
        self.setState(data.component, data.payload);
      }
      break;

    default:
      {
        self.state = state;
      }
  }
}); // module.exports = [
//         {
//             type: types.TEST_TYPE,
//             reducer: reducer
//         }
// ]

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__master__ = __webpack_require__(29);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__master__["a" /* default */]);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(30);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 // import  actions from './actions'
// import  reducer from './reducer'
// import List from './components/list'
// import Form from './components/form'
// import Copy from './components/copy'

var Master = function Master(sandbox) {
  _classCallCheck(this, Master);

  this.sb = sandbox;
  this.mergeComponents = [];
  this.components = []; // methods

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* init */];
  this.listens = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* listens */];
  this.start = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* start */];
  this.emit = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* emit */];
  this.handleComponentMerged = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleComponentMerged */];
  this.componentMerged = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* componentMerged */];
};

/* harmony default export */ __webpack_exports__["a"] = (Master);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return listens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return emit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleComponentMerged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return componentMerged; });
var init = function init() {
  var self = this; // console.log('The list')
  // console.log(this.list)
  // this.list.build(self)

  this.listens();
  this.mergeComponents = [// 'header',
  // 'routes',
  // 'footer'
  //  'ibr',
  'routes'];
  this.emit({
    type: 'merge-component',
    data: {
      components: self.mergeComponents
    }
  }); //  this.emit({type:'component-mount',data: this.build})
  //  this.emit({type:'get-component-name',data: ''})
};
var start = function start() {
  var self = this;
  var newA = [];
  self.mergeComponents.forEach(function (va, i) {
    console.log('The va');
    console.log(va);
    self.components.forEach(function (v, vi) {
      if (v.name === va) {
        newA.push(v);
      }
    });
  });
  console.log('The value of new Array now');
  console.log(newA);
  console.log('The value of old Array');
  console.log(this.mergeComponents);
  newA.forEach(function (comp) {
    comp.component.start();
  });
};
var listens = function listens() {
  var sb = this.sb; // var name = 'render-component-'+this.componentname

  sb.sb_notifyListen({
    'component-merged': this.handleComponentMerged.bind(this)
  }, sb.moduleMeta.moduleId, sb.moduleMeta.modInstId);
};
var emit = function emit(eNotifs) {
  console.log('The value of this in emit');
  var sb = this.sb;
  console.log(eNotifs);
  sb.sb_notifyEvent({
    type: eNotifs.type,
    data: eNotifs.data
  });
};
var handleComponentMerged = function handleComponentMerged(data) {
  this.componentMerged(data);
};
var componentMerged = function componentMerged(data) {
  var self = this;
  this.components.push({
    component: data.component,
    name: data.component.constructor.name.toLowerCase()
  });

  if (self.components.length === self.mergeComponents.length) {
    self.start();
  } // console.log('The components of the master component')
  // console.log(this.components)

};

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routes__ = __webpack_require__(32);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__routes__["a" /* default */]);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routescontent__ = __webpack_require__(34);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


 // import  actions from './actions'
// import  reducer from './reducer'
// import List from './components/list'
// import Form from './components/form'
// import Copy from './components/copy'

var Routes = function Routes(sandbox) {
  _classCallCheck(this, Routes);

  this.sb = sandbox;
  this.routes = __WEBPACK_IMPORTED_MODULE_1__routescontent__["a" /* default */]; // methods

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* init */];
  this.listens = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* listens */];
  this.start = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* start */];
  this.emit = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* emit */];
  this.handleMergeComponent = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleMergeComponent */];
  this.mergeComponent = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* mergeComponent */];
};

/* harmony default export */ __webpack_exports__["a"] = (Routes);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return listens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return emit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleMergeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return mergeComponent; });
var init = function init() {
  var self = this; // console.log('The list')
  // console.log(this.list)
  // this.list.build(self)

  this.listens(); //  this.emit({type:'component-mount',data: this.build})
  //  this.emit({type:'get-component-name',data: ''})
};
var start = function start() {
  var self = this;
  self.emit({
    type: 'create-routes',
    data: {
      routes: self.routes
    }
  });
  self.emit({
    type: 'create-routes-parent',
    data: ''
  });
};
var listens = function listens() {
  var sb = this.sb; // var name = 'render-component-'+this.componentname

  sb.sb_notifyListen({
    'merge-component': this.handleMergeComponent.bind(this) // 'route-components': this.handleRouteComponents.bind(this)

  }, sb.moduleMeta.moduleId, sb.moduleMeta.modInstId);
};
var emit = function emit(eNotifs) {
  console.log('The value of this in emit');
  var sb = this.sb;
  console.log(eNotifs);
  sb.sb_notifyEvent({
    type: eNotifs.type,
    data: eNotifs.data
  });
};
var handleMergeComponent = function handleMergeComponent(data) {
  var sb = this.sb;
  this.mergeComponent(data); // if(!sb.view.contains(data)){
  // 	sb.sb_addChild(sb.view,data)
  // 	this.emit({type:'stop-preloader',data:''})
  //     this.emit({type:'create-links',data:''})
  // }
};
var mergeComponent = function mergeComponent(data) {
  var sb = this.sb;
  var self = this;

  if (data.hasOwnProperty('components')) {
    for (var i = 0; i < data.components.length; i++) {
      if (data.components[i] === this.constructor.name.toLowerCase()) {
        console.log('The value of this in Footer');
        console.log(self); // if(i === data.components.length -1){
        //     console.log('On Footer,merging ends')
        //     self.emit({type:'component-merged',data:{
        //         component: self,
        //         complete: true
        //     }})
        // }else{

        self.emit({
          type: 'component-merged',
          data: {
            component: self
          }
        }); //}
        // data.components.splice(i,1)

        break;
      }
    }
  } // data.hasOwnProperty('components') && data.components.length > 0 ? 
  //     data.components.forEach((comp,i)=>{
  //         if(comp.component === this.constructor.name.toLowerCase() && i === comp.index ){
  //             console.log('The value of this in Footer')
  //             console.log(self)
  //             self.emit({type:'component-merged',data:{
  //                 component: self
  //             }})
  //             data.components.splice(i,1)
  //             break;
  //         }
  //     })
  // : console.log('The data object contains do data') 
  // console.log(data.components)
  // if(!sb.view.contains(data)){
  // 	sb.sb_addChild(sb.view,data)
  // 	this.emit({type:'stop-preloader',data:''})
  //     this.emit({type:'create-links',data:''})
  // }

};

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var routes = [{
  path: "/home",
  name: "home",
  component: "home"
}, // {
//   path: "/about",
//   name: "About",
//   component: "about"
// },
// {
//   path: "/contact",
//   name: "Contact",
//   component: "contact"
// },
{
  path: "/todo",
  name: "todo",
  component: "todo" // {
  //   path: "/portfolio",
  //   name: "portfolio",
  //   component: "portfolio"
  // }
  // {
  //   path: "/table",
  //   name: "Table List",
  //   component: TableList
  // }
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   component: Typography
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   component: Notifications
  // },
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "pe-7s-rocket",
  //   component: Upgrade
  // }

}];
/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server__ = __webpack_require__(36);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__server__["a" /* default */]);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(37);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var express = __webpack_require__(38),
    // fs = require('fs'),
// randomstring = require("randomstring"),
jsonfile = __webpack_require__(39),
    bodyParser = __webpack_require__(40); // const app = express()
// import notifier from './notifier'


var Server = function Server(sandbox) {
  _classCallCheck(this, Server);

  this.sb = sandbox;
  this.xpress = express;
  this.http = this.xpress();
  this.html = '';
  this.dependiks = {
    jsonfile: jsonfile,
    bodyParser: bodyParser // // methods

  };
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* init */];
  this.listens = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* listens */];
  this.emit = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* emit */];
  this.handleStartServer = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleStartServer */];
  this.startServer = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* startServer */];
  this.startPreRoutes = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* startPreRoutes */];
  this.startRouting = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* startRouting */];
  this.renderHtml = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* renderHtml */];
};

/* harmony default export */ __webpack_exports__["a"] = (Server);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return listens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return emit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleStartServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return startServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return startPreRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return startRouting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return renderHtml; });
var init = function init() {
  console.log('Store has been initialised');
  this.listens();
  this.unload();
};
var listens = function listens() {
  var sb = this.sb;
  sb.sb_notifyListen({
    'start-server': this.handleStartServer.bind(this) //  'action-dispatch': this.handleActionDispatch.bind(this)

  }, sb.moduleMeta.moduleId, sb.moduleMeta.modInstId);
};
var emit = function emit(eNotifs) {
  var sb = this.sb;
  sb.sb_notifyEvent({
    type: eNotifs.type,
    data: eNotifs.data
  });
};
var handleStartServer = function handleStartServer(data) {
  // console.log('HANDLE Server start event has occured')
  this.html = data.html;
  this.startPreRoutes();
  this.startRouting();
  this.startServer();
};
var startServer = function startServer(data) {
  var self = this;
  self.http.listen(process.env.PORT || 3000, function () {
    console.log("The Server is listening");
  });
};
var startPreRoutes = function startPreRoutes() {
  var self = this;
  self.http.use(self.dependiks.bodyParser.json());
  self.http.use(function (req, res, next) {
    // console.log(req.body)
    // console.log('Your mobile has reached this code Surprise')
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return next();
  });
};
var startRouting = function startRouting() {
  var self = this; //   self.http.get('/smarfo/menu',function(req,res){
  // 	console.log('Request for menu has just been received')
  // 	let categories = require('./jsondb/foodcategories.json');
  // 	return res.send(categories.menu);
  // })

  self.http.get('/todo', function (req, res) {});
  self.http.use('/', self.renderHtml);
};
var renderHtml = function renderHtml(req, res) {
  var self = this;
  res.send("\n\t     <!DOCTYPE html>\n\t      <html> \n\t      <head> <title>SSR with RR</title> </head>\n\t       <body data-hydrate=\"hydrate\"> \n\t       <div id=\"self.http\">\n\t         ".concat(self.html, "\n\t       </div> \n\t       </body> \n\t       </html> \n\t       \n\t      "));
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("jsonfile");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ })
/******/ ]);