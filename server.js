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
 * @param {[type]} options [description]
 */

function TextBlock(options) {
  if (!(this instanceof TextBlock)) return new TextBlock(options);
  merge(this, options);
}


/**
 * API functions.
 */
TextBlock.prototype.api = TextBlock.api = 'block-provider';

TextBlock.prototype.load = function (content) {
  return content;
};

