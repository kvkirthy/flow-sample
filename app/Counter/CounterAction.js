// @flow

export type CounterAction = Increment | Decrement;

export type Increment = {
    type: "INCREMENT",
    offset: number
}

export type Decrement = {
    type: "DECREMENT",
    offset: number
}