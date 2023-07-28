# digital-paper

Ever find yourself deleting whatever you write as soon as you type it out? I certainly do.

This app aims to solve that by disabling all the delete functions (backspace, delete key, Ctrl+x) in its editor.
Anything you write will stay there, giving it the kind of permanence akin to writing with a pen on paper.

The goal isn't to get perfect, typo-free writing on the first try, but rather to be accepting of flaws,
so you can focus on getting the ideas down first, and only then do some editing in a later pass.

![image](https://github.com/danferns/digital-paper/assets/57069381/11726ecb-349e-4e6a-b981-3543089342bf)


## Developing

Once you've cloned the repository and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of Digital Paper:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
