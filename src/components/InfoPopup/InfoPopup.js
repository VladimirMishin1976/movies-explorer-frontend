import './InfoPopup.css';

function InfoPopup({ text, setInfoPopup }) {

  function handleClose() {
    setInfoPopup({ isOpen: false, text: '' })
  }
  return (
    <div className='popup' onClick={handleClose}>
      <div className='popup__container'>
        <h2 className='popup__title'>{text || 'Что-то пошло не так. Иформация об ошибке не получена.'}</h2>
        <button className='popup__close button-hover' type="button" aria-label="Закрыть" onClick={handleClose}></button>
      </div>
    </div >
  )
}

export default InfoPopup;   