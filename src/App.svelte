<script>
  import { getItems } from "./lib/api";
  import Item from "./components/Item.svelte";
  import Footer from "./components/Footer.svelte";

  const items = getItems();
</script>

<main>
  <div class="container">
    <div class="title">
      <h1>Top Hacker News</h1>
    </div>

    {#await items}
      <p>Loading...</p>
    {:then value}
      {#each value as item (item.id)}
        <Item
          url={item.url}
          title={item.title}
          score={item.score}
          by={item.by}
        />
      {/each}
    {:catch error}
      <p>Something went wrong: {error.message}</p>
    {/await}
  </div>
</main>
<Footer />

<style>
  main {
    display: flex;
    justify-content: center;
    min-height: 100vh;
  }
  .title {
    margin-bottom: 16px;
  }
</style>
