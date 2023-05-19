'use client';
import { useState } from 'react';
import axios from 'axios';



interface User {

  adresse: string;
}

const Ajouter: React.FC = () => {

  const [adresse, setAdresse] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);

  const display = async (): Promise<void> => {
    try {
      console.log(adresse);
      const user: User = {
        
        adresse: adresse
      };
      console.log(user);

      const response = await axios.post<User>('http://localhost:3001/user/ajouter', user);
      console.log(response.data);

      setUsers([...users, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className='information'>
        
        <label>adresse:</label>
        <input type='text' onChange={(event) => setAdresse(event.target.value)} />
        <br />

        <div className="d-flex bg-light mb-3">
          <button className='nav-row__item link' tabIndex={0} onClick={display}>Ajouter adresse</button>
        </div>
      </div>
    </div>
  );
};

export default Ajouter;