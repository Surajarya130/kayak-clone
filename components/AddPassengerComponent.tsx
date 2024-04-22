// import React from "react";

// const AddPassengerComponent = ({ form, handleSeatCounter }) => {
//   return (
//     <div className="flex items-center justify-between  space-x-3 p-2">
//       <p>
//         Adults <span>+</span>
//       </p>
//       <div className="flex space-x-3">
//         <button
//           className="flex size-5 items-center justify-center rounded-lg border
//                         disabled:bg-gray-100
//                         "
//           disabled={form.getValues("noOfPassengers") === 10}
//           onClick={() => handleSeatCounter("add")}
//         >
//           +
//         </button>
//         <p>{form.getValues("noOfPassengers")}</p>
//         <button
//           disabled={form.getValues("noOfPassengers") === 1}
//           className="flex size-5 items-center justify-center rounded-lg border disabled:bg-gray-100"
//           onClick={() => handleSeatCounter("minus")}
//         >
//           -
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddPassengerComponent;
