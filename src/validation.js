export function validateEmail(email) {
  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return false;
    }
    if (emailRegex.test(email)) {
      return true;
    }
    return false;
  } catch (error) {
    console.error("validate email failed: " + error.message);
    return false;
  }
}

export function validatePhoneNumber(phone) {
  try {
    const phoneRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (phoneRegex.test(phone)) {
      return true;
    }
    return false;
  } catch (error) {
    console.error("validate phone failed: " + error.message);
    return false;
  }
}
