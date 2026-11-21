# Security policy

## Supported versions

Cola Motion is a design concept, not a maintained product. Fixes land on `main` and in the latest
published build on <https://hugoagfarizky.github.io/cola-motion/>. Older commits are not maintained.

## Reporting a vulnerability

Please **do not open a public issue** for security problems.

Use GitHub's private vulnerability reporting:

1. Go to the [Security tab](https://github.com/Hugoagfarizky/cola-motion/security).
2. Choose **Report a vulnerability**.
3. Include reproduction steps, affected browsers, and the impact you expect.

You can expect an initial response within a few days. Once a fix is ready, we will coordinate a
disclosure date and credit you unless you prefer to stay anonymous.

## Scope

Cola Motion is a static frontend with no backend and no user data storage. The most relevant areas
are:

- cross-site scripting through injected markup or untrusted query strings
- unsafe handling of URLs or canvas-generated content
- dependency vulnerabilities in the production bundle
- privacy leaks through third-party requests

## Third-party requests

The page loads Google Fonts (Anton, Inter, Pacifico) from `fonts.googleapis.com` and
`fonts.gstatic.com`. Everything else — the can, label, condensation, ice and bubbles — is generated
locally at runtime. There is no analytics, telemetry or advertising script.

## Out of scope

- Rendering differences or performance problems on unsupported GPUs and old browsers.
- Issues that require a compromised browser extension or physical device access.
- Denial of service against a server, since there is no server.
- Data loss, since the app stores nothing locally.
- Brand or trademark disputes. This is an unofficial concept; see the disclaimer in the README.
