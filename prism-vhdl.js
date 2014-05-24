Prism.languages.vhdl = {
  'constant': /\b(use|library)\b/gi,
  'keyword': /\b(and|architecture|begin|bus|case|component|constant|downto|else|end|entity|if|in|inout|is|map|not|then|type|or|others|out|port|process|read|std_logic|std_logic_vector|signal|to|write)\b/gi,
  'comment': /--[^\r\n]*(\r?\n|$)/g,
  'number': /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+)\b/g,
  'prolog': /(\:=|&lt;=|=&gt;)/g,
	'atrule': {
		pattern: /[a-z0-9_]+\(/ig,
		inside: {
			'punctuation': /\(/
		}
	},
};

Prism.languages.insertBefore('vhdl', 'number', {
  'string': {
    pattern: /("|')(\\?.)*?\1/g,
    inside: {
      'string': /("|')(\\?.)*?\1/g,
    },
    rest: Prism.languages.vhdl
  },
});
