
function TodoItem({ description, deadline }: { description: string; deadline: string }) {
  return (
    <li>{description}, {deadline}</li>
  )
}

export default TodoItem;
