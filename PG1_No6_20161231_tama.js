var eigo = ["","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

/**
 * 行追加
 */
function insertRow(id) {
    // テーブル取得
    var table = document.getElementById(id);
    // 行を行末に追加
    var row = table.insertRow(-1);
    // セルの挿入
     var cell1 = row.insertCell(-1);
    // 行数取得
    var row_len = table.rows.length;
    cell1.innerHTML = row_len - 1;
    // 列数
    var rows = sample1_table.rows[1].cells.length;
 
    // セルの内容入力
    for ( var i = 1; i < rows; i++) {
        var cell = row.insertCell(-1);
        cell.innerHTML = '<form><input type="text"></form>';
    }
}
 
/**
 * 列追加
 */
function insertColumn(id) {
    // テーブル取得
    var table = document.getElementById(id);
    // 行数取得
    var rows = table.rows.length;
    // 英語
    table.rows[0].insertCell(-1).innerHTML = eigo[sample1_table.rows[1].cells.length];
     
    // 各行末尾にセルを追加
    for ( var i = 1; i < rows; i++) {
        var cell = table.rows[i].insertCell(-1);
        cell.innerHTML = '<form><input type="text"></form>';
    }
}

// サイトで見つけたコードを理解してからそれを元に作りました。
