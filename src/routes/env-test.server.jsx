import {EnvTestClient} from '~/components/env-test.client.jsx';

export default function EnvTest() {
  return <EnvTestClient />;
}

export async function api() {
  console.log('SECRET -->', Oxygen.env.SECRET_TEST_VAR);
  return new Response(
    JSON.stringify({
      message: `Secret env var is -> ${Oxygen.env.SECRET_TEST_VAR}`,
    }),
    {
      status: 200,
    },
  );
}
