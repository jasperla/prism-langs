Prism.languages.ucf = {
  'keyword': /\b(TNM_NET|NET|LOC|PERIOD|IOSTANDARD|TIMESPEC|CONFIG|DRIVE|SLEW|LVTTL|LVCMOS25|SLOW|FAST)\b/g,
  'comment': /#[^\r\n]*(\r?\n|$)/g,
  'string': /("|')(\\?.)*?\1/g,
};

Prism.languages.insertBefore('ucf', 'keyword', {
  'important': {
    pattern: /\s+(\||\<|\>)/g,
    inside: {
      'important': /(\|)/,
    },
    rest: Prism.languages.ucf
  }
});
