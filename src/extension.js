const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log('Device Preview eklentisi aktif!');

  const disposable = vscode.commands.registerCommand('devicePreview.openPreview', () => {
    // Aktif editörden URL almayı dene
    let defaultUrl = vscode.workspace.getConfiguration('devicePreview').get('defaultUrl') || '';

    // URL girme kutusu göster
    vscode.window.showInputBox({
      prompt: 'Önizlemek istediğiniz URL',
      value: defaultUrl || 'http://localhost:5173',
      placeHolder: 'http://localhost:5173',
      ignoreFocusOut: true
    }).then(url => {
      if (!url) return; // Kullanıcı iptal etti

      // Webview panel oluştur
      const panel = vscode.window.createWebviewPanel(
        'devicePreview',
        '📱 Cihaz Önizleme',
        vscode.ViewColumn.Beside,
        {
          enableScripts: true,
          retainContextWhenHidden: true,
          localResourceRoots: [
            vscode.Uri.file(path.join(context.extensionPath, 'src', 'webview'))
          ]
        }
      );

      // HTML içeriğini yükle
      panel.webview.html = getWebviewContent(url, context, panel.webview);
    });
  });

  context.subscriptions.push(disposable);
}

function getWebviewContent(url, context, webview) {
  const htmlPath = path.join(context.extensionPath, 'src', 'webview', 'index.html');
  let html = fs.readFileSync(htmlPath, 'utf8');

  // Script ve CSS dosyalarının URI'lerini düzelt
  const scriptUri = webview.asWebviewUri(
    vscode.Uri.file(path.join(context.extensionPath, 'src', 'webview', 'script.js'))
  );
  const styleUri = webview.asWebviewUri(
    vscode.Uri.file(path.join(context.extensionPath, 'src', 'webview', 'style.css'))
  );

  html = html.replace('{{styleUri}}', styleUri.toString());
  html = html.replace('{{scriptUri}}', scriptUri.toString());
  html = html.replace('{{previewUrl}}', url);

  return html;
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
