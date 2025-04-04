import { useEffect, useState } from "react";
const UserpageComp = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const isValidD = () => {
    if (page == 1) {
      alert("Reached first user");
      return false;
    }
    return true;
  };
  const isValidI = () =>{
    if(page == 10){
        alert("reached last user");
        return false;
    }
    return true;
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${page}`
        );
        let ans = await response.json();
        ans = Array.isArray(ans) ? ans : [ans];
        console.log("Answer: ", ans);
        setData(ans);
      } catch (e) {
        console.log("The error is", e);
      }
    };
    fetchData();
  }, [page]);
  console.log("Data found:", data);
  return (
    <>
      <div>
        {data.map((user, index) => (
          <div key={index}>
            {user.username} - {user.email}
          </div>
        ))}
        <div>
          <button
            onClick={() => {
                if(isValidD()){
                    setPage(page - 1);
                }
                else{
                    setPage(page+1);
                }
            }}
          >
            prev
          </button>
          <button
            onClick={() => {
                if(isValidI()){
                    setPage(page + 1);
                }
                else{
                    setPage(page-1);
                }
            }}
          >
            next
          </button>
        </div>
      </div>
    </>
  );
};
export default UserpageComp;
