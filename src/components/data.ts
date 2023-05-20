export interface TodoType {
  id: number;
  text: string;
  checked: boolean;
}

let data: TodoType[] = [
  {
    id: 1,
    text: '할일1',
    checked: false,
  },
  {
    id: 2,
    text: '할일2',
    checked: true,
  },
  {
    id: 3,
    text: '할일3',
    checked: false,
  },
];

export default data;
