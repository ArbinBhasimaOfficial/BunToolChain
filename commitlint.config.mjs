export default {
  rules: {
    // Requires standard commit types: feat, fix, docs, style, refactor, test, chore
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore'],
    ],
    // Prevents empty subject messages
    'subject-empty': [2, 'never'],
    // Prevents empty commit types
    'type-empty': [2, 'never'],
  },
};
