export type Status = 'new order' | 'process' | 'served' | 'cancelleds'
export type StatusOrder = 'getOrder' | 'editOrder' | 'deleteOrder'
export interface Data {
    id: string | number
    name: string
    status: Status
    order: string[]
    hour: string
}

export interface OrderState {
    status: Status;
    data: Data[];
    openModalRegister: boolean;
}

export interface Props {
    data: Data,
    handleDragging: (dragging: boolean) => void
}