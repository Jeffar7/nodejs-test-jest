test("test toBe", () => {
  const name = "Jeffar";
  const hello = `Hello ${name}`;

  expect(hello).toBe("Hello Jeffar");
});

test("test toEqual", () => {
  let person = { id: "jeff" };
  Object.assign(person, { name: "Jeff" });

  expect(person).toEqual({ id: "jeff", name: "Jeff" });
});
