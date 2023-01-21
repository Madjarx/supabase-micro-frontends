# mife-client

## Installation

run `yarn install` at the root level `./` to install the dependencies

## Running scripts

The way you would run scripts from the root level would be the following:\
```yarn workspace <workspace_name> <command>```

## Installing additional dependencies

Every package in `./packages/*` has its own node_modules that all point to the root level node modules `./node_modules`.

In order to add a dependency, you will still have to install it in the package you want to use it, but `whenever you install a dependency, anywhere, it will end up in root level node_modules`

If you install a dependency in `remote` package, it will be automatically added to `./node_modules` and `./packages/remote/node_modules` will hold a link to the root level package. Package.json in the remote folder will need to contain information about that package

# Setting up the project - ENVs and consts

You will need to provide some information before you can run the project:

- Provide the information to the supabase create client instance inside `./packages/*/src/supabase.js` (all of them)
- Provide the username and password combination that is valid for your supabase backend inside a `./packages/shell/src/App.jsx`.

# Starting the Micro frontends

## Understanding how this works

In this particular case we have 2 applicationsL `shell` and `remote`.

### Remote

As names suggest, remote app exposes the files that we declare in `vite.config.js` under the `federation()` plugin section. The file specified in this section, in our case the `remoteEntry.js` holds the manifest file that tells "what" is being exported (in our case its `./src/components/Button.jsx` as `Button`).

This file, the `remoteEntry.js`, will be present only in the build/dist/lib folder, after the vite build process. I advise creating a `nodemon` script or using `vite build --watch` for the hot reload if you're developing a remote component/app.

Once the project is built, you can host the `prod` version on a dev server by running:
> yarn preview\
> visit - http://localhost:5001

Congrats, your application is now running on a port specified in the `vite.config.js`, visit - http://localhost:5001

### Shell (Host)

Host is the entity that will impor the previously exposed module at runtime. It will look fro the `remoteEntry.js` file on the specified address, in our case `http://localhost:5001/assets/remoteEntry.js` (bundled build folder has it inside of itself, under the assets directory).

After specifying where to look for the exposed files, they will be injected at runtime. If the file is not present, the import will fail, so we have to defend ourselves from it by wrapping the import into a `<Suspense>`.

You can run the following command to see your remote application (NOTE: you need to run the shell application):
>yarn dev\
>visit - http://localhost:5174

You're all set and good to go



