
export default async function Page() {

  //await new Promise(resolve => setTimeout(resolve, 2000));

  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const json = await response.json();

  return (
    <div>
      {json.title}
    </div>
  )
}
