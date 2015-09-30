var gallery = require( "./server" );

describe( "Gallery", function() {
    var picArray = [ '/home/ray/dev/gallery/public/img/dir1/blolg',
  '/home/ray/dev/gallery/public/img/dir1/lizard-248705_1280.jpg',
  '/home/ray/dev/gallery/public/img/dir1/loch-ness-151851_1280.png',
  '/home/ray/dev/gallery/public/img/dir1/sand-lizard-63185_1280.jpg',
  '/home/ray/dev/gallery/public/img/dir1/stegosaurus-24752_1280.png',
  '/home/ray/dev/gallery/public/img/dir1/a/dino-648710_1280.jpg',
  '/home/ray/dev/gallery/public/img/dir1/a/dino-648712_1280.jpg',
  '/home/ray/dev/gallery/public/img/dir1/a/dino-648717_1280.jpg',
  '/home/ray/dev/gallery/public/img/dir1/a/dinosaur-702654_1280.jpg',
  '/home/ray/dev/gallery/public/img/dir1/a/lizard-683985_1280.jpg',
  '/home/ray/dev/gallery/public/img/dir1/b/dinosaur-576072_1280.png',
  '/home/ray/dev/gallery/public/img/dir1/b/dinosaur-576490_1280.png',
  '/home/ray/dev/gallery/public/img/dir1/c/corythosaurus-575030_1280.png',
  '/home/ray/dev/gallery/public/img/dir1/c/dino-334959_1280.jpg',
  '/home/ray/dev/gallery/public/img/dir1/c/dino-648718_1280.jpg',
  '/home/ray/dev/gallery/public/img/dir1/c/dinosaurs-413893_1280.jpg',
  '/home/ray/dev/gallery/public/img/dir1/c/gallimimus-575031_1280.png',
  '/home/ray/dev/gallery/public/img/dir1/c/skeleton-388560_1280.jpg',
  '/home/ray/dev/gallery/public/img/dir2/dinosaur-597148_1280.jpg',
  '/home/ray/dev/gallery/public/img/dir2/b/dino-334947_1280.jpg',
  '/home/ray/dev/gallery/public/img/dir2/b/dino-334955_1280.jpg',
  '/home/ray/dev/gallery/public/img/dir2/b/dino-648711_1280.jpg',
  '/home/ray/dev/gallery/public/img/dir2/b/dinosaur-470161_1280.jpg',
  '/home/ray/dev/gallery/public/img/dir2/b/fossil-635079_1280.jpg',
  '/home/ray/dev/gallery/public/img/dir2/b/rhino-318834_1280.jpg',
  '/home/ray/dev/gallery/public/img/dir2/c/dinosaur-311617_1280.png',
  '/home/ray/dev/gallery/public/img/dir2/c/museum-367730_1280.jpg',
  '/home/ray/dev/gallery/public/img/dir2/d/dinosaur-241962_1280.jpg',
  '/home/ray/dev/gallery/public/img/dir2/d/skeleton-388559_1280.jpg' ];

    it( "walks the images directory", function(){
        gallery.walk();
        var results = gallery.getData();
        expect(results).toEqual(picArray);
    });
});
