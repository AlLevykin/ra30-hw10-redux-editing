import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addService, saveService, changeServiceField } from '../../actions/actionCreators';

const ServiceForm = () => {
  const item = useSelector(state => state.serviceAdd);

  const dispatch = useDispatch();

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.valueAsNumber
      ? event.target.valueAsNumber
      : event.target.value;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (item.id === "") {
      dispatch(addService(item.name, item.price));
    } else {
      dispatch(saveService({item}));
    }
    dispatch(changeServiceField('name', ''));
    dispatch(changeServiceField('price', 0));
  };

  return (
    <form className="py-3" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label w-100">
          Услуга
          <input
            className="form-control"
            type="text"
            name="name"
            value={item.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="mb-3">
        <label className="form-label w-100">
          Стоимость
          <input
            className="form-control"
            type="number"
            name="price"
            value={item.price}
            onChange={handleChange}
            min="0"
            step="0.01"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
};

export default ServiceForm;
