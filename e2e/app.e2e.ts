import { MikeallisononlineCliPage } from './app.po';

describe('mikeallisononline-cli App', function() {
  let page: MikeallisononlineCliPage;

  beforeEach(() => {
    page = new MikeallisononlineCliPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mikeallisononline-cli works!');
  });
});
