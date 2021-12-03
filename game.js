//（enchant.jsを使う準備）
enchant();

//（ページが読み込まれたときに実行される関数）
window.onload = function() {

	//新たなゲーム世界の誕生（コアオブジェクトを作成する）
	core = new Core(543, 305);

	//時は流れる (fps = 1秒あたりの処理回数(省略時は「30」))
	core.fps = 16;
	
	core.preload(
		'../image/pjsekai.png'
	);

	// (ファイルのプリロードが完了したら実行される関数）
	core.onload = function() {
		var musics = [
            // VirtualSinger
            "Tell Your World"
            ,"メルト"
            ,"初音ミクの消失"
            ,"Blessing"
            ,"ネクストネスト"
            ,"alive"
            ,"ワールドイズマイン"
            ,"Hand in Hand"
            ,"Gimme×Gimme"
            ,"ジャンキーナイトタウンオーケストラ"
            ,"on the rocks"
            ,"39みゅーじっく！"
            ,"Leia – Remind"
            ,"ローリンガール"
            ,"裏表ラバーズ"
            ,"アンノウン・マザーグース"
            ,"愛されなくても君がいる"
            ,"ODDS＆ENDS"
            ,"グリーンライツ・セレナーデ"
            ,"*ハロー、プラネット。"
            ,"千本桜"
            ,"ブレス・ユア・ブレス"
            ,"ワールズエンド・ダンスホール"
            ,"ヒビカセ"
            ,"Brand New Day"
            ,"みくみくにしてあげる♪【してやんよ】"
            ,"初音ミクの激唱"
            ,"花を唄う"
            ,"泡沫未来"
            ,"そうだった！！"
            ,"magic number"
            ,"炉心融解"
            ,"マシンガンポエムドール"
            ,"拝啓ドッペルゲンガー"
            ,"トキヲ・ファンカ"
            ,"だれかの心臓になれたなら"
            ,"右肩の蝶"
            ,"しっくうおぶはうす！"
            ,"初音天地開闢神話"
            // leo/need
            ,"ロキ"
            ,"ヒバナ-Reloaded-"
            ,"テオ"
            ,"needLe"
            ,"アスノヨゾラ哨戒班"
            ,"青く駆けろ！"
            ,"ステラ"
            ,"ウミユリ海底譚"
            ,"ドラマツルギー"
            ,"霽れを待つ"
            ,"タイムマシン"
            ,"from Y to Y"
            ,"「1」"
            ,"いかないで"
            ,"六兆年と一夜物語"
            ,"フロムトーキョー"
            ,"カゲロウデイズ"
            ,"流星のパルス"
            ,"ロストワンの号哭"
            ,"ray"
            ,"Hello,world!"
            ,"STAGE OF SEKAI"
            // MORE!MORE!JUMP!
            ,"アイドル新鋭隊"
            ,"ハッピーシンセサイザ"
            ,"ツギハギスタッカート"
            ,"Nostalogic"
            ,"ニア"
            ,"ビバハピ"
            ,"メルティランドナイトメア"
            ,"モア！ジャンプ！モア！"
            ,"恋愛裁判"
            ,"Color of Drops"
            ,"ミルククラウン・オン・ソーネチカ"
            ,"天使のクローバー"
            ,"どりーみんチュチュ"
            ,"アイノマテリアル"
            ,"ロミオとシンデレラ"
            ,"地球最後の告白を"
            ,"アイスドロップ"
            ,"マシュマリー"
            ,"Happy Halloween"
            ,"からくりピエロ"
            // Vivid Bad Squad
            ,"劣等上等"
            ,"Just Be Friends"
            ,"ドクター＝ファンクビート"
            ,"フラジール"
            ,"Ready Steady"
            ,"夜咄ディセイブ"
            ,"Forward"
            ,"ECHO"
            ,"RAD DOGS"
            ,"drop pop candy"
            ,"威風堂々"
            ,"幽霊東京"
            ,"シネマ"
            ,"トラフィック・ジャム"
            ,"Beat Eater"
            ,"チルドレンレコード"
            ,"悪魔の踊り方"
            ,"オルターエゴ"
            //ワンダーランズショータイム
            ,"スイートマジック"
            ,"ブリキノダンス"
            ,"ぼうけんのしょがきえました！"
            ,"セカイはまだ始まってすらいない"
            ,"potatoになっていく"
            ,"脱法ロック"
            ,"ダンスロボットダンス"
            ,"ミラクルペイント"
            ,"ニジイロストーリーズ"
            ,"チュルリラ・チュルリラ・ダッダッダ！"
            ,"ポジティブ☆ダンスタイム"
            ,"ワンスアポンアドリーム"
            ,"お気に召すまま"
            ,"KING"
            ,"トンデモワンダーズ"
            ,"Glory Steady Go!"
            ,"テレキャスタービーボーイ"
            ,"ショウタイム・ルーラー"
            // 25時、ナイトコードで
            ,"自傷無色"
            ,"ハロ/ハワユ"
            ,"シャルル"
            ,"悔やむと書いてミライ"
            ,"携帯恋話"
            ,"命に嫌われている。"
            ,"ジャックポットサッドガール"
            ,"乙女解剖"
            ,"独りんぼエンヴィー"
            ,"とても痛い痛がりたい"
            ,"限りなく灰色へ"
            ,"ボッカデラベリタ"
            ,"アイディスマイル"
            ,"夜に駆ける"
            ,"カナデトモスソラ"
            ,"ビターチョコデコレーション"
            ,"カトラリー"
            ,"再生"
            ,"ベノム"
            ,"ロウワー"
            //その他
            ,"セカイ"
            ,"ワーワーワールド"
            ,"群青讃歌"
		];

		//メインシーンの作成
		var createMainScene = function (){
			var scene = new Scene();
			scene.backgroundColor = "#ffffff";
			
            //背景画像
			var sekai = new Sprite(543,305);
			sekai.image = core.assets['../image/pjsekai.png'];
            sekai.frame = 0;
            sekai.x = 0;
			sekai.y = 0;

            scene.addChild(sekai);

			//世界に名前をつける
			var title = new Label("ランダム選曲");
			title.color = "#87CEFA";
			title.xdef = 220;
			title.ydef = 140;
            title.x = title.xdef;
            title.y = title.ydef;
            title.flag = 0;
			scene.addChild(title);
			
			title.addEventListener("enterframe",choice);
			scene.addEventListener("touchend",chengeToFlag);
			
            function chengeToFlag(){
                title.flag = !title.flag;
            }
            
			function choice(){
                //title.x = title.xdef;
                if(this.flag){
    				var idx = Math.floor(Math.random()*musics.length);
    				this.text = (musics[idx]);
                }
            }

			return scene;//MainScene
		}//createMainScene

		//rootSceneは使わないのでmainSceneに置き換え
		core.replaceScene(createMainScene());

	}//core.onload

// ゲームスタート
core.start();

}//window.onload
