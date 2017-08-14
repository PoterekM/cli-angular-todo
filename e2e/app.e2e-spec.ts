import { CliToDoPage } from './app.po';

describe('cli-to-do App', () => {
  let page: CliToDoPage;

  beforeEach(() => {
    page = new CliToDoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
