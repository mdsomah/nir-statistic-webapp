const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.middleName = !isEmpty(data.middleName) ? data.middleName : "";
  data.title = !isEmpty(data.title) ? data.title : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.mobileOne = !isEmpty(data.mobileOne) ? data.mobileOne : "";
  data.mobileTwo = !isEmpty(data.mobileTwo) ? data.mobileTwo : "";
  data.county = !isEmpty(data.county) ? data.county : "";
  data.enrollmentCenter = !isEmpty(data.enrollmentCenter)
    ? data.enrollmentCenter
    : "";
  data.userName = !isEmpty(data.userName) ? data.userName : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.confirmPassword = !isEmpty(data.confirmPassword)
    ? data.confirmPassword
    : "";
  data.role = !isEmpty(data.role) ? data.role : "";

  // Last name checks
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last Name field is required";
  }
  // First name checks
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First Name field is required";
  }
  // Middle name checks
  if (Validator.isEmpty(data.middleName)) {
    errors.middleName = "Middle Name field is required";
  }
  // Title checks
  if (Validator.isEmpty(data.title)) {
    errors.middleName = "Middle Name field is required";
  }
  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  // Mobile One checks
  if (Validator.isEmpty(data.mobileOne)) {
    errors.mobileOne = "Phone number field is required";
  }
  // Mobile Two checks
  if (Validator.isEmpty(data.mobileTwo)) {
    errors.mobileTwo = "Phone number field is required";
  }
  // County checks
  if (Validator.isEmpty(data.county)) {
    errors.county = "County field is required";
  }
  // Enrollment Center checks
  if (Validator.isEmpty(data.enrollmentCenter)) {
    errors.enrollmentCenter = "Enrollment Center field is required";
  }
  // User Name checks
  if (Validator.isEmpty(data.userName)) {
    errors.userName = "User Name field is required";
  }
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (Validator.isEmpty(data.confirmPassword)) {
    errors.password2 = "Confirm password field is required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  if (!Validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = "Passwords must match";
  }
  if (Validator.isEmpty(data.role)) {
    errors.role = "Role Selection required";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
