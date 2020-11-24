import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://localhost:4200/`;

test('My first test', async t => {
  await t
    .typeText('#task-input', 'Dishes')
    .pressKey('enter')
});
