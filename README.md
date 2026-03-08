# test-aegir

[![codecov](https://img.shields.io/codecov/c/github/mingder78/test-aegir.svg?style=flat-square)](https://codecov.io/gh/mingder78/test-aegir)
[![CI](https://img.shields.io/github/actions/workflow/status/mingder78/test-aegir/js-test-and-release.yml?branch=main\&style=flat-square)](https://github.com/mingder78/test-aegir/actions/workflows/js-test-and-release.yml?query=branch%3Amain)

> undefined

# Install

```console
$ npm i test-aegir
```

## Browser `<script>` tag

Loading this module through a script tag will make its exports available as `TestAegir` in the global namespace.

```html
<script src="https://unpkg.com/test-aegir/dist/index.min.js"></script>
```

# License

Licensed under either of

- Apache 2.0, ([LICENSE-APACHE](https://github.com/mingder78/test-aegir/LICENSE-APACHE) / <http://www.apache.org/licenses/LICENSE-2.0>)
- MIT ([LICENSE-MIT](https://github.com/mingder78/test-aegir/LICENSE-MIT) / <http://opensource.org/licenses/MIT>)

# Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the Apache-2.0 license, shall be dual licensed as above, without any additional terms or conditions.


# test result

```
mingdersMacBook.lan💩➜  test-aegir git:(main) ✗ bun release
$ aegir release
[01:33:14] semantic-release [started]
[1:33:16 am] [semantic-release] › ℹ  Running semantic-release version 25.0.3
[1:33:18 am] [semantic-release] › ✔  Loaded plugin "verifyConditions" from "@semantic-release/changelog"
[1:33:18 am] [semantic-release] › ✔  Loaded plugin "verifyConditions" from "@semantic-release/npm"
[1:33:18 am] [semantic-release] › ✔  Loaded plugin "verifyConditions" from "@semantic-release/github"
[1:33:18 am] [semantic-release] › ✔  Loaded plugin "verifyConditions" from "@semantic-release/git"
[1:33:18 am] [semantic-release] › ✔  Loaded plugin "analyzeCommits" from "@semantic-release/commit-analyzer"
[1:33:18 am] [semantic-release] › ✔  Loaded plugin "generateNotes" from "@semantic-release/release-notes-generator"
[1:33:18 am] [semantic-release] › ✔  Loaded plugin "prepare" from "@semantic-release/changelog"
[1:33:18 am] [semantic-release] › ✔  Loaded plugin "prepare" from "@semantic-release/npm"
[1:33:18 am] [semantic-release] › ✔  Loaded plugin "prepare" from "@semantic-release/git"
[1:33:18 am] [semantic-release] › ✔  Loaded plugin "publish" from "@semantic-release/npm"
[1:33:18 am] [semantic-release] › ✔  Loaded plugin "publish" from "@semantic-release/github"
[1:33:18 am] [semantic-release] › ✔  Loaded plugin "addChannel" from "@semantic-release/npm"
[1:33:18 am] [semantic-release] › ✔  Loaded plugin "addChannel" from "@semantic-release/github"
[1:33:18 am] [semantic-release] › ✔  Loaded plugin "success" from "@semantic-release/github"
[1:33:18 am] [semantic-release] › ✔  Loaded plugin "fail" from "@semantic-release/github"
[1:33:18 am] [semantic-release] › ⚠  This run was not triggered in a known CI environment, running in dry-run mode.
Username for 'https://github.com': mingderwang
Password for 'https://mingderwang@github.com':
[1:33:44 am] [semantic-release] › ⚠  Run automated release from branch main on repository git+https://github.com/mingder78/test-aegir.git in dry-run mode
[1:33:45 am] [semantic-release] › ✔  Allowed to push to the Git repository
[1:33:45 am] [semantic-release] › ℹ  Start step "verifyConditions" of plugin "@semantic-release/changelog"
[1:33:45 am] [semantic-release] › ✔  Completed step "verifyConditions" of plugin "@semantic-release/changelog"
[1:33:45 am] [semantic-release] › ℹ  Start step "verifyConditions" of plugin "@semantic-release/npm"
[1:33:45 am] [semantic-release] [@semantic-release/npm] › ℹ  Verify authentication for registry https://registry.npmjs.org/
[1:33:45 am] [semantic-release] [@semantic-release/npm] › ℹ  Reading npm config from /Users/ming/.npmrc
mingderwang
[1:33:47 am] [semantic-release] › ✔  Completed step "verifyConditions" of plugin "@semantic-release/npm"
[1:33:47 am] [semantic-release] › ℹ  Start step "verifyConditions" of plugin "@semantic-release/github"
[1:33:47 am] [semantic-release] [@semantic-release/github] › ℹ  Verify GitHub authentication
[1:33:47 am] [semantic-release] › ✔  Completed step "verifyConditions" of plugin "@semantic-release/github"
[1:33:47 am] [semantic-release] › ℹ  Start step "verifyConditions" of plugin "@semantic-release/git"
[1:33:47 am] [semantic-release] › ✔  Completed step "verifyConditions" of plugin "@semantic-release/git"
[1:33:47 am] [semantic-release] › ℹ  No git tag version found on branch main
[1:33:47 am] [semantic-release] › ℹ  No previous release found, retrieving all commits
[1:33:47 am] [semantic-release] › ℹ  Found 3 commits since last release
[1:33:47 am] [semantic-release] › ℹ  Start step "analyzeCommits" of plugin "@semantic-release/commit-analyzer"
[1:33:47 am] [semantic-release] [@semantic-release/commit-analyzer] › ℹ  Analyzing commit: AegIR_SKIP_README_CHECK=1 to skip readme check
[1:33:47 am] [semantic-release] [@semantic-release/commit-analyzer] › ℹ  The commit should not trigger a release
[1:33:47 am] [semantic-release] [@semantic-release/commit-analyzer] › ℹ  Analyzing commit: init, remove readme from bun, and create a new readme automatically with npx aegir check-project
[1:33:47 am] [semantic-release] [@semantic-release/commit-analyzer] › ℹ  The commit should not trigger a release
[1:33:47 am] [semantic-release] [@semantic-release/commit-analyzer] › ℹ  Analyzing commit: init
[1:33:47 am] [semantic-release] [@semantic-release/commit-analyzer] › ℹ  The commit should not trigger a release
[1:33:47 am] [semantic-release] [@semantic-release/commit-analyzer] › ℹ  Analysis of 3 commits complete: no release
[1:33:47 am] [semantic-release] › ✔  Completed step "analyzeCommits" of plugin "@semantic-release/commit-analyzer"
[1:33:48 am] [semantic-release] › ℹ  There are no relevant changes, so no new version is released.
[01:33:48] semantic-release [completed]
```
