window.onload = () => {
  main();
};

/**
 * メイン関数
 */
async function main() {
  try {
    const sound = await loadSound(['sound.wav']);
    const button = document.querySelector("#button") ?? document.createElement('button');
    button.addEventListener('click', () => {
      sound.play();
    });
  } catch(e) {
    throw e;
  }
}

/**
 * 指定した音楽ファイルを読み込む
 *
 * @param {string[]} filePaths ファイルパス
 * @return {Promise<Howl>} 音楽
 */
function loadSound(filePaths) {
  return new Promise(resolve => {
    const sound = new Howl({
      src: filePaths
    });
    sound.once('load', function(){
      resolve(sound);
    });
  });
}


