import { useForm } from 'react-hook-form';
import { handleModal, insertOrder } from '../../redux/slices/slice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { FormStyleContainer, BotonClose, DivPosition, FormModalButtonsInCan } from '../../style/index.styles';

import { ContenedorModal, Overlay } from "../../style/index.styles";

const FormModal = () => {
  const { register, handleSubmit, formState: { errors }, reset} = useForm();
  const openState = useAppSelector((state) => state.order.openModalRegister);
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(handleModal(false));

  };

  const onSubmit = handleSubmit((data) => {
    const value = Math.floor(Math.random() * 1000);
    dispatch(insertOrder({
      name: data.name,
      order: [data.order],
      id: value,
      status: 'new order',
      hour: new Date().getTime()
    }))
    closeModal();
    reset();
  })
  return (
    <>
      {openState &&
        <Overlay>
          <ContenedorModal>
            <FormStyleContainer onSubmit={onSubmit} >
              <DivPosition>
                <label htmlFor='name'>Name:</label>
                <input type="text"{...register("name", {
                  required: true,
                  minLength: 2,
                  maxLength: 20
                })} id="name" placeholder='Write your name' />
                {
                  errors.nombre?.type && <span>
                    Name is Required
                  </span>
                }
              </DivPosition>
              <DivPosition>
                <label htmlFor='order'>Order:</label>
                <input type="text" {...register("order", {
                  required: true
                })} id="order" placeholder='Write your order' />
              </DivPosition>
              <div>
                <FormModalButtonsInCan type="submit" >Insert</FormModalButtonsInCan>
                <FormModalButtonsInCan type="button" onClick={closeModal} >Cancelled</FormModalButtonsInCan>
              </div>
            </FormStyleContainer>
            <BotonClose onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </BotonClose>
          </ContenedorModal>
        </Overlay>
      }
    </>
  );
};

export default FormModal;
