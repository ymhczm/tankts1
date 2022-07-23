import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "json2ts" is now active in the web extension host!'
  );

  let disposable = vscode.commands.registerCommand("json2ts.helloWorld", () => {
    const panel = vscode.window.createWebviewPanel(
      "JSON2TS", // Identifies the type of the webview. Used internally
      "JSON2TS", // Title of the panel displayed to the user
      vscode.ViewColumn.One, // Editor column to show the new webview panel in.
      {} // Webview options. More on these later.
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
