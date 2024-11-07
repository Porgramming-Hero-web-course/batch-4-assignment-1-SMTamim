## The significance of `union` and `intersection` types in Typescript.

### Significance of Union type:

`Union` type lets us use multiple types on a same variable.

1. It helps to write readable codes.
2. By using `union` types we can send different types of variable as one to a function parameter and then use `type guard` as perform different operations on them
   e.g.
   ```typescript
   function processStrOrNumber(param: string | number) {
       if (typeof param === "string") {
           console.log(param.toUpperCase());
       } else {
           console.log(param.toFixed(2));
       }
   }
   ```

### Significance of Intersection type:

`Intersection` type lets us use combine multiple types into one.

1. It helps us extend types.
2. By using `intersection` types we can make complex type
   e.g.

   ```typescript
    type Person = {
        name: string;
        address: string;
    }
    type Student = {
        rollNumber: number;
    }

    StudentPerson = Person & Student;
   ```

   Here we have combined `Person` and `Student` type to `StudentPerson`. Now when we create a new variable of type `StudentPerson` i'll have all the properties from `Person` and `Student`.
