// このファイルに処理を記述する
let data;
let done;

// もしデータが保存されていれば
if (localStorage.getItem('bucketList')){
	data = JSON.parse(localStorage.getItem('bucketList'));
// もしデータが保存されていなければ
} else {
	data = [];
}

if (localStorage.getItem('doneList')){
	done = JSON.parse(localStorage.getItem('doneList'));
} else {
	done = [];
}

// localstorageの中身を確認
console.log(data);
console.log(done);

// 保存済notyetを画面に表示
for (let displayText of data){
	addDream(displayText,'.not-yet');
}
// 保存済doneを画面に表示
for (let displayText of done){
	addDream(displayText,'.done')
}

// Addボタン要素の取得
let addBtn = document.querySelector('#btn');
// Addボタンが押された時のイベントを取得
addBtn.addEventListener('click',function(){

	// 1.入力文字のチェック
	let inputText = document.querySelector('#dream').value;

	// inputTextが空じゃなかったら処理を行う
	if(inputText !== ''){

		// liタグを追加する 2,3の処理を実行
		addDream(inputText);
		// 配列に新しい入力文字を追加
		data.push(inputText);
		// 配列をローカルストレージに保存
		localStorage.setItem('bucketList',JSON.stringify(data));

		// 4.入力欄を空っぽにする
		document.querySelector('#dream').value = '';
	}
});

// 追加するliタグの生成する関数
function addDream(task_text){
	// 2.ulの中にliとして表示する
	// 親要素のulを変数に取得
	let not_yet = document.querySelector('.not-yet');
	// 追加予定のliタグを生成
	let eachList = document.createElement('li');
	// liのクラスにlistを追加
	eachList.classList.add('eachList');
	// liタグの文字を入力された文字に代入する
	eachList.textContent = task_text;
	console.log(eachList);

	// 3.liの中にremoveボタンとなるdivタグを追加
	// remove,doneボタン用のdivタグを生成
	let buttons = document.createElement('div');
	buttons.classList.add('buttons');

	// remove用iタグを追加
	let i_remove = document.createElement('i')
	i_remove.classList.add('far');
	i_remove.classList.add('fa-trash-alt');
	i_remove.classList.add('fa-lg');

	// done用iタグを追加
	let i_done = document.createElement('i');
	i_done.classList.add('far');
	i_done.classList.add('fa-check-circle');
	i_done.classList.add('fa-lg');

	// removeの処理
	i_remove.addEventListener('click',function(){
		let hantei = confirm('あなたはこの夢を諦めますか？');
		if (hantei == true){
			let del_text = this.parentElement.textContent;
			// 配列の文字列(この場合inputText)を削除する処理
			data.splice(data.indexOf(del_text),1);
			// liタグすべてを削除
			buttons.parentElement.remove();
			// 削除済の配列を全体的にローカルストレージに上書き保存
			localStorage.setItem('bucketList',JSON.stringify(data));
		}
	});
		// 生成したiタグを親要素divbuttonsに追加
		buttons.appendChild(i_remove);
		buttons.appendChild(i_done);
		eachList.appendChild(buttons);
		not_yet.appendChild(eachList);
}














