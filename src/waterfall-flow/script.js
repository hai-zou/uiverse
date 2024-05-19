class WaterfallFlowLayout {

  wrapNode = null;

  column = 3;

  imgWith = 0;

  // 存储每一列的高度
  columnHeights = [];

  imgList = [];

  constructor({ wrapNode, column, imgList }) {
    this.wrapNode = wrapNode;
    this.column = column;
    this.imgList = imgList;

    const wrapWidth = this.wrapNode.getBoundingClientRect().width;
    this.imgWith = wrapWidth / this.column;
    this.columnHeights = Array.from({ length: this.column }, () => 0);
    this.preloadImg();
  }

  // 预加载图片
  preloadImg() {
    this.imgList.forEach((imgItem) => {
      const imgEle = new Image();
      imgEle.src = imgItem.url;
      imgEle.alt = imgItem.alt;
    
      imgEle.addEventListener('load', () => {
        this.appendImage(imgEle);
      });
    
      imgEle.addEventListener('error', () => {
        console.error(`Image load error - ${imgItem.url}`);
      });
    });
  }

  appendImage(imgEle) {
    const imgGap = 10;
    const currentHeight = (this.imgWith / imgEle.width) * imgEle.height;
    const minHeight = Math.min(...this.columnHeights);
    const colIndex = this.columnHeights.findIndex(height => height === minHeight);

    imgEle.style.width = this.imgWith + 'px';
    imgEle.style.position = 'absolute';
    imgEle.style.top = minHeight + 'px';
    imgEle.style.left = colIndex * (this.imgWith + imgGap) + 'px';

    // 更新最小的高度
    this.columnHeights[colIndex] = minHeight + currentHeight + imgGap;

    this.wrapNode.appendChild(imgEle);
  }
}

new WaterfallFlowLayout({
  wrapNode: document.getElementById('waterfall-wrap'),
  column: 3,
  imgList: [
    { url: './images/footpath.png', alt: 'footpath' },
    { url: './images/landscape.png', alt: 'landscape' },
    { url: './images/rays_of_light.png', alt: 'rays_of_light' },
    { url: './images/setting_sun.png', alt: 'setting_sun' },
    { url: './images/waterfall.png', alt: 'waterfall' },
    { url: './images/elk.jpg', alt: 'elk' },
    { url: './images/lightning.jpg', alt: 'lightning' },
    { url: './images/camping.jpg', alt: 'camping' },
    { url: './images/spring.jpg', alt: 'spring' },
    { url: './images/sea.png', alt: 'sea' },
    { url: './images/isolated_boat.png', alt: 'isolated_boat' },
    { url: './images/boat.png', alt: 'boat' },
    { url: './images/fairyland.png', alt: 'fairyland' },
    { url: './images/reed.jpg', alt: 'reed' },
  ],
});