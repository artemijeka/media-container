/**
 * @param {Array} params.medias 
 * @param {Number} params.resizeTimeout 
 */
function MediaContainer(params) {
  if (!(params.resizeTimeout > 0) || !params.resizeTimeout) {
    params.resizeTimeout = 500;
  }

  let dataContainerAll = document.querySelectorAll("[data-media-container]");
  setMedias();

  var setMediasTimeout;
  window.addEventListener("resize", function () {
    clearTimeout(setMediasTimeout);
    setMediasTimeout = setTimeout(function () {
      setMedias();
    }, params.resizeTimeout);
  });

  function setMedias() {
    dataContainerAll.forEach(function (container) {
      let mediasMore = [];
      let mediasLess = [];
      let mediasAll = "";

      let containerRect = container.getBoundingClientRect();
      console.log("containerRect.width");
      console.log(containerRect.width);
      params.medias.forEach(function (media) {
        if (containerRect.width < media) {
          mediasLess.push("<" + Number(media - 1));
        }
        if (containerRect.width >= media) {
          mediasMore.push(">=" + media);
        }
      });

      mediasAll += mediasLess.join(",");
      mediasAll += ",";
      mediasAll += mediasMore.join(",");

      container.dataset.mediaContainer = mediasAll;
    });
  }
}
