import { TestIBAPIV3Page } from './app.po';

describe('test-ib-api-v3 App', function() {
  let page: TestIBAPIV3Page;

  beforeEach(() => {
    page = new TestIBAPIV3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mrk works!');
  });
});
