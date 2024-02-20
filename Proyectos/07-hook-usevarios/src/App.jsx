import Counter from "./useCallback/Counter";
import UseMemoProductList from "./useMemo/UseMemoProductList";
import BasicoReducer from "./useReducer/BasicoReducer";


function App() {

  return (
    <>
      <h1 className=" text-4xl">Hook y useVarios</h1>
      <h2 className=" text-4xl">useMemo</h2>
      <hr/>
      <UseMemoProductList />
      <hr />
      <Counter/>
      <hr />
      <h2 className=" text-4xl">useReducer</h2>
      <hr />
      <BasicoReducer />

    </>
  );
}

export default App;