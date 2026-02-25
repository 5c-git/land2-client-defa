import {
  validateForm, maskNumber, maskSimplePhone, maskPhone, maskInternationalPhone,
  initPasswordEye, initAgreeCheckbox, initFileLoadInput, focusFirstInput,
  initSelectValidation, initChoicesValidation,
} from '../validator/validator';
import { summonPopUp, removePopUp } from '../popUp/popUp';
import { summonAlert, removeAlert } from '../alert/alert';
import {
  getPaddingOnBody,
  getPaddingFromBody,
  getScrollbarWidth,
  createFormData,
  setTextareaAutoHeight,
  setStatus,
  startTimer,
  debounce,
  activateRequestButtons,
  updateButtonState,
} from '../../utils/utils';

window.Corners5ProjectLayout = {
  validation: {
    validateForm,
    maskSimplePhone,
    maskNumber,
    maskPhone,
    maskInternationalPhone,
    initPasswordEye,
    initAgreeCheckbox,
    initFileLoadInput,
    focusFirstInput,
    initSelectValidation,
    initChoicesValidation,
  },
  summonPopUp,
  removePopUp,
  summonAlert,
  removeAlert,
  getPaddingOnBody,
  getPaddingFromBody,
  getScrollbarWidth,
  createFormData,
  setTextareaAutoHeight,
  setStatus,
  startTimer,
  debounce,
  activateRequestButtons,
  updateButtonState,
};
