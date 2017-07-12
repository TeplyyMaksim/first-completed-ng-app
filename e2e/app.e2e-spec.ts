import { FirstCompletedNgAppPage } from './app.po';

describe('first-completed-ng-app App', () => {
  let page: FirstCompletedNgAppPage;

  beforeEach(() => {
    page = new FirstCompletedNgAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
