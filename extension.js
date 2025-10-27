// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	
    let disposable = vscode.commands.registerCommand('comment-template.insertTemplate', function () {

        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        const template = `"""
Описание функции.

Параметры:
    param1 (type): описание параметра
    param2 (type): описание параметра

Возвращает:
    type: описание результата
"""`;

        editor.edit(editBuilder => {
            editBuilder.insert(editor.selection.active, template);
        });
    });

    context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
