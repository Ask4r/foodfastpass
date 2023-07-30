interface SwipeToastOptions {
  onShow?: () => void;
  onHide?: () => void;
}


const cardShow = createEventHook();
const cardHide = createEventHook();


export default function (target?: any, options?: SwipeToastOptions) {

  const {
    onShow,
    onHide,
  } = { ...options };


  onMounted(() => {

    // TODO: change style declaration
    target.value.style.position = 'fixed';
    target.value.style.top = '100vh';
    target.value.style.left = '0';
    target.value.style.overscrollBehavior = 'none';

    const { lengthY, direction } = useSwipe(
      target,
      {
        onSwipe,
        onSwipeEnd,
      },
    );

    function onSwipe() {
      if (
        [ 'up', 'down' ].includes(direction.value)
        && lengthY.value < 0
      ) {
        target.value.style.top = `${ -lengthY.value }px`;
      }
    }

    function onSwipeEnd() {
      const offsetTop = target.value.offsetTop;
      if (offsetTop < 0) return;

      if (lengthY.value < -200) {
        hideContent();
      } else {
        showContent();
      }
    }

  });

  async function createOffsetTransition(offsetTop: string, duration: number) {
    const animation = target.value.animate(
      { top: offsetTop },
      { duration, easing: 'ease-out' },
    );
    await animation.finished.then(() => {
      target.value.style.top = offsetTop;
    });
  }

  function showContent() {
    createOffsetTransition('0', 350)
      .then(cardShow.trigger);
  }

  function hideContent() {
    createOffsetTransition('100vh', 350)
      .then(cardHide.trigger);
  }


  return {
    showContent,
    hideContent,
    onShow: cardShow.on,
    onHide: cardHide.on,
  };
}