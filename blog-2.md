## How to handle asynchronous operations using `async/await` over `callback/promise` TypeScript.

We use `async` and `await` in combination when we are expecting some response after some time or waiting for a `promise` to be `rejected` or `resolved`.

`async`, `await` helps us write much cleaner code.

```typescript
function fetchData() {
    return new Promise((resolve, reject) => {
      const data: boolean = true;
      setTimeout(() => {
        data ? resolve(data) : reject("Failed to get data");
      }, 1000);
    });
  }

async function fetchPerson() {
    const data = await fetchData();
    console.log(data);
}
```
