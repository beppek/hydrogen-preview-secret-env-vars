import {useEffect} from 'react';

export function EnvTestClient() {
  const fetchSecret = async () => {
    try {
      const response = await fetch('/env-test', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      console.log('json', json);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchSecret();
  });

  return <div>{import.meta.env.PUBLIC_TEST_VAR}</div>;
}
