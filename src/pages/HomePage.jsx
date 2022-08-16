import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { List } from '../components/List';
import { Card } from '../components/Card';
import Controls from '../components/Controls';
import { ALL_COUNTRIES } from '../config';
import CircularProgress from '@mui/material/CircularProgress';
import { Loader } from '../components/Loader';

export const HomePage = ({ setCountries, countries }) => {
  const [filtredCountries, setFilteredCountries] = useState(countries);
  const [isLoading, setIsLoading] = useState(true);
  const { push } = useHistory();

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter(c => c.region.includes(region));
    }

    if (search) {
      data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
    }

    setFilteredCountries(data);
  };

  async function fetchCountries() {
    let dataCountries = await axios.get(ALL_COUNTRIES);
    setCountries(dataCountries.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [countries]);

  return (
    <>
      <Controls onSearch={handleSearch} />
      {isLoading ? (
        <Loader>
          <CircularProgress />{' '}
        </Loader>
      ) : (
        <List>
          {filtredCountries.map(c => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: 'Population',
                  description: c.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  description: c.region,
                },
                {
                  title: 'Capital',
                  description: c.capital,
                },
              ],
            };
            return (
              <Card
                key={c.name}
                onClick={() => push(`/country-flags/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
        </List>
      )}
    </>
  );
};
