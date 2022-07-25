/*
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-07-23 17:26:19
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-07-25 16:23:49
 */
import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
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
    // const html = getWebViewContent(context, "build/index.html");
    panel.webview.html = getWebViewContent(context, "build/index.html");
    vscode.window.showErrorMessage(new Date().toLocaleString());
    vscode.window.showInformationMessage("test world   hello uuu");
  });

  context.subscriptions.push(disposable);
}
function getWebViewContent(
  context: vscode.ExtensionContext,
  templatePath: string
) {
  console.log(1111);
  const resourcePath = path.join(context.extensionPath, templatePath);
  console.log(resourcePath, 2222);
  const dirPath = path.dirname(resourcePath);
  console.log(dirPath, 3333);
  let html = fs.readFileSync(resourcePath, "utf-8");
  console.log(html, 44444);
  // vscode不支持直接加载本地资源，需要替换成其专有路径格式，这里只是简单的将样式和JS的路径替换
  html = html.replace(
    /(<link.+?href="|<script.+?src="|<img.+?src=")(.+?)"/g,
    (m: any, $1: string, $2: any) => {
      return (
        $1 +
        vscode.Uri.file(path.resolve(dirPath, $2))
          .with({ scheme: "vscode-resource" })
          .toString() +
        '"'
      );
    }
  );
  return html;
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
