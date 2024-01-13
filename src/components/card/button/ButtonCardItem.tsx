import { useDispatch } from "react-redux"
import { DeleteOrder } from "../../../redux/slices/slice";
import { Data } from "../../../interfaces/Index";
import { OrderButtonNewOrder, OrderButtons } from "../../../style/index.styles";


export const ButtonCardItem = ({ data }) => {
    const dispatch = useDispatch();
    const handleDelete = ({ id, name, hour, order }: Data, options: string) => {
        switch (options) {
            case 'cancelleds':
                dispatch(DeleteOrder({
                    id,
                    name,
                    hour,
                    order,
                    status: 'cancelleds'
                }))
                break;
            case 'served':
                dispatch(DeleteOrder({
                    id,
                    name,
                    hour,
                    order,
                    status: 'served'
                }))
                break;
            default:
                break;
        }
    }
    return (
        <>
            {
                data.status === 'process' ?
                    <OrderButtons>
                        <OrderButtons onClick={() => handleDelete(data, 'served')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                            </svg>

                        </OrderButtons>
                        <OrderButtons onClick={() => handleDelete(data, 'cancelleds')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                            </svg>
                        </OrderButtons>
                    </OrderButtons>
                    :
                    <OrderButtonNewOrder>
                        <OrderButtons onClick={() => handleDelete(data, 'cancelleds')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                            </svg>
                        </OrderButtons>
                    </OrderButtonNewOrder>
            }
        </>

    )
}
