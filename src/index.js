var Alexa = require('alexa-sdk');
var Data = require('./data');

const skillName = "The Polyglot";

var handlers = {

    "LanguageIntent": function(){
        function getRandomInt(min, max){
            return Math.floor(Math.random() * (max - min)) + min;
        }

        var speechOutput = "";

        if(this.event.request.intent.slots.Language.value && this.event.request.intent.Language.value.toLowerCase() == "java"){
            speechOutput = Data.java[getRandomInt(0, 2)];
        } else if(this.event.intent.slots.Language.value && this.even.request.intent.Language.value.toLowerCase() == "ionic framework"){
            speechOutput = Data.ionic[getRandomInt(0, 3)];
        } else{
            speechOutput = "I don't have anything interesting to share regarding what you've asked."
        }

        this.emit(':tellWithCard', speechOutput, skillName, speechOutput);
    },

    "AboutIntent": function(){
        var speechOutput = "This is an example based on the developer Nic Raboy by Fred McHale";
        this.emit(':tellWithCard', speechOuput, skillName, speechOutput);
    },

    "AMAZON.HelpIntent": function(){
        var speechOutput = "";

        speechOutput += "Here are some things you can say: ";
        speechOutput += "Tell me something interesting about Java. ";
        speechOutput += "Tell me about the skill developer. ";
        speechOutput += "You can also say stop if you are done. ";
        speechOutput += "So how can I help?";
        
        this.emit(':ask', speechOutput, speechOutput);
    },

    "AMAZON.StopIntent": function(){
        var speechOutput = "Goodbye";
        this.emit(':tell', speechOutput);
    },

    "AMAZON.CancelIntent": function(){
        var speechOutput = "Goodbye";
        this.emit(':tell', speechOutput);
    },

    "LaunchRequest": function(){
        var speechOutput = "";
        speechOutput += "Welcome to " + skillName + ". ";
        speechOutput += "You can ask a question like, tell me something interesting about Java.  ";
        var repromptSpeech = "For instructions on what you can say, please say help me.";
        this.emit(':ask', speechText, repromtSpeech);
    }
};

exports.handler = function(event, context){
    var alexa = Alexa.handler(event, context);
    alexa.appId = "amzn1.echo-sdk-ams.app.APP_ID";
    alexa.registerHandlers(handlers);
    alexa.execute();
};




