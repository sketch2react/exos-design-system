# Welcome to Stratos Tokens!

## What do I do now?

You can select an artbord in the Explorer panel to the left to view your design token data. Your
design token data will be automatically updated in Stratos Tokens as soon as you do a change and
save your linked design document.

You can also view your design token data in the file tree (below the list of artboards). You'll find
the json-data in [Your project folder]/data/json and your javascript variables (used by the NPM
export) in [Your project folder]/data/js. Each artboard is represented by a file with the same name.

You can copy/paste the tokens and use them wherever you like or download them as an NPMjs export
bundle.

The option to download your tokens as an NPMjs bundle is found in the Download panel.

(It's possible to open your project in Finder/Explorer and get direct access to the json- and
javascript-files)

## How to use the build-in support for Style Dictionary?

- Select the menu option View > Project in Terminal/Command...
- In the Terminal/Command window type "npm install" and press enter.
- In the very same Terminal/Command window type "npm run build" and press enter.

That's it! You now have a folder in your project named "styledictionary" containing platform
specifik design tokens!

Note: You may have to refresh the file tree in order for the new folder to appear. Just press the
little refresh icon next to the heading "Files" in the Explorer panel.

## How to change the behaviour of Style Dictionary?

To change Style Dictionary's output you modify the file "config.json" located in your project
folder. You then redo the steps from the previous section.

## But I want to use Salesforce's Theo!

Even though Stratos Tokens comes with a build-in support for Style Dictionary it is fully possible
to use Theo instead.

### This topic is a bit more advanced.

- Select the menu option View > Project in Terminal/Command...
- In the Terminal/Command window type "npm install --save theo" and press enter.

That's it! Now you have Theo CLI at your disposal. You can read more on how to use it to generate
the platform specific tokens you would like to have here:

https://github.com/salesforce-ux/theo/blob/master/CLI.md https://www.npmjs.com/package/theo
