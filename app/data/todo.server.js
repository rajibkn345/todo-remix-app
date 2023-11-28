import { prisma } from "./database.server";

export async function addTodo(userId, todoData) {
  console.log({ userId });
  try {
    return await prisma.todos.create({
      data: {
        title: todoData.title,
        desc: todoData.desc,
        date: new Date(todoData.date),
        User: { connect: { id: userId } },
      },
    });
  } catch (error) {
    throw new Error("Failed to add todo.");
  }
}

export async function getTodos(userId) {
  if (!userId) {
    throw new Error('Failed to get expenses.');
  }
  try {
    const todos = await prisma.todos.findMany({
      where: { userId },
      orderBy: { date: 'desc' },
    });
    return todos;
  } catch (error) {
    throw new Error('Failed to get expenses.');
  }
}