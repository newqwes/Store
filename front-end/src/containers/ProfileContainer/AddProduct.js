import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { optionsValidation, requiredValidation } from '../../utils/fieldValidation';

import { addProduct } from '../../actionCreators';
import AddProductForm from '../../components/ProfileSection/AddProductForm';

const validate = ({ name, description, photoUrl, options }) => ({
  options: optionsValidation(options),
  name: requiredValidation(name),
  description: requiredValidation(description),
  photoUrl: requiredValidation(photoUrl),
});

const withReduxForm = reduxForm({
  form: 'addProduct',
  validate,
  enableReinitialize: true,
});

const mapStateToProps = () => ({
  initialValues: { type: 'pizza', currencySign: 'р.', unitSign: 'гр.' },
});

const mapDispatchToProps = {
  addProduct,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withReduxForm)(AddProductForm);
