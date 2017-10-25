/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a sample skill built with Amazon Alexa Skills nodejs
 * skill development kit.
 * This sample supports multiple languages (en-US, en-GB, de-GB).
 * The Intent Schema, Custom Slot and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/SmeechDE/alexa-skill-boilerplate
 **/

'use strict'
const Alexa = require("alexa-sdk")
const Translations = require("./translations/bundle").translations

exports.handler = function(event, context) {
    var alexa = Alexa.handler(event, context)
    alexa.resources = Translations
    alexa.registerHandlers(handlers)
    alexa.execute()
}

var handlers = {
    'LaunchRequest': function () {
        this.emit('SayHello')
    },
    'HelloWorldIntent': function () {
        this.emit('SayHello')
    },
    'MyNameIsIntent': function () {
        this.emit('SayHelloName')
    },
    'SayHello': function () {
        this.response.speak('Hello World!')
                     .cardRenderer('hello world', 'hello world')
        this.emit(':responseReady')
    },
    'SayHelloName': function () {
        var name = this.event.request.intent.slots.name.value
        this.response.speak('Hello ' + name)
            .cardRenderer('hello world', 'hello ' + name)
        this.emit(':responseReady')
    },
    'SessionEndedRequest' : function() {
        console.log('Session ended with reason: ' + this.event.request.reason)
    },
    'AMAZON.StopIntent' : function() {
        this.response.speak('Bye')
        this.emit(':responseReady')
    },
    'AMAZON.HelpIntent' : function() {
        this.response.speak("You can try: 'alexa, hello world' or 'alexa, ask hello world my" +
            " name is awesome Aaron'")
        this.emit(':responseReady')
    },
    'AMAZON.CancelIntent' : function() {
        this.response.speak('Bye')
        this.emit(':responseReady')
    },
    'Unhandled' : function() {
        this.response.speak("Sorry, I didn't get that. You can try: 'alexa, hello world'" +
            " or 'alexa, ask hello world my name is awesome Aaron'")
    }
}
