{
  /**
     * 
     * Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

    // Sample Input:
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));

    // Sample Output:
    true;
**/

  //   const validateKeys = <T>(obj: T, propsToCheck: (keyof T)[]) => {
  //     if (typeof obj === "object" && obj !== null) {
  //       const numberOfKeysInObject = Object.keys(obj);
  //       return numberOfKeysInObject.length === propsToCheck.length;
  //     }
  //   };

  const validateKeys = (obj: object, propsToCheck: string[]): boolean => {
    const numberOfKeysInObject: string[] = Object.keys(obj);

    const foundProps: string[] = propsToCheck.filter((prop) => {
      return numberOfKeysInObject.includes(prop);
    });

    return foundProps.length === propsToCheck.length;
  };

  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age", "name"]));
}
