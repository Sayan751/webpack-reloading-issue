# webpack-dev-server reloading issue

The repository is created to demonstrate a potential bug in the latest version of webpack-dev-server (v3.4.1 at the time of writing). This version ignores changes in `node_modules`, and does not trigger a new compilation. Whereas, when the `webpack-dev-server` dependency is pinned to `3.3.1`, it works.

## Steps to reproduce

1. Clone this repo.
2. Do `npm i` in the `main` folder. Main has a dependency on the `service` package, included in `main` via a direct tarball dependency to `service/service-1.0.0.tgz`.
3. Do `npm start` in `main`. This should start the `webpack-dev-server`.
4. Go to `main/node_modules/service/index.js`, and make some change.
5. The `webpack-dev-server` does not trigger a build.

You may stop the process, pin the `webpack-dev-server` to `3.3.1`, and repeat the the process to verify that the earlier version worked.
