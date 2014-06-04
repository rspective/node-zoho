// Generated by CoffeeScript 1.7.1
var CrmModule, Request, SalesOrders, xml2js, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ = require('underscore');

xml2js = require("xml2js");

CrmModule = require('./crm-module');

Request = require('../../request');

SalesOrders = (function(_super) {
  __extends(SalesOrders, _super);

  function SalesOrders() {
    return SalesOrders.__super__.constructor.apply(this, arguments);
  }

  SalesOrders.prototype.name = 'SalesOrders';

  SalesOrders.prototype.getMyRecords = function() {
    throw new Error('Not Implemented');
  };

  SalesOrders.prototype.getRecords = function(_query, cb) {
    throw new Error('Not Implemented');
  };

  SalesOrders.prototype.updateRecords = function() {
    throw new Error('Not Implemented');
  };

  SalesOrders.prototype.getSearchRecords = function() {
    throw new Error('Not Implemented');
  };

  SalesOrders.prototype.getSearchRecordsByPDC = function() {
    throw new Error('Not Implemented');
  };

  SalesOrders.prototype.deleteRecords = function() {
    throw new Error('Not Implemented');
  };

  SalesOrders.prototype.getRelatedRecords = function() {
    throw new Error('Not Implemented');
  };

  SalesOrders.prototype.getFields = function() {
    throw new Error('Not Implemented');
  };

  SalesOrders.prototype.updateRelatedRecords = function() {
    throw new Error('Not Implemented');
  };

  SalesOrders.prototype.getUsers = function() {
    throw new Error('Not Implemented');
  };

  SalesOrders.prototype.uploadFile = function() {
    throw new Error('Not Implemented');
  };

  SalesOrders.prototype.downloadFile = function() {
    throw new Error('Not Implemented');
  };

  SalesOrders.prototype.deleteFile = function() {
    throw new Error('Not Implemented');
  };

  SalesOrders.prototype.uploadPhoto = function() {
    throw new Error('Not Implemented');
  };

  SalesOrders.prototype.downloadPhoto = function() {
    throw new Error('Not Implemented');
  };

  SalesOrders.prototype.deletePhoto = function() {
    throw new Error('Not Implemented');
  };

  return SalesOrders;

})(CrmModule);

module.exports = SalesOrders;
