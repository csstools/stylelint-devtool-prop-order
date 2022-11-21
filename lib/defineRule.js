function defineRule(ruleName, rule, messages) {
	return {
		ruleName,
		messages,
		rule: Object.assign(rule, { ruleName, messages }),
	}
}

exports.defineRule = defineRule
