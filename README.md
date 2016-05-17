# atom-delete-current-file

atom-delete-current-file is an Atom package that adds a command for deleting
the current file being edited.

## Usage

The `delete-current-file:delete` command will prompt you to confirm that you
want to delete the current file, and then delete it, closing the currently-open
tab as well. You can bind it to whatever key you wish in your keymap:

```cson
'atom-workspace':
  'ctrl-shift-d': 'delete-current-file:delete'
```

There is no key binding by default to avoid accidental deletes. There is also a
menu item (under Packages -> Delete Current File -> Delete) that activates the
command.

## Contributing

First, if you're interested in contributing, thank you! It's awesome that you
want to help!

The easiest way to contribute is to [file an issue][] with the bug you've found
or the new feature you want added. If you're interested in implementing the fix
for your request yourself, or fixing an issue submitted by someone else, read
on.

[file an issue]: https://github.com/Osmose/advanced-open-file/issues/new

### Developer Setup

Setting up a development install is easy with [apm][]:

```sh
$ apm develop atom-delete-current-file /path/to/checkout
```

The command above will use Git to clone delete-current-file to the
`/path/to/checkout` directory, download the dependencies, and create a symlink
in your `.atom` profile for the package.

Now, if you launch Atom with the `-d` flag, Atom will load the development
checkout of delete-currnet-file (instead of the released version, if you have it
installed). Any changes you make to the code will be reflected if you use the
`Window: Reload` command in the [Command Palette][] to reload the editor.

That should be all you need to get started. Create a branch, write your changes,
and submit the branch as a pull request, and you should hear back shortly!

[apm]: https://github.com/atom/apm
[Command Palette]: https://atom.io/docs/latest/getting-started-atom-basics#command-palette

## License

Licensed under the MIT License. See `LICENSE` for details.
