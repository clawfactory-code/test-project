# test-project

First standalone project repo for `elimaine.com/test`.

This repo proves the pattern where a project lives independently under `clawfactory-code` and is listed by the `elimaine-com-refresh` host site.

Implementation work is proposed through PRs and merged only after human approval.

## Local Development

```sh
npm install
npm run dev
```

## Validation

```sh
npm test
npm run build
```

## Host Integration Contract

The host site consumes project metadata through its `/test` project registry:

- Slug: `test`
- Title: `Hello World Test Project`
- Repo: `https://github.com/clawfactory-code/test-project`
- Host route: `/test/test`
- Build output: `dist/`

## Update Trigger

This repo includes a placeholder GitHub Actions workflow at `.github/workflows/notify-host.yml`.

Recommended final pattern:

1. Project repo validates changes on PR.
2. After merge to `main`, project repo sends a GitHub `repository_dispatch` event to `clawfactory-code/elimaine-com-refresh`.
3. Host repo refresh workflow reads the project registry and updates/deploys the `/test` integration.

No deployment secrets are committed here.
