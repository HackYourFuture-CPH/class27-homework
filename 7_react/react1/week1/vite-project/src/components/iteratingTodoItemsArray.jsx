import ListingItems from "./listingItems";

function IteratingTodoItemsArray ({toDoItems}) {
    return (
      <ul>
        {toDoItems.map(item => 
            <ListingItems key={item.id}
              id={item.id}
              description={item.description}
              deadline={item.deadline}
            />
          )
        }
      </ul>
    );
  };
  
  export default IteratingTodoItemsArray;
