const allImg = document.getElementsByTagName("img");
const centerAxisEle = document.getElementById("center-axis");

Array.prototype.forEach.call(allImg, function (el, index) {
  // 旋转角度
  const rotateDeg = index * (360 / allImg.length);
  // 半径
  const radius = 25 * allImg.length;
  // 动画时间
  const animateTime = index * 0.1;
  el.style.transform = `rotateY(${rotateDeg}deg) translateZ(${radius}px)`;
  el.style.transition = `transform 1s ${animateTime}s`;
});

// 实现鼠标拖动效果
const useMouseMove = (callback) => {
  // 鼠标拖动偏移量
  let preX = null;
  let preY = null;
  // 旋转角度
  let angleX = 0;
  let angleY = 0;

  const handleMouseMove = (event) => {
    if (preX === null || preY === null) {
      return;
    } else {
      const offsetX = event.clientX - preX;
      const offsetY = event.clientY - preY;
      angleX -= offsetY;
      angleY += offsetX;

      callback({ y: angleY, x: angleX });

      preX = event.clientX;
      preY = event.clientY;
    }
  };

  const handleMouseDown = (event) => {
    preX = event.clientX;
    preY = event.clientY;
    document.addEventListener('mousemove', handleMouseMove);
  };
  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
  };

  document.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mouseup', handleMouseUp);

  return () => {
    document.removeEventListener('mousedown', handleMouseDown);
    document.removeEventListener('mouseup', handleMouseUp);
  };
};

useMouseMove(({ x, y }) => {
  //除以 10 ，降低灵敏度
  centerAxisEle.style.transform = `rotateX(${x / 10}deg) rotateY(${y / 10}deg)`;
});