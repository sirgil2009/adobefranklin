
import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {

    let zinIndex = 1;
  /* change to ul, li */
  const mainDiv = document.createElement('div');
  [...block.children].forEach((row) => {
    const div = document.createElement('div');
    div.innerHTML = row.innerHTML;
    if (div.children.length === 1 && div.querySelector('picture')){
        div.className = 'stack-image';
        div.querySelector('picture').style.zIndex =zinIndex;
        zIndex++;
        div.querySelector('picture').addEventListener('click', function(){
            zIndex--;});
    }
    else div.className = 'stack-epmty';
    mainDiv.append(div);
  });
  mainDiv.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(mainDiv);
}
