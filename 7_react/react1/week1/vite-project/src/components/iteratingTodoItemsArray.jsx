import ListingItems from "./listingItems";

function IteratingTodoItemsArray ({toDoItems}) {
    return (
      <div>
        {toDoItems.map(item => 
            <ListingItems key={item.id}
              id={item.id}
              description={item.description}
              deadline={item.deadline}
            />
          )
        }
      </div>
    );
  };
  
  export default IteratingTodoItemsArray;
