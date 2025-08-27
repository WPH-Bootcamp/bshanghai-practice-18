// satisfy / satisfies
// example 1

type Todo3 = {
  title: string;
  dueDate: Date | string;
  isComplete: boolean;
};

const todo: Todo3 = {
  title: "coding",
  dueDate: new Date(),
  isComplete: true,
};

// todo.dueDate.getDate(); //error

const todo2 = {
  title: "coding",
  dueDate: new Date(),
  isComplete: true,
} satisfies Todo3;

todo2.dueDate.getDate();
