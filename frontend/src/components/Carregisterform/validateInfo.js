export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Username required';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  
  if (!values.Carname.trim()) {
    errors.Carname = 'Car brand name required';
  }
  if (!values.Model.trim()) {
    errors.Model = 'Car Model required';
  }
  if (!values.price.trim()) {
    errors.price = 'price  required';
  }

  if (!values.number.trim()) {
    errors.number = ' your Mobile required';
  }


  
  return errors;
}
