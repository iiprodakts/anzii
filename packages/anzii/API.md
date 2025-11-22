# Kotii-Auth API

## AuthProvider

AuthProvider is a wrapper component that mantains your login/logout state. It takes three optional props/arguments these are:

| Prop       | Required | Description                                         |   Type   |
| ---------- | -------- | --------------------------------------------------- | :------: |
| `authUser` | No       | Sets initial user(useful in server renderd apps)    |  Object  |
| `onLogin`  | No       | Sets a function that should run on successful login | Function |
| `onLogout` | No       | Sets a function that should run on logout           | Function |

### Example

```js
let myUser = null;
let onLogin = (user) => {
  console.log("My Logged In User");
};
let onLogout = () => {
  console.log("User is Logged out");
};
<AuthProvider authUser={initialUser} onLogin={onLogin onLogoug={onLogout}}>
  <App />
</AuthProvider>;
```

## registerOnLoginActions

registerOnLoginActions allows you to register

| argument    | Required | Description                       |   Type   |
| ----------- | -------- | --------------------------------- | :------: |
| `action(s)` | yes      | a list of actions to run on login | Function |

### Example

```js
import { registerOnLoginActions } from "kotii-auth";
import { useNavigate } from "kotii-router";
import { useEffect } from "react";

export function RedirectAfterLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    const unregister = registerOnLoginActions(() => {
      navigate("/dashboard");
    });

    return unregister;
  }, []);

  return null;
}
```

## registerOnLogoutActions

registerOnLogoutActions allows you to register an action that will be run when a user logs out of an app.

| argument    | Required | Description                        |   Type   |
| ----------- | -------- | ---------------------------------- | :------: |
| `action(s)` | yes      | a list of actions to run on logout | Function |

### Example

```js
import { registerOnLogoutActions } from "kotii-auth";
import { useEffect } from "react";
import { queryClient } from "react-query";

export function ClearCacheOnLogout() {
  useEffect(() => {
    const unregister = registerOnLogoutActions(() => {
      queryClient.clear(); // clear cached on logout
    });

    return unregister;
  }, []);

  return null;
}
```

## useAuthRegisterActions

useAuthRegisterActions allows you to register functions that will run when a user logs in or logs out of the app. It is basically just a convenience hook to add login and logout actions on one go.

| argument   | Required | Description               |   Type   |
| ---------- | -------- | ------------------------- | :------: |
| `onLogout` | yes      | a action to run on login  | Function |
| `onLogout` | yes      | a action to run on logout | Function |

### Example

```js
import React from "react";
import { analytics } from "../analytics";
import { useRegisterAuthActions } from "kotii-auth";

export function AuthAnalytics() {
  useRegisterAuthActions({
    onLogin: (user) => analytics.track("login", { userId: user.id }),
    onLogout: () => analytics.track("logout"),
  });

  return null;
}
```

## useAuth

useAuth is a hook central to kotii-auth's authentication functionality, it returns things such as the function to login with

| Resource               | Type                             | Description                                                        | Example Usage                  |
| ---------------------- | -------------------------------- | ------------------------------------------------------------------ | ------------------------------ |
| `user`                 | `object \| null`                 | The authenticated user object, or `null` if logged out.            | `user?.name`                   |
| `isAuthenticated`      | `boolean`                        | Indicates whether a user is logged in.                             | `if (isAuthenticated) …`       |
| `login`                | `(credentials) => Promise<void>` | Function to authenticate a user. Sets `user`.                      | `login({ email, password })`   |
| `logout`               | `() => Promise<void>`            | Function to log the user out. Clears `user`.                       | `logout()`                     |
| `loading` _(optional)_ | `boolean`                        | Whether auth state is initializing or login/logout is in progress. | `if (loading) return spinner;` |
| `error` _(optional)_   | `string \| null`                 | Authentication error message.                                      | `if (error) showError(error);` |

### Example

```js
import React from "react";
import { useAuth } from "./useAuth";

export function UserInfo() {
  const { user = null } = useAuth();

  if (!user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <div>
      <h3>Name, {user.name}!</h3>
      <p>Surname: {user.surname}</p>
    </div>
  );
}
```
