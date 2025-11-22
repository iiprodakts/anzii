# Security Policy

## Supported Versions

| Version | Supported      |
| ------- | -------------- |
| 2.x     | ✅ Yes         |
| 1.x     | ⚠️ Limited     |
| 0.x     | ❌ End of Life |

We provide security updates and critical fixes only for supported versions.

---

## Reporting a Vulnerability

If you discover a security vulnerability, please **report it privately** to the maintainers. Do **not** create a public issue.

**Contact:** [security@kotii.com](mailto:security@kotii.com)

Please include:

- A detailed description of the vulnerability
- Steps to reproduce
- Impact assessment (if possible)
- Environment details (OS, dependencies, versions)

---

## Security Update Policy

- Security vulnerabilities are prioritized and fixed as soon as possible.
- Fixes will be released in the next patch version for the supported versions.
- Users will be notified via release notes or security advisories.

---

## Encryption and Credentials

- Do **not** commit secrets, credentials, or private keys to the repository.
- Use environment variables or secret management solutions for sensitive information.
- If credentials are accidentally committed, rotate them immediately.

---

## Dependencies

- Keep third-party dependencies up to date.
- Monitor for known vulnerabilities using tools like:
  - `npm audit`
  - `yarn audit`
  - `Dependabot` (GitHub security alerts)
- Avoid using unmaintained or deprecated packages.

---

## Best Practices

- Validate all inputs to prevent injection attacks.
- Use HTTPS for all network communications.
- Follow principle of least privilege when granting access.
- Regularly review code for security risks.
- Apply security patches promptly.

---

## Reporting Timeline

- We aim to respond to security reports within 48 hours.
- A fix or mitigation strategy will be communicated within 7 days.
- Updates will be made available through GitHub releases or advisories.

---

## References

- [GitHub Security Advisories](https://docs.github.com/en/code-security/security-advisories)
- [OWASP Top Ten](https://owasp.org/www-project-top-ten/)
- [CVE Database](https://cve.mitre.org/)
