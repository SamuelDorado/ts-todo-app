import { ListItem } from './models/list-item';

const buttonElement = document.querySelector('#button');
const inputElement = document.querySelector('inputText') as any;
const listElement = document.querySelector('#list');
const list: ListItem[] = [];

buttonElement.addEventListener('click', () => {
  const inputValue = inputElement.value;
  list.push(new ListItem(inputValue));
  renderList();
});

function renderList() {
  let result = '';
  list.forEach((item: ListItem)=> {
    result = `${result} <li>${item.text} - ${item.date}</li>`;
  });
}
