import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { searchByCountry } from '../config';
import { Button } from '../components/Button';
import { Info } from '../components/Info';

export const Details = () => {
  const { name } = useParams();
  const { push, goBack } = useHistory();
  const [country, setCountry] = useState(null);

  async function fetchData(name) {
    let dataCountry = await axios.get(searchByCountry(name));
    setCountry(dataCountry.data);
  }

  useEffect(() => {
    fetchData(name);
  }, [name]);

  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info push={push} {...country[0]} />}
    </div>
  );
};
