import { Selector } from 'testcafe';
import { AuthModule } from '@auth0/auth0-angular';
import { AngularSelector } from 'testcafe-angular-selectors';
import { ClientFunction } from 'testcafe';
import { waitForAngular } from 'testcafe-angular-selectors';



// const getPageUrl = ClientFunction(() => window.location.href);
//   const loginbutton = Selector('ng-content > button')

// const regularAccUser = Role('http://localhost:4200/', async t => {
//     await t
//       .click(loginbutton)
// });

fixture `Getting Started`
    .page `http://localhost:4200/`

test('Midd Test', async t => {

  // const loginbutton = Selector('ng-container > button')
  const firstItem = Selector('.task:nth-of-type(1) > .text');
  const thirdItem = Selector('.task:nth-of-type(3) > .text');
  const firstdot = Selector('.task:nth-of-type(1) > .dot');
  const fourthdot = Selector('.task:nth-of-type(4) > .dot');
  const username = Selector('#userwelcome').innerText;


  const firstCompleteItem = Selector('li:nth-of-type(1)').innerText
  const secondCompleteItem = Selector('li:nth-of-type(2)').innerText

  await t
    // .wait(2000)
    .click('#login')
    .typeText('input[name="email"]', 'adlantz@middlebury.edu')
    .typeText('input[name="password"]', '~P4ssw0rd~')
    .click('button[name="submit"]')



    .typeText('#task-input', 'Dishes')
    .pressKey('enter')
    .typeText('#task-input', 'Laundry')
    .pressKey('enter')
    .typeText('#task-input', 'Learn to code')
    .pressKey('enter')
    .typeText('#task-input', '?????')
    .pressKey('enter')
    .typeText('#task-input', 'profit')
    .pressKey('enter')
    .expect(firstItem.value).contains('Dishes', 'input contains text "Dishes"')
    .expect(thirdItem.value).contains('Learn to code', 'input contains text "Learn to code"')

    .click(firstdot)
    .click(fourthdot)
    .click('button[class="archive"]')

    .expect(firstCompleteItem).contains('Dishes', 'first complete item contains text "Dishes"')
    .expect(secondCompleteItem).contains('?????', 'second complete item contains text "?????"')

    .expect(username).contains('Asher', 'username contains "midd"')

    .wait(1000)
    .click('#logout')
    .wait(2000);

    // .expect(username).ok();

    // .expect(getPageUrl()).contains('local');

});

// test('gmail Test', async t => {

//   // const loginbutton = Selector('ng-container > button')
//   const firstItem = Selector('div > .text');
//   const username = Selector('#userwelcome').innerText;

//   await t
//     // .wait(2000)
//     .click('#login')
//     .typeText('input[name="email"]', 'asher.lantz96@gmail.com')
//     .typeText('input[name="password"]', '~P4ssw0rd~')
//     .click('button[name="submit"]')



//     // .typeText('#task-input', 'Dishes')
//     // .pressKey('enter')
//     // .typeText('#task-input', 'Laundry')
//     // .pressKey('enter')
//     // .wait(2000)
//     // .expect(firstItem.value).contains('Dishes', 'input contains text "Dishes"')
//     .expect(username).contains('Asher', 'username contains "gmail"');
//     // .expect(getPageUrl()).contains('local');

// });
