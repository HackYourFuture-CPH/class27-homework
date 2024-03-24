import { useEffect, useState } from "react";

const TimeCount = () => {
  const [seconds, setSecond] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setSecond((prev) => prev + 1);
    }, 1000);
  });

  return (
    <div>
      <p>You have used {seconds} seconds this website</p>
    </div>
  );
};

export default TimeCount;
