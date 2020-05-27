window.onload = () => {
  main();
};

/**
 * メイン関数
 */
async function main() {
  try {
    const sound = await loadSound(['sound.wav']);

    const simple = document.querySelector("#simple") ?? document.createElement('button');
    simple.addEventListener('click', () => {
      sound.play();
    });

    const chorus = document.querySelector("#chorus") ?? document.createElement('button');
    chorus.addEventListener('click', () => {
      chorusSound(sound);
    });

    const interval = document.querySelector("#interval") ?? document.createElement('button');
    interval.addEventListener('click', () => {
      intervalSound(sound);
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

/**
 * 指定した時間だけ待つ
 *
 * @param {number} time ミリ秒で指定する待ち時間
 * @return {Promise<void>}
 */
function wait(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

/**
 * 効果音を組みあせて曲ぽくする
 *
 * @param sound 音楽データ
 * @return {Promise<void>}
 */
async function chorusSound(sound) {
  sound.play();
  await wait(100);
  sound.play();
  await wait(400);
  sound.play();
  await wait(200);
  sound.play();
}

/**
 * 一定間隔で音を鳴らす
 *
 * @param sound 再生する音楽
 */
function intervalSound(sound) {
  setInterval(() => {
    sound.play();
  }, 1000);
}