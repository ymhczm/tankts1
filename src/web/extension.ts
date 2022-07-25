/*
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-07-23 17:26:19
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-07-25 13:35:07
 */
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "json2ts" is now active in the web extension host!'
  );

  let disposable = vscode.commands.registerCommand("json2ts.helloWorld", () => {
    const panel = vscode.window.createWebviewPanel(
      "JSON2TS", // Identifies the type of the webview. Used internally
      "JSON2TS", // 视图标题
      vscode.ViewColumn.One, // 显示在编辑器的哪个部位
      {
        enableScripts: true, // 启用JS，默认禁用
        retainContextWhenHidden: true, // webview被隐藏时保持状态，避免被重置
      } // Webview options. More on these later.
    );
    console.log(getWebviewContent());
    panel.webview.html = getWebviewContent();
    vscode.window.showErrorMessage(new Date().toLocaleString());
    vscode.window.showInformationMessage("test world   hello uuu");
  });

  context.subscriptions.push(disposable);
}

function getWebviewContent() {
  return `<!DOCTYPE html>
		<html lang="en">
		<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>JSON2TS</title>
		</head>
		<body>
				<p>erthngtyhbh</p>
				<input/>
				<img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
		</body>
		</html>`;
}

export function deactivate() {}
