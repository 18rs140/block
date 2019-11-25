// This is a JavaScript file

// ncmbController.js

var ncmbController = {
  APPLICATION_KEY: "YOUR_APPLICATION_KEY",
    CLIENT_KEY: "YOUR_CLIENT_KEY",

    ncmb: null,
    currentUser: null,  // ログインしたユーザーのオブジェクトを格納
    screenSize: null,    // 
    //スコア送信
    sendScore: function(score) {
    var self = this;

    // [1]Score（クラス）を生成
    var Score = self.ncmb.DataStore("ScoreClass");

    // [2]インスタンス生成、スコア数値をフィールド名"score"にセット
    var scoreData = new Score({score: score});

    // [3]送信処理
    scoreData.save()
        .then(function (saved) {
            alert("スコア送信完了！");
        })
       .catch(function(err){
            console.log(err);
        });
},


    // 初期化
    init: function(screenSize) {
        var self = this;
        self.ncmb = new NCMB(self.APPLICATION_KEY, self.CLIENT_KEY);    // mobile backendの初期化
        self.screenSize = screenSize;
    }
}