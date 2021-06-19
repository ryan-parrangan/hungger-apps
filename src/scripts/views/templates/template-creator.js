const spinnerTemplate = {
  show() {
    return `
        <div class="page-loader"></div>`;
  },
  remove() {
    document.querySelector('.page-loader').remove();
  },
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export { spinnerTemplate, createLikeButtonTemplate, createLikedButtonTemplate };
