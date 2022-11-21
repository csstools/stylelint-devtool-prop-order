import type { RuleBase, RuleMessages } from 'stylelint'

export declare function defineRule<
	Name extends string,
	Rule extends RuleBase<boolean, any>,
	Messages extends RuleMessages
>(
	name: Name,
	rule: Rule,
	messages: Messages
): {
	ruleName: Name;
	rule: Rule & {
		ruleName: Name;
		messages: Messages;
	};
	messages: Messages
}
