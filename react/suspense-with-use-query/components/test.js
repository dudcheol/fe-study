import { Suspense } from "react";
import { useQuery } from "react-query";
import { testApi } from "../pages/api/hello";

export const TestComponent = () => {
  const { data } = useQuery(
    'test',
    async () => {
      const result = await testApi();
      console.log(JSON.stringify(result));
      return result;
    },
    {
      suspense: true,
    }
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>{data}</div>
    </Suspense>
  )
};
