import { AngularMarvelPage } from './app.po';

describe('angular-marvel App', () => {
  let page: AngularMarvelPage;

  beforeEach(() => {
    page = new AngularMarvelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
