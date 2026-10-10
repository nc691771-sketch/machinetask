// import React, { useState } from "react";

// function App() {
//   let [color1, setColor1] = useState("red");
//   let [color2, setColor2] = useState("yellow");
//   let [color3, setColor3] = useState("green")

//   function change() {
//     setColor1(color1 === "red" ? "yellow" : "red");
//     setColor2(color2 === "yellow" ? "red" : "yellow");
//     // setColor3(color3 === "yellow" ? "black" : "red");
//   }

//   let click=()=>{
//     if(color3 === "green"){
//       setColor1("black")
//       setColor2("black")
//       setColor3("black")
//     }else{
//       setColor1("red")
//       setColor2("yellow")
//       setColor3("green")
//     }
//   }

//   return (
//     <div style={{
//       display:"flex",
//       gap: "10px"
//     }}>
//       <div
//         onClick={change}
//         style={{
//           gap:"50px",
//           height: "150px",
//           width: "150px",
//           backgroundColor: color1,
//         }}
//       ></div>

//       <br />

//       <div
//         onClick={change}
//         style={{
//           height: "150px",
//           width: "150px",
//           backgroundColor: color2,
//         }}
//       ></div>

//      <br />
//       <div
//         onClick={click}
//         style={{
//           height: "150px",
//           width: "150px",
//           backgroundColor: color3,
//         }}
//       ></div>
//     </div>
//   );
// }

// export default App;













// import { useState } from "react";

// function App(){
//   let [color1,setColor1]=useState("red")
//   let [color2,setColor2]=useState("yellow")
//   let [color3,setColor3]=useState("green")

//   function change(){
//     setColor1(color1 ===  "red" ? "yellow" : "red")
//     setColor2(color2 === "yellow" ? "red" : "yellow")
//     setColor3(color3 === "green" ? "black" : "black")
//   }

//   let stack=()=>{
//     if(color3 === "green"){
//       setColor1("black")
//       setColor2("black")
//       setColor3("black")
//     }else{
//       setColor1("red")
//       setColor2("yellow")
//       setColor3("green")
//     }
//   }
//   return(
//     <div>
      
//       <div 
//       onClick={change}
//       style={{
//         width:"100px",
//         height:"100px",
//         background:color1
//       }}>
//       </div>

//       <div onClick={change}
//       style={{
//         width:"100px",
//         height:"100px",
//         background:color2
//       }}>
//       </div>

//       <div onClick={stack}
//       style={{
//         width:"100px",
//         height:"100px",
//         background:color3
//       }}>
//       </div>
//     </div>
//   )

// }

// export default App;





// import { useRef } from "react";

// function App() {
//   const inputRef = useRef(null);

//   function handleFocus() {
//     inputRef.current.focus();
//   }

//   return (
//     <div>
//       <input
//         ref={inputRef}
//         type="text"
//         placeholder="Enter your name"
//       />

//       <button onClick={handleFocus}>
//         Focus
//       </button>
//     </div>
//   );
// }

// export default App;









// import { useState } from "react";

// function App() {
//   let [text, setText] = useState("");

//   return (
//     <>
//       <input
//         value={text}
//         onChange={(e) => {
//           setText(e.target.value);
//         }}
//       />

//       {text.trim().split(" ").map((word, index) => (
//         <p key={index}>
//           {index} {word}
//         </p>
//       ))}
//     </>
//   );
// }

// export default App;





// import { useState } from "react";

// function App() {
//   let [text, setText] = useState("");

//   return (
//     <>
//       <input
//         value={text}
//         onChange={(e) => {
//           setText(e.target.value);
//         }}
//       />
 
//       {text.trim().split(" ").map((index,word) => (
//         <p key={index}>
//           {index} {word}
//         </p>
//       ))}
//     </>
//   );
// }

// export default App;











import { useState } from "react";

function App() {
  let [amount, setAmount] = useState("");
  let [type, setType] = useState("Income");
  let [income, setIncome] = useState([]);
  let [expenses, setExpenses] = useState([]);

  function addAmount() {

    if (type === "Income")
      setIncome([...income, Number(amount)]);
    else
      setExpenses([...expenses, Number(amount)]);
    setAmount("");
  }

  let totalIncome = income.reduce((a, b) => a + b,0);
  let totalExpense = expenses.reduce((a, b) => a + b,0);

  return (
    <>
      <h1>Income  Expense Tracker</h1>

      <input
        type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>Income</option>
        <option>Expense</option>
      </select>

      <button onClick={addAmount}>Add</button>
      

      <h2>Income:</h2>
      <div>
      <ul>
      {income.map((i,index)=>{
        if(i){
          return <li key={index} style={{color : i > 100 ? "green" : null}}>{i}</li>
        }
})}
        <h2>Total: {totalIncome}</h2>
      </ul>
      </div> 


      <h2>Expenses: </h2>
      <div>
        <ul>
        {expenses.map((i,index)=>{
          if(i){
            return <li key={index} style={{color : i > 100 ? "red" : null}}>{i}</li>
          }
        })}
        </ul>
        <h2>Total: {totalExpense}</h2>
      </div>


    </>
  );
}

export default App;






// import { useState } from "react";

// function App(){
// let [text,setText]=useState("");
// let [select,setSelect]=useState("income");
// let [income,setIncome]=useState([]);
// let [expense,setExpense]=useState([]);

// let addSelect=()=>{
//   if("income"){
//     setIncome([...text,Number(text)])
//   }else{
//     setExpense([...text,Number(text)])
//     setText("")
//   }
// }
// return (
//   <>
//   <input type="number" value={text} onChange={(e)=>setText(e.target.value)} readOnly/>

//   <select>
//     <option value="income">income</option>
//     <option value="expense">expense</option>
//   </select>

//   <button onClick={addSelect}>add</button>


//   <div>
//     <ul>
//     {income.map((i,index)=>{
//       if(i){
//         return <li key={index} style={color : i > 100 ? "red" : null }>{i} </li>
//     }
// })}
//     </ul>
//   </div>

//   </>
// )

// }

// export default App;