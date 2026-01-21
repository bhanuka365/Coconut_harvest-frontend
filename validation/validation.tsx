export const validatePhoneNumber = (val: any) => {
  if (/^[0-9]{10}$/.test(val)) {
    return true;
  } else {
    return false;
  }
};

export const validateUsername = (val: any) => {
  if (val.length > 3) {
    return true;
  } else {
    return false;
  }
};

export const validateName = (val: any) => {
  if (/^[A-Za-z]+$/.test(val) || val.trim()) {
    return true;
  } else {
    return false;
  }
};

export const validateAddress = (val: any) => {
  if (val.length !== 0) {
    return true;
  } else {
    return false;
  }
};

export const validatePassword = (val: any) => {
  if (/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(val)) {
    return true;
  } else {
    return false;
  }
};

export const validatematchPasswords = (val1: any, val2: any) => {
  if (val1 === val2) {
    return true;
  } else {
    return false;
  }
};

export const checkEmpty = (val: any) => {
  if (val.length !== 0) {
    return true;
  } else {
    return false;
  }
};
