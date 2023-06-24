import './Body.css';
import { useState } from 'react';

function Body() {
  const [state, setState] = useState({
    name: '',
    gender: '',
    birth: '',
    bio: '',
  });

  const handleOnChange = (e) => {
    console.log('modified:', e.target.name);
    console.log('modified value:', e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="body">
      <div>
        <input name="name" value={state.name} onChange={handleOnChange} placeholder="name" />
      </div>
      <div>
        <select name="gender" value={state.gender} onChange={handleOnChange}>
          <option key={''}></option>
          <option key={'여성'}>여성</option>
          <option key={'남성'}>남성</option>
        </select>
      </div>
      <div>
        <input name="birth" type="date" value={state.birth} onChange={handleOnChange} />
      </div>
      <div>
        <textarea name="bio" value={state.bio} onChange={handleOnChange} />
      </div>
    </div>
  );
}

Body.defaultProps = {
  favorList: [],
};

export default Body;
