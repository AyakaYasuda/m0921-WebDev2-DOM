/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
const p = document.querySelector('p');
p.innerHTML = p.innerText
  .split(' ')
  .map(word => {
    return word.length > 8
      ? `<span style="background-color: yellow">${word}</span>`
      : word;
  })
  .join(' ');

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/
// p.setAttribute('src', 'http://officeipsum.com/');
const link = document.createElement('a');
link.setAttribute('href', 'http://officeipsum.com/');
link.textContent = 'link';
document.body.appendChild(link);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/
const newContents = p.innerHTML.replaceAll('.', '.</p><p>');
p.innerHTML = newContents;

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
const pWords = p.textContent.replaceAll('\n', '').split(' ');
const pWordsWithoutSpace = pWords.filter(word => word !== '');
const wordsNum = pWordsWithoutSpace.length;
const pForWordsNum = document.createElement('p');
pForWordsNum.textContent = 'The number of words: ' + wordsNum;
p.insertAdjacentElement('beforebegin', pForWordsNum);

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
const contentWithEmoji = p.innerHTML
  .replaceAll('?', '🤔')
  .replaceAll('!', '😲');
p.innerHTML = contentWithEmoji;
// console.log(contentWithEmoji);
