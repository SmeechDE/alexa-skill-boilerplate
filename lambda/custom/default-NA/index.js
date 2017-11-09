/* eslint-disable  func-names */
/* eslint quote-props: ['error', 'consistent']*/
/**
 * This sample demonstrates a sample skill built with Amazon Alexa Skills nodejs
 * skill development kit.
 * This sample supports multiple languages (en-US, en-GB, de-GB).
 * The Intent Schema, Custom Slot and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/SmeechDE/alexa-skill-boilerplate
 **/

'use strict'
const Alexa = require('alexa-sdk')
const Translations = require('./assets/speech/bundle').translations

exports.handler = function(event, context) {
  const alexa = Alexa.handler(event, context)
  alexa.resources = Translations
  alexa.registerHandlers(handlers)
  alexa.execute()
}

const handlers = {
  'LaunchRequest': function () {
    this.emit(':tell', 'Boilerplate by Smeech.de')
  },
  'SessionEndedRequest': function () {
    console.log('Session ended with reason: ' + this.event.request.reason)
  },
  'AMAZON.StopIntent': function () {
    this.response.speak('Bye')
    this.emit(':responseReady')
  },
  'AMAZON.HelpIntent': function () {
    this.response.speak('You can try: alexa, boilerplate')
    this.emit(':responseReady')
  },
  'AMAZON.CancelIntent': function () {
    this.response.speak('Bye')
    this.emit(':responseReady')
  },
  'Unhandled': function () {
    this.response.speak('Sorry, I did not get that. You can try: "alexa, boilerplate"')
  }
}
