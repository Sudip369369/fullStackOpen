

function Greetings() {
const time = new Date();
 
function Great (time) {

let hour = time.getHours();
if( hour <12 )
  return "Good Morning";
 if(hour > 12 && hour < 18)
  return "Good Afternoon"; 
else
  return "Good Evening";
}


  return (
    <div>
{/* <h1>Greeting Assignment</h1>
<h2>{Great(time)} </h2>
<h3>{time.toString()}</h3> */}

<h2>This is Greeting Component</h2>

    </div>
  )
}

export default Greetings