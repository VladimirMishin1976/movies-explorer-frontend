import { Link, useHistory } from 'react-router-dom';
import './Error.css';

function Error() {
const history = useHistory();

  return (
    <section className='error'>
      <h2 className='error__title'>404</h2>
      <p className='error__subtitle'>Страница не найдена</p>
      <p className='error__link link-hover' onClick={() => history.goBack()}>Назад</p>
    </section>
  );
}

export default Error;