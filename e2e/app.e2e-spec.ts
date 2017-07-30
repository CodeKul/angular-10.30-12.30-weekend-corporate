import { WeekendAppPage } from './app.po';

describe('weekend-app App', () => {
  let page: WeekendAppPage;

  beforeEach(() => {
    page = new WeekendAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
