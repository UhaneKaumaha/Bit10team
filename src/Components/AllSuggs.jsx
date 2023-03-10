import React, { useState, useEffect } from 'react';
import { RecentSuggs} from '../Components/RecentSuggs';
import { AllSuggest } from '../Components/AllSuggest';
import '../css/style-sugg.css'

export const AllSuggs = ({ suggs, setSuggs, setRename }) => {
  const [all, setAll] = useState([]);
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const allArr = [];
    const recentArr = [];

    for (const element of suggs) {
      if (element.recent === true) recentArr.push(element);
      else allArr.push(element);
    }
    setAll(allArr);
    setRecent(recentArr);
    if (suggs.length > 0) {
      localStorage.setItem('suggs', JSON.stringify(suggs));
    }
  }, [suggs]);

  const handleChange = (id) => {
    const arr = [...suggs];
    const i = arr.findIndex((item) => item.id === id);
    arr[i].recent = !arr[i].recent;
    setSuggs(arr);
  };

  const handleClick = (id) => {
    const arr = suggs.filter((item) => item.id !== id);
    setSuggs(arr);
    if (arr.length === 0) localStorage.removeItem('suggs');
  };

  let output = null;

  all.length || recent.length
    ? (output = (
        <>
          <AllSuggest
            all={all}
            handleChange={handleChange}
            handleClick={handleClick}
            setRename={setRename}
          />
          <RecentSuggs
            recent={recent}
            handleChange={handleChange}
            handleClick={handleClick}
          />
        </>
      ))
    : (output = <h2 className='subtitle text-center'>Sin sugerencias</h2>);

  return <>{output}</>;
};