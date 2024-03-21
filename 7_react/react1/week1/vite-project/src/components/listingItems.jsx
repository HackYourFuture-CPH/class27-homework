const ListingItems = (props) => {
  return (
    <li>
      <strong>Item {props.id}: </strong> {props.description} , {props.deadline}
    </li>
  );
};

export default ListingItems;
