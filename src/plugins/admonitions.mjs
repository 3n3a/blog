// @ts-check
import { defineMdastPlugin } from 'satteri';

/**
 * Renders Docusaurus-style admonitions (`:::warning ... :::`) as
 * <aside class="admonition admonition-warning"> blocks.
 * Needs Sätteri's `directive` feature enabled (see astro.config.mjs).
 */
const TYPES = {
	note: 'Note',
	tip: 'Tip',
	info: 'Info',
	warning: 'Warning',
	caution: 'Caution',
	danger: 'Danger',
};

/** @param {string} name */
const isAdmonition = (name) => Object.hasOwn(TYPES, name);

export const admonitions = defineMdastPlugin({
	name: 'docusaurus-admonitions',

	containerDirective(node, ctx) {
		if (!isAdmonition(node.name)) return;
		ctx.setField(node, 'data', {
			hName: 'aside',
			hProperties: { className: ['admonition', `admonition-${node.name}`] },
		});

		const first = node.children[0];
		if (first?.type === 'paragraph' && first.data?.directiveLabel) {
			// :::warning[Custom title]
			ctx.setField(first, 'data', { hProperties: { className: ['admonition-title'] } });
		} else {
			ctx.prependChild(node, {
				type: 'paragraph',
				data: { hProperties: { className: ['admonition-title'] } },
				children: [{ type: 'text', value: TYPES[/** @type {keyof TYPES} */ (node.name)] }],
			});
		}
	},

	// Posts were written without directives in mind: turn accidental
	// inline/leaf directives (e.g. "foo:bar") back into plain text.
	textDirective(node, ctx) {
		ctx.replaceNode(node, { type: 'text', value: `:${node.name}${ctx.textContent(node)}` });
	},

	leafDirective(node, ctx) {
		ctx.replaceNode(node, {
			type: 'paragraph',
			children: [{ type: 'text', value: `::${node.name}${ctx.textContent(node)}` }],
		});
	},
});
