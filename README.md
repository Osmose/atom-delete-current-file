# atom-delete-current-file

atom-delete-current-file is an Atom package that adds a command for deleting
the current file being edited.

Or you could use the "Tree View: Remove" command. It does the exact same thing,
it's just unfortunately named so that I didn't see it until after publishing it.

So I guess this is just an example of a simple atom package now. Yay!

## Usage

The `delete-current-file:delete` command will prompt you to confirm that you
want to delete the current file, and then delete it. You can bind it to whatever
key you wish in your keymap:

```cson
'atom-workspace':
  'ctrl-shift-d': 'delete-current-file:delete'
```

There is no key binding by default to avoid accidental deletes. There is also a
menu item (under Packages -> Delete Current File -> Delete) that activates the
command.

## License

Licensed under the MIT License. See `LICENSE` for details.
