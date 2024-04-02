import {
  generate100Text,
  generate255Text,
  generate500Text,
  generate1000Text,
  generate2000Text,
} from './text/generate';
import { countTextInputEvent } from './text/count';
import { getTextInput } from './text/util';

const btn100 = document.getElementById('generate100');
btn100!.addEventListener('click', generate100Text);

const btn255 = document.getElementById('generate255');
btn255!.addEventListener('click', generate255Text);

const btn500 = document.getElementById('generate500');
btn500!.addEventListener('click', generate500Text);

const btn1000 = document.getElementById('generate1000');
btn1000!.addEventListener('click', generate1000Text);

const btn2000 = document.getElementById('generate2000');
btn2000!.addEventListener('click', generate2000Text);

const textInput = getTextInput();
textInput.addEventListener('input', countTextInputEvent);
