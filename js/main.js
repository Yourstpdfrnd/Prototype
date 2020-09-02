const items = Array.prototype.slice.call(document.querySelectorAll('.page__item'));
items.forEach((item) => {
    const checkbox = item.querySelector('input[type=checkbox]');
    const desc = item.querySelector('.page__item-description');
    const card = item.querySelector('.page__label');
    const caption = item.querySelector('.page__item-caption');

    const selectItems = () => {
        if ((!checkbox.hasAttribute('checked')) && (!checkbox.hasAttribute('disabled'))) {
          checkbox.setAttribute('checked', true);
          item.classList.add('page_item--selected');
          item.classList.add('selected');
          card.classList.add('page__label--selected');
          caption.removeAttribute('hidden');
          desc.setAttribute('hidden', true);
        } else {
          checkbox.removeAttribute('checked');
          item.classList.remove('page_item--selected');
          item.classList.remove('selected');
          item.classList.remove('selected-hover');
          card.classList.remove('page__label--selected');
          caption.setAttribute('hidden', true);
          desc.removeAttribute('hidden');
        }
      };

      if (checkbox.hasAttribute('disabled')) {
        card.classList.add('page__label--disabled');
        item.classList.add('page_item--disabled');
        desc.innerHTML = item.dataset.disabled;
      }
      checkbox.addEventListener('change', selectItems);
      card.addEventListener('click', selectItems);
      card.addEventListener('mouseleave', () => {
        if (checkbox.hasAttribute('checked')) {
          item.classList.add('selected-hover');
        } else {
          item.classList.remove('selected-hover');
        }
      });
    });