import { handleModal } from '../../redux/slices/slice';
import { useAppDispatch } from '../../redux/store';
import { ButtonMore } from '../../style/index.styles';

export const ButtonForm = () => {
    const dispatch = useAppDispatch();
    const openModal = () => {
        dispatch(handleModal(true));
    };
    return (
        <ButtonMore onClick={openModal} >
            <span>
                +
            </span>
        </ButtonMore>
    )
}
