/**
 * Commitlint Configuration
 *
 * This project uses Conventional Commits standard.
 * Commit message format: <type>(<optional-scope>): <description>
 *
 * Examples:
 *   feat: add user registration endpoint
 *   fix(auth): resolve token expiration issue
 *   infra: add docker-compose with postgresql
 *
 * Available types:
 * ─────────────────────────────────────────────────────────
 * | Type     | Description                                |
 * ─────────────────────────────────────────────────────────
 * | feat     | New feature                                |
 * | fix      | Bug fix                                    |
 * | docs     | Documentation only changes                 |
 * | refactor | Code change (no new feature or bug fix)    |
 * | test     | Adding or updating tests                   |
 * | infra    | Docker, config, deps, env, tooling         |
 * ─────────────────────────────────────────────────────────
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'feat',
      'fix',
      'docs',
      'refactor',
      'test',
      'infra',
    ]],
  },
};
