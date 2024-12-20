export default function validateInfo(values: {
  username: string;
  username2: string;
  email: string;
  phoneNumber: string;
  password: string;
  role: string;
}) {
  let errors: { [key: string]: string } = {};


  if (!values.username.trim()) {
    errors.username = 'First Name is required';
  }


  if (!values.username2.trim()) {
    errors.username2 = 'Last Name is required';
  }


  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.phoneNumber.trim()) {
    errors.phoneNumber = 'Phone Number is required';
  } else if (!/^\d{10}$/.test(values.phoneNumber)) {
    errors.phoneNumber = 'Phone Number must be 10 digits';
  }


  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }


  if (!values.role) {
    errors.role = 'Role selection is required';
  }

  return errors;
}
