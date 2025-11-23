# Upgrade Guide

This document describes breaking changes and how to upgrade. For a complete list of changes including minor and patch releases, please refer to the [changelog](https://github.com/ntsakosurpriseanzii/tree/develop/anzii/CHANGELOG.md).

## 8.0.0

- Middleware config:

```js
 middleware: {

        ppublic:{

            addMiddleware: middlewares.ppublic
        },
        pprivate: {

            addMiddleware: middlewares.pprivate

        },
        all: {

            addMiddleware: middlewares.all
        }

    },
```

### You must now do:

```js
 middleware: {

        public:[...middlewares.public],
        private:[...middlewares.private]
        all:[...middlewares.all]

    },
```

## 7.0.0

**This release incorporates latest standards in nodejs-based applications. This version of anzii fully supports ecma script modules, Not only does it support this latest standard in nodejs, but it has also been made to be backward-compatible with the previous versions of nodejs. Nonetheless, this is a breaking change in so many ways. We have included an upgrade guide below for users who wish to use the latest version .**

Please refer to the instructions below for upgrading to this version of anzii.

## Changes to initialization

### require

We have decided to export anzii as a named export. If you previously did:

```js
require("anzii")();
```

### You must now do:

```js
const { anzii } = require("anzii");
const hello = require("./hello");
anzii({ Hello: hello });
```

#### ESM(EcmaScript modules)

```js
import { anzii } from "anzii";
import hello from "./hello.js";
anzii({ Hello: hello });
```
