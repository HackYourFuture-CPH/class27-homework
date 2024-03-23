
const toDoItems= [
    {
        id:1,
        description: 'Get out of bed',
        deadline:"Wed Sep 13 2017",
        
      },
      {
        id:2,
        description: 'Brush teeth',
        deadline:"Thu Sep 14 2017",
      },
      {
        id:3,
        description: 'Eat breakfast',
        deadline:"Fri Sep 15 2017"
      },
  ];

export default toDoItems;

// const TodoItem = ({ description }) => {
//     const [done, setDone] = useState(false);
  
//     const handleCheckboxChange = () => {
//       setDone(!done);
//     };
  
//     return (
//       <div>
//         <input
//           type="checkbox"
//           checked={done}
//           onChange={handleCheckboxChange}
//         />
//         <span style={{ textDecoration: done ? 'line-through' : 'none' }}>
//           {description}
//         </span>
//       </div>
//     );
//   };
  
//     