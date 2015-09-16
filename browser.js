/**
 * Module dependencies.
 */
var debug = require('debug')('glint-block-text');
var merge = require('utils-merge');

/**
 * Expose TextBlock element.
 */
exports = module.exports = TextBlock;

/**
 * Initialize a new `TextBlock` element.
 * @param {Object} options object
 */
function TextBlock(options) {
  if (!(this instanceof TextBlock)) return new TextBlock(options);
  merge(this, options);
  this.init();
}

/**
 * API functions.
 */
TextBlock.prototype.api = TextBlock.api = 'block-provider';

TextBlock.prototype.place = function () {
  return 'wherever';
};

TextBlock.prototype.load = function (content) {
  this.el.removeAttribute('contenteditable');
  this.content = content;
  this.setContent(this.content);
  return this.content;
};

TextBlock.prototype.edit = function () {
  this.el.setAttribute('contenteditable', true);
  this.el.addEventListener('click', this.preventClickEvent);

  return this.content;
};

TextBlock.prototype.save = function () {
  this.el.removeAttribute('contenteditable');
  this.el.removeEventListener('click', this.preventClickEvent);
  this.content = this.getContent();
  return this.content;
};

/**
 * Base functions.
 */

TextBlock.prototype.init = function () {
  var self = this;
  Object.defineProperty(this, 'el', {
    get: function () {
      return self._el;
    },
    set: function (val) {
      if (self._el && !self._tag) {
        self._tag = self._el.tagName || self._el.name;
        self._val = /input|select|option/i.test(self._tag);
      }
      self._el = val;
    },
    enumerable: true,
    configurable: true
  });
}

TextBlock.prototype.getContent = function () {
  if (this._val) return this.el.value;
  var content;
  try {
    content = this.el.innerHTML;
  } catch (e) {
  }
  if (content) return content;
  try {
    content = this.el.innerText;
  } catch (e) {
  }

  if (content)

  return this._val ? this.el.value : this.el.innerHTML;
};

TextBlock.prototype.setContent = function (content) {
  this._val ? this.el.setAttribute('value', content) : this.el.innerHTML = content;
};

TextBlock.prototype.preventClickEvent = function(e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  return false;
};