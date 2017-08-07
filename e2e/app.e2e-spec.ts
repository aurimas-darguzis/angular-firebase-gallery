import { AngularFirebaseGalleryPage } from './app.po';

describe('angular-firebase-gallery App', () => {
  let page: AngularFirebaseGalleryPage;

  beforeEach(() => {
    page = new AngularFirebaseGalleryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
