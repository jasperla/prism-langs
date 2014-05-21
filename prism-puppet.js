Prism.languages.puppet = Prism.languages.extend('clike', {
  'keyword': /\b(and|case|class|default|define|else|elsif|false|if|in|import|inherits|node|or|true|undef|unless)\b/g,
  'constant': /\b(false|true|running|stopped|mounted|latest|present|absent|file|directory)\b/g,
  'comment': /#[^\r\n]*(\r?\n|$)/g,
});

Prism.languages.insertBefore('puppet', 'keyword', {
  'atrule': /[\$]+([a-z][a-z0-9_]*)?(::[a-z][a-z0-9_]*)*\b/g,
  'class': /\b([a-z][a-z0-9_]*)?(::[a-z][a-z0-9_]*)+\b/g
});

Prism.languages.insertBefore('puppet', 'keyword', {
  'resource': {
    pattern: /\b[a-zA-Z0-9_]+\s*\{/g,
    inside: {
      'resource': {
        pattern: /[a-zA-Z0-9_]/g,
      },
      rest: Prism.languages.puppet
    }
  },
  'attribute': {
    pattern: /\b[a-zA-Z]+\s*=>/g,
    inside: {
      'attribute': {
        pattern: /[a-zA-Z]/g,
      },
      rest: Prism.languages.puppet
    }
  },
});
