import type { RuleBase, RuleMessages } from 'stylelint'
import type { RuleName } from './ruleName.js'

export interface Rule {
	ruleName: RuleName

	rule: RuleBase<boolean, any> & {
		ruleName: RuleName
		messages: RuleMessages
	}

	messages: RuleMessages
}

export declare const rule: Rule
