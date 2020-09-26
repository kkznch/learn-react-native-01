module.exports = {
  parser: 'babel',
  filepath: '',
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'all',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  arrowParens: 'avoid',
  endOfLine: 'lf',
  requirePragma: false,
  insertPragma: false,
  overrides: [
    {
      files: '*.json',
      options: {
        parser: 'json',
      },
    },
    {
      files: '*.md',
      options: {
        parser: 'markdown',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
      },
    },
    {
      files: ['*.yml', '*.yaml'],
      options: {
        parser: 'yaml',
      },
    },
  ],
};
