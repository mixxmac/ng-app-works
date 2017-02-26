import { NgAppWorksPage } from './app.po';

describe('ng-app-works App', () => {
  let page: NgAppWorksPage;

  beforeEach(() => {
    page = new NgAppWorksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
