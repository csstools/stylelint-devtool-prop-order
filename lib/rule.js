// @ts-check

const propertiesOrderRule = require('stylelint-order/rules/properties-order')
const stylelint = require('stylelint')
const { order } = require('./order.js')
const { ruleName } = require('./ruleName.js')
const { messages } = require('./messages.js')
const { defineRule } = require('./defineRule.js')

exports.rule = defineRule(ruleName, (primaryOption, _secondaryOptions, context) => {
	context = Object(context)

	return function (root, result) {
		const canFix = Boolean(context.fix)

		const validOptions = stylelint.utils.validateOptions(result, ruleName, {
			actual: primaryOption,
			possible: ['always', true, 'never', false],
		})

		if (!primaryOption || !validOptions) {
			return
		}

		result.stylelint.ruleSeverities['order/properties-order'] = 'warning'

		propertiesOrderRule(
			order,
			{
				unspecified: 'bottomAlphabetical',
				emptyLineBeforeUnspecified: 'always',
			},
			context
		)(root, result)

		if (canFix) {
			root.walkDecls(decl => {
				const previous = decl.prev()

				if (previous?.type === 'comment') return

				if (/** @type {import('postcss').AtRule} */ (decl.parent)?.name === 'font-face') return

				let group = order.find(
					group => group.properties.includes(decl.prop.toLowerCase())
				)

				if (!group || group.groupName === 'Display') return

				const before = decl.raws?.before || ''

				if (
					before.startsWith('\n\n') ||
					(
						!previous &&
						before.startsWith('\n')
					)
				) {
					const [ indent ] = decl.raws.before?.match(/\t+$/) || [ '' ]

					if (previous) {
						decl.raws.before = decl.raws.before?.slice(1)
					}

					decl.before(`\n${previous ? '\n' : ''}${indent}/* ${group.groupName} */`)
				}
			})
		}
	}
}, messages)
