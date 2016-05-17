/** @babel */
import fs from 'fs';
import path from 'path';

import {CompositeDisposable} from 'atom';

let subscriptions = null;

export function activate(state) {
    subscriptions = new CompositeDisposable();
    subscriptions.add(atom.commands.add('atom-workspace', {
        'delete-current-file:delete': deleteCurrentFile,
    }));
}

export function deactivate() {
    subscriptions.dispose();
}

function deleteCurrentFile() {
    let editor = atom.workspace.getActiveTextEditor();
    if (editor && editor.getPath()) {
        let pathToDelete = editor.getPath();
        atom.confirm({
            message: `Are you sure you want to delete ${path.basename(pathToDelete)}?`,
            detailedMessage: pathToDelete,
            buttons: {
                Delete: () => deleteFile(pathToDelete),
                Cancel: () => {},
            },
        });
    }
}

function deleteFile(pathToDelete) {
    fs.unlink(pathToDelete, function(err) {
        let shortPath = path.basename(pathToDelete);
        if (err) {
            atom.notifications.addError(`Failed to delete ${shortPath}`, {
                detail: err
            });
        } else {
            atom.notifications.addSuccess(`Deleted ${shortPath}`);
        }
    });
}
