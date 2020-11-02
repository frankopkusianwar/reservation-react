const TOGGLE_MENU = 'TOGGLE_MENU'
const SHOW = 'SHOW'
const CLOSE = 'CLOSE'
const CLOSE_LOGIN_SUBMIT = 'CLOSE_LOGIN_SUBMIT'

export const toggleMenu = status => ({
  type: TOGGLE_MENU,
  payload: status,
});

export const show = () => ({
  type: SHOW,
  payload: true
});

export const close = () => ({
  type: CLOSE,
  payload: false
});

export const submitClose = (name) => ({
  type: CLOSE_LOGIN_SUBMIT,
  payload: name,
});
