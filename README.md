
# my-portfolio

LINK: https://irutu.netlify.app

## Getting stated

You can play with these demo projects in your browser, without installing anything on your machine.

- [app demo](https://stackblitz.com/fork/github/vitejs/vite-plugin-react-pages/tree/main/packages/create-project/template-app?file=README.md&terminal=dev)
- [library demo](https://stackblitz.com/fork/github/vitejs/vite-plugin-react-pages/tree/main/packages/create-project/template-lib?file=README.md&terminal=dev)
- [library monorepo demo](https://stackblitz.com/fork/github/vitejs/vite-plugin-react-pages/tree/main/packages/create-project/template-lib-monorepo?file=README.md&terminal=dev)

### Initialize a demo project locally

1. Initialize a vite-pages project (with npm 7+):
   - execute `npm init vite-pages app-demo -- --template app` to initialize an app project, or
   - execute `npm init vite-pages library-demo -- --template lib` to initialize a library project, or
   - execute `npm init vite-pages library-monorepo-demo -- --template lib-monorepo` to initialize a library project with monorepo setup.
   - If you are using **npm 6.x**, the extra double-dash before `--template` should be deleted. For example, `npm init vite-pages app-demo --template app`.
2. `npm install`
3. `npm run dev` and play with the local dev environment.
4. `npm run build`.
5. `npm run ssr`. You can [disable javascript in your browser](https://developer.chrome.com/docs/devtools/javascript/disable/), to verify if it can still render.

### Read the documentation

Read [the documentation of vite-plugin-react-pages](https://vitejs.github.io/vite-plugin-react-pages/).
