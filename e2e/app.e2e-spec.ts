import { FrontProjectPage } from './app.po';

describe('front-project App', () => {
  let page: FrontProjectPage;

  beforeEach(() => {
    page = new FrontProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
