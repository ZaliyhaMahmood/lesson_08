'use strict';

import {expect} from 'chai';
const sinon = require('sinon'); 

import {MainController} from '../src/app/controllers/main.controller.js';

var mockService, ctrl;

describe('Angular Test', function() {

  beforeEach(function() {

    // define the mocked service
    mockService = {
      list: [1, 2],
      add: sinon.spy()
    }
    ctrl = new MainController(mockService);
  });

  it('should load the list', function(){
    expect(ctrl.list.length).to.equal(2);
  });

  it('should add an item to the service', function(){
    ctrl.addToService(3);
    expect(mockService.add.called).to.equal(true);
  });
});