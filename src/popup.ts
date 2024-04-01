import { generate100Text } from './text/generate';

// document.addEventListener('DOMContentLoaded', function () {
//   renderConfiguredDomains();
// });

const btn100 = document.getElementById('generate100');
btn100!.addEventListener('click', generate100Text);
