const { utils } = require('stylelint')
const { ruleName } = require('./ruleName.js')

const messages = utils.ruleMessages(ruleName, {
	rejected: 'You must not hard-code unlocalized strings into the `content` property',
})

exports.messages = messages
