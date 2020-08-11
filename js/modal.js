const modalTriggers = document.querySelectorAll('.popup-trigger')
const modalCloseTrigger = document.querySelector('.modal-close')
const bodyBlackout = document.querySelector('.body-blackout')
const bodyFixed = document.querySelector('body')

modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const { popupTrigger } = trigger.dataset
    const popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`)

    popupModal.classList.add('is-visible')
    bodyBlackout.classList.add('is-blacked-out')
    bodyFixed.classList.add('body-fixed')

    popupModal.querySelector('.modal-close').addEventListener('click', () => {
       popupModal.classList.remove('is-visible')
       bodyBlackout.classList.remove('is-blacked-out')
       bodyFixed.classList.remove('body-fixed')
    })

    bodyBlackout.addEventListener('click', () => {
      // TODO: Turn into a function to close modal
      popupModal.classList.remove('is-visible')
      bodyBlackout.classList.remove('is-blacked-out')
      bodyFixed.classList.remove('body-fixed')
    })
  })
})
