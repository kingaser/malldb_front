interface Todo {
  tno: number,
  title: string,
  writer: string,
  dueDate: string,
  complete: boolean
}

interface TodoAdd {
  title: string,
  writer: string,
  dueDate: string
}

interface TodoModify {
  tno: number,
  title: string,
  dueDate: string | null,
  complete: boolean,
}