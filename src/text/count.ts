export const countTextInputEvent = (event: Event) => {
  const { target } = event;
  if (!(target instanceof HTMLInputElement)) {
    return;
  }
  const text = target.value;
  const textLength = countText(text);
  const count = document.getElementById('count');
  count!.innerHTML = textLength.toString();
};

const countText = (text: string): number => {
  return [...text].length;
};
