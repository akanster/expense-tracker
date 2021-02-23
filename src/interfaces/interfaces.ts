export interface IAction {
  type: string;
  payload: any;
}

export interface IProps {
  children: React.ReactNode;
}

export interface ITransaction {
  id: number;
  text: string;
  amount: number;
}

export interface IState {
  transactions: Array<ITransaction>;
  addTransaction: (t: ITransaction) => void;
  deleteTransaction: (i: number) => void;
}
