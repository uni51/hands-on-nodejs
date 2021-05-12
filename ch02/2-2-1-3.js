// このスクリプトは、REPL上で動作させること
fs.readdir(
  '.', // REPLの実行ディレクトリ
  (err, files) => { // コールバック
    console.log('fs.readdir()実行結果')
    console.log('err', err)
    console.log('files', files)
  }
)