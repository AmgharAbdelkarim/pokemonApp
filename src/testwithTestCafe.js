import { Selector } from "testcafe"; // import Selector

// eslint-disable-next-line no-undef
fixture`Navigation`.page`http://localhost:3000`;
test("pokeApp", async (t) => {
  const selectHeaderText = Selector("a").withText("poke App");

  await t.click(selectHeaderText);
  await t.navigateTo("/");

  const links = await Selector("ul").child("li");
  await t.click(links);
  await t.expect(Selector("button").withText("Clear").exists).ok();
  const clearButton = await Selector("button");
  await t.click(clearButton);
  await t.expect(Selector("button").withText("Clear").exists).notOk();

  const singlePokemon = await Selector(".item_wrapper")
    .child("div")
    .child("span");
  await t.click(singlePokemon);
  await t.navigateTo("/pokemon/");
});
