export function testApi() {
  return new Promise(function(resolve, reject) {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        setTimeout(()=>{
          resolve(json);
        }, 3000)
      });
  })
}
