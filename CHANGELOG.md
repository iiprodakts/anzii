# Changelog

## [8.0.0] - 2025-11-23

### Fixed

- `cannot set headers after response has been sent to client` error

### Changed

- **Breaking:** config keys for middleware keys

### Added

- `filename` argument to getRootDir function to get the root directory of the passed filename
- a `configReady` method that is called when the config is
  initiated manually. It sends an event to listeners to notify them that the
  config has initialised.
- support for using absolute path for serving static files
- support for ssl using openssl
- support for https protocol for
- support for custom domain on local server
- ability to stop server on demand
- ability to launch browser

### Removed

- outdated environment variables that anziijs used for console logging
- unneccessary logs

## [7.0.0] - 2024-03-12

### Fixed

- unexpteced view render failure when a url has an optional query parameters.

### Changed

- **Breaking:** changed logging methods for framework logging
