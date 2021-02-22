import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import { toggleShowBox } from 'redux/Actions/ui-actions';
import { resetPerson } from '../../redux/Actions/roomOne-actions';
import { resetPersonTwo } from '../../redux/Actions/roomTwo-actions';

import ButtonSubmit from '../Buttons/Submit';

const Form = (props) => {
  const {
    adultsNumber,
    adultsTwoNumber,
    childrenNumber,
    childrenTwoNumber,
    removePerson,
    removePersonTwo,
    openBox,
  } = props;

  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // const url = '';

    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // }).then((result) => {
    //   result.json();
    // });

    console.log(data);

    removePerson();
    removePersonTwo();
    setSubmitted(true);
    openBox();
    setTimeout(() => {
      setSubmitted(false);
    }, 2000);
  };

  const adults = adultsNumber + adultsTwoNumber;
  const kids = childrenNumber + childrenTwoNumber;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="adults" value={adults} readOnly ref={register} hidden />
      <input name="kids" value={kids} readOnly ref={register} hidden />
      <ButtonSubmit submitted={submitted}>Submit</ButtonSubmit>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removePerson: () => dispatch(resetPerson()),
  removePersonTwo: () => dispatch(resetPersonTwo()),
  openBox: () => dispatch(toggleShowBox()),
});

const mapStateToProps = (state) => ({
  adultsNumber: state.roomOne.adults,
  childrenNumber: state.roomOne.children,
  adultsTwoNumber: state.roomTwo.adultsTwo,
  childrenTwoNumber: state.roomTwo.childrenTwo,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
