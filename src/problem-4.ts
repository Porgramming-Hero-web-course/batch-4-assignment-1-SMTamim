{
  /**
     * Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

        // Sample Input 1:
        const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

        // Sample Output 1:
        78.54;

        // Sample Input 2:
        const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
        });

        // Sample Output 2:
        24;
     */

  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  const calculateShapeArea = (rectangleOrCircle: Shape): number => {
    let area: number = 0;

    if (rectangleOrCircle.shape === "circle") {
      area = Math.PI * rectangleOrCircle.radius ** 2;
    } else if (rectangleOrCircle.shape === "rectangle") {
      area = rectangleOrCircle.width * rectangleOrCircle.height;
    }

    if (area) console.log(area.toFixed(2));
    else console.log("Given object is not a circle nor rectangle!");

    return area;
  };

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
}
