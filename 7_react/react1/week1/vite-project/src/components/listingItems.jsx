
const ListingItems = (props) => {
  return (
    <div>
        <ul>
      <li>
        <strong>Item {props.id}: </strong> {props.description} ,{" "}
        {props.deadline}
      </li>
      </ul>
    </div>
  );
};

export default ListingItems;
