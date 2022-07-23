/*
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-07-23 10:46:54
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-07-23 14:39:20
 */
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "tankts" is now active in the web extension host!'
  );

  let disposable = vscode.commands.registerCommand("tankts.helloWorld", () => {
    vscode.window.showInformationMessage(
      "Hello World from tankTs in a web extension host!"
    );
  });

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
