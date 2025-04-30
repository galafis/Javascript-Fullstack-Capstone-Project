/*jshint esversion: 8 */
// Task: Import the natural npm package
const natural = require('natural');

// Placeholder for potential sentiment analysis functions
// Example function (can be expanded later)
function analyzeSentiment(text) {
    const language = "EN"; // Set language to English
    const lexicon = new natural.SentimentAnalyzer.SenticonLexicon(language);
    const stemmer = new natural.PorterStemmer(); // Use PorterStemmer for English
    const analyzer = new natural.SentimentAnalyzer(language, stemmer, "afinn");

    // Perform sentiment analysis
    const analysis = analyzer.getSentiment(text.split(' '));
    return analysis;
}

module.exports = { analyzeSentiment };
