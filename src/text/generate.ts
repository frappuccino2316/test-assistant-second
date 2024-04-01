export const generate100Text = () => {
  const TEXTLENGTH = 100;
  generateText(TEXTLENGTH);
};

export const generate255Text = () => {
  const TEXTLENGTH = 255;
  generateText(TEXTLENGTH);
};

export const generate500Text = () => {
  const TEXTLENGTH = 500;
  generateText(TEXTLENGTH);
};

export const generate1000Text = () => {
  const TEXTLENGTH = 1000;
  generateText(TEXTLENGTH);
};

export const generate2000Text = () => {
  const TEXTLENGTH = 2000;
  generateText(TEXTLENGTH);
};

export const generateText = (textLength: number) => {
  const textInput = <HTMLInputElement>document.getElementById('textInput');
  const dummy = 'テスト用の文章です。'; // 10文字のテキストで、これを繰り返す
  const repeatNumber = textLength / dummy.length;
  const newText = dummy.repeat(repeatNumber); // 10桁単位でダミーテキストを作る

  // 10の倍数なら完了
  if (newText.length === textLength) {
    textInput.value = newText;
  } else {
    // 1桁単位も生成
    const difference = textLength - newText.length;
    const finalText = newText + dummy.slice(0, difference);
    textInput.value = finalText;
  }
};
